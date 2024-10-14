# 🍅 Tomato - Delicious Food, Delivered

Tomato is a sleek, user-friendly food ordering platform that brings a world of culinary delights right to your fingertips. From mouth-watering main courses to delectable desserts, order your favorite dishes with ease and elevate your dining experience.

## 📋 Task Description

For this project, we are assigned to:

1. Create a GitHub Action for this new project.
2. Run the application in a **Docker** environment.
   
## 🌟 Features

- **Diverse Menu**: Explore a wide range of cuisines and dishes
- **Easy Ordering**: Seamless process from browsing to checkout
- **User Accounts**: Personalized recommendations and order history

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
2. Navigate to the project directory  
3. Install dependencies
4. Set up environment variables
5. Start the development server
6. npm run dev

## 🐳 Docker

This project utilizes Docker to ensure environment consistency. To run the application using Docker:

1. Ensure Docker is installed on your system.
2. Run `docker-compose up --build` in the project root.
3. The application will be available at `http://localhost:5173`.

Docker containerization allows for consistent development, testing, and production environments, minimizing "it works on my machine" issues.

## 🔄 GitHub Actions

We leverage GitHub Actions for our CI/CD pipeline. Our workflow includes:

- Code linting and testing on every push or pull request to the `main` branch.
- Building and deploying a Docker image to a container registry on each new release.

This automation ensures code quality, streamlines the deployment process, and maintains a consistent release cycle.

## 🤝 Kelompok 12
- Tiara Agustin (2208107010004)
- Riska Haqika Situmorang (2208107010086)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
