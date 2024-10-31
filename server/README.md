### Server README (Backend)

# Car Dealership Platform (Server)

This repository houses the backend server for the Hulemekina platform, managing API endpoints, authentication, and data management for car listings and user interactions.

## Features

- **REST API**: Built with Node.js and Express.js for efficient backend operations.
- **Real-Time Updates**: Instant updates for car listings.
- **Telegram Bot Integration**: Users receive notifications via Telegram, powered by Telegraf.
- **Image Upload Support**: Uses Multer for handling image uploads for car listings.
- **Secure Authentication**: JSON Web Tokens (JWT) for secure session management.
- **Database**: MongoDB stores car listings, user profiles, and transactions.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Bot**: Telegraf for Telegram integration
- **File Uploads**: Multer
- **Environment Management**: dotenv

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hulemekina-server.git
   cd hulemekina-server
2. Install dependencies:
    npm install
3. Set up environment variables:
   Create a .env file in the root directory and add the following:
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
4. Start the server:
   npm start
5. The server runs on:
   http://localhost:5000

