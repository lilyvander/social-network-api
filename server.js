const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const prot = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'shelterDB'