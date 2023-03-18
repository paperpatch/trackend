FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run seeds

EXPOSE 3001

CMD [ "npm", "start" ]