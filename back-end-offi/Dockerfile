# Dockerfile para a aplicação Node.js

FROM node:18.13

COPY . /back-end-offi

WORKDIR /back-end-offi

RUN npm install 
RUN npm install express --save
RUN npm install --save sequelize
RUN npm install --save mysql2

EXPOSE 8888

CMD ["npm", "start"]            