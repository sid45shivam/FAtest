const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://siddharth45shivam:78456@cluster1.asiskro.mongodb.net/food_db?retryWrites=true&w=majority'

const mongoDB = async() => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        const collection = mongoose.connection.db.collection("foodData");
        const data = await collection.find({}).toArray();
        // console.log("Fetched data:",data);
    } catch (error) {
        console.error("Error in connecting to MongoDB or fetching data", error);
    }
}

module.exports = mongoDB;