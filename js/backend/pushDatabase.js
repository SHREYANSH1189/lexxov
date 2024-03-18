const {MongoClient} = require('mongodb');
const userData = require("./emailer");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

console.log("userData")
async function pushData(){
  try{
    await client.connect();
    const db = client.db("userData");
    const collection = db.collection("userCredential");
    const result = await collection.insertOne(userData);
    console.log('Inserted document:', result.insertedId);
  }
  catch (error){
    console.error("Error: ", error)
  }
  finally {
    await client.close();
    console.log("Closing your mongoDB connection");
  }
}
