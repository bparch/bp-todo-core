FROM node:slim
LABEL Name=BP-TODO-CORE Version=0.1.0
RUN mkdir -p /home/todo/bp-todo-core
WORKDIR /home/todo/bp-todo-core
COPY . /home/todo/bp-todo-core
RUN npm install
CMD npm run start
EXPOSE 8001