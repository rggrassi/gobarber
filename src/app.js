import path from 'path';
import express from 'express';
const app = express();
import routes from './routes';

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(routes);

export default app;