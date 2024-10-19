**Rule Engine Application**
This project is a Rule Engine application built using JavaScript, Express.js, and MySQL. It allows users to create complex eligibility rules based on attributes like age, department, income, etc. These rules are represented as Abstract Syntax Trees (AST) and can be evaluated dynamically against user data.

**Features**
Create conditional rules using logical operators (AND, OR).< br / > 
Dynamically combine multiple rules into a single rule.< br / > 
Evaluate user eligibility based on the rule.< br / > 
Backend powered by Express.js.< br / > 
MySQL used for rule storage.< br / > 
Simple frontend UI for creating and evaluating rules.< br / > 
**Project Structure**
backend/: Contains the server-side code, including the API routes, business logic, and MySQL connection.< br / > 
frontend/: Contains the HTML and JavaScript for the UI, allowing users to input rules and evaluate data.< br / > 
tests/: Includes unit tests to verify the functionality of rule creation, combination, and evaluation.< br / > 
schema.sql: A SQL file to set up the required MySQL database and table.< br / > 
package.json: Lists the project dependencies and scripts.< br / > 

**Prerequisites**
Make sure you have the following installed:

Node.js (v14 or later) and npm (v6 or later)< br / > 
MySQL for the database< br / > 
Installation and Setup< br / > 
1. Clone the repository< br / > 
Download the project files by cloning the repository.< br / > 

2. Install Dependencies
Install all the required Node.js dependencies by running the appropriate npm command in the project directory.

3. Set Up MySQL Database
Start your MySQL service.
Log in to your MySQL client.
Run the schema.sql file to create the database and tables required for the application.
4. Update MySQL Connection Settings
Modify the MySQL credentials in the backend/db.js file to match your local MySQL setup (e.g., username, password, and database name).
5. Start the Application
Start the Express.js server to run the backend of the application.

**Frontend Usage**
Open the index.html file in the frontend/ directory in your browser or serve it via a local web server.< br / > 
Use the form to create new rules by entering a rule string.< br / > 
After creating a rule, use the second form to evaluate user data against the created rule.< br / > 
API Endpoints< br / > 
The backend provides a few key API endpoints to interact with the rule engine:

POST /api/rules/create: Takes a rule string and generates an AST.< br / > 
POST /api/rules/evaluate: Takes a user’s data and the AST to evaluate whether they meet the rule conditions.< br / > 

Express.js: A web framework for Node.js, used for handling HTTP requests.< br / > 
MySQL: The MySQL client for Node.js to connect to the MySQL database.< br / > 
Body-parser: Middleware for parsing incoming request bodies in a middleware before your handlers.< br / > 
**Run npm install to install all dependencies listed in package.json**.< br / > 
