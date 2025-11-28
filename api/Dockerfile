FROM node:22-alpine

WORKDIR /app

RUN npm install -g json-server@0.17.4

COPY db.production.json .

CMD ["sh", "-c", "json-server db.production.json --host 0.0.0.0 --port $PORT --cors"]
