var http = require("http");
var employee = require("../controllers/employee");
var settings = require("../settings");

http.createServer(function(req,resp){
    
    switch(req.method){
        case "GET":
            if(req.url === "/"){
                resp.end();
            } else if(req.url === "/employees"){
                employee.getList(req,resp);
            }
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }
    
}).listen(settings.webPort,function(){
   console.log("Server listening on port : " + settings.webPort); 
});