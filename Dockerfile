FROM nginx:alpine

# Change nginx to listen on 9999
RUN sed -i 's/listen       80;/listen 9999;/g' /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
