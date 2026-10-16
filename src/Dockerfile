FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY index.js app.js ./
COPY controller/ ./controller/
COPY route/ ./route/

ENV NODE_ENV=production \
    PORT=3000
EXPOSE 3000

USER node
CMD ["npm", "start"]
