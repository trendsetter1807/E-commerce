import mongoose from 'mongoose'
import colors from 'colors'

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://Pratik:Pratik1807@cluster0.7thpltd.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true})
        console.log(`Connected to DataBase`)
    } catch (error) {
        console.log(`Error in MongoDb ${error}`.bgRed.white)
    }
}

export default connectDB;