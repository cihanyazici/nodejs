/* module.exports = async (req, res) => { // this function will be launched when the API is called.
   try {
     const { name } = req.query;
     res.status(200).send(`Hello ${name}!`);
   
   } catch (err) {
     res.send(err) // send the thrown error
   }
 }*/


//Loading Firebase Package
var firebase = require("firebase");

/**
* Update your Firebase Project
* Credentials and Firebase Database
* URL
*/
firebase.initializeApp({
  apiKey: "AIzaSyBpGqVfzcqBuHhvO-QVhe8TXDqYTLLPDO8",
  authDomain: "nodejs-338123.firebaseapp.com",
  projectId: "nodejs-338123",
  storageBucket: "nodejs-338123.appspot.com",
  messagingSenderId: "560766598178",
  appId: "1:560766598178:web:89fe08e9191ad22d04de7b",
  measurementId: "G-HGYEZEN1VY"
});  //by adding your credentials, you get authorized to read and write from the database


/**
* Loading Firebase Database and refering 
* to user_data Object from the Database
*/
var db = firebase.database();
var ref = db.ref("/user_data");  //Set the current directory you are working in

/**
* Setting Data Object Value
*/
ref.set([
{
    id:20,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
},
{
    id:21,
    name:"John doe",
    email:"john@doe.com",
    website:"https://foo.bar"
}
]);

/**
* Pushing New Value
* in the Database Object
*/
ref.push({
    id:22,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
});

/**
* Reading Value from
* Firebase Data Object
*/
ref.once("value", function(snapshot) {
  var data = snapshot.val();   //Data is in JSON format.
  console.log(data);
});
