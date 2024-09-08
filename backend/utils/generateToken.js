import jwt from 'jsonwebtoken';

import ENV_VARS from '../config/envVars.js';

const JWT_SECRET = ENV_VARS.JWT_SECRET;

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "15d"});

    res.cookie("jwt-netflix-clone", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: ENV_VARS.NODE_ENV !== "development"
    })

    return token;
} 