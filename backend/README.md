## ECommerce Project (group of 2) - HOUNDS Pet Shop
## Shailendra Shrestha R11607694 
## Emilio Cervantez R11785036
## CS-3365-002

## PROJECT 2 - 90 percent Requirements List FUFFILLED
## git-hub: https://github.com/ShaiShrestha/ecommerce_project

### SOFTWARE AND FRAMEWORKS USED ###
1) VSCode for editor
-- Libraries and Frameworks--
1) React
React is used as the core library for developing the front-end components of the application. It enables the dynamic rendering of UI elements based on state changes, as seen in the components like Navbar, Product, Cart, etc.

2) React Router
React Router is used for managing the routes of the application. It allows users to navigate between different pages, like Home, Cart, Product, etc., without reloading the page.

3) Tailwind CSS
Tailwind CSS is used for styling the components with utility classes that make it easier to build and maintain the layout and design without writing custom CSS for every element.

4) React Context API
The ShopContext is used to manage global state for the e-commerce store. It handles state like products, cart items, and currency, making them available to all components throughout the app.

5) React Toastify
React Toastify is used for showing notification messages to users when actions like adding an item to the cart are successful or failed.

6) Google Fonts
Google Fonts are used to include custom fonts like "Delius" in the application for enhancing typography.

7) MongoDB
NoSQL database for storing application data. stores important information for users as well as admin information

8) Cloudinary
Used to implement our API's

10) Axios
Used for various HTTP Requests (GET, POST, PUT, DELETE)

11) Node.js
JavaScript runtime environment for server-side development.

12) Express.js
Web application framework for building RESTful APIs.

13) Mongoose
ODM for MongoDB, facilitating schema definition and data modeling.

14) JWT (JSON Web Tokens)
For secure user authentication and authorization.




++++++++++++++++++++++++ Setup Instructions ++++++++++++++++++++++++

1) Extract the .zip file contatining all of the project files
2) Open the folder inside a code editor (VSCode)
3) Install necessaries dependencies such as npm, and Node.js
4) Launch the website using the command 'npm run dev' for backend, frontend, and admin
5) Click on the given local links 



----------------------------- Backend Features -----------------------------

## Back-End Development:
-Implemented a Node.js/Express.js server with RESTful API endpoints for:
-Products (GET, POST, PUT, DELETE)
-Users (GET, POST, PUT)
-Orders (GET, POST, PUT)
-Authentication (Register, Login, Logout)
-Connected to a MongoDB database using Mongoose.
-Implemented proper error handling and response formatting.
-Included middleware for authentication, logging, and error handling.

## Database Integration:
-Designed and implemented data models for:
-Products (with categories, images, pricing)
-Users (personal information, addresses, payment methods)
-Orders (items, quantities, status, shipping information)
-Review section 
-Implemented validation for data integrity.
-Created appropriate indexes for query optimization.

## Advanced Features:
-Implemented JWT-based authentication.
-Created an order processing workflow.

## API Integration:
-Connected the React frontend to the backend services.
-Implemented proper state management for API interactions.
-Handled loading, error, and success states for all API calls.
-Secured API requests with JWT tokens.

## Non-Functional Requirements:
-Implemented input validation and sanitization.
-Added basic security measures (HTTPS, authentication, authorization).
-Optimized API performance (caching, pagination).
-Documented all API endpoints

## Deployment:
-Using Terminal and Localhost machine after extracting zip