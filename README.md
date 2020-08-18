Allergic reactions app

Created two components:

The first is a form to record data about allergic reactions.  The form will allow the entry of an allergic reaction with the following information – description (text), observationDate (text or date component), and severity (e.g. 1-10 as a dropdown). 

The second react component is a data grid that displays the information.  The data grid will group records in a collapsible format by description (or id, if using a surrogate identifier).  The groupings will dynamically sorted based on the maximum of the severity of the reaction. And when the grouping is expanded it will display individual records and toggle the sort by date or severity. 

-----------------------------------

steps to run the application

* npm install -g jest
* npm install 
* npm start

application will open up in the browser @ http://localhost:8080/

-----------------------------------

Steps to run a production build

* npm run build
- a dist folder will be created to use for production deployment

-----------------------------------

Steps to run the test cases and see the coverage

* npm run test

- coverage will be displayed on the terminal, altenratively a json will be created in the coverage folder 


