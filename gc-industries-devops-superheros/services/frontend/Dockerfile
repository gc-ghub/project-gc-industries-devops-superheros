# --- Build Stage ---
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

ARG VITE_PAYMENT_API
ENV VITE_PAYMENT_API=$VITE_PAYMENT_API

# Build for production
RUN npm run build


# --- Runtime Stage ---
FROM nginx:1.25-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
