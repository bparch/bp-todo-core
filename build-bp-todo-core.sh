SECONDS=0
echo "-------------------------------------"
echo "Deployment Started"
echo "-------------------------------------"
date #!/bin/bash
echo "-------------------------------------"
echo "Removing old files"
echo "-------------------------------------"
docker stop bp-todo-core-container #!/bin/bash
docker rm bp-todo-core-container #!/bin/bash
docker rmi bp-todo-core-image #!/bin/bash
docker rmi node:slim #!/bin/bash
rm -rf /home/todo/bp-todo-core #!/bin/bash
echo "-------------------------------------"
echo "Removed old files"
echo "-------------------------------------"
echo "Pulling new files"
echo "-------------------------------------"
svn checkout svn://222.1.1.165/bparch/todo/bp-todo-core /home/todo/bp-todo-core #!/bin/bash
# use git pull command here instead
echo "-------------------------------------"
echo "Pulled new files"
echo "-------------------------------------"
echo "Building new files"
echo "-------------------------------------"
echo "Building BP TODO CORE"
echo "-------------------------------------"
cd /home/todo/bp-todo-core #!/bin/bash
docker build -t bp-todo-core-image . #!/bin/bash
docker run -d -p 8001:8001 --name bp-todo-core-container bp-todo-core-image #!/bin/bash
echo "-------------------------------------"
echo "Built BP TODO CORE"
echo "-------------------------------------"
echo "Built new files"
echo "-------------------------------------"
docker images #!/bin/bash
echo "-------------------------------------"
docker ps -a #!/bin/bash
echo "-------------------------------------"
echo "Deployment finished in" $SECONDS "seconds"
echo "-------------------------------------"