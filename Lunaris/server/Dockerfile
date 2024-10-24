FROM node:20.17.0

WORKDIR /server

COPY package.json package-lock.json ./

RUN npm install


COPY . .

EXPOSE 3001

CMD [ "npm", "run", "devStart" ]
