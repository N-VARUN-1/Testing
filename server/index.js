import mongoose from "mongoose"
import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config()

const app = express();

import baseRoute from './routes/baseRoute.js'

// ✅ Alternative: Restrict CORS to specific frontend (Optional)
app.use(
    cors({
        origin: "http://localhost:5173", // Allow frontend running on port 5173 (Vite)
        methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
        credentials: true, // Allow cookies if needed
    })
);

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', baseRoute)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})