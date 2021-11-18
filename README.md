# my-shop-data

<br />

## Table of Contents 📦

- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [License](#license)
- [Demo](#demo)
- [Criteria](#criteria)
- [Collaboration](#collaboration)

<br />
<br />

## Description 📝

My Shop Data is an e-Comm back end application used to manage the mySQL database of products in a web shop.

<br />
<br />

## User Story 🔦

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

<br />

## Installation ⬇️

Must first launch mySQL server with the following commands:

```
cd 'db'
mysql -u root
source schema.sql
quit
..
```

<br />

Application will then run in the command-line with:

```
node app
```

<br />

Employing the following technology:

[need badges!]

Express.js
Sequelize https://www.npmjs.com/package/sequelize
Dotenv https://www.npmjs.com/package/dotenv
Insomnia Core

(to store sensitive data, like mysql user name, password, database name)

[<img src="./assets/images/node.svg" height="20px">](https://nodejs.org/en/docs/)

[<img src="./assets/images/npm.svg" height="20px">](https://www.npmjs.com/)

[<img src="./assets/images/inquirer.svg" height="20px">](https://www.npmjs.com/package/inquirer)

mySQL2
[<img src="./assets/images/mysql.svg" height="20px">](https://www.npmjs.com/package/mysql2)

[<img src="./assets/images/console.table.svg" height="20px">](https://www.npmjs.com/package/console.table.svg/)

<br />
<br />

## License 🚦

Copyright (c) David Dyer [2021]

[<img src="./assets/images/isc.svg" height="20px">](https://choosealicense.com/licenses/isc/)

<br />

## Demo 🕹️

Must Demonstrate:

- how to create the schema from the MySQL shell.

- how to seed the database from the command line.

- how to start the application’s server.

- GET routes for all categories, all products, and all tags being tested in Insomnia Core.

- GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

- POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

[![](assets/demo/...png)](https://youtu.be/...)

<img src="./assets/demo/...png" width = "600">
<img src="./assets/demo/...png" width = "600">

<br />
<br />

## Criteria ✅

```
With Express API, this command-line application connects to mySQL database using Sequelize.

After schema & seeds commands, database environment created with test data.

Init prompt launches server, models sync to database.

When opening API GET routes in Insomnia Core for categories, products,
or tags, the data for each route is displayed in formatted JSON.

When testing API POST, PUT, and DELETE routes in Insomnia Core, I am able
to successfully create, update, and delete data in the database.

```

<br />
<br />

## Collaboration 🔧

Development efforts most often include guidance from Jedi Master:
**Chris Champness**

<a href= "https://github.com/CChampness"><img src=
"https://avatars.githubusercontent.com/u/87551272?v=4" width="50px"/></a>

Additional collaboration with:
**Name**

<a href="https://github.com/..."><img src="https://..." width="50px"/></a>

<br />

**Reporting issues**:
Contact [djdyer](https://www.github.com/djdyer) to report bugs.

**Contributions**:
Clone branch, submit pull request for review after completing any improvements.

<br />
<br />
<br />
Thanks for taking a look! 
🤓
