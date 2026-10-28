const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
  path: './config.env'
}) //reads variables from the config.env file
//this shall come first.

const app = require('./app');

const DB = process.env.MONGO_URI;
mongoose.connect(DB).then(con => {
  console.log(con.connections);
  console.log('MongoDB connected successfully');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on PORT 3000");
});