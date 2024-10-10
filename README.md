Full Stack Application with Next.js and NestJS
This repository contains a full stack web application developed using:

Frontend: TypeScript, Next.js (App Router), React Hook Form, TailwindCSS, and Redux for state management.
Backend: TypeScript, NestJS framework with PostgreSQL and Prisma ORM for managing User and Profile tables.
Project Overview
Frontend Features:
Next.js Framework (App Router): A powerful React-based framework for server-side rendering and routing.
React Hook Form: Used for handling form submissions with schema validation.
TailwindCSS: A utility-first CSS framework for designing responsive layouts.
Redux: State management to handle application-wide state.
Backend Features:
NestJS: A TypeScript framework for building scalable server-side applications.
PostgreSQL: A relational database to store user and profile data.
Prisma ORM: An Object-Relational Mapper (ORM) to interact with the PostgreSQL database.
Frontend Setup
Technologies
Next.js (App Router)
React Hook Form: For forms and schema validation.
TailwindCSS: For styling.
Redux: For global state management.
Installation & Running
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Schema Validation:

For schema validation in forms, refer to React Hook Form Schema Validation.
Wireframe Pages:

Pages for creating and editing are represented by the same common wireframe.
Routes mentioned in the wireframe are integrated with the backend API.
Frontend Routes
Ensure the following routes match the corresponding backend API:

Page	Route	HTTP Method
Create User	/api/users	POST
Edit User	/api/users/:id	PATCH
Get User Profile	/api/users/:id	GET
Delete User	/api/users/:id	DELETE
Backend Setup
Technologies
NestJS Framework: Scalable server-side application framework.
PostgreSQL: Relational database for data persistence.
Prisma ORM: Database ORM for interacting with PostgreSQL.
Database Schema
User Table:

id (Primary Key)
username
phone
Profile Table:

id (Primary Key)
userId (Foreign Key from User)
email
gender
address
pincode
city
state
country
Backend API Endpoints
The backend will expose the following endpoints for managing User and Profile:

Endpoint	HTTP Method	Description
/api/users	GET	Retrieve all users
/api/users	POST	Create a new user
/api/users/:id	GET	Get a specific user by ID
/api/users/:id	PATCH	Update a user’s information by ID
/api/users/:id	DELETE	Delete a user by ID
Installation & Running
Install dependencies:

bash
Copy code
npm install
Set up PostgreSQL:

Make sure PostgreSQL is installed and running on your system.
Create a .env file and add your database connection string:
bash
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
Run Prisma migrations:

bash
Copy code
npx prisma migrate dev
Start the NestJS server:

bash
Copy code
npm run start:dev
Validation & Error Handling
Ensure checks are in place to validate that both the user and profile exist before performing any operations such as update or delete.
Notes
The frontend is connected to the backend through the defined API routes.
Ensure the correct environment configurations and database setup before running the application.
Contributions
Feel free to contribute by submitting pull requests or reporting issues. All contributions are welcome!

License
This project is licensed under the MIT License.
