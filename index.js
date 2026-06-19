// On importe les outils qu'on a installés
require('dotenv').config();
const axios = require('axios');

// On récupère la clé secrète depuis le fichier .env
const API_KEY = process.env.API_KEY;

// La ville dont on veut la météo (on commencera par Kinshasa !)
const ville = 'Kinshasa';

// L'adresse (URL) de l'API météo
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;

console.log(`Recherche de la météo pour ${ville}...`);

// On interroge le site météo
axios.get(url)
    .then(reponse => {
        const temperature = reponse.data.main.temp;
        const description = reponse.data.weather[0].description;
        
        console.log(`\n=== RÉSULTAT MÉTÉO ===`);
        console.log(`À ${ville}, il fait actuellement ${temperature}°C.`);
        console.log(`Temps observé : ${description}.`);
    })
    .catch(erreur => {
        console.log("\n❌ Oups, une erreur est survenue !");
        console.log("Vérifie que ta clé API dans le fichier .env est correcte.");
    });