FROM node:18.18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
ENV NEXT_PUBLIC_BACKEND_CAGEFILE=http://localhost:5000
EXPOSE 3000

CMD ["npm", "start"]
