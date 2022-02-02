const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
    .connect(MONGODB_URI)
    .then((x) => {
        console.log(`Connected to the database: "${x.connection.name}"`);
        // Before adding any recipes to the database, let's remove all existing ones
        // return Recipe.deleteMany();
    })
    .then(() => {
        //ITERATION 2
        // Recipe.create({
        //     title: "Peanut Butter and Jelly Sandwich",
        //     level: "Easy Peasy",
        //     ingredients: ["bread", "peanut butter", "jelly"],
        //     cuisine: "american",
        //     duration: 1,
        //     creator: "unknown",
        // });
        //ITERATION 3
        // Recipe.insertMany(data).then((x) => {
        //     for (let i = 0; i < x.length; i++) {
        //         console.log(`The following recipe was added: ${x[i].title}`);
        //     }
        // });
        //ITERATION 4
        Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }).then((x) => {
            console.log("Successfully changed recipe ", x);
        });
        //ITERATION 5
        Recipe.deleteOne({ title: "Carrot Cake" }).then(() => {
            console.log("deleted carrot cake recipe");
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database", error);
    });