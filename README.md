# COURSE RESOURCE <!-- omit in toc -->

## Overview

_**Course Resource** is a bootcamp review site were a user can make and read reviews about bootcamps, this is inspired by CourseReport._


<br>

## MVP

<br>

### Goals

- _User will be able to create, read, update, and delete post_
- _User will be able to rate a course_
- _Utilize at least three tables in a Rails database, with a React front-end_
- _Responsive Design for at least three sizes of screen_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The overall library for the entire front-end._ |
|   React Router   | _Specifies which routes are called for which components._ |
| React-router-dom | _Allows Linking within the components._ |
|      Axios       | _Makes calls to the db._ |


<br>

### Client (Front End)

#### Wireframes

![homepage](https://imgur.com/XhObuaJ.png)

![homepage login](https://imgur.com/PGwCMAP.png)

![review page](https://imgur.com/Ll8eacE.png)

![mobile page](https://imgur.com/PGLxBAF.png) ![mobile page](https://imgur.com/sTgoLGh.png)

#### Component Tree

![diagram](https://imgur.com/EqAi20z.png)

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ icons
      |__ fonts
|__ components/
      |__ NavBar.jsx
      |__ ReviewCard.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ users.js
      |__ review.js
|__ screens/
      |__ Home.jsx
      |__ CreateReview.jsx
      |__ DetailReview.jsx
      |__ EditDeleteReview.jsx
      |__ Rating.jsx
      |__ Login.jsx
|__ layouts/
      |__ Layout.jsx
|__ containers/
      |__ Container.jsx
|__ App.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Navigation    | functional |   n   |   n   | _Site name and login/logout._               |
|  Container  | functional |   y   |   n   | _Pass down props and handle axios calls._       |
|   ProfileCard    |   functional    |   n   |   y   | _Displays your profile info._      |
|   ReviewCard    |   functional    |   n   |   y   | _Displays your review info._      |
| Home | functional |   y   |   n   | _The cards will render the post info via props._                 |
|    CreateReview    | functional |   y   |   n   | _Creates a review._ |
|    DetailReview    | functional |   y   |   n   | _Details on a specific review._ |
|    EditDeleteReview    | functional |   y   |   n   | _Edit or delete a review._ |
|    login    | functional |   y   |   n   | _login to your profile._ |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Nav    |    L     |     3 hrs      |    TBD      |   TBD     |
| Screens |    M     |     5 hrs      |   TBD       |     TBD     |
| CRUD(backend)    |    H     |     7 hrs      |      TBD     |     TBD    |
| CRUD(frontend) |    H     |     7 hrs      |      TBD     |     TBD     |
| Ratings    |    H     |     5 hrs      |      TBD     |     TBD    |
| Reviews |    H     |     4 hrs      |      TBD     |     TBD     |
| Auth    |    H     |     4 hrs      |      TBD     |     TBD    |
| CSS |    H     |     8 hrs      |      TBD     |     TBD     |
| Responsive Design    |    M     |     5 hrs      |      TBD     |     TBD    |
| TOTAL               |          |     48 hrs      |      TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![erd](https://imgur.com/vkel6PD.png)

<br>

***

## Post-MVP

- Ablity to like a review
- Ablity to Search for a specfic bootcamp/course
- Ablity to search courses via categories 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
