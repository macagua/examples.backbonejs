# Curso 101 de BackboneJS

Bienvenidos al [Curso 101 de BackboneJS](https://www.youtube.com/playlist?list=PLObPfsbLWL1yUHWjWWk7axroKUqGkZyYL).


## Install

For install, execute the following command:

```
$ sudo apt install php
```


## Run Backbone.js App

For run the Backbone.js App, exuecute the following steps:


### Backend server

For run the PHP Server, execute the following command:

```
$ php -S localhost:8023
```

Open the web browser to

- http://localhost:8023/index.php

Test the data source via API Get Request via Web browser

- http://localhost:8023/router.php/data/1

- http://localhost:8023/router.php/data/2

- http://localhost:8023/router.php/data/3

Test the data source via API Get Request using Web browser Javascript console:

Test the 1 router path

```javascript
$.get('router.php/data/1', function(data){console.log(data);});
> {"id":0,"name":"Leonardo","age":35}
```

Test the 2 router path

```javascript
$.get('router.php/data/2', function(data){console.log(data);});
> {"id":1,"name":"Ana","age":33}
```

Test the 3 router path

```javascript
$.get('router.php/data/3', function(data){console.log(data);});
> {"id":2,"name":"Miriam","age":58}
```

## Copyrigth

Producido por [Cristino Zamora](https://www.youtube.com/user/Aixeiger).
