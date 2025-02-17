import mongoose from "mongoose";
let initialiized = false

export const connect = async ()=> {
    mongoose.set('strictQuery', true)

    if(initialiized){
        console.log("MongoDB already connected");
        
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "sync_clerk_with_database2",
          useNewUrlParser:true,
          useUnifiedTopology:true,
        });
        console.log("MongoDB CONNECTED");
        initialiized=true
        
    } catch (error) {
        console.log("MongoDB connection error:", error);
        
    }
}