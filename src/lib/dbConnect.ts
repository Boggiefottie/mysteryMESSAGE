import mongoose from "mongoose";

type ConnectionObject = {
    isConnected ? : number // ye value return ho bhi skti hai nhi bhi ho skti but hoti hai to number mai hogi

}
const connection: ConnectionObject = {} // connection ka type ConnectionObject intially empty rhega

async function dbConnect(): Promise<void> {// dbConnect()function ka return type Promise hoga with void as inner value void
   if (connection.isConnected) {
    console.log("Already connected to database")
    return
   }
   try {
   const db = await mongoose.connect(process.env.MONGODB_URI || "",{})
   console.log(db)
   connection.isConnected = db.connections[0].readyState
   console.log("db connected succesfully")
   } catch (error) {
    console.log("database connection failed", error)
     process.exit(1)
   }
} 
export default dbConnect

 