FROM node:14.17.3

WORKDIR /client

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json


RUN npm install

COPY .. /client

EXPOSE 3000

CMD [ "npm", "start" ]