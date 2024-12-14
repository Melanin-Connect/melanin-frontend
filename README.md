# Next.js Docker Project

A modern Next.js application containerized with Docker for easy deployment and development.

## Prerequisites

- Docker
- Docker Compose
- Node.js 18+ (for local development)

## Quick Start

### Using Docker

1. Build and run the container:
```bash
# Development
docker compose up dev

# Production
docker compose up prod
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Docker Configuration

The project includes two Docker configurations:

- `dev`: Hot-reloading enabled development environment
- `prod`: Optimized production build

### Environment Variables

Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables
```

## Project Structure

```
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── package.json
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── styles/
└── tsconfig.json
```

## Development

```bash
# Run tests
npm run test

# Run linting
npm run lint

# Build for production
npm run build
```

## Deployment

### Using Docker in Production

1. Build the production image:
```bash
docker build -t my-nextjs-app --target prod .
```

2. Run the container:
```bash
docker run -p 3000:3000 my-nextjs-app
```

### Alternative Deployment

The project can also be deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the platform from the creators of Next.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.