const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/Mern";
const URI = "mongodb+srv://digihost2021:kmDO7DctLyGUHZPf@cluster0.c1qye.mongodb.net/test";
// mongoose.connect(URI);

const connectDB = async () => {
    try {

       await mongoose.connect(URI);
       console.log('connection successful to DB');
        
    } catch (error) {

        console.error(error,"databse connection failed");
        process.exit(0);
        
    }
};

module.exports = connectDB; 
