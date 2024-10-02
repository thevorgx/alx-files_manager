import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    this.uri = `mongodb://${host}:${port}`;
    this.dbClient = new MongoClient(this.uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    this.dbClient.connect()
      .then(() => {
        this.db = this.dbClient.db(database);
        console.log('MongoDB connected');
      })
      .catch((err) => {
        console.error(`MongoDB connection error: ${err}`);
      });
  }

  isAlive() {
    return this.dbClient.topology && this.dbClient.topology.isConnected();
  }

  async nbUsers() {
    if (!this.db) {
      return 0;
    }
    const usersCollection = this.db.collection('users');
    return usersCollection.countDocuments();
  }

  async nbFiles() {
    if (!this.db) {
      return 0;
    }
    const filesCollection = this.db.collection('files');
    return filesCollection.countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
