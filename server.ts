import app from "./src/app";
import { config } from "./src/config/config";
import connectDb from "./src/config/db";

const startServer=async ()=>{

    await connectDb()
    const Port=config.port || 3000

    app.listen(Port,()=>{
        console.log(`Listening to Port: ${Port}`)
    })

}


startServer()