var sqlDb = require("mssql");
var settings = require("../settings");

exports.executeSql = function( sql, callback ){
    var conn = new sqlDb.connection(settings.dbConfig);
    conn.connect()
    .then(function(){
        var req = new sqlDb.Request(conn)
        .then(function(){
            req.query(sql);
        }).catch(function(err){
            console.log(err);
            callback(null,err);
        })
    }).catch(function(err){
        console.log(err);
        callback(null,err);
    });
}