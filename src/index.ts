import { QueryBuilder } from "./querybuilder"; // Importer la classe QueryBuilder
import mysql from "mysql2"; // Importer le module mysql2

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "yourdb"
});

type User = {
    id: number;
    username: string;
    email: string;
    active: boolean;
    created_at: Date;
    firstname: string;  // Ajoute ces propriétés
    lastname: string;
};


// Exemple de requête SELECT
const query = QueryBuilder.buildSelectQuery<User>({
    tableName: "User",  // Attention : le nom de la table est "User" dans ta base
    fields: ["id", "email", "firstname", "lastname"],
    orderBy: { column: "createdAt", direction: "DESC" },
    limit: 10
});

console.log("Requête SQL générée:", query);

// Exécution de la requête
connection.query(query, (err, results) => {
    if (err) {
        console.error("Erreur lors de l'exécution de la requête:", err);
        return;
    }
    console.log("Résultats de la requête:", results);
    connection.end();  // Fermer la connexion après la requête
});
