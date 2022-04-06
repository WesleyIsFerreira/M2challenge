# M2challenge

## Setup do projeto
```
npm install
```

### Compila e ativa hot-reloads para o desenvolvimento
```
npm run serve
```

### Inicia db fake
```
json-server --watch db.json
```

### Compila e minifica para produção
```
npm run build
```

### Alguns comando para auxiliar com o docker
```
docker build -t dockervue .
docker build -t node .
docker build -t nginx .
docker run -p 8000:80 -it --name dockervue dockervue
```

### Db fake com docker
```
docker build -t jsonserver .
docker run --rm -it --name jsonserver-container -p 8080:8080 jsonserver
```

### Personalizar e configurar
Veja em [Vue](https://cli.vuejs.org/config/).
