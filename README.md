# Role-Based Access Control (RBAC) System

## Overview

This project demonstrates the implementation of a **secure backend system** with a focus on **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)**. It includes robust user management, role-based permissions, and secure token handling, making it ideal for applications requiring differentiated access for multiple user roles.

---

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Testing**: Jest and Supertest (optional)

---

## Features

### 1. User Authentication
- Users can register with a username, password, and role.
- Passwords are securely hashed using **bcrypt** before being stored in the database.
- Login endpoint issues a **JWT** token for authenticated access.
- Includes a **logout endpoint** to invalidate tokens (handled client-side or with a token blacklist).

### 2. Role-Based Authorization
- Implements **RBAC** to restrict access based on user roles:
  - **Admin**: Full access to user management endpoints (e.g., fetch, update, delete).
  - **User**: Limited access to personal resources.
- Middleware ensures only authorized roles can access specific endpoints.

### 3. Secure Token Management
- Authentication is managed using **JWT** with token expiration set to 1 hour.
- Access tokens are included in the `Authorization` header for secure communication.

### 4. CRUD Operations
- **Admin** role can:
  - Fetch all users.
  - Fetch, update, or delete specific users.
- **User** role can:
  - Perform limited actions on their own account.

### 5. Error Handling
- Handles common issues like:
  - Unauthorized access.
  - Invalid or expired tokens.
  - Nonexistent resources (e.g., user not found).
  - Bad requests with missing or malformed data.

---

## API Endpoints

### Authentication Endpoints

| HTTP Method | Endpoint       | Description                          | Access     |
|-------------|----------------|--------------------------------------|------------|
| `POST`      | `/api/auth/register` | Register a new user.                 | Public     |
| `POST`      | `/api/auth/login`    | Log in and receive a JWT token.      | Public     |
| `POST`      | `/api/users/logout`  | Logout user (invalidate token).      | All Users  |

**Request Payloads**

**Register**:
```json
{
  "username": "exampleUser",
  "password": "examplePass",
  "role": "User"
}
