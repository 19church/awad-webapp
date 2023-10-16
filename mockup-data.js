const { MongoClient } = require('mongodb');
const Product = require('./models/product.js');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("cafe");
    const products = database.collection("products");
    
    const doc = [
      {Product_Name: "ชาชัก", Product_Type: "ชา", Product_IsHot: false, Product_IsCold: true, Product_IsFrappe: false,
        Product_Detail_Hot: "None",
        Product_Price_Hot: 0,
        Product_Img_Hot: "None",
        Product_Detail_Cold: "ชาชาชักชักเย็น ๆ หนาว ๆ ให้รสชาติสดชื่น",
        Product_Price_Cold: 50,
        Product_Img_Cold: "https://www.cafe-amazon.com/BackEnd/TempProducts/98a14b6232934c6b91cd694582626cc8.png",
        Product_Detail_Frappe: "None",
        Product_Price_Frappe: 0,
        Product_Img_Frappe: "None",
        __v: 0},
      {Product_Name: "ชาลีลีลา", Product_Type: "ชา", Product_IsHot: true, Product_IsCold: false, Product_IsFrappe: false,
        Product_Detail_Hot: "ลีลาตัวตึง ร้อนๆ หอมกลิ่นเฉพาะตัว",
        Product_Price_Hot: 40,
        Product_Img_Hot: "https://www.cafe-amazon.com/BackEnd/TempProducts/9fc439a9db874ea3ad33cd3e04ce5aff.png",
        Product_Detail_Cold: "None",
        Product_Price_Cold: 0,
        Product_Img_Cold: "None",
        Product_Detail_Frappe: "None",
        Product_Price_Frappe: 0,
        Product_Img_Frappe: "None",
        __v: 0},
        {Product_Name: "มัทฉะถั่วแดง", Product_Type: "ชา", Product_IsHot: false, Product_IsCold: false, Product_IsFrappe: true,
        Product_Detail_Hot: "None",
        Product_Price_Hot: 0,
        Product_Img_Hot: "None",
        Product_Detail_Cold: "None",
        Product_Price_Cold: 0,
        Product_Img_Cold: "None",
        Product_Detail_Frappe: "มัทฉะเกรดพรีเมี่ยม กลมกลมเต็มรสชาเขียวแท้ๆ พร้อมเคี้ยวเพลินไปกับถั่วแดงแสนอร่อย",
        Product_Price_Frappe: 60,
        Product_Img_Frappe: "https://www.cafe-amazon.com/BackEnd/TempProducts/bd1fd0819f4746dfb0fd006bb78f810e.png",
        __v: 0},
      {Product_Name: "กามู", Product_Type: "กาแฟ", Product_IsHot: true, Product_IsCold: true, Product_IsFrappe: true, 
        Product_Detail_Hot: "กามู รสชาติเข้มข้น ร้อน ๆ ตึง ๆ",
        Product_Price_Hot: 40,
        Product_Img_Hot: "https://www.cafe-amazon.com/BackEnd/TempProducts/5e4ec4baf5004217bce8e054231234fc.png",
        Product_Detail_Cold: "กามู รสชาติเข้มข้น เย็น ๆ ตึง ๆ",
        Product_Price_Cold: 50,
        Product_Img_Cold: "https://www.cafe-amazon.com/BackEnd/TempProducts/a9237db1112a4bc09be59b49988c74ba.png",
        Product_Detail_Frappe: "กามู รสชาติเข้มข้น ปั่น ๆ ตึง ๆ",
        Product_Price_Frappe: 60,
        Product_Img_Frappe: "https://www.cafe-amazon.com/BackEnd/TempProducts/a90a2c6da837463eb5531c47aac578c0.png",
        __v: 0},
    ];
    // Insert the defined document into the "haiku" collection
    const result = await products.insertMany(doc);
    // Print the ID of the inserted document
    console.log(`products: okay`);
    
    const productTypes = database.collection("product_types");
    const doc1 = [
      {ProductType_Name: "กาแฟ", __v: 0},
      {ProductType_Name: "ชา", __v: 0}
    ];
    const result1 = await productTypes.insertMany(doc1);
    console.log(`product_types: okay`);

  } finally {
     // Close the MongoDB client connection
    await client.close();
  }

}

// Run the function and handle any errors
run().catch(console.dir);