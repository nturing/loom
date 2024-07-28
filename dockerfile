# Use the official Node.js image as the base image
FROM node:18

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
