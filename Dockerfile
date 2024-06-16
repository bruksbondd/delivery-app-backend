FROM node:20.14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install

COPY . .

CMD ["node", "dist/main"]

EXPOSE 8080