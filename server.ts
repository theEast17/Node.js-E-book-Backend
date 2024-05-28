import app from "./src/app";

const startServer=()=>{
    const Port=process.env.PORT || 3000

    app.listen(Port,()=>{
        console.log(`Listening to Port: ${Port}`)
    })

}


startServer()