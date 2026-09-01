import express from 'express'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const port = process.env.PORT || 2006;

const connectServer = async() =>{
await connectDB();
app.listen(port,()=>{
    console.log("server kaam kar raha hai");
});
}
connectServer();

/*
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
│
├── server.js
├── package.json
└── .env
*/

/*
Application Document Checklist
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Project folder
✅ Backend initialized
✅ Express installed
✅ Express server
✅ Folder architecture
✅ Environment variables

⬜ MongoDB connection       ← NEXT
⬜ User model
⬜ Authentication
⬜ Application model
⬜ Document model
⬜ APIs
⬜ React frontend
*/ 