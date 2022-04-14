# npm
npm ve nodejs örnek uygulmalar. Her örnekte app1.js ve app2.js adında iki farkli uygulama vardir, Dockerfile düzenlenip build alinmalidir.
Örneklerde aşağıki gibi ignor edilen dizinler Dockerfile için vardir;

```
kullan@KUHEYLAN:~/diger/npm/ornek2$ cat .dockerignore
node_modules
```



## ornek1


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



