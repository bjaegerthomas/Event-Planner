# Event Planner

## Description

#### **Thanks for choosing Event Planner!** 
Event Planner is a full-stack web application that allows users to register, log in, and easily organize events. The app provides a seamless experience for keeping track of all your social commitments with the simple click of a button. 

## Table of Contents

- [Live Demo & Repository](#live-demo--repository)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [API Routes](#api-routes)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [License](#license)
- [Questions](#questions)

## Live Demo & Repository

#### [Click here for the deployed application](will-insert-link-here)

#### [Click here for the GitHub repository](https://github.com/bjaegerthomas/Event-Planner.git)

## Features

- User authentication (register/login) using JWT
- Secure storage of user credentials with bcrypt hashing
- Create, view, & delete events   
- Interactive UI using React
- Backend RESTful API with Node.js & Express.js
- Database management using PostgreSQL & Sequelize
- Fully responsive design for mobile and desktop  
- Deployment on Render

## Technologies Used

#### Frontend:
- React.js
- TypeScript
- Vite
- React Router

#### Backend:
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js (Password Hashing)
- dotenv (Environment Variables)

#### Database:
- PostgreSQL
- Sequelize ORM

#### Deployment:
- Render (Backend & Database)

## Installation & Setup

#### Clone the repository 
- `git clone git@github.com:bjaegerthomas/Event-Planner.git`
- `cd Event-Planner`

#### Install dependencies 
- `npm install`

#### Set up environment variables
Create an `.env` file in the root directory & add: 
- `DB_USER=your_postgres_username`
- `DB_PASS=your_postgres_password`
- `DB_NAME=event_planner_db`
- `DB_HOST=localhost`
- `JWT_SECRET=your_secret_key`
- `PORT=5000`

#### Initialize database
- `psql -U postgres -d postgres -c “CREATE DATABASE event_planner_db;”`
- `npx sequelize db:migrate`
- `npx sequelize db:seed:all`

#### Start the development server
- `npm run dev`
###### The backend will run at http://localhost:5000/ & the frontend at http://localhost:3000/

## API Routes

#### Authentication
- `POST /auth/register` → Register new user
- `POST /auth/login` → Authenticate user & return JWT token

#### Events
- `GET /events` → Retrieve all events
- `POST /events` → Create a new event
- `DELETE /events/:id` → Delete an event

#### RSVP
- `GET /rsvp/:token` → Fetch RSVP details for a guest
- `POST /rsvp/:token/respond` → Accept or decline invitation

## Screenshots

#### Login
    ![screenshot of login page](insert-picture-link-here)

#### Homepage
    ![screenshot of landing page](insert-picture-link-here)

#### Create Event
    ![screenshot of event creation page](insert-picture-link-here)

## Future Enhancements

- Unique event link generated for easier social media invites
- Implement event reminders via email & text
- Add event categories and filters
- Enable file uploads for event images
- Improve RSVP tracking with guest comments

## Contributors

- **Ben Jaeger-Thomas**: Frontend Development- React & UI Design
- **Michael Scipio**: Backend Development- API Integration & Authentication
- **Lauren DeGrazia**: Backend Development- Sequelize, PostgreSQL, & Express,js
- **Lesley Vaden**: T.A., providing guidance and support throughout the assignment.
- **Kevin Ferguson**: Instructor, providing guidance and support throughout the assignment.
- **ChatGPT & Xpert Learning Assistant chat+**: Answering questions regarding code development for the project. 

## License

This project is licensed under the MIT License

## Questions

If you have any questions, please feel free to reachout!
- **Lauren DeGrazia**: [Email](mailto:degrazial1@yahoo.com) or [Github](https://github.com/LDegraz)
- **Michael Scipio**: [Email](mailto:enter-email-here) or [Github](https://github.com/MTS-sip)
- **Ben Jaeger-Thomas**: [Email](mailto:enter-email-here) or [Github](https://github.com/bjaegerthomas)  

#### How to Contact
You can contact us via email for any inquiries or feedback regarding this project. Alternatively, you can open an issue on [GitHub](https://github.com/bjaegerthomas/Event-Planner.git) if you encounter any problems or have suggestions for improvements. We will do our best to respond promptly!