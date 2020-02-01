# react-interview-exercise-done

## Pre-requisites

* node v12.13.0+
* yarn v1.12.1+

## Used Libraries

* [Axios](https://github.com/axios/axios) to handle APIs.
* [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start) to handle web front-end navigation.

## ToolKits Used

* [Bootstrap 4](https://getbootstrap.com/) for some stylizations
* [Font Awsome](https://fontawesome.com/) for icons icons set.

## GitHub API

* [Search Repositories](https://developer.github.com/v3/search/#search-repositories)
* [Search Repositories Pagination](https://developer.github.com/v3/search/#search-repositories)

## Exercise

Create a page to search for Github Repos Page. Use GitHub Api for Repository Search. Using the session stored at local storage, make sure when the user enter application it checks a user is logged in and if so, go to Repositories Page, if not, go to Sign In Page. After login, user should be redirected to Repositories Page.

## What was Done.

At Index, first of all it is validated if the user is already logged in. If so, it is navigated to the Home page. Otherwise, it remains on the login page to login.

Required property is used in both the E-mail field and the Password field to validate the existence of data. After lighting the login, a key is created for the session called login by passing an array of objects containing the email and password. Then go to the Home page.

At Home, first of all it is valid if the user is already logged in. If not, you are directed to the Login page.

When starting a new search, we send the query to the GitHub API with two more parameters: The "Per Page" and the "Current Page" to control the pagination of the results. We will use 16 results per page, with API information like the repository name, owner, link and Stars. Clicking on the View button will open a new tab in the browser with the repository link.

Finally, in the results navigation bar, the user will be able to find more search results, always paginated for 16 results. The user will also be able to clear all sessions started when logging in.

## Style

Own styling was used with some Bootstrap components, such as Form and Buttons.
