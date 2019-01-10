
# Introduction to NodeJS

In this worksheet you will be introduced to **NodeJS**, a runtime environment that allows you to run JavaScript code on a web server. NodeJS is based on the Chrome V8 JavaScript engine that runs inside the Chrome browser but adapted for server use.

It uses an event-driven, non-bocking I/O model which makes it very efficient when handling large numbers of connections.

The runtime uses a single thread running an *event loop* to to handle **all** incoming requests. When a connection is received we typically fire a callback to handle the request, returning control to the main thread once the work is done. This is termed **non-blocking** because the callback is used to handle the work leaving the main event loop free to deal with other requests.

Before you start this or any other worksheet you should make sure you have the latest commits from the upstream repository on **GitHub**.
```
git pull kurssi master
```


## 1 Configuring Node

Before we start learning about NodeJS we should take a few moments to check which version of Node is installed on Cloud9 and make sure this is up to date. Node is being developed at a fast rate so we need to update our installed version regularly.

To manage and upgrade Node we use the **nvm**  (Node Version Manager). By default this is not installed. Start by installing it using **npm** (Node Package Manager). The _-g_ flag tells npm to install this module globally as a _tool_ rather than locally as a _module_.
```
npm install -g nvm
```
If this fails to install nvm you may need to run the command as sudo. If this fails you will need to install it manually using _curl_, try the following.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

After checking the current version, our next task is to list all the versions we can install and install the latest version. As of writing (January 2017) the latest version was v6.9.3. Finally we check that we are now using the latest version.
```
node -v
  v4.6.1
nvm list-remote
nvm install 6.9.3
node -v
  v6.9.3
```
Try closing the current terminal window and opening another one. If you check the current version on Node you will see that it has reverted back to the previously installed one! This is because the old version is flagged as the _default_. To fix this we need to set our new version as default.
```
node -v
  v4.6.1
nvm alias default 6.9.3
node -v
  v6.9.3
```
To check that this has has the desired effect, close the current terminal window, open a new one and check the current node version.

Node is based on the Chrome v8 runtime and supports any features supported by that runtime. Sometimes its helpful to know which runtime version is included in the NodeJS install. Thankfully this is straightforward to find out.
```
node -p process.versions.v8
  5.1.281.89
```

You will have

1. Introduction
2. Node  and ECMA6
