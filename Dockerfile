FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .
RUN npx webpack

EXPOSE 2018

CMD [ "npm",  "start" ]

