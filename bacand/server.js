const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();
const port = 5000;

// MongoDB connection details
const uri = "mongodb+srv://Prem:Prem2007@cluster0.ewqmd.mongodb.net/";
const dbName = "animeworld";

// Middleware
app.use(express.json());
app.use(cors());
let db, anime, users;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        anime = db.collection("anime");
        users = db.collection("users");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

initializeDatabase();

// Routes
app.get('/anime', async (req, res) => {
    try {
        const animes = await anime.find().toArray();
        res.json(animes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

app.get('/anime/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const animee = await anime.findOne({ _id: new ObjectId(_id) });
        if (!animee) return res.status(404).json({ message: 'Anime not found' });
        res.json(animee);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

app.post('/anime', async (req, res) => {
    try {
        const { title, image, description } = req.body;
        const existingAnime = await anime.findOne({ title });
        if (existingAnime) return res.status(400).json({ message: 'Anime already exists' });

        const newAnime = { title, image, description };
        const result = await anime.insertOne(newAnime);
        res.status(201).json({ message: 'Anime added successfully', anime: result.ops[0] });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

app.delete('/anime/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await anime.deleteOne({ _id: new ObjectId(_id) });
        if (result.deletedCount === 0) return res.status(404).json({ message: 'Anime not found' });
        res.json({ message: 'Anime deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// User Authentication & Profile Routes
app.post('/register', async (req, res) => {
    try {
        const { email, name, picture } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required!" });

        const existingUser = await users.findOne({ email });
        if (existingUser) return res.status(200).json({ message: "User already registered!", user: existingUser });

        const newUser = { email, name, picture, createdAt: new Date() };
        await users.insertOne(newUser);
        res.status(201).json({ message: "User registered successfully!", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        // const email = req.params.email;
        const _id = req.params.id;
        // const user = await users.findOne({ email }, { projection: { password: 0 } });
        const user = await users.findOne({ _id: new ObjectId(_id) });

        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.put('/profile/:id', async (req, res) => {
    try {
        const { name, gender, favoriteAnime, nickname } = req.body;
        const _id = req.params.id;
        const updatedUser = await users.findOneAndUpdate(
            { _id: new ObjectId(_id) },
            { $set: { name, gender, favoriteAnime, nickname } },
            { returnDocument: "after" }
        );
        if (!updatedUser.value) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "Profile updated successfully", user: updatedUser.value });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      const result = await users.findOne({ _id: new ObjectId(_id) });
        if (result.deletedCount === 0) return res.status(404).json({ message: "User not found!" });
        res.json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Start Server
app.listen(port, () => console.log('Server running on port:', port));
