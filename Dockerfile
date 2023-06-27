#Build node image from Node Docker Hub
FROM node:20-alpine3.18

#Make app directory in container
RUN mkdir /app

#Identify working directory
WORKDIR /app

#Copy package
COPY package.json /app

#Install rpm packages from package.json
RUN npm install

#Copy over app tp app folder

COPY . /app

#Expose Server at port 
EXPOSE 8080

#Start app
CMD [ "node", "server.js" ]