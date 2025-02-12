import mysql, { Connection } from "mysql2";

// Configuration de la connexion à la base de données
export const connection: Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "yourdb"
});
