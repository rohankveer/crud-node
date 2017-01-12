var settings = require("../settings");

exports.show500 = function(req,resp,err){
    if(settings.httpMsgFormat === "HTML"){
        resp.writeHead(500,"Internal Error Occured",{"content-type":"text/html"});
        resp.write("<html><head><title>500</title></head><body>Internal error occured. Details : " + err + "</body></html>");
    }else{
        resp.writeHead(500,"Internal Error Occured",{"content-type":"application/json"});
        resp.write(JSON.stringify({data:"Error occured : " + err}));
    }
    resp.end();
}