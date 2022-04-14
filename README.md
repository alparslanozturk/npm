# npm
npm ve nodejs örnek uygulmalar. Her örnekte app1.js ve app2.js adında iki farkli uygulama vardir, Dockerfile düzenlenip build alinmalidir.
Örneklerde aşağıki gibi ignor edilen dizinler Dockerfile için vardir;

```
kullan@KUHEYLAN:~/diger/npm/ornek2$ cat .dockerignore
node_modules
```



## ornek1


İki stage arasında derleme ve runtime ayaları yapılmaktadir. 

```

kullan@KUHEYLAN:~/diger/npm-ornek1$ docker build -t ornek1:latest .
Sending build context to Docker daemon  24.21MB
Step 1/9 : from node:latest as build-stage
 ---> 8778d77035e2
Step 2/9 : workdir /app
 ---> Using cache
 ---> 39f81c65ea39
Step 3/9 : copy package*.json /app/
 ---> Using cache
 ---> 0b25d7c61edd
Step 4/9 : run npm install
 ---> Using cache
 ---> ce33929b4c96
Step 5/9 : copy . .
 ---> d94625a0b601
Step 6/9 : run npm run build
 ---> Running in 8230c3291405

> demo@1.0.0 build
> webpack --mode production

asset index.html 217 bytes [compared for emit]
asset main.js 134 bytes [compared for emit] [minimized] (name: main)
./src/index.js 274 bytes [built] [code generated]
webpack 5.72.0 compiled successfully in 357 ms
Removing intermediate container 8230c3291405
 ---> 50fb2a8b92d4
Step 7/9 : from nginx:latest
 ---> 605c77e624dd
Step 8/9 : copy --from=build-stage /app/dist/* /usr/share/nginx/html/
 ---> 95addf886c91
Step 9/9 : cmd ["nginx", "-g", "daemon off"]
 ---> Running in 4ad42bddb25f
Removing intermediate container 4ad42bddb25f
 ---> 3b7a322036e8
Successfully built 3b7a322036e8
Successfully tagged ornek1:latest

![image](https://user-images.githubusercontent.com/9527118/163399114-b1249dee-c912-4761-bbd2-c31c00d11386.png)

```

Bu aşamadan sonra ilgili image `` Docker run ... `` ile çalıştırılaçaktır. 


Benim 81 nolu portum Anamakinda boş idi ona bağladım. 

docker run -d --rm -p 82:80 ornek1





## ornek2

``` 
kullan@KUHEYLAN:~/diger/npm-ornek2$ docker build --tag node-ornek2:latest .
Sending build context to Docker daemon  7.168kB
Step 1/7 : from node:latest
 ---> 8778d77035e2
Step 2/7 : env NODE_ENV=prodoction
 ---> Using cache
 ---> 661a5b94cd4b
Step 3/7 : workdir /app
 ---> Using cache
 ---> 304952def134
Step 4/7 : copy package.json ./
 ---> 61062f9d3417
Step 5/7 : run npm install --production
 ---> Running in ad468a5d2d80

added 108 packages, and audited 109 packages in 7s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm notice
npm notice New minor version of npm available! 8.5.5 -> 8.6.0
npm notice Changelog: <https://github.com/npm/cli/releases/tag/v8.6.0>
npm notice Run `npm install -g npm@8.6.0` to update!
npm notice
Removing intermediate container ad468a5d2d80
 ---> 3c97f612906c
Step 6/7 : copy . .
 ---> 95d0a3383b95
Step 7/7 : cmd ["node", "app1.js"]
 ---> Running in f24689de3fef
Removing intermediate container f24689de3fef
 ---> 3dc336ae13cf
Successfully built 3dc336ae13cf
Successfully tagged node-ornek2:latest


```



