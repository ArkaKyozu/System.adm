FROM node:alpine

WORKDIR /adm-app-front

COPY . /adm-app-front

RUN npm install

RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
