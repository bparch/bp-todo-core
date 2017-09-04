FROM node:slim
LABEL Name=bp-todo-core Version=0.1.0
RUN mkdir -p /home/bparch/bp-todo-core
WORKDIR /home/bparch/bp-todo-core
COPY . /home/bparch/bp-todo-core
RUN npm install
CMD npm run start
EXPOSE 8080