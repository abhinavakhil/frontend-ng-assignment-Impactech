# ImpactechFeTestSolution

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Mock API

The mock API module provides an HTTP interceptor that intercepts specific API calls. It can be used by imporint the ApiModule into the AppModule of the application. The below API calls will be intercepted:

GET:  
`https://localhost:42000/notifications`  
Expects: Query Parameter *username*  
Returns: Table of user notifications *any[]*  

POST:  
`https://localhost:42000/login`  
Expects: Object {usename:string, password:string}  
Returns: Object {isAuthenticated: boolean, userDetails: any}  

POST:  
`https://localhost:42000/register`  
Expects: Object {usename:string, password:string, ...} The object can include any field you seem necessary. It should at leaset contain a username field.  
Returns: Object {status: string, message: string}  

POST:  
`https://localhost:42000/sendNotification`  
Expects: Object {recepient:string, notification:any}  
Returns: Object {status: string, message: string}  

The mock API uses the browser local host to store the provided data. The above APIs should suffice for the implementation of the basic functionality of this excersise. You can extend the API as needed to implement different more advanced functionality. 

## Features

## Dashboard

![image](https://user-images.githubusercontent.com/31372157/139586512-cfd09460-580a-42ff-bab4-d0a2807fb096.png)
![image](https://user-images.githubusercontent.com/31372157/139586523-e1da5eb5-2392-4ba2-a2e7-2965d1fa3369.png)

## Profile

![image](https://user-images.githubusercontent.com/31372157/139586531-b61bec47-30de-4500-aa71-acd776c1d818.png)

## Notification

![image](https://user-images.githubusercontent.com/31372157/139586552-cca56470-83bc-424a-a387-3d81656a888c.png)
![image](https://user-images.githubusercontent.com/31372157/139586561-2972436f-c0e8-49d7-9a6c-1df7bd5919ab.png)
![image](https://user-images.githubusercontent.com/31372157/139586573-ddb4bad6-d9fc-43c3-a32c-3315b5ab3b24.png)

## 3 Language Support [ English, Hindi, Greek ]
![image](https://user-images.githubusercontent.com/31372157/139586609-b1114230-5727-423d-980f-6c250b8bb04b.png)
![image](https://user-images.githubusercontent.com/31372157/139586614-c729ca07-6afd-42ee-aa15-2ec4edf9ad25.png)
![image](https://user-images.githubusercontent.com/31372157/139586623-a976cbd1-70a2-4536-a5da-d684feb2f06f.png)

## Mobile Responsive
![image](https://user-images.githubusercontent.com/31372157/139586851-5ac88f39-a0ea-4662-aea0-81bf96fa10ab.png)


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
