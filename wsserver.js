var ws = require("nodejs-websocket")

var server = ws.createServer(function (currConn) {
    console.log("New connection")
    currConn.on("text", function (msg) {
        if (!msg) {
            return;
        }

        console.log("Received " + msg)
        // currConn.sendText(str.toUpperCase()+"!!!")

        server.connections.forEach(function (conn) {
            if (conn === currConn) {
                return true;
            }
            conn.sendText(msg)
        })
    })
    currConn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001)

function generateAswer(msg) {
    if (msg.trim().toLowerCase() == 'привет') {
        return 'И тебе привет';
    }
}