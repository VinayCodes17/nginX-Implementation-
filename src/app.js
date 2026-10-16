import express from "express" 
import healthcheck from "./route/healthcheck.route.js";

const app = express();
const server = process.env.APP;
app.use(express.json({limit:"16kb"}));

app.use('/health',healthcheck);
app.use('/' , (req,res)=>{
    res.status(200).json({
        message:`You are on server ${server}` , 
    })
})



export default app ;