# API-based application exercise with Angular 1.x and ASP.NET Web API

This is an exercise to use a JavaScript (Angular 1.x in this case) front-end to use a basic API to get data and send data updates.
Following the steps below, you should use the code as a starting point to understand what is done.
This repo has a skeleton Angular 1.x app (/UI), and ASP.NET API app (/API).

1.Created Personal end point using Web Api and following are tasks done inside TestApi1 project.
a)created personal api controller which exposes two services under apicontrollers folder.
b)created individual model under Model folder .
c)Modified WebApi config to identify route based attribute and use camel case syntax for json response.
d)Added Json camel case formater on WebApi config to change web api model to camel case format.
e)Added  and configured Enable cors  in webApi config to make the web request different server port.
f)Added Enable cors attribute in web api Controller level.

2.Created Angular JavaScript file that helps to call personal api end point and display on View using component based under 
/MyProjects/exercise-master/exercise-master/UI/app/person
a)Created angular person list component
b)Created angular personservice that calls personal APi.
c)created personList template for the person list component

3.Update Index html to add angular component and integrate with angular javascript using ng-app and include the necessary script and stylesheet.
4.Modified app.css stylesheet and included bootstrap stylesheet.

P.s. Once the request happened the data will be populated on the table on the UI. And Clicking the Id or Edit button enables to edit the selected column
in a new pop window. And after modifying the data if we click on save button then we will have a confirmation whether updating file succeeded or not.

