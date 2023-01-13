/*const dotenv = require('dotenv');
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
};*/


const {MongoClient} = require('mongodb');
async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */         
	const uri = "mongodb+srv://el_mucacran_rasta:fXyC3iiBL3dq4Hs@cluster0.w4yyxxg.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();

    try {
        // Connect to the MongoDB cluster
        await client.connect();
         // Make the appropriate DB calls   
        //await listDatabases(client);
        await crearLista(client,{
            name: "amor de horno",
            summary: "Algun texto chevere para describir",
            bathroom: 1,
            bathromms: 1
        });
     
    } catch (e) {
        console.error(e);
    }finally {
        await client.close();
    }
}

main().catch(console.error);

async function crearLista(cliente,nuevaLista){
   const resultado = await cliente.db("sample_airbnb").collection("listingsAndReviews").insertOne(nuevaLista);

   console.log(`Nueva listas credas con el siguiente id: ${resultado.insertedId}`);
}


/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
