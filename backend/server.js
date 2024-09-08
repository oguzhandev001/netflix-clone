import express from 'express';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.router.js';
import movieRouter from './routes/movie.router.js';
import tvRouter from './routes/tv.router.js';
import searchRoutes from './routes/search.routes.js';

import ENV_VARS from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from './middleware/protectRoute.js';

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/movie', protectRoute , movieRouter)
app.use('/api/v1/tv', protectRoute , tvRouter)
app.use('/api/v1/search', protectRoute , searchRoutes)

app.listen(PORT, (err) => {
    console.log(`[SERVER] Listening at port: ` + PORT);
    connectDB();
})
