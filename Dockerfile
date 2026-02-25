# Dockerfile.dev
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
# Use a specific Node.js version as the base image

# Note: For development, the CMD would be ["npm", "run", "dev"] and volumes would be used for live reloading.

