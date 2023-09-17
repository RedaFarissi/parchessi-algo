FROM node:18-alpine

WORKDIR /parchessi_algo/

COPY public/ /parchessi_algo/public
COPY src/ /parchessi_algo/src
COPY package.json /parchessi_algo/

RUN npm install -g npm@10.1.0
RUN npm install

CMD ["npm", "start"]