## Building 

### Creating Expo Account

You will need an expo account to use Expo Application Services. So, to create your expo account go to their [website](https://expo.dev), click Sign Up button in the top-right corner and complete the registration process. After that, confirm your email address, and you are ready to go!

### Installing Expo Application Services

Before you can start using Expo Application Services you need to install it by opening the terminal and typing:
```sh
yarn add eas-cli
```

Once the installation is finished, you can login to our expo account by typing eas login in the same terminal and providing the username as well as the password of the expo account that you have created earlier. (You can test if you logged in successfully by typing eas whoami in the terminal, which should display your username).

### Configuring The Project

The last step before you can start creating our first build is to configure the project. you can simply do that by running eas build:configure in the terminal, and choosing android as our platform. This command will create eas.json file in your project.

### Creating The Build

Finally you can create our first build! So let's not waste any time and start doing that by running 
```sh
eas build --platform android 
```

If you don't have an Android Keystore, then EAS will ask you if you need one, select Yes and EAS will take care of the rest.

Once the status of the progress changes to Finished, it means that finally you have our application build, and you can download it by clicking Download button. 

![download apk](https://i.ibb.co/qMsdbHK/SCR-20230115-kno.png)


