from node:latest
env NODE_ENV=prodoction

workdir /app

copy package.json ./
# upgrade hatasi almamak için kopyalanabilir...
# copy package-lock.json ./

run npm install --production

copy . . 

cmd ["node", "app1.js"]
