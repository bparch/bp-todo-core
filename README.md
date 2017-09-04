## Notes

This Boiler Plate is running the following stack:
-   NodeJS
-	ExpressJS
-   MongooseJS (to connect and interact with MongoDB server)


## Hosting

-   GitHub: <https://github.com/bparch/bp-todo-core>
-   DockerHub: <https://hub.docker.com/r/setry14/bp-todo-core/>
-   MongoDB: <https://cloud.mongodb.com/v2/59020686df9db163054584cb#clusters>
-   OpenShift: <https://console.starter-us-west-1.openshift.com/console/project/bp-todo-core/overview>


## Deployment to OpenShift

-   Each push to GIT repo will trigger an auto-build of the image on DuckerHub.
-   Goto Openshift project console, then Applications > Deployments > bp-todo-core > Deploy. This will build and serve latest image.


## Installation Locally

Follow these steps to install this app:
-   Clone this repo from GIT
-   cd to cloned directory
-   npm install
-   You will also need to have MongoDB installed on your machine

Follow these steps to install MongoDB on your machine if you intend to use MongoDB locally (else skip as app is hooked upto MongoDB Cluster):
-   Download and install MongoDB to this custom path - C:\mongodb
-   Set machines ENV VARIABLES for PATH = C:\mongodb\bin\
-   Reboot Machine for the ENV VARIABLES PATH to take effect
-   Create folders under C:\mongodb\
	-   C:\mongodb\data
	-   C:\mongodb\data\db
	-   C:\mongodb\log
-   Using command prompt key in following commands
	-   C:\mongodb\bin>mongod --directoryperdb -dbpath C:\mongodb\data\db --logpath C:\mongodb\log\mongo.log --logappend --rest --install
	-   C:\mongodb\bin>net start MongoDB
	-   C:\mongodb\bin>mongo


## Launch Locally

To launch the app key in this command 
-	npm run start
-	In browser key in the URL as http://localhost:8080/todos


## License

MIT License

Copyright (c) 2017 
-   SUMEET SETHI [<sumeetsethi.asm@gmail.com>]
-   RONALD WILLIAMS [<rwilliams0291@gmail.com>]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.