#!/bin/bash

# Connect to the server via SSH and change to the desired directory
ssh umiz@shodan 'whoami  && cd /var/www/umiz/umiz4kidz/umiz4kidz-vorlesebuch/ && \
  # Run git pull to update the code
  git pull && \
  # Run npm run build to build the project
  npm run build'
