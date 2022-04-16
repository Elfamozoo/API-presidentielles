const mongoose = require('mongoose');



mongoose.connect(
    'mongodb://localhost:27017/api-pres',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log('Erreur de connexion à la base de données');
        } else {
            console.log('Connexion à la base de données réussie');
        }
    }
);
