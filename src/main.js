import express from 'express';

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'http://localhost';

const app = express();

app.listen(PORT, () => console.log(`Server is up and running on ${HOST}:${PORT}`));
