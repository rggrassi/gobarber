import 'dotenv/config';

import path from 'path';
import express from 'express';
import cors from 'cors';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
const app = express();
import 'express-async-errors';
import routes from './routes';
import sentryConfig from './config/sentry';

Sentry.init(sentryConfig);

app.use(Sentry.Handlers.requestHandler());
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(routes);
app.use(Sentry.Handlers.errorHandler());

app.use(async (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
    } 
    return res.status(500).json({ error: 'Internal server error' });
})

export default app;