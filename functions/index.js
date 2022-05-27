const functions = require("firebase-functions");
const express = require("express");


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const app = express();


app.get("/get", (req, res)=>{
  res.status(200).json({
    status: 1,
    msg: "hello get req",
  });
});

app.post("/post", (req, res)=>{
  res.status(200).json({
    status: 1,
    msg: "hello post req",
  });
});

exports.api = functions.https.onRequest(app);


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

