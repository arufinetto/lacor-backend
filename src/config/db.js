var mongoose = require('mongoose');
var config = require('./config');

exports.connect = async function(){

    try{
        const connection = await mongoose.connect(config.mongodb_uri)

        console.log("MongoDB connection ok");
        await listDB();
    }catch(e){
        console.log("MongoDB connection failed " + e);
    }finally{ 
        //await mongoose.connection.close(); //Close DB connection
    }
    
}

 async function listDB(){
   const dataBases = await mongoose.connection.db.admin().command({
        listDatabases: 1
    });
   console.log("Databases: ");
   dataBases.databases.forEach(db => {
        console.log("- " + db.name);
   })
}