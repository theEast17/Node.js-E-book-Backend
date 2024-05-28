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

6th:- install ESLint using command  - npm init @eslint/config  
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
        first we need to define the port and then the port will be coming from procee.env.PORT -> app.listen(port,()=>{console.log('server connected)})  outside funtion call startServer()

  
9th: npm i dotenv  and npm i -D @types/dotenv


10th: install mongoose  and types for it 
  why we need mongoose->
    -mongoose is a ODM(object data modeling) library form mongodb and node js
    -advantages - schema definitions 
                - data validation
                - middleware
                - query building
                - model relationship

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
  in the copied link you have to paste your database name after .mongodb.net/e-Book <- this is your database name 
