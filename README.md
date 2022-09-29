# Serverless Todo Application

> This project showcases a todo app that was built Serverless and AWS Lambda as part of the Udacity Cloud Dev Nanodegree.


## Description

The project is split into two parts:
1. [The Simple Frontend](/client) A basic React client web application which consumes the Todo RestAPI Backend.
2. [The RestAPI Todo Backend](/backend), a Serverless powered Todo RestAPI Backend.

### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

### Installing Serverless Cli
The Serverless Command Line Interface is required to develop, deploy, troubleshoot and secure your serverless application. Instructions for installing the CLI can be found in the [Serverless Framework Documentation](https://www.serverless.com/framework/docs/).

Run `npm i -g serverless @2.21.2` to download and install all the Serverless Framework dependencies.

Configure your aws credentials into serverless using the command
`sls config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY --profile serverless`

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

### Backend setup

* cd backend
* npm update --save
* npm audit fix
>_tip_: For the first time, create an application in your org in Serverless portal
* serverless
>_tip_: Next time, deploy the app and note the endpoint url in the end
* serverless deploy --verbose
>_tip_: If you face a permissions error, you may need to specify the user profile
* sls deploy -v --aws-profile serverless
>_tip_: **sls** is shorthand for **serverless**
>_tip_: **-v** is shorthand for **--verbose**

### Client setup

* cd client
* npm update --save
* npm audit fix --legacy-peer-deps
* npm install --save-dev
* npm run start

### Postman

Import the `collection-postman.json` file into your Postman app to import all the requests.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) - The programming language used
* [Node.js®](https://nodejs.org/) - The JavaScript runtime used
* [AWS API Gateway](https://aws.amazon.com/api-gateway/) - AWS managed service used to create, publish, maintain, monitor, and secure APIs
* [AWS Lambda](https://aws.amazon.com/lambda/) - AWS managed service used to run code without provisioning or managing servers
* [Serverless](https://www.serverless.com/) - The framework used to develop, deploy, monitor and secure serverless applications on the cloud

## Authors

* **[Jerald Lashy Jeffery](https://github.com/jeraldlashy)** - *Initial work* - [Serverless Todo Application](https://github.com/jeraldlashy/udacity-aws-serverless-todo-app-lashie)



