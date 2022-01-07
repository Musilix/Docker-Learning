#Layer 1
FROM node:16 

#Layer 2
WORKDIR /app

# copy dependencies 
COPY package*.json ./

# run the npm install command within the /app directory we set as the current working dir
RUN npm install

# copy over src folder content - set up dockerignore to ignore files you dont want
COPY . .

# Setting process env variable I guess
ENV PORT=8080

# actually listening on the port we set the process env to be
EXPOSE 8080

CMD ["npm", "start"]