import express from 'express'


const app = express()

app.get("/", (req,res) =>{
    res.json({messagem: "teste"})
})



app.listen(3000, () =>{
    console.log("teste")
})
