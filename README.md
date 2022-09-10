# MVC Won't Let Me be

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The purpose of this is to create a full stack web app that allows users to create, read, update, and delete posts and replies. Create, update, and delete will be only allowed if they are signed in.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)

## Installation

1. Download.
2. Run `npm i` in your terminal.
3. Login to your **mysql** shell and run schema.sql. Optionally, you may also `npm run seed` to seed the database.
4. Create a .env file in the root and enter the following information:

```
DB_NAME=employees_db
DB_USER=YOUR_MYSQL_USERNAME_GOES_HERE (default is root)
DB_PW=YOUR_MYSQL_PASSWORD_GOES_HERE
SECRET=YOUR_SESSION_SECRET_GOES_HERE
```

5. Enter the command `npm start`.

## Usage

![App Screenshot](./public/images/SS1.png)

![App Screenshot](./public/images/SS2.png)

![App Screenshot](./public/images/SS3.png)

![App Screenshot](./public/images/SS4.png)

![App Screenshot](./public/images/SS5.png)

![App Screenshot](./public/images/SS6.png)

## Contributing

Follow best practices for naming conventions, indentation, quality comments, etc.

## Tests

A seeds folder is included for testing purposes. Run `npm run seed` then use Insomnia to make calls to routes.

## Questions

If you have any questions, please reach out to me either on Github or by Email.

- **Github:** [mmelan000](https://github.com/mmelan000)
- **Email:** [m.melanson000@gmail.com](mailto:m.melanson000@gmail.com)

## License

- [MIT](https://opensource.org/licenses/MIT)
