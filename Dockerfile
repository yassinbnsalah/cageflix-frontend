FROM node:18.18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

ENV NEXT_PUBLIC_BACKEND_CAGEFILE=http://localhost:5000
RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
