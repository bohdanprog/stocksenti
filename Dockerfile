FROM node:14.15.0

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install 

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build
EXPOSE 3000
CMD [ "yarn", "start" ]