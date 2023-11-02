FROM node:10
WORKDIR /app
RUN npm init -y
RUN npm install express
COPY . .
CMD [ "node", "app.js" ]
EXPOSE 3000

