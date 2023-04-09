import express from "express"
import dotenv from "dotenv"
// import { MongoConnection } from "./db.js"
//dotenv config for use
dotenv.config()
//define app is express
const app = express()
// const client = MongoConnection()

app.use(express.json())



//define port from .env
const port = process.env.port

app.listen(port,()=>console.log("server started"))



import { MongoClient } from "mongodb";

const MONGO_URL = "mongodb+srv://sethu709:7092591222@cluster0.fbpiacb.mongodb.net/?retryWrites=true&w=majority"

async function createConnection(){
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("mongo connection sucessfully")
    return client
}

const client = createConnection();



app.get("/",(req,res)=>{
    res.send("i am batman")
})

app.get("/datas/cars",async(req,res)=>{
    try {
        const result = await (await client).db("datas").collection("cars").find().toArray()
        res.status(201).send(result)
    } catch (error) {
        console.log(error,"error on get cars data");
        res.status(500).send({message:"invalid access"})
    }
})

app.post("/datas/cars" , async(res,req)=>{
    try {
        const result = await (await client).db("datas").collection("cars").insertOne(req.body)
        console.log("varala")
        res.send(result)
    } catch (error) {
        console.log(error,"error on get cars data");
        res.send({message:"invalid access"})
        
    }
})