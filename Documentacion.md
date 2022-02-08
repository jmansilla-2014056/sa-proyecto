# Soccer Stats

## Resumen de la aplicación

"Soccer Stats" es un sistema web, pensado para aficionados al fútbol que deseen verificar datos estadísticos de partidos anteriores, con el propósito de realizar un análisis de los resultados de los futuros partidos.

También contará con una aplicación móvil, en la que podrá realizar todas las funcionalidades que están en la página web sin ningún tipo de impedimento. Tendrá notificaciones al instante, con las noticias más acutalizadas de los partidos, jugadores, resultados y sorteos.

Para el uso de dicho sistema, se tendrán dos opciones, una cuenta gratis y una membresía mensual. La cual tendrá un precio de Q15.00, todos los usuarios podrán adquirirla o ponerle fin en cualquier momento.

Con la membresía los usuarios podrán ver datos de sus equipos preferidos, como los partidos entrantes, información de los jugadores, técnicos a cargo, torneos ganados, etc.
También tendrán acceso a un algoritmo de predicción de resultados el cuál está en constante aprendimiento para poder brindar un resultado lo más acertado posible.

## Lenguaje de Programación 💻

### SQL

 SQL es un lenguaje de dominio específico, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.​

 Dado que no es solo una base que se encarga de almacenar partidos y resultados, lo ideal es utilizar este lenguaje.

 
### JavaScript

JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.

Dado que que en esta ocacion es una pagina web y una app, un lenguaje ideal es javascritp. 


<br>

-----
<br>


## Herramientas de Metodología

### Scrum

Se utilizará la metodología scrum. Se llevará a cabo por medio de *sprints*, con duración de una(1) semana para lograr el desarrollo de una función específica, tiempo que se considera adecuado para realizar la entrega de esa funcionalidad. De esta forma, se asegura la entrega continua de un producto que se ira completando con el tiempo, y a la vez, con la certeza que se están controlando los cambios.

En general se trata de definir las tareas a realizar en todo el proyecto, luego elegir las que se realizaran en cada sprint, y ponerlo en marcha. Las tareas se organizan y listan en los llamados product y sprint backlog, los cuales tendrán todas las tareas y las que se realizarán en cada sprint, respectivamente.

 <center> 

![imagen 1](https://i.postimg.cc/XqkMfqLz/scrum.png)

 </center> 

### Product y Sprint Backlog - Trello

A través de un tablero Kanban proporcionado por la herramienta Trello se listarán las tareas de los backlogs. Trello permite organizar dichas tareas en diferentes listas, además de añadirle categorías a cada tarea, asignarlas a cada miembro del equipo. De esta forma, el control de las diferentes etapas del proyecto y cada sprint.

 <center> 

![imagen 1](https://i.postimg.cc/brhcSkxn/trello.png)

 </center> 

<br>

-----
<br>

## Tecnologías y Frameworks a Utilizar.

### Integración Continua

#### Microservicios - Docker

Se generarán microservicios y se empaquetarán con Docker, que permite colocar toda la lógica de una funcionalidad dentro de un contenedor, que servirá más adelante para ponerlos en marcha de forma dinámica o en caso de que fallen, crearlos nuevamente de forma sencilla.

<center> 

![imagen 1](https://i.postimg.cc/13CQ7gSx/docker.png)
 
</center> 

#### Orquestación de Contenedores - Docker Compose

Sera utilizado para administrar los contenedores, a la vez que con un simple archivo tendremos configurados todos los microservicios.

<center> 

![imagen 1](https://i.postimg.cc/KY1y6Zc1/compose.png)

</center> 


#### Automatización - Jenkins

Sera utilizado para automatizar las tareas necesarias para realizar la integración y despliegue continuo. Nuestra guía será el repositorio de GitHub, y a partir de ahí, en caso de que se realicen cambios en la rama *master*, se realizaran las acciones necesarias para lograr el despliegue automático.

<center> 

![imagen 1](https://i.postimg.cc/fLXQbB9Z/jenkins.png)

</center> 


#### MySQl - RDBMS

MySQL es un código abierto sistema de gestión de base de datos relacional (RDBMS).  Es un software gratuito y de código abierto bajo los términos de la Licencia Pública General GNU y también está disponible bajo una variedad de licencias propietarias 

<center> 

![Logo nodeJS](https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png)  

</center> 



#### Angular

Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. En esta ocacion podremos llegar a una plataforma intuitiva y amigable.

<center> 

![Logo nodeJS](https://angular.io/assets/images/logos/angular/angular.svg)  

</center> 

#### Node Js 
 
 El proyecto será desarrollado en node Js, que es un entorno en tiempo real de ejecución multiplataforma, basado en Javascript y orientado a eventos asíncronos. Esta diseñado para crear aplicaciones escalables, permitiendo establecer y gestionar multiples conexiones al mismo tiempo.

 Node.js será utilizado para desarrollar todos los microservicios del lado del backend.

 <center> 

![Logo nodeJS](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png)  

</center> 

#### JWT

Se necesita la verificación de permisos de acuerdo al rol de cada usuario, para dicha tarea se implementara JWT para poder gestionar las credenciales como tokens y proporcionar el acceso a los módulos correspondientes.

## Documentación de la aplicación

### Historias de Usuario

#### Cliente

| Cod.  | Historia de usuario                                                                                                                                             | Descripción                                                                                                                                                                                                                                                                                                                                         | Criterios de aceptación                                                                                                                                                                         | Dependencias |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| HUC1  | Como cliente, quiero registrarme en el sistema, para tener un perfil personal.                                                                                  | Se crea un nuevo usuario con información del cliente y sus preferencias, y se almacena en la base de datos, a traves de un formulario disponible en el sistema. La nueva cuenta debe ser validada por el usuario a traves de un link enviado a su correo electronico. La cuenta toma el estatus de "Activa" cuando ha sido validada por el usuario. | - El cliente activa la cuenta a traves de el link recibido en su correo electrónico. - El cliente puede iniciar sesión con sus credenciales registradas.                                        |              |
| HUC2  | Como cliente, quiero iniciar sesión en el sistema, para poder tener acceso a la información de la aplicación.                                                   | El cliente ingresa su correo electrónico y su contraseña, esto para validar e iniciar sesión en el sistema.                                                                                                                                                                                                                                         | El usuario es valido y se encuentra activo. Se muestra el nombre del usuario en un area de la pagina. Se redirige al usuario a la pagina de bienvenida.                                         | HUC1         |
| HUC3  | Como cliente, quiero cerrar la sesión en el sistema, para mantener mi privacidad.                                                                               | El cliente solicita el cierre de sesión a traves de un boton en alguna parte de la pagina. La sesión es cerrada por lo que ya no puedra acceder a ningun modulo.                                                                                                                                                                                    | Se elimina la sesión activa del usuario. Ya no es accesible ningun modulo del sistema por falta de permiso.                                                                                     | HUC2         |
| HUC4  | Como cliente, quiero visualizar la información ingresada en mi cuenta, para validar que dicha información es correcta.                                          | Se presentan los datos del usuario en la pagina de "Perfil".                                                                                                                                                                                                                                                                                        | Los datos pueden ser visualizados por el usuario.                                                                                                                                               | HUC2         |
| HUC5  | Como cliente, quiero editar la información de mi cuenta, para mantener dicha información actualizada.                                                           | Se presenta al usuario un boton "Editar" en la pagina "Perfil", el cual lleva al usuario a un formulario con los datos actuales, los cuales pueden ser modificados y guardados nuevamente.                                                                                                                                                          | El usuario puede modificar cualquier dato personal que no sea el correo electronicó.                                                                                                            | HUC2         |
| HUC6  | Como cliente, quiero eliminar mi cuenta, para que ya no sea posible acceder a la misma de manera permanente.                                                    | Se presenta un boton "Eliminar Cuenta" en la pagina de "Perfil", la cual presenta un mensaje de confirmación para eliminar la cuenta, cuando el usuario confirma la acción, la cuenta es marcada como inactiva y no se puede iniciar sesión.                                                                                                        | La cuenta es inactivada, y el usuario ya no puede iniciar sesión con su usuario y contraseña.                                                                                                   | HUC2         |
| HUC7  | Como cliente, quierio reestablecer mi contraseña a traves de correo electronicó, para tener un medio de recuperación en caso de perdida.                        | El usuario solicita la recuperación de contraseña al correo, recibiendo un correo con el link al login y una contraseña provisional la cual debe ser cambiada por el usuario.                                                                                                                                                                       | El usuario registra una nueva contraseña para su cuenta y puede iniciar sesión nuevamente.                                                                                                      | HUC1         |
| HUC8  | Como cliente, quiero poder pagar una membresia, para tener acceso a contenido exclusivo.                                                                        | El cliente, paga una membresia mensual, la cual le da acceso a caracteristicas premium.                                                                                                                                                                                                                                                             | El usuario pago el mes de membresia. El usuario tiene acceso a las caracteristicas premium.                                                                                                     | HUC2         |
| HUC9  | Como cliente, quiero "Seguir" a mis equipos favoritos, para tener acceso rapido a sus estadisticas y noticias.                                                  | El cliente puede agregar un equipo a sus favoritos, por lo que podra acceder de manera mas facil a la información de dicho equipo en la pagina principal.                                                                                                                                                                                           | El usuario puede seguir a un equipo. El equipo aparece en el listado de equipos seguidos. En la pagina principal, aparecen las ultimas noticias referentes a dicho equipo.                      | HUC8         |
| HUC10 | Como cliente, quiero realizar consultas de datos estadisticos, para poder realizar analisis propios del desempeño de un equipo, jugador, tecnico, etc.          | Se le presenta al cliente una lista de consultas que puede realizar, donde el cliente completa los datos solicitados para realizar dicha consulta, luego se le muestra los resultados.                                                                                                                                                              | El usuario tiene acceso al modulo de consultas. Puede realizar consultas.                                                                                                                       | HUC8         |
| HUC11 | Como cliente, quiero filtrar las noticias respecto a mis equipos favoritos, o ver el listado general, para poder tener mayor control de la información que leo. | El usuario puede elegir si filtrar las noticias en las que aparezcan sus equipos favoritos, o listar todas las noticias.                                                                                                                                                                                                                            | Se presenta un menú con la opción de filtrar por equipos seguidos o general. Se muestra el listado que cumpla con el filtro.                                                                    | HUC8         |
| HUC12 | Como cliente, quiero tener acceso a un modulo de predicción de resultados de partidos, para tener una ayuda en la toma de desiciónes en las quinielas.          | El usuario puede elegir realizar una predicción para un partido, donde se analizaran datos historicos y se presentara una predicción del resultado.                                                                                                                                                                                                 | Se ofrece una predicción del resultado del partido al usuario.                                                                                                                                  | HUC8         |
| HUC13 | Como cliente, quiero participar en quinielas, para poder obtener premios.                                                                                       | El usuario puede ingresar los resultados para un partido antes de que este inicie. Si el usuario acierta, recibe un incentivo.                                                                                                                                                                                                                      | El usuario ingresa su predicción de resultado y se almacena en el sistema. Solo se puede ingresar o modificar antes de que el partido inicie. Se valida los resultados al finalizar el partido. | HUC8         |

#### Empleado

| Cod. | Historia de usuario                                                                                                      | Descripción                                                                                                                                                             | Criterios de aceptación                                                                                                        | Dependencia |
|------|--------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|-------------|
| HUE1 | Como empleado, quiero ingresar información al sistema, para mantener actualizada la base de datos estadistica.           | El empleado cuenta con formularios de ingreso para nuevos elementos de información, como estadios, equipos, partidos, resultados, etc.                                  | La información es almacenada en la base de datos y se encuentra disponible para ser consultada por los usuarios.               |             |
| HUE2 | Como empleado, quiero modificar información ingresada anteriormente, para poder mantener los datos actualizados.         | El empleado tiene acceso a modificar los datos ingresados anteriormente, y puede guardar los nuevos cambios.                                                            | Los cambios en la información se ve reflejada de manera inmedita despues de guardarlos.                                        |             |
| HUE3 | Como empleado, quiero transferir jugadores de un equipo a otro, para martener la plantilla de jugadores actualizada.     | El empleado cambia la afiliación de un jugador a otro equipo. Dicho cambio se debe registrar en la bitacora de equipos del jugador.                                     | El jugador aparece en la plantilla del nuevo equipo. En el perfil del jugador aparece que pertenece al nuevo equipo.           |             |
| HUE4 | Como empleado, quiero transferir un tecnico a otro equipo, para mantener la plantilla tecnica actualizada.               | El empleado cambia el equipo al cual pertenece un tecnico. El cambio se registra en la bitacora del tecnico.                                                            | El cambio se ve reflejado en el perfil del equipo. Se validan correctamente la relación de 1 a 1 entre un tecnico y un equipo. |             |
| HUE5 | Como empleado, quiero modificar el estado de un partido, para que concuerde con el estado real.                          | El empleado puede cambiar el estado de un partido a Sin iniciar, En proceso, Finalizado, Suspendido.                                                                    | El cambio de estado se ve reflejado de manera inmediata.                                                                       |             |
| HUE6 | Como empleado,quiero agregar incidencias durante la realización de un partido, para mantener la información actualizada. | El empleado agrega registros de eventos que suceden durante el partido, como lo es faltas, penalizaciónes, etc. Esto solo es posible mientras el partido esta en curso. | La incidencia crea un registro en la base de datos, y esta se refleja en los datos del partido de manera inmediata.            |             |
| HUE7 | Como empleado, quiero agregar noticias sobre un equipo, para que estas esten disponibles a los usuarios.                 | El empleado agrega un articulo el cual esta relacionado con un equipo, y este sera accesible por los usuarios en la pagina de noticias.                                 | La noticia es almacenada en la base de datos y es accesible por los usuarios.                                                  |             |
| HUE8 | Como empleado, quiero crear quinielas, para que los clientes puedan participar en ellas.                                 | El empleado crea una nueva quiniela y la pone a disposición de los usuarios.                                                                                            | La quiniela se almacena en el sistema. Los usuarios pueden participar en la quiniela.                                          |             |

#### Administrador

| Cod. | Historia de usuario                                                                                                                                                           | Descripción                                                                                                                                                                  | Criterios de aceptación                                                                                                                                                               | Dependencia |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| HUA1 | Como administrador, quiero crear nuevas cuentas, para poder dar acceso al sistema.                                                                                            | Un usario administrador puede crear nuevas cuentas, sin importar si el rol es Cliente, Empleado u Administrador.                                                             | El administrador puede crear nuevos usuarios validos en el sistema.                                                                                                                   |             |
| HUA2 | Como administrador, quiero modificar el estatus de una cuenta, para poder tener un control sobre las mismas.                                                                  | Un administrador puede dar de alta, baja, congelar, visualizar o actualizar una cuenta de cualquier usuario, para lo cual debe registrar la razón de dicha acción en un log. | El estado de la cuenta cambia al estado definido por el administrador.                                                                                                                |             |
| HUA3 | Como administrador, quiero tener acceso al log de operaciónes realizadas sobre usuarios, para tener control de las acciónes realizadas sobre los usuarios en el sistema.      | Un administrador, puede visualizar el log de acciónes sobre otras cuentas realizadas, donde se muestra la descripción de porque se realizó dicha operación.                  | El administrador visualiza los datos del log de acciónes sobre cuentas.                                                                                                               |             |
| HUA4 | Como administrador, quiero que exista una pagina de "Access Denied", para informar a los usuarios que no tienen acceso a un area del sistema.                                 | Se muestra una pagina con un mensaje de acceso denegado, cuando el usuario intenta ingresar a un modula al cual no tiene permisos.                                           | El usuario visualiza una pagina de "Access Denied" cuando intenta visualizar un modulo al cual no tiene acceso.                                                                       |             |
| HUA5 | Como administrador, quiero realizar reportes sobre los usuarios usando distintos criterios e imprimirlos en pdf si es necesario, para tener idea del desempeño de los mismos. | El administrador cuenta con un modulo de reportes donde puede realizar consulta sobre aspectos claves para usuarios "Empleado" y "Cliente".                                  | El administrador puede visualizar e imprimir en pdf reportes realizados sobre los usuarios y sus caracteristicas, cumpliendo los reportes del listado de "Reportes de administrador". |             |

## Anexos

### Listado reportes de "Administrador"

- Usuarios Suscritos a X equipo
- Usuario Con o Sin Membresía
- Usuarios que Mas membresías han adquirido
- Usuarios que más dinero han gastado
- Usuarios de X País
- Usuarios de X genero
- Usuarios con al menos X años de edad
- Empleados que MAS/MENOS noticias han publicado
- Empleados que MAS/MENOS noticias han publicado de X Equipo
- Bitácoras de los administradores

### Listado de consultas estadisticas para usuarios

- Jugadores o Técnico de X equipo
- Jugadores o Técnico mayores a X años
- Jugadores o Técnico menores a X años
- Equipos que participaron en X competición
- Equipos de X país
- Equipos con X años de antigüedad
- Estadios en X país
- Estadios con capacidad menor o igual a X
- Histórico de partidos de X equipo
- Equipos en los que ha estado o dirigido X técnico o jugador.
- Partidos donde hubo al menos X goles
- Jugadores con más X incidencias en Y competición
- Jugadores con más X incidencias y Y competiciones de Z año
- Cantidad de X competiciones que ha ganado Y equipo
- Listado de partidos en X año
- Listado de partidos entre X equipo contra Y equipo
- Listado de partidos de X equipo
