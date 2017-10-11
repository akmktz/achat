var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database connected!");
    var cursor = db.collection('test').find();
    cursor.each(function(err, doc) {
        if (doc != null) {
            console.log(doc.name);
        }
    });
    db.close();
});