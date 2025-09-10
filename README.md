 <!-- Blogging App -->

A full-stack application for creating and reading blog posts with a like feature, built with React, Express.js, and MySQL.

<!-- Features -->

- Create blog posts with title, content, and optional author name
- View all posts in a clean list format
- View individual post details
- Like posts with a counter (Candidate 3 feature)
- Responsive design with modern UI
- MySQL database for reliable data storage

<!-- Technologies Used -->

- Backend: Node.js, Express.js
- Frontend: React, React Router
- Database: MySQL with mysql2 driver
- Styling: Custom CSS with responsive design

 <!-- Setup Instructions -->

 <!-- Prerequisites -->
- Node.js (v14 or higher)
- MySQL Server (local installation or cloud service)

 <!-- Database Setup -->

1. Install MySQL on your system:
   - Windows: Download MySQL Installer from https://dev.mysql.com/downloads/installer/
   - macOS: `brew install mysql` or download DMG from MySQL website
   - Linux: `sudo apt-get install mysql-server` (Ubuntu/Debian) or use your distribution's package manager

2. Start MySQL service:
   bash
   # On macOS with Homebrew
   brew services start mysql

   # On Ubuntu
   sudo systemctl start mysql

   # On Windows
   # Start from Services or use MySQL Command Line Client

Deployment Considerations
For production deployment:

1.Database: Use a managed MySQL service like AWS RDS, Google Cloud SQL, or MySQL on a VPS

2.Environment Variables: Set proper production values for database connections

3.Security: Implement proper authentication and input sanitization

4.Performance: Add database indexing and query optimization

Short Answers

# What was the hardest part of this assignment?
The most challenging aspect was implementing the like functionality with proper state management while ensuring database consistency. Transitioning from a NoSQL to SQL database required rethinking the data model and ensuring ACID compliance for operations like incrementing likes. Handling slug generation and uniqueness constraints in a relational database also presented interesting challenges.

# How did you debug an error?
I employed a multi-faceted debugging approach. For database issues, I used MySQL query logging and tested queries directly in the database console. For API problems, I utilized Postman to test endpoints and inspect responses. On the frontend, I used React Developer Tools and browser DevTools to track state changes and network requests. Console logging at strategic points helped trace the flow of data through the application.

# What would you improve if you had more time?
With additional time, I would:

Implement user authentication and authorization with JWT

Add comment functionality with proper relational data modeling

Incorporate image upload capability with proper storage handling

Implement pagination and advanced filtering options

Add comprehensive unit and integration tests

Enhance accessibility features for better screen reader support

Implement a dark/light mode toggle

Add database indexing for better query performance

Implement rate limiting and API security measures

Create an admin dashboard for content management

Github repo link:https://github.com/amanshrivastava-12/BloggingApp
deployed app link:https://blogging-app-seven-lime.vercel.app/
