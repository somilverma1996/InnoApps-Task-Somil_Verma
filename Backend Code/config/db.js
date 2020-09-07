const mongoose = require("mongoose");

// Replace this with your MONGOURI.
// const MONGOURI = "mongodb+srv://sunny_agicent:sunny_agicent@cluster0-cfeij.mongodb.net/test";
const MONGOURI = "mongodb+srv://somil_verma:89798@cluster0.xie6g.mongodb.net/test?retryWrites=true&w=majority"

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
