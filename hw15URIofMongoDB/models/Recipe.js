const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    servings: Number,
    description: String,
    ingredients: [
        {
            ingredientName: String,
            productId: String,
            quantity: Number,
            unit: String
        }
    ],
    instructions: [String],
    costPerServing: Number,
    pricePerServing: Number,
    category: String,
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Recipe', recipeSchema, 'Recipes');
