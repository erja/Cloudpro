# Cloud Programming

Welcome to **full-stack Javascript development**. You are probably viewing this via **GitHub** so one of the first tasks we will be carrying out is showing you how to *clone* your own copy of the code and maintain it on *your own Git repository*.

This course is a cloud programming course for 8 weeks. We start up with Javascript basics. Then we use Javascript in server side Node.js. Finally we will deploy our programs in Heroku.

You will be shown how to use an online IDE called **Cloud 9**, however you are encouraged to make use of any other platforms and tools.

# 1 Getting Started

## 1.1 Creating a Cloud9 Workspace

Ask the teacher to create an account on **Cloud 9**, you get an email and after this you can log in. Create a new workspace by clicking on the *create a new workspace* button. Give it the name **pilvi** and the  description *Full-Stack Development*. Choose the **private** option and the default **custom** template.

Now click on the **Create Workspace** button. This will create a new project.

Take a moment to configure your Cloud 9 editor. Open the preferences screen from the **Cloud 9 > Preferences** menu.

1. in the **Code Editor** section
  - uncheck the _soft tabs_ box and set the tab size to 2.
  - switch off **Autodetect tab size on load**.
  - switch on **On save strip whitespace**
2. in the **Hints and Warnings** section
  - switch off **Mark missing optional semicolons**
  - make sure **customise javascript warnings with .eshintrc** is switched on

Locate the _Terminal_ window at the bottom of the screen. We will use this to work with the _Git_ version control system. Start by cloning the lab materials:
```
git clone https://github.com/erja/Cloudpro.git
```
This will clone the remote repository containing the lab materials into a directory called `pilvi`, you should be able to see this in the workspace filetree. To run Git commands we need to be in the new `pilvi` directory.
```
cd pilvi/
git status
```
This command prints a status message from the Git repository.

## 1.2 Creating a New Repository

At the moment we are working on a copy of the repository hosted on GitHub. As we complete the lab activities it is important to keep a backup copy of our files. This can't be backed up on the GitHub repository since it is read-only. The solution is to create our own remote repository (on GitLab) and push the changes to this.

Create an account and log into **GitLab** (https://gitlab.com). Create yourself a new empty repository by clicking on the green **New project** button in the top-right corner of the page. In the *project path* you should enter **pilvi** and in the *Description* field enter *Pilviohjelmointi*. Set the *visibility level* to **Private** and click on **Create Project*. You will be taken to the project home screen.


```
$ git remote -v
origin	https://github.com/erja/Cloudpro.git (fetch)
origin	https://github.com/erja/Cloudpro.git (push)
```

As you can see your workspace points to the readonly version on GitHub. Lets change this to point to our read-write repository on GitLab. Make sure you substitute your own URL.

```
$ git remote set-url origin own_GitLab_URL

$ git remote -v

origin	https://gitlab.com/your_GitLab_account/own_repo_name.git (fetch)
origin	https://gitlab.com/your_GitLab_account/own_repo_name.git (push)
```


Allways use when you make changes:

```
git push origin master
```

You will notice that your remote called *origin* now points to your new GitLab repository.

Finally we need to configure Git on Cloud 9 with our name and email address. Make sure this matches the name and email you used when setting up your GitLab account.

## 1.3 The course repository has changed

Over the course of the module there will be changes made to the original read-only repository on GitHub. To allow access to these changes you will need to add a second remote to your local Cloud 9 repository (we will label this as the *upstream* repository).

```
$ git remote
origin
$ git remote add course https://github.com/erja/Cloudpro.git
$ git remote -v
origin	https://gitlab.com/your_GitLab_account/own_repo_name.git (fetch)
origin	https://gitlab.com/your_GitLab_account/own_repo_name.git (push)
course	https://github.com/erja/Cloudpro.git (fetch)
course	https://github.com/erja/Cloudpro.git (push)
```

You pull down any new files or changes from the GitHub repository and merge them into your local copy. In this way you will always have the latest versions of the teaching materials. 

```
$ git pull course master
```


## 1.5 Commiting Working Code

At the end of each exercise you should get into the habit of committing your working code.
```
git status
git add .
git commit -m 'finished exercise xxxx'
```

## 1.6 Pushing to Your Remote

At the end of your programming session you should push all these new commits back to your GitLab repository.
```
git log origin/master..HEAD
git push origin --all
git log origin/master..HEAD
```

## 1.7 Updating the Cloud Server

Finally, before starting the labs you should ensure that any unnecessary packages are removed on your cloud server. This is running **Ubuntu** and so we can use the built-in _package manager_ (apt) for this. Cloud 9 comes with several languages pre-installed (PHP, Python and Java). Lets search for any packages linked to these three languages.
```
dpkg --get-selections | grep php
dpkg --get-selections | grep python
pkg --get-selections | grep jre
```
We should now remove the software we _don't_ need. This will both increase the space available on the disk and also increase the server performance. _Autoremove_ removes any packages no longer required and cleans up the server.
```
sudo apt-get remove php5 python3 openjdk-7-jre
sudo apt-get autoremove
```
Next we need to install the _Kerberos_ dev libraries. These will be needed for our server-side scripts to communicate with various databases.
```
sudo apt-get update
sudo apt-get install -y libkrb5-dev
```

To manage and upgrade Node we use the **nvm**  (Node Version Manager). By default this is not installed. Start by installing it using **npm** (Node Package Manager). The _-g_ flag tells npm to install this module globally as a _tool_ rather than locally as a _module_.
```
npm install -g nvm
```
If this fails to install nvm you may need to run the command as sudo. If this fails you will need to install it manually using _curl_, try the following.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

After checking the current version, our next task is to list all the versions we can install and install the latest version. As of writing (January 2019) the latest version was v10.15.0. Finally we check that we are now using the latest version.
```
node -v
  v4.6.1
nvm list-remote
nvm install 10.15.0
node -v
  v10.15.0
```
Try closing the current terminal window and opening another one. If you check the current version on Node you will see that it has reverted back to the previously installed one! This is because the old version is flagged as the _default_. To fix this we need to set our new version as default.
```
node -v
  v4.6.1
nvm alias default 10.15.0
node -v
  v10.15.0
```
To check that this has has the desired effect, close the current terminal window, open a new one and check the current node version.

Node is based on the Chrome v8 runtime and supports any features supported by that runtime. Sometimes its helpful to know which runtime version is included in the NodeJS install. Thankfully this is straightforward to find out.
```
node -p process.versions.v8
  5.1.281.89
```

