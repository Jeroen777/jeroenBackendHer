# My feature
I have created a feature that allows you to add interests to your profile.
It consists of 3 questions about your interest. You can answer this and it will appear on your profile

## Database
I use mongodb in combination with mongoose. My database is hosted with mongo atlas and I used mongoDB Compass to display my data.

## How to install
1. Clone the repository
`` 
git clone https://github.com/Jeroen777/JeroenBackendHer
``  
  
2. Choose the correct folder where you want to clone it  
``
cd backend/
``
  
3. Make a .env file 
``
touch .env
``

4. The .env file has the following structure  
  ``DB_URI=`` 
  ``DB_USER=`` 
  ``DB_PASS=`` 
  ``DB_NAME=`` 

  
5. Install the packages  
``npm install``  
  
6. Start the server 
``node server.js``

7. Open the server on localhost:8000
![Screenshot 2021-03-08 at 14 57 58](https://user-images.githubusercontent.com/60734114/110331504-7c23e200-801f-11eb-8371-fe1b09513820.png)

## Mongoose model
``` javascript
const mongoose = require('mongoose');

//Structure in the collection 
const Schema = mongoose.Schema;

//https://mongoosejs.com/docs/guide.html
//Schema structure how to save in the collection
//Objects with a string and all are required
const infoSchema = new Schema({
    vraagEen: {
        type: String,
        required: true
    },
    vraagTwee: {
        type: String,
        required: true
    },
    vraagDrie: {
        type: String,
        required: true
    }
});

//mongoose model, Info terugvinden, model gebaseerd op de Schema
//export to use in server.js
const Inter = mongoose.model('Inter', infoSchema);
module.exports = Inter;
```

## License
This project is licensed under the ISC license. See the [LICENSE.MD](https://github.com/Jeroen777/jeroenBackendHer/blob/master/LICENSE.MD) file for more information.


## Sources
- https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/environment-variables
- https://mongoosejs.com/docs/guide.html
- https://ejs.co/
- https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1#:~:text=What%20is%20Express%3F,open%20source%20and%20flexible%20Node.
- https://www.robinwieruch.de/mongodb-express-setup-tutorial
- https://expressjs.com/
- https://www.npmjs.com/get-npm
- https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
- http://expressjs.com/en/api.html
- https://stackoverflow.com/questions/43016478/casterror-cast-to-objectid-failed-for-value-favicon-ico-at-path-id-for-mod
