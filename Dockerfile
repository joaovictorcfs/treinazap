FROM nginx:1.15
COPY Build/ /usr/share/nginx/html
EXPOSE 80
