import express from 'express';
import router from './routes';

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'http://localhost';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server is up and running on ${HOST}:${PORT}`));
