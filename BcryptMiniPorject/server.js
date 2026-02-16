const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

require('dotenv').config();  // to import the .dot env file


const PORT = process.env.PORT || 3000;



// middle wares

app.use(bodyParser.json());  // to parse `json data`
app.use(bodyParser.urlencoded({extended:true}));   //for parsing application// url encoded data



// fake database by the name `user`

const users = [];


// register user

app.post('/register', async (req, res)=> {

  try{
   
    const {email, password } = req.body;

    const userExists = users.find( (u)=> {
       return u.email === email;
    })

    if(userExists){
        return res.status(400).json({meassage:"user already exist in db..."});
    }

    // if user not registered, register it in the database

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push( { 
        email, 
        password:hashedPassword

    } )  ; // push email, and hashed  password in the data base

    res.json( {
         meassage:"user registered successfully",
         storedUser:{email}
    });

   } catch(err ){
        
    res.status(500).json({
         error:err.message
    })

   }

})



// log-in user 


app.post('/login', async (req, res)=> {
      
     try {

        const {email, password} = req.body; // extracted email and password 

              // chek email exists in the db , if not pop message to resgister user first
            const user = users.find( (u)=> {
                 return u.email === email;
            })  

            if( !user){
                 return res.status(401).json({message:'invalid credentials...'})
            }

            // compare passowrd

            const IsMatch = await bcrypt.compare(password, user.password);

            if(!IsMatch){
                return res.status(400).json({message:' password is wrong...'});
            }

            res.json({message:'login successful...'});

     }catch(err){


           res.status(500).json({message:err.message});

     }


});




// debug route - to see hashed password

app.get('/users', (req,res)=>{
   
     res.json({users});
})







app.listen(PORT, ()=> {
    console.log(`server is running at http://localhost:${PORT}`);
})
