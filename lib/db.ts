import mongoose from "mongoose";

const   MONGODB_URL = process.env.MONGODB_URL!

if(!MONGODB_URL){

    throw new Error("Please define mongo_uri in env variables");

}

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

export async function  connectToDatabase() {
    if(cached.conn)
    
}