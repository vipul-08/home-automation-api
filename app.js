const express = require('express')
const firebase = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyBtnxMbB3O_nrPS2X2cVencdEnzSpltusU",
  authDomain: "home-automation-mangalam.firebaseapp.com",
  databaseURL: "https://home-automation-mangalam-default-rtdb.firebaseio.com",
  projectId: "home-automation-mangalam",
  storageBucket: "home-automation-mangalam.appspot.com",
  messagingSenderId: "5818961805",
  appId: "1:5818961805:web:cee7530fa16f91d74eb7c4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

const app = express()
const port = process.env.PORT || "8080";

app.use(express.json());

app.post('/api/operation', async (req, res) => {
    console.log(req.body);
    let path = req.body.path;
    let value = req.body.value;
    await set(ref(database, path), value)
    res.json({
        message: "Successful!"
    });
});

app.get('/', (req,res) => {
    res.json({
        message: "Hello! Hey"
    });
})

app.listen(port, () => console.log(`Listening on port ${port}`))