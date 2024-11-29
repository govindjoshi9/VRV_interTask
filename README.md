# Role-Based Access Control (RBAC) System

## Overview

This project implements a secure backend system with:
- **Authentication**: Register, login, and secure token management.
- **Authorization**: Role-based access control (RBAC) to restrict user actions based on assigned roles.
- **CRUD Operations**: Manage user resources with role-specific permissions.

---

## Tech Stack
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt

---

## Features
1. **User Authentication**:
   - Users can register and log in securely.
   - Passwords are hashed using bcrypt.

2. **Role-Based Authorization**:
   - Roles: `Admin`, `User`.
   - Admins can perform actions like fetching all users or deleting users.
   - Users have restricted access.

3. **Secure Token Management**:
   - JWT is used for authentication, with tokens expiring after 1 hour.

4. **Error Handling**:
   - Handles unauthorized access, invalid credentials, and malformed requests gracefully.

5. **CRUD Operations**:
   - Fetch all users (`Admin` only).
   - Delete a user (`Admin` only).

---

## API Endpoints

### Authentication Endpoints

| HTTP Method | Endpoint       | Description                          | Access     |
|-------------|----------------|--------------------------------------|------------|
| `POST`      | `/api/auth/register` | Register a new user.                 | Public     |
| `POST`      | `/api/auth/login`    | Log in and receive a JWT token.      | Public     |

#### Request Payloads
**Register**:
```json
{
  "username": "exampleUser",
  "password": "examplePass",
  "role": "User"
}
