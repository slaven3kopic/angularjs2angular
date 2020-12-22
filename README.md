# angularjs2angular


## Overview

This application takes the developer through the process of migrating from AngularJS to Angular. It is based
on [angular-phonecat](https://github.com/angular/angular-phonecat) application. It follows steps described in
the [guide](https://angular.io/guide/upgrade).


## Migration steps
- Convert files from `.js` to `.ts`
- Include [Webpack](https://webpack.js.org/)
- Add Angular dependencies
- Use `@angular/upgrade` to run hybrid app (AngularJS and Angular at the same time)
- Migrate and downgrade `Phone` service as a test
- Include [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

## Running
- `npm start`

## Building
- `npm run build`
