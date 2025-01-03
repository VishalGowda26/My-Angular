Angular Installation:
******* ************

1. NodeJs Installation
        check : npm - v
                node -v

2. Angular Installation
    npm install -g @angular/cli@15

    check : ng version

3. Create an Angular Application4
    -> Open Command Prompt
    -> cd Desktop
    -> ng new my-app
            -> routing
            -> css

4. Run Angular Application
    ng serve
    http://localhost:4200/ 

5. Run Powershell as Administration
        -> check for "ExecutionPolicy"(if it's restricted convert to unrestricted)
        -> "set-ExecutionPolicy unrestricted"


Git Explaination :-
*** ************
    1. Git Install
    2. Create account in GitHub

    - `git config --global user.name "[name]"`: Sets the author name to be used with your commits globally.
    - `git config --global user.email "[email]"`: Sets the author email to be used with your commits globally.
    - `git config --global core.editor "[editor]"`: Sets the default text editor to be used.
    - `git config --list`: Lists all the Git configuration settings.

    check :
    git connfig --list

    3. Project <--> repository
        git init
        git remote add origin xxxxxxxxxxxxxxx

        check: git remote -v

    4. Process :-
       
       git add .
       changes-> staged changes

       git commit -m "xxxxx"


create branch
git branch
git fetch
git checkout dev


    Directives: Used to alter the DOM
    **********
    1. Structural Directives :- modify the DOM structure by adding or removing elements (e.g., *ngIf, *ngFor).

    2. Attribute Directives :- modify the behavior or appearance of elements (e.g., ngClass, ngStyle).

    3. Custom Directives :- are user-defined directives that extend Angular's built-in directives to create specialized behavior for elements in the DOM.


    Pipes: Used to filter the Data Formate(filters)
    *****

    |







?! Learn UnitTesting


# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

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




