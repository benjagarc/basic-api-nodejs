### ⚙️ Prerequisites

Make sure you have the following installed in your development environment to set up and run the project smoothly:

- Node.js and npm (or yarn)

- PostgreSQL: The database service must be running on your machine.
- DBeaver (or a similar client like pgAdmin): A tool for visually
  managing your database.

- Git: To clone the repository.

### 🚀 Getting Started

Follow these step-by-step commands to set up and run the API on your local machine.

Follow these step-by-step commands to set up and run the API on your local machine.

#### 1. Clone the repository

Open your terminal and run the following command to download the project code:

```
git clone https://github.com/your-username/your-project-name.git

```

#### 2. Navigate to the project directory

Once cloned, enter the project folder:

```
cd your-project-name
```

#### 3. Install dependencies

Install all the necessary libraries for the project to work:

```
npm install
```

#### 4. Create the environment variables file

Create a .env file in the project's root directory to configure the database and the token secret. Use this example as a guide and replace the values:

### Create the .env file

```
touch .env
```

Content for your .env file:

Fragmento de código

```
PORT=3001
DB_DIALECT=postgres
DB_HOST=localhost
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=api
JWT_SECRET=your_super_secret_for_signing_tokens
```

#### 5. Start the database

Ensure that your PostgreSQL service is active. You can use DBeaver to create the database named api:

### SQL

```
CREATE DATABASE api;
```

#### 6. Start the development server

Finally, start the application in development mode. This command will also sync your models with the database, creating the users table.

```
npm run dev
```

If everything goes well, you will see a message in the console indicating that the database connection was successful and the server is running.
