FROM node:14.17.3

WORKDIR /server

COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json


RUN npm install

COPY .. /server

EXPOSE 3001

CMD [ "npm", "run", "devStart" ]