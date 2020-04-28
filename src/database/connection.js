import config from "../config"
const firebase = require("firebase");
const ENV = process.env;
firebase.initializeApp(config);
const db = firebase.firestore();
export default db