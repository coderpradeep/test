'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
<<<<<<< HEAD
    host: 'localhost',
=======
    host: '192.168.43.34',
>>>>>>> e87317f13f39a2f68b2e7a9ae74265bf11070e47
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hellooooo',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
