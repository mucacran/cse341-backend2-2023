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
	

    const dotenv = require('dotenv');
    dotenv.config();
    const MongoClient = require('mongodb').MongoClient;

        const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
    } catch(e) {
            console.error(e);
        
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases:');
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}
