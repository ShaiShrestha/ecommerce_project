## ECommerce Project - HOUNDS Pet Shop
## Shailendra Shrestha
## R11607694
## CS-3365-002

## PROJECT 1 - All Requirements List FUFFILLED
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


++++++++++++++++++++++++ Setup Instructions ++++++++++++++++++++++++

1) Extract the .zip file contatining all of the project files
2) Open the folder inside a code editor (VSCode)
3) Inside the terminal, go to the frontend directory cd "path to the frontend directory" (usually cd frontend if project folder opened in editor)
4) Launch the website using the command 'npm run dev'
5) Click on the given local link

----------------------------- Project Files Layout -------------------------

The files for the project are organized for convinience and readability. The 'src' folder contains all of the project folders for 'assets', 'components', 'context', and 'pages'. It also contains the 'App.jsx', 'index.css', and 'main.jsx' files.
+ Each component is located in the component folder
+ Every page is located in the pages folder
+ ShopContext is located in the context folder


----------------------------- Website Features -----------------------------

The website includes the following features:
- Each page contains the navigation bar, and the footer. Footer contains the website logo, some company information, and contact information.

1) Navigation Bar
+ Contains the website logo, when clicked leads to the home page.
+ Contains link tabs for home, collection, about and contact page.
+ Contains button for search bar (that pops up when only in the collection page).
+ Contains button for cart page with small indicator displaying the number of items in the cart.
+ Contains a button for the profile, when hovering it contains tabs for profile, orders, and logout.
+- For mobile screens - a menu tab on the top right of the screen is present instead. When tapped, options for the different pages such as home, collection... etc. takes up the screen.

2) Home page
+ Contains a hero section that displays text and image of appeal.
+ Contains a section for latest products that displays a grid of products that are newly added.
+ Contains a section best sellers section that displays a grid of products that are best sellers.
+ Contains some information on company policy.
+ Contains Newsletter sign-up section.

3) Collection Page
+ Contains all of the products on the website in a grid layout. Contains picture, name, and price.
+ Contains sort options for catagory of pets and subcatagory of items. Also sort options for price.
+ Contains search bar, when pressed can search for items. When searching if the words inputted match any part of product names, only those products show.

4) About Page
+ Contains inforamtion and some graphic.
+ Description about the website and company.
+ Newsletter section at the bottom.

5) Contact Page
+ Contains information and some graphics.
+ Description of contact inforamation for the company.
+ Newsletter section at the bottom.
+ Other options for future additions such as job openings.

6) Product Page
+ Displays information of the specific product clicked.
+ Contains multiple images of the product, that can be clicked to get a larger view.
+ Contains the product name, price, reviews, and description.
+ Options for selecting size and color for the product.
+ Options for adding the product to the cart.
+ Handeling validation making sure the user selects size and color before adding to cart.
+ Contains related products section below the product information to show other products related to it.

7) Cart Page
+ Contains all of the items that have been added to the cart.
+ Each item added to cars shows the name, picture, size, color, price, and quantity.
+ Contains adjustibility to increase the quantity or decrease it.
+ Contains options to remove items from the cart.
+ Contains the calculations of order total with the total price for items, taxes, and delivery fees.
+ If empty cart, the cart is empty and total is zero.
+ Place order button to navigate to the place order page to finish order.

8) Place Order Page
+ Contains the section for delivery information such as name, address, etc.
+ Contains Payment options, such as paypal, card, or cash on delivery- for future backend integration.
+ Contains Validation for required fields
+ Contains order summary such as totals.

9) Orders Page
+ Contains the information of all orders.
+ Shows the state of the product, and the ability to track the order.
+ Dummy page for future integration after backend. 

10) User login and register page
+ Contains fourms to register an account, including name, email and password - also containing link to login page
+ Contains link to login page with fourms for email and password - also contains link to register page
+ Contains field for forgot password, to be implemented in the future with backend.


============================ Code Files =====================================

--- Component Files ---

## assets.js ##
This file serves two main purposes for the project:
1. Asset Management
It imports all the image assets used across the application — including icons, product images, and UI visuals — and organizes them in a single assets object. This centralized asset management keeps imports clean and reusable.
2. Product Data Definition
The products array defines the structure of all available items in the e-commerce pet store. Each product object contains:
+ _id: Unique identifier
+ name: Product title
+ price: Cost of the item
+ image: Array of image assets
+ description: Short product summary
+ category & subcategory: Used for filtering and organizing inventory
+ sizes & colors: Available variants for each product
+ date: Timestamp placeholder (can be used for sorting or analytics)
+ bestseller: Boolean indicating if it's a featured or top-selling item
This file essentially acts as a mock database for the pet store’s inventory and is likely used across various components (e.g., shop page, product listings, and detail views).

## BestSeller.jsx ## 
The BestSeller component is responsible for displaying the top-selling products in grid layout. 
+ Fetches product data from the global ShopContext.
+ Filters and displays products marked as bestseller: true.
+ Limits display to the top 10 best sellers.
+ Utilizes the ProductItem component for consistent styling and structure.
+ Includes a section title and description for improved user experience.
+ React Hooks (useState, useEffect, useContext)
+ Tailwind CSS for responsive grid design
+ Context API for state management
+ Products are displayed in a responsive grid with 2 to 5 columns depending on screen size.

## CartTotal.jsx ##
The CartTotal component provides a summary of the cart's financial details.
+ Calculates the subtotal, delivery fee, taxes, and order total.
+ Retrieves all pricing data from ShopContext.
+ Dynamically updates totals based on the current cart state.
+ Styled using Tailwind CSS 
+ React Context API to access global values.
+ React Hooks for functional components.

## Footer.jsx ## 
The Footer componen as teh last sections of the webpage at every page.
+ About Section: Brand mission and logo.
+ Contact Info: Project info, my info, and email/phone contact.
+ Displays a copyright notice.
+ React Functional Component
+ Tailwind CSS for layout

## Hero.jsx ##
The Hero component as a nice banner for the top of the homepage. 
+ Left Section: Flashy titles
+ Right Section: A hero image of a dog
+ React Functional Component
+ Tailwind CSS for responsive layout and styling.

## LatestCollection.jsx ##
The LatestCollection component showcases the newest products available.
+ Pulls product data from the ShopContext.
+ Selects and displays the first 5 products as the latest additions.
+ Utilizes the ProductItem component to render each item consistently.
+ Includes a title and a short description to guide users.
+ React Functional Component with useState, useEffect, and useContext.
+ Tailwind CSS for grid styling.
+ Context API for product data access.

## Navbar.jsx ##
The Navbar is the main navigation component at the top of the website.
+ Displays navigation links (Home, Collection, About, Contact).
+ Features interactive icons: Search, User Profile, Cart, and a responsive Mobile Menu.
+ Pulls the cart count from the ShopContext.
+ Displays a dropdown menu for the user icon (hover-triggered).
+ Responsive for small screens with a toggleable side menu.
+ React Functional Component
+ React Router (NavLink, Link) for navigation
+ Tailwind CSS for styling and responsive design
+ Context API for shared state (ShopContext)
+ Displays the number of items in the cart next to the cart icon.
+ Collapsible drawer menu on smaller screens.
+ User profile options appear on hover.
+ Triggers the global search component in only the collection page
+ On large screens, all links and icons appear inline.
+ On small screens, a icon triggers a slide-in menu.

## NewsletterBox.jsx ##
The NewsletterBox is a component that encourages users to subscribe to the newslettter.
+ Displays a headline, supporting text, and a subscription form.
+ Accepts a user’s email and handles submission with basic validation.
+ Styled using Tailwind CSS 
+ Adjusts to mobile and desktop screen sizes.
+ Input type is "email" and required.
+ Uses onSubmitHandler to intercept form submission and prevent page reload. Future implementations during backend.\

## OurPolicy.jsx ##
The OurPolicy component highlights the core service promises of your e-commerce pet shop. 
+ Displays three policy sections
+ A short description.
+ Fully responsive, the layout switches from a vertical stack on mobile to a horizontal row on larger screens.

## ProductItem.jsx ##
The ProductItem component displays a single product with key details, including the product's image, name, price, and a link to its individual detail page.
+ Displays the product image with a hover effect (scales up).
+ Shows the product's name.
+ Displays the product's price in the selected currency (fetched from the global context).
+ Directs the user to the product's detail page via React Router.
+ The image is automatically scaled.
+ The price is dynamically fetched from the context for currency consistency across the site.
+ Uses Link from react-router-dom to enable navigation to individual product pages.
+ The hover:scale-110 effect increases the image size when hovered.
+ The price uses the currency from ShopContext.

## RelatedProducts.jsx ##
The RelatedProducts component displays related products based on the category and subcategory of the current product being viewed. 
+ Uses the category and subcategory props to filter and display relevant products.
+ Displays the related products in a grid format, with each product represented by a ProductItem component.
+ The products are dynamically updated using React’s useEffect hook based on changes in the products list from the ShopContext.
+ Filters products based on both category and subcategory from the global context.
+ Displays a title above the related products section (RELATED PRODUCTS).
+ For each related product, the ProductItem component is used to display the image, name, and price.

## SearchBar.jsx ##
The SearchBar component provides a search functionality on the collection page of your website, enabling users to search for products.
+  Allows users to search for products within the shop by typing a query.
+ The search bar is only visible on the collection page, toggled based on the URL and the showSearch state.
+ The input field is controlled by the ShopContext, which stores the search term and the visibility state.
+ The search bar only appears on the collection page (/collection route).
+ Includes a delete icon to clear the search term when clicked.

## Title.jsx ##
The Title component is designed to display a title with a line on either side, providing a clean, minimalistic layout. It accepts two props: text1 and text2, with text1 displayed in gray and text2 displayed in a darker gray with a bold font.

---- Context ----

## ShopContext.jsx ##
The ShopContextProvider component provides the context for managing the state and functionality of the shop. 

+ Uses React.createContext to provide the ShopContext to child components, allowing access to shared shop-related states and functions.
+ Manages cart items, including adding items, updating item quantities, and removing items from the cart.
+ Controls the state of the search input and toggles the visibility of the search bar.
+ Provides functions to calculate the total amount in the cart and the total item count.
+ addToCart(itemId, size, color): Adds items to the cart, including size and color selection. Validates size and color before adding.
+ updateQuantity(itemId, size, color, quantity): Updates the quantity of a specific item in the cart or removes it if the quantity is set to 0.
+ getCartCount(): Calculates and returns the total count of items in the cart, including quantities for each size and color.
+ getCartAmount(): Calculates and returns the total price of all items in the cart based on their quantity.
State Variables:
+ search: Stores the current search term entered by the user.
+ showSearch: Toggles the visibility of the search bar.
+ cartItems: Contains the items in the cart, with nested structures for size and color.
+ currency: The currency used in the store (set to '$').
+ delivery_fee: Fixed delivery fee for the shop.
+ Shared State: Provides values such as products, currency, cart items, and search functionality to all components that use the ShopContext.
+ Navigation: Includes navigate to help with programmatically navigating between pages using react-router-dom.

--- Pages ---

## About.jsx ##
The About page provides users with essential information about the website, its mission, and its goals.
+ The page describes the company's goals, what it offers, and the values it stands for, focusing on pets and their well-being.
+ At the bottom of the page, users can subscribe to the newsletter to stay informed about updates, products, and promotions.
+ Title: Displays the section titles (ABOUT US and WHY HOUNDS?), with a line on either side, for a clean and structured look.
+ Image: A large image (responsively sized) is displayed alongside the text for visual engagement.

## Cart.jsx ## 
The Cart page allows users to view the items they've added to their cart, adjust item quantities, and proceed to checkout. It leverages React hooks and context for state management and navigation.
+ The component uses the ShopContext to access the cartItems, products, currency, and functions like updateQuantity and navigate.
+ The useEffect hook is used to convert the cartItems object into an array of individual cart items with details (ID, size, color, quantity) for easier rendering.
+ Retrieves product details from the products array using the product._id.
+ Displays an image, name, price, size, and color of the product.
+ The input for quantity updates when changed, and it uses the updateQuantity function to update the cart context. If the input is invalid (e.g., empty or zero), no update occurs.
+ Each item has a delete icon that removes the item from the cart by setting its quantity to 0 using updateQuantity.
+ A button allows the user to proceed to the checkout page (/place-order). This is handled by the navigate function from the context.
Components Used:
+ Title
+ CartTotal
+ Assets

## Collection.jsx ##
This is the collection page.
+ Uses React useState to manage the filter options, categories, and subcategories.
+ The useEffect hook is used to apply filters and sort the products whenever relevant state changes.
+ Users can filter products by categories (e.g., Dogs, Cats, Others) and subcategories (e.g., Accessories, Leashes & Harnesses, Toys).
+ Checkboxes allow users to select multiple categories or subcategories.
+ The products can be sorted by "relevant," "low to high," or "high to low" price.
+ It integrates with the ShopContext to display products based on the search term input by users.
+ The page is responsive, adapting well to both mobile and desktop screen sizes using Tailwind CSS classes.

## Contact.jsx ##
The Contact page provides the company’s contact details, job opportunities info, and includes a newsletter subscription box.
+ Displays address, phone number, and email
+ Includes an image related to customer support or contact
+ Integrates the NewsletterBox component for email subscriptions
+ Contains a section promoting job openings with a call-to-action button
+ ully responsive for both mobile and desktop screens
Related Components:
Title — Displays the page header 
NewsletterBox — Reusable component for newsletter subscriptions

## Home.jsx ##
The Home page serves as the landing page of the e-commerce site.
Features:
+ Hero Section: 
+ LatestCollection
+ Showcases top-selling items
+ OurPolicy
+ NewsletterBox

## Login.jsx ##
The Login component handles user authentication interactions including both login and registration views.
+Switch between Login and Register using a state toggle.
+ Name (only in Register mode)
+ Email
+ Password
+ Renders input fields based on currentState.
+ onSubmitHandler stubbed for future backend integration.
+ Uses useState to manage whether the user is signing in or registering.

## Orders.jsx ##
The Orders component displays a list of customer orders, including item details and order status.
+ Renders dummy order data using products from ShopContext.
+ Shows a status indicator ("Ready to ship")
+ Includes a "Track Order" button (not yet functional)
+ Tailwind-based styling adapts to various screen sizes using flex, gap, and media queries.
+Displays a few example orders using products.slice(1,4).

## PlaceOrder.jsx ##
The PlaceOrder component allows users to submit delivery and payment information to finalize their purchase.
+ Collects user details: name, email, address, city, state, country, phone, etc.
Users can choose between:
ATM Card
PayPal
Cash on Delivery (default option)
+ Uses ShopContext to access shared navigation logic (navigate).
+ Local state management (useState) to track selected payment method.
+ Title for section headings
+ CartTotal for displaying cart summary

## Products.jsx ##
The Product component displays detailed information.
+ Product images and description.
+ Size and color selection
+ Real-time feedback on selected options
+ Related product suggestions based on category and subcategory
+ Responsive design for mobile and desktop
+ react-router-dom (for dynamic routing)
+ ShopContext (custom context for global store)
+ RelatedProducts component (imported from components/RelatedProducts.jsx)


--- Other Main files ---

## App.jsx ##
The App.jsx file is the entry point for rendering the primary layout and routing logic. It sets up global structure and client-side navigation using React Router.
+ Wraps the entire application in a responsive container
+ Loads global UI components (Navbar, Footer, SearchBar) across all pages
+ Implements React Router v6 for navigating between pages
+ Integrates a global toast notification system using react-toastify

## index.css ##
+ Tailwind CSS: For fast, responsive UI design
+ Google Fonts: Custom font "Delius" loaded via CDN
+ Custom styles: Additional tweaks for scrollbar, active link highlighting, and mobile behavior

## main.jsx ##
+ React Strict Mode: Helps identify potential problems in the app by intentionally double-rendering certain components in development.
+ BrowserRouter: Wraps the app with React Router to enable client-side routing and navigation.
+ ShopContextProvider: Wraps the app with a context provider that makes the shop's state (like products, cart items, etc.) accessible to all components in the application.
+ App Component: The main app component is rendered inside the browser routing and context provider, ensuring global state management and routing functionality are active throughout the app.









