require('dotenv').config();
const express = require('express'),
  mongoose = require('mongoose'),
  serveStatic = require('serve-static'),
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors'),
  app = express(),
  user = require('./routes/user'),
  auth = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', serveStatic(path.join(__dirname, '../dist')));
app.use('/user', user);
app.use('/authenticate', auth);

const port = process.env.PORT || 8080;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@meetupCluster.potlz.azure.mongodb.net/meetup-festivals?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Connected to mongoDB Forum-project`);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((error) => {
    console.log(`Error connecting to the database` + error);
  });
