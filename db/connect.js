const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) =>{
    if(_db){
        console.log('la base de datos esta inicializada');
        return callback(null, _db);
    }
    MongoClient.conect(process.env.MONGODB_URI)
    .then((client) =>{
        _db = client;
        callback(null, _db);
    })
    .catch((err)=>{
        callback(err);
    });
};

const getDb = () => {
    if(!_db){
        throw Error('Db not se inicializo');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};



/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://el_mucacran_rasta:<password>@cluster0.w4yyxxg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
