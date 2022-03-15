FROM node:15

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "install" ]
CMD ["node","index.js"]
