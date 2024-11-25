# Kanban Board with Secure Login

## Project Description

This project is a Kanban board designed for agile teams to securely manage tasks and workflows. It includes a secure login system that uses JSON Web Tokens (JWT) for authentication. 

### User Story

- **As a** member of an agile team  
- **I want** a Kanban board with a secure login page  
- **So that** I can securely access and manage my work tasks  

---

## Features

- **Secure Authentication**: Login with username and password, authenticated via JSON Web Tokens (JWT).  
- **Error Handling**: Displays error messages for invalid login credentials.  
- **Session Management**: Automatically logs out users after a period of inactivity.  
- **Protected Routes**: Redirects unauthenticated users to the login page.  
- **Task Management**: Access a Kanban board to organize and track tasks after login.  

---

## Technologies Used

- **Frontend**: React.js, CSS/SCSS for styling  
- **Backend**: Node.js, Express.js  
- **Authentication**: JSON Web Tokens (JWT)  
- **Database**: MongoDB/PostgreSQL (your choice, specify one)  
- **State Management**: Redux/Context API (if applicable)  
