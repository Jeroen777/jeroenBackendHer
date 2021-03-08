# Mijn feature
Met mijn feature is het mogelijk om interesses toe te voegen aan je account.

## Database
Ik maak gebruik van mongodb in combinatie met mongoose. Mijn database wordt gehost met mongo atlas en ik heb mongoDB Compass gebruikt om mijn data te weergeven.

## Het installeren
Clone de repository

`` 
git clone https://github.com/Jeroen777/JeroenBackendHer
``  

Kies de juiste map waar je deze wil clonen
``
cd backend/
``

Maak een .env bestand aan
``
touch .env
``
En plaats hier de volgende structuur in om de Database te linken
``
DB_URI=
DB_USER=
DB_PASS=
DB_NAME=
``

Install al de packages  

``npm install``  

Starten van de server  

``node server.js``