import express from "express";
import {client} from "../db.js"
const Router = express.Router()

Router.get("/",async(req,res)=>{
    try {
        const result = await (await client).db("datas").collection("cars").find().toArray()
        res.status(200).send({Cars: result})
    } catch (error) {
        console.log(error,"error on get cars data");
    }
})



Router.post("/",async(req,res)=>{
    try {
        
        console.log(req.body)
        const result = await (await client).db("datas").collection("cars").insertOne(req.body)
        res.send(result)
    } catch (error) {
        console.log(error,"error on post car item");
    }
})

export const CarsRouter = Router ; 