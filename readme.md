+-------------------------------------------------+
	  F&G Aromatic Bar Feedback Form           
+-------------------------------------------------+
 Technologies used: HTML/CSS/Vanilla JS	      
		     ExpressJS, MongoDB, node.js     
 						     
 Wallabh Joshi					     
 MSc CA					     
+-------------------------------------------------+
readme


Setup Instructions
=======================

1.  install latest version of ***node.js*** from nodejs.org (https://nodejs.org/en/download/)
    use commands:
    ```
    node -v
    npm -v
    ```
    to check if node and npm have been correctly installed

2.  run 
    ```
    npm i body-parser dotenv ejs express mongoose morgan nodemon
    ``` 
    in the project root directory to install necessary node modules

3. create a 'config.env' file in the root directory and enter following details into the file

*this file is usually ignored whilst collaborating as each collaborator may use their own .env files*

***notes about the project***
==============================

1. problem statement mentions to create 2 tabs for the 2 sections, such have been made in the top left nav bar

2. problem statement mentions use of Checkboxes in the form, radio buttons have been used instead for single-option-selection purposes

3. considering the usecase, mongodb has been used to store the feedback data

4. adding an authentication layer to the records page was considered; but for the purposes of this assignment alone, it is kept freely accessible.

Thank You.