FROM node:12

WORKDIR /home/app

RUN ls

COPY ./package.json /home/app/
COPY ./app.js /home/app/
COPY ./controllers/ /home/app/controllers/
COPY ./models/ /home/app/models/

RUN ls
RUN node -v
RUN npm install

CMD node app.js

EXPOSE 9090