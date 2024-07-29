const{ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');

const MONGODB = 'mongodb+srv://andreysev72:Gekina72$@cluster0.cb8edbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    });
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({port: 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })





