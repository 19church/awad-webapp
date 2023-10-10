const { MongoClient } = require('mongodb');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("cafe");
    const coll = database.collection("products");
    
    // Create a document to insert
    const doc = [
        {Product_Name: "ชาชาชักชัก", Product_Type: "Tea", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false, Product_Detail: "กินแล้วชักไม่หยุด", Product_Img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png"},
        {Product_Name: "ชาลีลีลา", Product_Type: "Tea", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false, Product_Detail: "ลีลาตัวตึง", Product_Img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png"},
        {Product_Name: "กามู", Product_Type: "Coffee", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: false, Product_Detail: "กูมา", Product_Img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0b5064f7f2549c7814cc6ed44b59e18.png"},
    ];
    // Insert the defined document into the "haiku" collection
    const result = await coll.insertMany(doc);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);