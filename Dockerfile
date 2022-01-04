FROM node:17.3

COPY ["package.json", "yarn.lock", "/home/app/"]

WORKDIR /home/app

RUN npm install

COPY [".", "/home/app"]

EXPOSE 3000

CMD ["npm", "start"]
