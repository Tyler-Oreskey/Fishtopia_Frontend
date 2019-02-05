
Fishtopia is a web application built for fishermen. Fishermen have a common struggle in finding good fishing spots in unfamiliar environments. The application allows the user to drop a pin anywhere on Google Maps to then click a button inside of it's info window. The button triggers a Modal with a form inside of it. After the user submits the form, the pin is submitted as a custom fish pin with the submitted information inside of the info window. This allows other fisherman to see what other users have caught in a specific area, month and day. The user can also add comments to their post if they used specific techniques in catching their fish. This application does read and write to and from a database linked here: 
**https://github.com/Tyler-Oreskey/Fishtopia_Backend**

The backend is was built with Node.js, Express.js, PostgreSQL and JOI as middleware. The database includes types of fish, dry and wet flies along with user posts in order to allow a submission to the database. The application dynamically loads posted pins and info windows from the latitude, longitude, and form values submitted from users.

A video of the application walkthrough can be found here: **https://youtu.be/MLVl4oIc-kE**

here are some screenshots of the application:
![Alt text](https://imgur.com/lIWmKkt "Login Page")
![Alt text](https://imgur.com/fNSvFBs "Home Page")
![Alt text](https://imgur.com/V4m3adC "Maps Page")
![Alt text](https://imgur.com/aPIGZn4 "Searching Location")
![Alt text](https://imgur.com/gfFQdnp "Dragging the pin")
![Alt text](https://imgur.com/qWIu60y "Clicking the post button")
![Alt text](https://imgur.com/CH09Z5G "Form")
![Alt text](https://imgur.com/SCduAGu "Form Submission")
![Alt text](https://imgur.com/81ZC087 "Submitted form is now a fish pin")
![Alt text](https://imgur.com/Sipxe0d "Submitted form elements inside the info window")
