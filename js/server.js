const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 4000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "admin",
});

db.connect((err) => {
    if (err) {
        console.error("Error en la conexión a la base de datos:", err);
    } else {
        console.log("Conexión a la base de datos exitosa");
    }
    });
    //comenzamos con las consultas a la bd
    //1. Crear nuevos administradores secundarios
    //2. Crear nuevos administradores de capacitaciones

    

    //Crear un nuevo usuario
    const insertarUser = "INSERT INTO usuarios (nombre, apellido, contrasenia, rol) VALUES ('Carlitos', 'Tevez', 'apache', 'admin')";
    db.query(insertarUser, (err, rows) => {
        if (err) throw err;
        console.log("1 Usuario insertado con Exito!");
    });
    //Traer todos los usuarios
    db.query("SELECT * FROM usuarios", (err, rows) => {
        if (err) throw err
        console.log('Data received from Db:');
        console.log(rows);
    });


    //Funcion Eliminar un usuario
    const eliminaUser = "DELETE FROM usuarios WHERE nombre = 'Carlitos'";
    db.query(eliminaUser, (err, rows) => {
        if (err) throw err;
        console.log("1 Usuario eliminado con Exito!");
    });


    //Modificar un usuario
    const modificarUser = "UPDATE usuarios SET nombre = 'Juan' WHERE nombre = 'Carlitos'";
    db.query(modificarUser, (err, rows) => {
        if (err) throw err;
        console.log("1 Usuario modificado con Exito!");
        console.log(rows);
    });

    //Traer todos los usuarios
    db.query("SELECT * FROM usuarios", (err, rows) => {
        if (err) throw err
        console.log('Data received from Db:');
        console.log(rows);
    });
    
    db.end();









/*
db.connect((err) => {
  if (err) {
    console.error("Error en la conexión a la base de datos:", err);
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
});

// Define rutas para tu API REST
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.error("Error en la consulta:", err);
      res.status(500).json({ error: "Error en la consulta" });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor API REST en funcionamiento en el puerto ${port}`);
});
*/

