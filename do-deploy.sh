#!/bin/bash

# Install dependencies
apt-get update
apt-get install -y nodejs npm git

# Clone the repository
git clone https://github.com/nturing/loom.git /opt/loom

# Navigate to the project directory
cd /opt/loom

# Install project dependencies
npm install

# Build the project
npm run build

# Start the project
npm start
