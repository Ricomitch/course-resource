# COURSE RESOURCE <!-- omit in toc -->

## Overview

_**Course Resource** is a bootcamp review site were a user can make and read reviews about bootcamps, this is inspire buy CourseReport._


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _User will be able to log in to their own account_
- _User will be able to create, read, update, and delete post_
- _User should have the ability to comment on posts_
- _Utilize at least three tables in a Rails database, with a React front-end_
- _Responsive Design for at least three sizes of screen_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The umbrella library for the entire front-end._ |
|   React Router   | _Specifies which routes call which components._ |
| React-router-dom | _Allows Links within the components._ |
|      Axios       | _Makes calls to the database._ |


<br>

### Client (Front End)

#### Wireframes

![homepage](https://imgur.com/XhObuaJ.png)

![homepage login](https://imgur.com/PGwCMAP.png)

![review page](https://imgur.com/Ll8eacE.png)

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

![diagram](https://imgur.com/EqAi20z.png)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

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
      |__ Login.jsx
|__ layouts/
      |__ Layout.jsx
|__ containers/
      |__ Container.jsx
|__ App.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Navigation    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Container  | functional |   y   |   n   | _The navigation will provide a link to each of the pages._       |
|   ReviewCard    |   class    |   n   |   y   | _The gallery will render the posts using cards in flexbox._      |
| Home | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    CreateReview    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    DetailReview    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    EditDeleteReview    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |
|    login    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

![erd](https://imgur.com/BeysXBw.png)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
