# ──────────
# Stage 1: Build the Vite/React app
# ──────────
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /app

# Copy only package.json and lockfile to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production‐ready static files
RUN npm run build

# ──────────
# Stage 2: Serve with Nginx
# ──────────
FROM nginx:stable-alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a minimal custom nginx.conf (optional; you can skip this if defaults are fine)
# If you want client-side routing (React Router), add try_files etc.:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
