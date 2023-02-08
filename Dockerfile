FROM node:12.16.3

# build image off of this already made image ^

WORKDIR /code

# crete directory / code

ENV PORT 80

COPY package.json /code/package.json

# copy package.jsona and put it in /code/package.json

RUN npm install

# install all dependancues inside the image

COPY . /code

#  copy everything in local direciroty an put it in code direcotry

CMD npm run start

# run node server/index.js






