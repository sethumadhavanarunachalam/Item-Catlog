
import express from "express"
// import Obj from "mongodb"
import dotenv from "dotenv"
import cors from "cors"
// import {client} from "./db.js"
import { CarsRouter } from "./Routers/CarsRouter.js"
import { BikesRouter } from "./Routers/BikesRouter.js"
import { LaptopRouter } from "./Routers/LaptopRouter.js"
import { MobileRouter } from "./Routers/MobileRouter.js"
import { SmartwatchRouter } from "./Routers/SmartWatch.js"
const app = express();
const port = 9000;
dotenv.config()
// var ObjectId = Obj.ObjectId;




app.use(express.json())
app.use(cors({origin:"*"}))
app.listen(port,()=>console.log("server started sucessfully"))
app.use("/cars",CarsRouter)
app.use("/bikes",BikesRouter)
app.use("/laptop",LaptopRouter)
app.use("/mobile",MobileRouter)
app.use("/smartwatch",SmartwatchRouter)

app.get("/batman",(req,res)=>{
    res.send("i am batman")
})





























// app.get("/datas/cars",async(req,res)=>{
//     try {
//         const result = await (await client).db("datas").collection("cars").find().toArray()
//         res.status(200).send({data: result})
//     } catch (error) {
//         console.log(error,"error on get cars data");
//     }
// })


// app.post("/datas/cars",async(req,res)=>{
//     try {
//         console.log(req.body)
//         const result = await (await client).db("datas").collection("cars").insertOne(req.body)
//         res.send(result)
//     } catch (error) {
//         console.log();
//     }
// })
// app.post("/datas/manycars",async(req,res)=>{
//     console.log(req.body)
//     const result = await (await client).db("datas").collection("cars").insertMany(req.body)
//     res.send(result)
// })



