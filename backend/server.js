
    const app = require('/backend/app');

    const debug = require("debug")("node-angular");

    const http = require('http');



    const fs = require('fs');

    const server = http.createServer(
    
        {
            key: fs.readFileSync('keys/privatekey.pem'),
            cert: fs.readFileSync('keys/certificate.pem')
        },app


    );
    const port = (process.env.PORT || 3232)


    app.set("port", port)
    server.listen(port)




