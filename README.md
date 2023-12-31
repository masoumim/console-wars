# Console Wars
A web app that lets users rank, compare and explore game consoles from the past and present. Built using ExpressJS and NodeJS.

App Link: https://console-wars-c040e29445ae.herokuapp.com

# Project technical stack:

**Language:** Node.js / JavaScript

**Framework:** Express.js

**Database:** PostgreSQL / Heroku

**Passport.js:** Authentication middleware for Node.js, used for authenticating users at login

**bcrypt:** A password-hashing function, used to hash and salt plaintext passwords before they are saved to database

**dotenv:** Loads environment variables from .env file, used for storing database connection string and cookie secret

**Sequelize:** An ORM used for interacting with Database

**Express-Session:** Session middleware for Express, used for creating user login sessions and sending secure cookie to client

**Connect-pg-simple:** A minimal PostgreSQL session store for Connect/Express, used to save user session data

**EJS Template Engine:** A simple templating language that lets you generate HTML markup with plain JavaScript

**Express-validator:** A set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js

**Helmet:** Secures Express apps by setting HTTP response headers to comply with web security standards

# Project info:
Console Wars has three main features. The first is the rank list of 50+ game systems, both console and handhelds, that range from the first generation of system hardware up to the current ninth generation. Each system is ranked according to how many user votes it has received. Systems with the same number of votes will have the same rank. The second feature is the comparison or 'VS' feature which compares one systems data and specs to another. Data includes things like number of titles, units sold and lifespan. Specs includes things like max resolution, RAM and CPU speed. The third main feature is the ability to explore over 50 systems data and info as each system has its own profile page with data, specs and a description of the system itself. Users and leave comments for a system as well.


# Security:
Login and registration is secured using password hashing. Sessions are secure and persistent using secure cookies. HTTP headers are set using the Helmet library and are automatically set by the library to ensure the headers conform to web security standards. User input is also validated and sanitized by using the Express-validator library. Finally, SQL injection opportunities are minimized by using a secure ORM, Sequelize.


# Test Stack:
There are a set of unit tests for each of the methods used to query the PostgreSQL database. These tests confirm the expected data type (array or object) returned by each method. The two main testing libraries used are:

**Mocha:** A JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.

**Chai:** A a BDD / TDD assertion library for node and the browser that can be paired with any javascript testing framework.


# Sorting Algorithms:
In addition to using the built-in Javascript sort() method, I made use of two well known sorting algorithms for sorting system data on the rankings list in both ascending and descending order. For sorting system data in ascending order I used the Quick Sort algorithm with an additional string parameter "sortingField" which let me pass in the specific field I wanted to sort (votes, rank, system release year etc). For sorting system data in descending order I used a Reverse Bubble Sort algorithm, also with the additional sortingField parameter.


# Responsive design using Bootstrap 4 and CSS:
The front-end was created and designed using Bootstrap 4 as well as some custom CSS on top of that. Bootstrap's grid system and spacing syntax was used to make page elements responsive so that the site could be viewed across a variety of devices and screen sizes. In particular, the responsive table feature which allows for seamless horizontal scrolling on tables was used for the main ranking table.


# Endpoints:


Base URL: https://console-wars-c040e29445ae.herokuapp.com

Home Page
---------
**Get:**
  
/ -- Gets the homepage which contains a login form


**Post:**
  
/ - Posts username and password and redirects user to their profile page


Profile
-------
**Get:**

/profile -- Authenticated users will get a profile page containing info about the system they voted for as well as a collection of their comments on different systems.


Register
--------
**Get:**

/register -- Gets the registration page which has a simple registration form

**Post:**

/register -- Posts the users registration info to the server which is saved to the DB


Logout
------
**Get:**

/logout -- Logs the user out of the website and ends their session


Systems
-------
**Get:**

/systems -- Gets the ranking list of all systems


Systems Compare
----------------
**Get:**

/systems/compare -- Gets the system comparison screen where the user can select two systems from two datalists


Systems Compare (System 1 preselected)
---------------------------------------
**Get:**

/systems/compare/:system1 -- Gets the system comparison screen with the first system already selected. The user will have navigated to this page by clicking the "compare" button located on a specific system's page.


VS
---
**Get:**

/systems/vs -- Gets the VS page which displays two systems side by side along with their stats and technical specs. Green Up and Red Down arrows next to a stat signify if that stat is greater or lesser than the other system.


Systems/:id
------------
**Get:**

/systems/:id -- Gets the system info page of a particular system using it's ID number

**Post:**

/systems/:id -- A user can post a comment on a systems info page


Systems/:id/vote
----------------
**Post:**

/systems/:id/vote -- A user can vote for a specific system on the systems info page





