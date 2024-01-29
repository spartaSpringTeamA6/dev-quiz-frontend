FROM node:16 AS builder

WORKDIR /app

COPY package.json . \
     package-lock.json . 

RUN  npm install

COPY . .
RUN npm run build


FROM nginx
COPY config/nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html 
     
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
