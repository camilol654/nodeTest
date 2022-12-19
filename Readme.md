
# Terrafactora instalation

para la instalacion del proyecto nesesitaremos los siguientes programas 
- docker
- node js  

comandos de instalacion

los dos primeros instalan los paquetes nesesarios 
- npm install -g ts-node
- npm install

los siguietentes comandos generaran la base de datos en docker 

- npm run m:gen -- src/migrations/InitDB
- npm run m:run

El siguiente comnado es para ejecutar la base de datos de docker 

- docker-compose up


para correr el servidor  usar el siguiente comando 

-npm run start:dev


cons estos comando puedes probar en postman las siguientes urls que hacen referncia a los modulos 

Status


    - get: http://localhost:3001/api/status

        
    - get: http://localhost:3001/api/status/80d0b9df-abe5-4331-a99b-30e55e89108f
        get by id

    - post:  http://localhost:3001/api/createStatus
     el body debe ser  en esta forma 
     {
        "name":"moderado",
        "desc": "moderado"
     }
     
     
    - put:  http://localhost:3001/api/updateStatus/80d0b9df-abe5-4331-a99b-30e55e89108f
     el body debe ser  en esta forma 
     {
        "name":"moderado",
        "desc": "moderado"
     }

      - delete:  http://localhost:3001/api/deleteStatus/80d0b9df-abe5-4331-a99b-30e55e89108f

priority

    - get: http://localhost:3001/api/priority

    - get http://localhost:3001/api/priority/80d0b9df-abe5-4331-a99b-30e55e89108f
        get by id

    - post:  http://localhost:3001/api/createPriority
     el body debe ser  en esta forma 
     {
        "name":"moderado",
        "desc": "moderado"
     }
     
     
    - put:  http://localhost:3001/api/updatePriority/80d0b9df-abe5-4331-a99b-30e55e89108f
     el body debe ser  en esta forma 
     {
        "name":"moderado",
        "desc": "moderado"
     }

      - delete: http://localhost:3001/api/deletePriority/80d0b9df-abe5-4331-a99b-30e55e89108f

task

    - get: http://localhost:3001/api/task

    - post:  http://localhost:3001/api/createTask
     el body debe ser  en esta forma 
        {
        "name":"peuba task",
        "desc": "prueba task",
        "beginDate":"",
        "endDate":"",
        "taskFather":"",
        "priorityTask":{"id":"a0345d5e-e315-44b3-baf5-ee4001ffabff"},
        "statusTask":{"id":"17c7ed61-42f7-40cc-a07d-1b31571b765f"}
        }
        
     
    - put:  http://localhost:3001/api/updateTask/80d0b9df-abe5-4331-a99b-30e55e89108f
     el body debe ser  en esta forma 
       {
        "name":"peuba task",
        "desc": "prueba task",
        "beginDate":"",
        "endDate":"",
        "taskFather":"",
        "priorityTask":{"id":"a0345d5e-e315-44b3-baf5-ee4001ffabff"},
        "statusTask":{"id":"17c7ed61-42f7-40cc-a07d-1b31571b765f"}
        }


      - delete: http://localhost:3001/api/deleteTask/80d0b9df-abe5-4331-a99b-30e55e89108f

    Modelo relacional

    ![Image text](assets/Diagrama%20entidad%20relacion.PNG)