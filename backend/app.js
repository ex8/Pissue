import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';
import morgan from 'morgan';

const app = express();

mongoose.connect(`mongodb://127.0.0.1:27017/pissue`, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB connection successful`))
    .catch(err => console.error(`MongoDB connection error: ${err}`));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', router);
app.listen(3000, () => console.log(`Express running...`));
