FROM node:20.10.0-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
