require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3009;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error(err));

app.use(express.json());

const recipeRoutes = require('./routes/recipeRoutes');
app.use('/dishdash', recipeRoutes);

app.get('/', (req, res) => {
    res.json({
        message: "DishDash Recipe API",
        version: "1.0.0",
        endpoints: {
            "GET /dishdash/recipes": "Get all recipes",
            "GET /dishdash/recipes/:id": "Get recipe by ID",
            "POST /dishdash/recipe": "Create new recipe",
            "PUT /dishdash/recipe/:id": "Update recipe",
            "DELETE /dishdash/recipe/:id": "Soft delete recipe",
        }
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
