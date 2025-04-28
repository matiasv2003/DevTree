import colors from "colors"
import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = '${connection.connection.host}:${connection.connection.port}'

        console.log(colors.bgMagenta("MongoDB Conectado"))
    } catch (error) {
        console.log(error)
    }
}