# Stage 0: build with noe
from node:latest as build-stage
workdir /app
copy package*.json /app/

run npm install
copy . .
run npm run build

# Stage 1: basen on nginx
from nginx:latest
copy --from=build-stage /app/dist/* /usr/share/nginx/html/

cmd ["nginx", "-g", "daemon off"]
