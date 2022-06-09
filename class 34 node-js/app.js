import http from 'http';
import fs from 'fs';
let db= fs.readFileSync('./db.json');
let data= JSON.parse(db);

http.createServer((req, res) =>{  
 res.writeHead(200, {'Content-Type':'application/json'});

   if(req.url==="/"){
        res.write(db)
    }else if(req.url==='/devs'){
        res.write(JSON.stringify(data.devs))
    }else if(req.url==='/students'){
        res.write(JSON.stringify(data.students))
    }else if(req.url==='/products'){
        res.write(JSON.stringify(data.products))
    }else{
        res.write(JSON.stringify({
            status: "no data found"
        }))
    }


 res.end()
}).listen('5050',()=>{
  console.log("This is test server")
})