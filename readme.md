HTTP response status codes :

1. Informational Responses (100–199)
   100 Continue
   101 Switching Protocols
2. Successful Responses (200–299)
   200 OK: The request was successful, and the server returned the requested resource.
   201 Created: The request was successful, and a new resource was created.
   202 Accepted: The request has been accepted for processing, but the processing is not complete.
   204 No Content: The server successfully processed the request, but there is no content to send in the response.
3. Redirection Messages (300–399)
   301 Moved Permanently: The resource requested has been permanently moved to a new URL.
   302 Found: The resource requested is temporarily available at a different URL.
   304 Not Modified: The resource has not been modified since the last request.
4. Client Error Responses (400–499)
   400 Bad Request: The server could not understand the request due to invalid syntax.
   401 Unauthorized: The client must authenticate itself to get the requested response.
   403 Forbidden: The client does not have access rights to the content.
   404 Not Found: The server cannot find the requested resource.
   405 Method Not Allowed: The request method is known by the server but is not supported by the target resource.
   409 Conflict: The request could not be completed due to a conflict with the current state of the resource.
5. Server Error Responses (500–599)
   500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
   501 Not Implemented: The server does not support the functionality required to fulfill the request.
   502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
   503 Service Unavailable: The server is not ready to handle the request, often due to being overloaded or down for maintenance.
   504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.


1st:- create a package.json using command npm init

2nd:- install dependecies for our project
like typescript, ts-node, nodemon. @types/node

      npm install -D typescript nodemon ts-node @types/node
        - here -D means devDependencies
            there are 2 types of dependecies in package.json
                1-dependencies: These are the packages required for the application to run in production. They are listed under the "dependencies" field and are essential for the core functionality of the project.

                2-devDependencies: These are the packages needed only for development and testing purposes. They are listed under the "devDependencies" field and are not necessary for the application to run in production.

        # nodemon -> to restart our server automaticallly
        # ts-node -> ts-node is a TypeScript execution environment and "REPL" for Node.js. It allows you to directly "run TypeScript code without needing to compile it first", providing a seamless way to develop

        # what is REPL:-  REPL stands for "Read-Eval-Print Loop." It is an interactive programming environment that takes single user inputs (reads), executes them (eval), and returns the result to the user (prints). This loop continues until the user exits the environment.

        # @types-node:-  @types/node is a TypeScript declaration package that provides type definitions for Node.js. These type definitions allow TypeScript to understand and provide "type-checking" and IntelliSense for the Node.js APIs, enabling developers to write type-safe Node.js applications.

3rd:- create tsconfig.json using npx tsc --init

4th:- add gitIgnore extension is gitignore
press CTRL+SHIFT+P
.gitignore
node browser press enter

5th:- add "dev" script in package.json
"dev":"nodemon server.ts"

6th:- install ESLint using command - npm init @eslint/config  
->ESLint is a widely-used static code analysis tool for identifying and fixing problems in JavaScript and TypeScript code. It helps maintain code quality by enforcing coding standards, catching syntax errors, and flagging potential issues such as unused variables or inconsistent indentation.

7th:- install prettier

8th:- install express and types of express - npm i express npm i -D @types/express
(-:) It provides a robust set of features for building web and mobile applications, including routing, middleware support, and template engines. Express simplifies the process of handling HTTP requests and responses, making it easier to create APIs and web applications.

      - why types download ?
        so we are using here typsScript so we need it for configure with it because express understand pure js so we need to install types module for it.

---- how to setup express?
src->app.ts
import express -> const app=express() -> export app
server.ts
import app -> create a funcion calles startServer -> into that function ->
first we need to define the port and then the port will be coming from procee.env.PORT -> app.listen(port,()=>{console.log('server connected)}) outside funtion call startServer()

9th: npm i dotenv and npm i -D @types/dotenv

10th: install mongoose and types for it
why we need mongoose->
-mongoose is a ODM(object data modeling) library form mongodb and node js
-advantages - schema definitions - data validation - middleware - query building - model relationship

    - in simple words -
      we have application and we have a mongodb database and we are sending the request from client means application to server means our database which will be fetch the data.

      so we are fetching the data from the mongo using mongoose. because we have a browser which is running on windows and if we have the other browser which is runnning on mac,linux or anything else then there will be an issue with mongodb so for that we use mongoose for creating and validating the schema

      we are directly communicate with mongoose rather than mongodb

      npm i mongoose
      npm i -D @types/mongoose

-MongoDb Setup
1>open mongodb atlas login and create a new project
2>create cluster and there will be a free option
3>give username and password add live ip address and create
4>click on connect then click on compass and paste the link to the mongodb compass and connect it
5>go to atlas and click
-database->browser collection -> collections -> create database and give collection name
6>click on overview-> connect -> drivers paste it into the env file and called the name whatever you want
-the copied link you have to paste your database name after .mongodb.net/e-Book <- this is your database name

example:-mongodb+srv://nagarpoorv2001:khushi@cluster0.j2oi1wt.mongodb. net/?retryWrites=true&w=majority&appName=Cluster0

you have to do like :
mongodb+srv://nagarpoorv2001:khushi@cluster0.j2oi1wt.mongodb.net/E-book?retryWrites=true&w=majority&appName=Cluster0

now all the setup of backend is done

connect database to the application using mongoose
so you need to make seperate file called db.js which having a function called connectDb() and it would be called into the server.js()

simple code for connect db.js
import mongoose
const connectDb=async()=>{
try{
const con=await mongoose.connect(config.database_url as string)

            or

            const conn = await mongoose.connect(process.env.MERN_URI)

            console.log('connected successfully')
          }catch(err){
            console.log(err)
          }
      }

the connection is done is done

11th:- error handling

middleware:-Middleware in Express refers to functions that execute during the lifecycle of an HTTP request. They can manipulate the request and response objects, terminate the request-response cycle, or call the next middleware function in the stack. Middleware functions are essential for processing requests, handling errors, and implementing features like authentication and logging.

                              next()            next(err)

| client |---> | Router |-->| Middleware |--->|request handler|--->|error handler |
browser router any function node server error

ex:'/' function server handler

first request will be sent client to server through router if there is an authentication so it would be done by middleware the middleware is nothing but a function which call handle the http request and give the response. and if there is another middleware so it has a function called next() so it will go to te next middleware so on...

suppose all the things done pefectly and we have an error after request handler so from where it give the error so there is we need to make global error handler so request handler will go to the global error and it will give the output

there is 2 possibilities
synchronous and asynchronous

if sync. then there is no need to pass err parameter
if async. then there is need to pass err parameter

there would be 4 parameter in error handler function in other function there is 3 parameter

-simple funtion in node.js

      app.get('/',(req,res,next)=>{
          res.json({message:'hello'})
      })

      request, response, next

-error handler function

app.use(( err: HttpError,
req: Request,
res: Response,
next: NextFunction)=>{
const statusCode = err.statusCode || 500;
return res.status(statusCode).json({
message: err.message,
errorStack: config.env === "development" ? err.stack : " ",
})
})

12th:-now we needs to create routes (Rest Apis)

REST API:REST APIs (Representational State Transfer Application Programming Interfaces) are a set of rules that developers follow when creating and using APIs.

------Common Methods in RESTful APIs
GET: Retrieve information from the server (like getting a list of users).
POST: Send data to the server to create a resource (like adding a new user).
PUT: Update an existing resource on the server (like updating user details).
DELETE: Remove a resource from the server (like deleting a user).

------Example of a REST API Workflow
Client Request: A client application sends an HTTP request to a URL endpoint of a RESTful API, specifying the desired operation (GET, POST, PUT, DELETE).
Server Processing: The server processes the request, accessing the necessary resources and performing the specified operation.
Server Response: The server sends back an HTTP response, typically containing a status code (such as 200 for success, 404 for not found) and, if applicable, a representation of the resource in a format like JSON or XML(Extensible Markup Language).

-------Example
If you have an API for managing a list of users, the endpoints might look like this:

GET /users - Retrieve a list of users.
GET /users/{id} - Retrieve a specific user by ID.
POST /users - Create a new user.
PUT /users/{id} - Update an existing user by ID.
DELETE /users/{id} - Delete a user by ID.

example :- http://localhost:5000/api/users
when you are post any data in the database you should have aware of some thing in mind

            http://localhost:5000/ -> is our main domain
            we are creating user register api
            so we need to keep in mind that '/api/users'  - users=resource
            we need to give plural form like users, books, products

------folder structure of apis
step1:you are creatinf apis for user so you need to make seperate folder for it called "user"
in that folder you have to create userRouter.ts

    import express
    const userRouter=express.Router()
    export default userRouter

    step2:-now we need to import userRouter into the app.ts so

    app.ts

    app.use('/api/users',userRouter())

    step3:-  now you want to post the user so in userRouter.ts

    userRouter.post('/register',...any function...)

    step4:-post will get a function we nedd to define in seperate folder controller -> registerController.ts

    const registerController=async(req,res,next)=>{
      res.json({message:'hello world'})
    }

and so on.....

there will be a three step when we are register user
1- validation

    in registerControl.js
    const {name,email,password}=req.body
    if(!name || !email || !password){
    const error=createHttpError(400,'All fields are required')
    return next(error)
    }


    here it will not give any data because of express does not understand json so we need to parse it so in app.ts:-

    app.use(express.json())

2-process

we need to check whether the user is already exists or not
so we need to crate a schema and interact with database

create new folder called Models -> userModel.ts

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
},
email: {
type: String,
unique: true,
required: true,
},
password: {
type: String,
required: true,
},
},
{
timestamps: true, // there is 2 properties 1- createdAt , 2- updatedAt
}
);

const userModel=mongoose.model('User',userSchema) // you can also give third parameter here for overRide User which is name of collection ('User',userschema,'Author')
export default userModel

now we will check in database using userModel

registerController.ts

const userExists=await userModel.findOne({email}) // it returns null or document

if(userExists){
const error = createHttpError(400, "User already exists with this email");  
 return next(error);
}

// if user not exists then we need to store into the database
// we need to store passwords in hash bcrypt form

const hashPassword= await bcrypt.hash(password,10) // there are 2 parameters in hash 1st name of property and 2nd is saltOnRounds  
saltRounds :
example:- let say user A enter password secret - sssssss -> this is bcrypt form of password
let say user B enter password secret - sssssss -> this is bcrypt form of password

          so the security is not good here if the hacker hack the password then he/she knows that the hash of the secret is sssssss  so we need more security so there is saltOnRounds is second parameter in hash(property,saltOnRounds)

          The saltRounds value specifies the number of iterations used to create the salt and hash the password, making the hashing process more time-consuming

3-response

// now we are ready to store into the database

const newUser=await userModel.create({
name,
email,
password:hashPassword
})

if (newUser) {
res.status(201).json({
_id: newUser._id,
name: newUser.name,
email: newUser.email,
})
} else {
const error = createHttpError(400, "Invalid Credentials");  
 return next(error);
}

now talk about jwt authentication:-
  when we are creating our new user we are also creating jwt (json web token) on that time for security purpose for this we need to install npm i jsonwebtoken package

when we are login aur register we need to create token 
json web token is made up of three things 
1-header-{
  "alg":"HS256",
  "type":"JWT
}
2-Payload-{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
3-Signature-{
  HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret)
}

syntax to create token to the register user

registerController.ts

const token=sign({sub:user._id},SECRET_PASSWORD,{expiresIn:'7d'})

res.json({accessToken:token})

this is all about registerController.ts


now if you can make login controller by yourself 

step1-in useRouter.ts make a route of login
step2-create loginController.ts
      - we are validating email and password 
      -first check whether the email or password is empty or not
      -if it is full then check whether the email is present in the database or not 
      - if it is present then check the password of that email with the user.password
      
      example->  const isMatch=await bcrypt.compare(password,user.password as string)

      -if it is compare and it return true then again create a token using sign method that is descibed above and response the accessToken

both register and login is complete now

now we will create book CRUD














