require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Mongo connection error:", err));


const recipeRoutes = require("./routes/recipeRoutes");
app.use("/dishdash", recipeRoutes);

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`Server running on port ${port}`));
