# Use Node.js 24 LTS for consistency
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for optimal layer caching
COPY --chown=node:node package*.json ./

# Install dependencies with cache optimization
RUN npm install && npm cache clean --force && \
    chown -R node:node /app/node_modules

# Copy the rest of your application files
COPY --chown=node:node . .

# Create .vite directory with correct permissions
RUN mkdir -p .vite && chown -R node:node .vite

# Switch to non-root user
USER node

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "dev"]