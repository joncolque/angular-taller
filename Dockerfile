FROM node:latest
#Angular works with node:8.9.x

RUN npm install -g @angular/cli
EXPOSE 4200
