const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
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
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            serverApi: { version: '1', strict: true, deprecationErrors: true }
        });

        await client.connect();
        console.log(" Connected to MongoDB");

        db = client.db(dbName);
        anime = db.collection("anime");
        users = db.collection("users");
    } catch (err) {
        console.error(" MongoDB Connection Error:", err);
        process.exit(1);
    }
}

initializeDatabase();

//  Anime Routes
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
        res.status(201).json({ message: 'Anime added successfully', animeId: result.insertedId });
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

//  User Authentication & Profile Routes
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

//  Get User Profile by ID (Fixed ObjectId issue)
app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User ID Format" });
        }

        const user = await users.findOne({ _id: new ObjectId(userId) });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});



// Update User Profile (PUT)
app.put('/profile/:id', async (req, res) => {
    try {
        const { name, gender, favoriteAnime, nickname, picture } = req.body;
        const _id = req.params.id;

        if (!ObjectId.isValid(_id)) {
            return res.status(400).json({ message: "Invalid User ID Format" });
        }

        const updatedUser = await users.findOneAndUpdate(
            { _id: new ObjectId(_id) },
            { $set: { name, gender, favoriteAnime, nickname, picture } },
            { returnOriginal: false }
        );

        if (!updatedUser.value) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "Profile updated successfully", user: updatedUser.value });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

//  Patch User Profile (Fixed ObjectId issue)
app.patch('/profile/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        if (!ObjectId.isValid(_id)) {
            return res.status(400).json({ message: "Invalid User ID Format" });
        }

        const updates = req.body;
        const updatedUser = await users.findOneAndUpdate(
            { _id: new ObjectId(_id) },
            { $set: updates },
            { returnOriginal: false }
        );

     

        res.status(200).json({ message: "Profile updated successfully", user: updatedUser.value });
    } catch (error) {
        console.error("Error in PATCH request:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

//  Delete User Profile
app.delete('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        if (!ObjectId.isValid(_id)) {
            return res.status(400).json({ message: "Invalid User ID Format" });
        }

        const result = await users.deleteOne({ _id: new ObjectId(_id) });
        if (result.deletedCount === 0) return res.status(404).json({ message: "User not found!" });

        res.json({ message: "User deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

app.post("/profile", async (req, res) => {
    try {
      const { email, name, picture, nickname, gender, favoriteAnime } = req.body;
  
      if (!email || !name) {
        return res.status(400).json({ message: "Email, name, and picture are required" });
      }
  
      // Check if the user already exists
      const existingUser = await users.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Create new user profile
      const newUser = {
        email,
        name,
        // picture,
        // nickname: nickname || "",
        gender: gender || "",
        favoriteAnime: favoriteAnime || "",
        createdAt: new Date(),
      };
  
      await users.insertOne(newUser);
  
      res.status(201).json({ message: "Profile created successfully", user: newUser });
    } catch (error) {
      console.error("❌ Error in POST request:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });
  





//  Start Server
app.listen(port, () => console.log(`✅ Server running on port: ${port}`));
