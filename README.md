Social Media API
This is a RESTful API designed for a social media startup. It utilizes a NoSQL database, specifically MongoDB, to efficiently handle large amounts of unstructured data. With this API, users can interact with the social network by performing various operations such as creating, updating, and deleting users, thoughts, reactions, and friends.

Features
Server Startup: Upon invoking the application, the server is started, and the Mongoose models are synchronized to the MongoDB database.

GET Routes: Users can retrieve data using GET routes in Insomnia for users and thoughts. The retrieved data is formatted in JSON for ease of interpretation.

POST, PUT, and DELETE Routes: Users can perform CRUD operations using POST, PUT, and DELETE routes in Insomnia. These operations enable users to create, update, and delete users and thoughts in the database.

Reaction Handling: The API supports the creation and deletion of reactions to thoughts. Users can express their reactions to various thoughts, and these reactions can be managed efficiently through the provided routes.

Friend Management: Users can add or remove friends from their friend list using the provided routes. This feature enhances social interactions within the network.

Getting Started
To start using the API, follow these steps:

Clone this repository to your local machine.
Install the required dependencies using npm install.
Make sure you have MongoDB installed and running locally.
Configure the environment variables as needed, such as MongoDB connection URI.
Start the server by running npm start.
Use a tool like Insomnia to test the API endpoints.
Explore the various routes and functionalities provided by the API.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Contributors
This project was created by Lily Vanderbloemen.

License
This project is licensed under the [License Name] License - see the LICENSE.md file for details.
