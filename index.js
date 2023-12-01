const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");

//Crear el servidor
const app = express();

//Conexion a la BD
conectarDB();
app.use(express.json());
app.use(cors());


app.use("/api/notas", require("./routes/noteRoute"));
app.use("/api/users", require("./routes/userRoute"));
//app.use("/api/tareas", require("./routes/tareaRoute"));
//app.use("/api/enlaces", require("./routes/enlaceRoute"));
//app.use("/api/rutina", require("./routes/rutinaRoute"));
app.listen(4500, () => {
  console.log("El servidor se está ejecutando");
});

