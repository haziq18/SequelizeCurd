import express from "express"
import employeesRoutes from "./Routes/employees.Routes.js"
import loginRoutes from "./Routes/login.Routes.js";
import cors from "cors";

const app = express()
const port = 4000
app.use(express.json())

app.use(cors({
  origin : "http://localhost:3000"
}))

app.get('/',(req,res)=>{
  res.send("haziq")
})
app.use('/login', loginRoutes);
app.use('/employees',employeesRoutes);

app.listen(port,()=>{
  console.log("app listening");
})


