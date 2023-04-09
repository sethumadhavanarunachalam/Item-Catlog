import { MongoClient } from "mongodb";

const MONGO_URL = "mongodb+srv://sethu709:709259@cluster1.b4dnfgn.mongodb.net/"

async function createConnection(){
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("mongo connection sucessfully")
    return client
}

export const client = createConnection();