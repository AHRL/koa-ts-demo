import * as entities from 'entities'
import { print } from './utils'
import { Environment } from './environments'
import { createConnection } from 'typeorm'
const mongo = Environment.mongo

const mongoConnect = createConnection({
  type: 'mongodb',
  host: mongo.MONGODB_HOST,
  port: mongo.MONGODB_PORT,
  username: mongo.MONGODB_USER,
  database: mongo.MONGODB_DATABASE,
  password: mongo.MONGODB_PASS,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: Object.keys(entities).map(name => entities[name])
}).then(() => print.log('connected mongodb'))

Promise.all([
  mongoConnect
])
.catch(error => console.error(error))