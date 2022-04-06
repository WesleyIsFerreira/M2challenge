FROM debian:10-slim

ENV tmp_dir /tmp

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs

RUN npm install -g json-server

RUN echo '{"products": [{"id": 1,"name": "Ilimitado Fixo brasil","price": 200.00,"category_id": 1},{"id": 2,"name": "Ultimate HD","price": 500.00,"category_id": 2},{"id": 3,"name": "Full HD","price": 150.00,"category_id": 2},{"id": 4,"name": "100MB","price": 100.00,"category_id": 3},{"id": 5,"name": "200MB","price": 200.00,"category_id": 3},{"id": 6,"name": "300MB","price": 300.00,"category_id": 3}],"categories": [{"id": 1,"name": "Fixo"},{"id": 2, "name": "TV"},{"id": 3,"name": "Internet"}]}' > /tmp/test.json

ENTRYPOINT ["json-server", "--port", "8080", "--host", "0.0.0.0"]

CMD ["/tmp/test.json"]
