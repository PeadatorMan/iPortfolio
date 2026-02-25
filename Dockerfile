# Dockerfile.dev
# FROM node:20-alpine
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "run", "dev", "--", "--host"]
# Use a specific Node.js version as the base image
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application (production build recommended)
RUN npm run build

# Start the application
CMD ["npm", "start"]

# Note: For development, the CMD would be ["npm", "run", "dev"] and volumes would be used for live reloading.

