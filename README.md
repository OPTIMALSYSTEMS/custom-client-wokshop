# Custom clients with @yuuvis/project

This project is an example of how to create a custom yuuvis&reg; client project using [@yuuvis/project](https://www.npmjs.com/package/@yuuvis/project) schematics. It will be a single view where you can search for objects, display the results and see the details for one of the result entries.

It will also show you how to add third-party libraries in order to enhance objects details.

Check out ["Webcast: How to create a custom client with yuuvis&reg; Momentum"](https://www.youtube.com/watch?v=FXY6vuDH2b8) on YouTube, where we explain this example step by step.

## Create project using Angular CLI

We assume that you already installed [Angular CLI](https://cli.angular.io/).

```sh
# create new project using CLI
ng new my-project
```
Make sure to add routing to your application, because we'll use components that rely on the router. For styling choose SCSS.


```sh
# enter project folder
cd my-project

# add @yuuvis/project schematics
ng add @yuuvis/project
```
You will be prompted to add either `core` or `framework` package. Choose `framework`. This will setup and configure your project to use a yuuvis&reg; Momentum backend and specialized UI components from `@yuuvis/framework` library.

## Set up dev proxy
To be able to communicate with a yuuvuis&reg; Momentum backend we need to set up a dev proxy. Open the `proxy` folder from your projects root and rename `_proxy.connections.json` to `proxy.connections.json` by just removing the underscore. Add the connection details for your backend system to the file. Once you renamed the file it is part of the projects `.gitignore` and will not be pushed to your remote repository.

Run `npm run proxy` to spin up your dev proxy.

You may also use the `yuuvis dev proxy` desktop application. Download: [EXE-File](https://files.optimal-systems.org/index.php/s/8G9wfkHPBBkrFHG) or [ZIP archive](https://files.optimal-systems.org/index.php/s/y6MWqxS7oaL9eNx).

Now you can run `npm start` to launch the Angular CLI dev server. Go to [localhost:4400](http://localhost:4400/) to take a look at your app. As long as you don't stop the server, the application will reload everytime you change the code (live reload).

## Create the actual app

Now we set up our app component. Just take a look at the components files to see how this is done. Also checkout `app.module.ts` for module imports.

## Documentation

Within this example application we are using [@yuuvis/core](https://www.npmjs.com/package/@yuuvis/core) and [@yuuvis/framework](https://www.npmjs.com/package/@yuuvis/framework) library. To see what components and services are available from those libraries check out their [documentation](https://yuuvis-cc.yuuvis.org/).

## Conclusion

As you have seen, it takes less than 10 minutes to create a simple yuuvis&reg; client application from scratch when using `@yuuvis/project` schematics. Now it's up to your creativity. Enjoy!

# License

Copyright 2020 OPTIMAL SYSTEMS GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.