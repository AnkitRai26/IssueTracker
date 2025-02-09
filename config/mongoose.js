const mongoose=require('mongoose');

mongoose.connect(process.env.NodejsAuthenticationMongodbURL)
  .then(() => {
    console.log('Connected to Database :: MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
