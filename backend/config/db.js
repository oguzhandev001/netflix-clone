import mongoose from 'mongoose'

import ENV_VARS from './envVars.js'

const MONGO_URI = ENV_VARS.MONGO_URI;

export async function connectDB() {

    try {
        
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected: ` + conn.connection.host);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}