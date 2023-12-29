//libraries required
const express=require("express"); 
const bodyParser=require("body-parser")
const cors=require("cors")
const cookieParser=require("cookie-parser")
const session =require("express-session")
const bcrypt=require('bcrypt')
const app=express()
const saltRounds=10
const mysql=require("mysql")
const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Avan@Kapali7",
        database:"user_data"
    }
);
app.use(express.json())
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["GET","POST"],
        credentials:true
    }
));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    key:"userid",
    secret:"secret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24
    }
}))
app.post("/register",(req,res)=>
{
    const username=req.body.username
    const useremail=req.body.useremail
    const userpassword=req.body.userpassword
    bcrypt.hash(userpassword,saltRounds,(hash_error,hash)=>
    {
        if(hash_error)
        {
            console.log(hash_error)
        }
        const sqlinsert='insert into new_table(user_name,user_email,user_password)values(?,?,?);'
        db.query(sqlinsert,[username,useremail,hash],(err,result)=>
        {
           if(err)
           {
            res.send({message:"Email Id Already exists.Try logging in"});
           }
           if(result)
           {
            res.send({message:"Account have been created successfully"})
           }
        });
    })
    
});
app.get("/login",(req,res)=>
{
    if(req.session.user)
    {
        res.send({loggedIn:true,user:req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})
app.post("/login",(req,res)=>
{
    const useremail=req.body.useremail
    const userpassword=req.body.userpassword
    const sqlinsert='select * from new_table where user_email=? ;'
    db.query(sqlinsert,useremail,(err,result)=>
    {
        
       if(err)
       {
        res.send({err:err});
       }
       
       if(result.length>0)
       {
        bcrypt.compare(userpassword,result[0].user_password,(error,response)=>
        {
            if(error)
            {
                console.log(error)
            }
            if (response)
            {
                req.session.user=result
               console.log(req.session.user)
                res.send({message:"You have logged in successfully"});
            }else{
                res.send({message:"Email Id and password doesn't match"});
            }
        })
        
       }
       else{
        res.send({message:"User doesn't exists! Create an account by Signing up yourself"});
       }
    });
});

app.listen(3005,()=>
{
    console.log("running server at 3005");
});