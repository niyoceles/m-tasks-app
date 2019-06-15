import express from 'express';
import bodyParser from 'body-parser';
import taskRouter from './src/routers/taskRouter'; // Imports routes for the tasks

// Set up mongoose connection
import mongoose from 'mongoose';
let dev_db_url = 'mongodb://niyoceles:User%401@ds131676.mlab.com:31676/taskmap';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/tasks', taskRouter);

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

export default app;