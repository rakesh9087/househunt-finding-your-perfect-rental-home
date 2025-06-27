const mongoose = require('mongoose');

const connectionOfDb = () => {
  console.log("Connecting to MongoDB using URI:", process.env.MONGO_URI);
 mongoose
  .connect('mongodb://localhost:27017/househunt', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoURI');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;