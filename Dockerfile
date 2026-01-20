FROM nginx:alpine

# Change nginx to listen on 9999
RUN sed -i 's/listen       80;/listen 9999;/g' /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

EXPOSE 9999

CMD ["nginx", "-g", "daemon off;"]
