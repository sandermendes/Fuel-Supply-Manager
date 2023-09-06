# Install dependencies only when needed
FROM node:20-alpine AS deps

# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY frontend/Fuel-Supply-Manager/package.json ./
COPY frontend/Fuel-Supply-Manager/package-lock.json ./
# COPY frontend/Fuel-Supply-Manager/yarn.lock ./
# RUN yarn install
RUN npm install && npm ci

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY frontend/Fuel-Supply-Manager/src ./src
COPY frontend/Fuel-Supply-Manager/angular.json ./angular.json
COPY frontend/Fuel-Supply-Manager/package.json ./package.json
COPY frontend/Fuel-Supply-Manager/package-lock.json ./package-lock.json
COPY frontend/Fuel-Supply-Manager/tsconfig.json ./tsconfig.json
COPY frontend/Fuel-Supply-Manager/yarn.lock ./yarn.lock
RUN npm run build


# Bundle static assets with nginx
FROM nginx:latest AS production
# Copy built assets from `builder` image
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY frontend/Fuel-Supply-Manager/nginx.conf  /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 4200
