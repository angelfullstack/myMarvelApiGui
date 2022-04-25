# MyMarvelApiGui

## Important

Before execute fill src/environments/environment.ts values from mvPublicKey and mvHash properties with your public key and hash obtained from your Marvel API credentials. Hash is generated with MD5 using ts=1000, public key and private key.  

environment.ts example:

```javascript
export const environment = {
  production: true,
  secure: false,
  mvTs:'1000',
  mvPublicKey:'<your pubicKey>',
  mvHash:'<your md5 hash>',
  mvUrl:'http://gateway.marvel.com/v1/public',
  featuredCharacterName:'Spider-Man (Peter Parker)',
  featuredCharacterID: 1009610,
};
```

## Dev notes

This project is a GUI for the official Marvel's API oriented to a featured character (In this case Spider-Man (Stan Lee), as it has description).
* [*] environment 
* [*] interceptor for api calls 
* [*] shared module 
* [*] character service
* [*] core module
* [*] master scene -> all comics, each cell thumbnail
* [*] detail screen -> random image selected comic + title + description
* [*] infinite-scroll
* [ ] nav
* [ ] login component -> publicKey and hash as credentials
* [*] mobile first style
* [ ] landscape and desktop style
* [ ] friendly URL
* [*] Save gallery state (items, last focused item). redux or service ?
* [ ] Marvel attribution
* [ ] Loaders



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
