FROM node:14-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 2018

CMD [ "npm",  "start" ]
