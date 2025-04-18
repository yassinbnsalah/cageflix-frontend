# Cageflix Frontend

A Netflix-like web application built with Next.js. It allows users to explore movies and TV shows using the IMDB dataset. The frontend is designed to be responsive and provides fuzzy search functionality for better content discovery.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/yassinbnsalah/cageflix-frontend.git
    ```

2. Navigate to the project folder:

    ```bash
    cd cageflix-frontend
    ```

3. Build and run using Docker:

    - First, build the Docker image:

      ```bash
      docker build -t cageflix-frontend .
      ```

    - Run the Docker container:

      ```bash
      docker run -p 3000:3000 cageflix-frontend
      ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Features

- Responsive design
- Fuzzy search for movies and TV shows
- Integration with IMDB datasets

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Docker
- Vercel for deployment
- 
## Live Version

You can view the live version of the project here: [Cageflix Frontend](https://cageflix-frontend.vercel.app/)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Tailwind Documentation](https://tailwindcss.com//)

