FROM node:12
 
WORKDIR /home/node/app
 
ADD . .

ENV PORT=3000
 
RUN npm ci
 
USER node
 
EXPOSE 3000
 
CMD [ "npm", "run", "dev"]
