import * as admin from 'node_modules';

const firebase = admin.initializeApp({
    credential: admin.credential.cert("path/to/serviceAccountCredentials.json"),
    //databaseURL: "https://<DATABASE_URL>.firebaseio.com",
    databaseURL: "https://wee-shop-a3386-default-rtdb.europe-west1.firebasedatabase.app/",
});

export const DatabaseConnection = firebase.firestore();