import express from "express"
import employeesRoutes from "./Routes/employeesRoutes.js"


const app = express()
const port = 3000
app.use(express.json())

app.get('/',(req,res)=>{
  res.send("haziq")
})

app.use('/employees',employeesRoutes)

app.listen(port,()=>{
  console.log("app listening");
})


