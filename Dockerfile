# ─────────────────────────────────────────────────────
# Stage 1: Build the Vite/React app into /app/dist
# ─────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source & build
COPY . .
RUN npm run build
# At the end of this stage, /app/dist contains your static files


# ─────────────────────────────────────────────────────
# Stage 2: Serve “/app/dist” with Nginx on port 8080
# ─────────────────────────────────────────────────────
FROM nginx:stable-alpine

# Remove default Nginx “html” folder
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom nginx.conf that listens on 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run will route to $PORT=8080)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
