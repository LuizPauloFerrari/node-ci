FROM node:15

WORKDIR /usr/src/app

# RUN apt-get update && apt-get install -y wget

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "install" ]
CMD ["node","index.js"]
