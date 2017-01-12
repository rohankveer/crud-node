var db = require("../core/db");
var msg = require("../core/httpMsg");

exports.getList = function(req,resp){
    db.executeSql("SELECT * from emp",function(data,err){
        if(err){
            msg.show500(req,resp,err);
        }else{
            
        }
    });
}

exports.get = function(req,resp,empId){
    
}

exports.add = function(req,resp,reqBody){
    
}

exports.update = function(req,resp,reqBody){
    
}

exports.delete = function(req,resp,reqBody){
    
}