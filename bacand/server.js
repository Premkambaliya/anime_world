const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;

// MongoDB connection details
const uri = "mongodb+srv://Prem:Prem2007@cluster0.ewqmd.mongodb.net/"; 
const dbName = "animeworld";

// Middleware
app.use(express.json());
app.use(cors());
let db, anime;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        anime = db.collection("anime");

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// ✅ 1. GET All Anime
app.get('/anime', async (req, res) => {
  try {
    const animes = await anime.find().toArray();
    res.json(animes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// ✅ 2. GET Anime by Specific ID
app.get('/anime/:id', async (req, res) => {
  try {
    const _id=req.params.id;
    const animee = await anime.findOne({_id : new ObjectId(_id)});
    console.log({_id : new ObjectId(_id)});
    if (!animee) return res.status(404).json({ message: 'Anime not found' });
    res.json(animee);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// ✅ 3. POST New Anime
app.post('/anime', async (req, res) => {
  try {
    const { title, image, description } = req.body;

    // Check if anime already exists
    const existingAnime = await anime.findOne({ title });
    if (existingAnime) return res.status(400).json({ message: 'Anime already exists' });

    // Save new anime
    const newAnime = new anime({ title, image, description });
    await newAnime.save();
    
    res.status(201).json({ message: 'Anime added successfully', anime: newAnime });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));
