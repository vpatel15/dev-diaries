// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from "../../Lib/Mongodb";

export default async (req, res) => {
  // checking mongodb connection
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });





        //  // Get the database and collection on which to run the operation
        //  const db = await client.db("sample_mflix");
        //  const col = await db.collection("comments");
        //  // Create new documents                                                                                                                                         
        //  const peopleDocuments = [
        //    {
        //      "name": { "first": "Alan", "last": "Turing" },
        //      "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //      "views": 1250000
        //    },
        //    {
        //      "name": { "first": "Grace", "last": "Hopper" },
        //      "birth": new Date(1906, 12, 9), // Dec 9, 1906                                                                                                                                 
        //      "death": new Date(1992, 1, 1),  // Jan 1, 1992                                                                                                                                  
        //      "contribs": [ "Mark I", "UNIVAC", "COBOL" ],
        //      "views": 3860000
        //    }
        //  ]
        //  // Insert the documents into the specified collection        
        //  const p = await col.insertMany(peopleDocuments);
        //  // Find the document
        //  const filter = { "name.last": "Turing" };
        //  const document = await col.findOne(filter);
        //  // Print results
        //  console.log("Document found:\n" + JSON.stringify(document));





    res.status(200).send("Pinged your deployment. You successfully connected to MongoDB!");
    // console.log("Pinged your deployment. You successfully connected to MongoDB!", data);
  } catch(err){
    res.status(200).send("Error connecting to mongodb");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
