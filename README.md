# Overview

I'm a web developer with a passion for learning and improving. I built this e-commerce web app to stay updated on the latest web technologies and best practices with REACT. My goal is to create more user-friendly web applications as I continue to grow in the field of software engineering.

I developed an E-commerce web app, as a demonstration of my proficiency in the JavaScript language implementing the REACT framework. This web app is able to receive data from fakestoreapi.com and displays the products to the users. 

To run the web app locally here are the steps to take in the terminal:
* git clone https://github.com/narah10/ecommerce-app.git
* cd ecommerce-app
* npm install
* npm start
* Open http://localhost:3000 to view it in your browser.

[Software Demo Video](https://youtu.be/gBMd8ES3m7c)

# Web Pages

When the web app loads locally, the first page that the users visit is the Home page. It has a little introduction on the header of the kind of products the website sells. On this page, the list of products are shown and users can browse what products they are interested in looking at. The data for the displayed products is received by implementing a third party API. 

Users can decide to look into a product they are interested in by clicking on the product name or image. With the use of the Link component from the 'react-router-dom', a path is included to the url to display the specific product that was clicked by using the product's unique id. 

On the product details page, the details are shown once again with the use of the third party api and information is given to the user. Each details page is unique to the product that was clicked on and has different information. By the help of the Link component, users are able to navigate back and forth from the different pages. 

# Development Environment
* Visual Studio Code
* Git
* Figma

Here are the programming languages I used for this software
* JavaScript
* HTML
* CSS
* REACT

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [fakestoreapi.com](https://fakestoreapi.com/docs)
* [react-icons](https://react-icons.github.io/react-icons)
* [create-react-app](https://create-react-app.dev/)
# Future Work


* I want to include the feature of being able to favorite a product and have this data saved so users can easily return to this whenever they are ready to make a purchase
* I also want to include the feature of being able to add items to cart and displaying this
* Another feature I want to included is being able to change the number of items in the cart 