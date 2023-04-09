import express from "express";
import {client} from "../db.js"
const Router = express.Router()

Router.get("/",async(req,res)=>{
    try {
        const result = await (await client).db("datas").collection("mobile").find().toArray()
        res.status(200).send({Mobile: result})
    } catch (error) {
        console.log(error,"error on get cars data");
    }
})


// Router.post("/",async(req,res)=>{
//     try {
//         console.log(req.body)
//         const result = await (await client).db("datas").collection("cars").insertOne(req.body)
//         res.send(result)
//     } catch (error) {
//         console.log();
//     }
// })


Router.post("/",async(req,res)=>{
    console.log(req.body)
    const result = await (await client).db("datas").collection("mobile").insertOne(req.body)
    res.send(result)
})

export const MobileRouter = Router ; 