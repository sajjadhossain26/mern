import http from 'http';
import dotenv from 'dotenv';
import {readFileSync, writeFileSync} from 'fs'
import { findlastid } from './utility/functions.js';


// environment init
dotenv.config()
const port = process.env.SERVER_PORT

// data management
const student_json= readFileSync('./data/students.json');
const student_obj= JSON.parse(student_json);

// creat server
http.createServer((req, res)=>{
    if(req.url=='/api/students' && req.method == "GET"){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(student_json)
    }else if(req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=="GET"){
      let id= req.url.split('/')[3]
      if(student_obj.some(stu=> stu.id==id)){
         res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(student_obj.find(stu => stu.id==id)))
      }else{
          res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({
          massage: "Students not found"
      }))
      }
     
    }else if(req.url=='/api/students' && req.method == "POST"){
    //   post data handle
      let data='';
      req.on('data',(chunk)=>{
         data += chunk.toString()
      });
      req.on('end', ()=>{
        let {name, skill, age, location}= JSON.parse(data)
        student_obj.push({
            id: findlastid(student_obj),
            name: name,
            skill: skill,
            age: age,
            location: location
        })
        writeFileSync('./data/students.json', JSON.stringify(student_obj))
      })

        res.writeHead(200, {'Content-Type':'application/json'});
        res.end('New Student data added successfully')

    }else if(req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=="DELETE"){
        let id=req.url.split('/')[3]
        let deleted=student_obj.filter(stu=> stu.id!=id);
        writeFileSync('./data/students.json', JSON.stringify(deleted))

        res.writeHead(200,{'Content-Type':'application/json'});
        res.end('Student data deleted successfully')
    }else if(req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=="PUT" || req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method=="PATCH"){
        let id=req.url.split('/')[3]
        if(student_obj.some(stu=> stu.id==id)){
            let data= '';
            req.on('data',(chunk)=>{
             data += chunk.toString()
            });
            req.on('end', ()=>{
             let updatedata=JSON.parse(data)
             student_obj[student_obj.findIndex(stu=> stu.id==id)]={
                 id: id,
                 name: updatedata.name,
                 age: updatedata.age,
                 skill: updatedata.skill,
                 location: updatedata.location
             }
            writeFileSync('./data/students.json', JSON.stringify(student_obj))
            })
       

            res.writeHead(200,{'Content-Type':'application/json'});
           res.end('Student data updated successfully')
        }else{
            res.writeHead(200,{'Content-Type':'application/json'});
           res.end('Student data not found')
        }
      
       

       
    }else{
       res.writeHead(200, {'Content-Type':'application/json'});
       res.end(JSON.stringify({
           error : "Invalid Route"
       }))
    }
    
}).listen(port, ()=>{
    console.log(`server is running on ${port} port`);
})