# Prueba para Desarrollador Frontend - Tradeview Markets - Descripción del Proyecto
Transformar el diseño proporcionado en una página web responsive utilizando el framework Vue.js. Cada sección del diseño debe representarse como un componente Vue. Presta atención a mantener un diseño responsive y garantizar una experiencia de usuario fluida.
- Diseño del Mockup: https://xd.adobe.com/view/3d630dbd-e221-44c5-891f-0ad1b32a661d-6830/

## Características Principales

- Crea un proyecto Vue.js.
- Crea componentes Vue para cada sección del mockup.
- Implementa el diseño, asegurándote de que la página sea completamente responsive.
- Utiliza HTML, CSS y las mejores prácticas de Vue.js.
- Aloja la página web en línea y comparte el enlace para su visualización.

## Tecnologías Utilizadas
- Vue.js: Se utiliza Vue.js como el framework principal para construir la interfaz de usuario y gestionar los componentes de la aplicación.
- Css: CSS permite separar el contenido HTML de su presentación visual. Es decir, te permite mantener el código HTML limpio y estructurado, mientras que el estilo se define en un archivo CSS separado. Este orden mejora la legibilidad del código y facilita el mantenimiento, así como la actualización de los estilos
- Vuetify: Vuetify es un framework de diseño que proporciona componentes y estilos predefinidos para crear una interfaz atractiva y coherente.

## Notas para los Desarrolladores
- Configura un repositorio Git para el proyecto Vue.js.
- Realiza commits de tu código con mensajes claros.
- Asegúrate de que tu repositorio sea accesible y contenga los archivos necesarios.

# Pasos para la instalacion del proyecto Front End

1.	Realice la instalación de Node.js desde el sitio https://nodejs.org/es/ (si aún no lo ha realizado), version v14.21.3.
2.	Clone el repositorio desde GitHub con el siguiente comando: git clone https://github.com/wilmarti/VisorSuperHeroes.git
3.	Abra la carpeta denominada FrontEndPrueba en un editor de codigo como Visual Studio code.
4.	Presione el comando “npm i”, para descargar todas las dependencias del proyecto.
5.	Para lanzar el Front End digite el comando “npm run serve”
7.	Copie la url que el comando anterior le entregue, ejemplo http://localhost:8082/ y péguela en el navegador de su preferencia.
8.	Debe observar algo como se muestra en la siguiente imagen:

# Buenas Prácticas de Desarrollo Front-End

Este proyecto de páctica contiene un conjunto de buenas prácticas para el desarrollo front-end. Estas prácticas están diseñadas para mejorar la calidad del código, la colaboración y la mantenibilidad de proyectos front-end.

## Contenido

1. [Estructura de Carpetas](#estructura-de-carpetas)
2. [Nomenclatura y Convenciones](#nomenclatura-y-convenciones)
3. [Rendimiento](#rendimiento)
4. [Compatibilidad con Navegadores](#compatibilidad-con-navegadores)
5. [Control de Versiones](#control-de-versiones)
6. [Herramientas y Dependencias](#herramientas-y-dependencias)
7. [Diseño para dispositivos móviles](#diseño-para-dispositivos-móviless)
8. [Recursos Adicionales Utilizados](#recursos-adicionales-utilizados)

## Estructura de Carpetas

- La carpeta principal del proyecto se denomina FrontEndPrueba, la cual organiza los archivos de manera lógica y coherente para facilitar la navegación y el mantenimiento.
- El proyecto usa la siguiente estructura de carpetas: `src/`,`components/`,`router/`,`store/`,`views/`,`assets/`, `css/`, `js/`, `images/`, etc., lo cual evidencia la organizacion de la estructura y de los correspondientes archivos.

## Nomenclatura y Convenciones

- Se utilizaron nombres de variables, componentes e identificadores descriptivos y significativos.
- Se Siguio una convención de nomenclatura consistente la cual fue camelCase.

## Rendimiento

- Se optimizaron y comprimieron los recursos (imágenes, CSS, JS) para reducir los tiempos de carga.
- Minimiza las solicitudes HTTP utilizando librerias como axios.
- Se utilizaron herramientas de almacenamiento del navegador, como lo son LocalStorage y Cookies.

## Compatibilidad con Navegadores

- Se Probó y aseguró que el sitio funciona correctamente en una variedad de navegadores y dispositivos.

## Control de Versiones

- Se Utilizó el sistema de control de versiones Git, para rastrear y administrar los cambios en el código.
- Se crearon ramas separadas para características, correcciones y experimentos, y se realizaron fusiones a la rama principal `master` mediante solicitudes pull.

## Herramientas y Dependencias

- JavaScript como lenguaje de alto nivel.
- Se utilizo Vue.js como Framework Front end
- Para el Back End se utilizo el Api Rest de Marvel (https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=345d1a90c95c65fcb
e249e2906cef261&hash=5d1b5769ce0f6716c78da23702ad53e0)
Las utilidades y dependencias extras utilizadas fueron las siguiente:
   * Axios (es un paquete que encontraremos en npm y que nos permite hacer peticiones o llamadas al contenido de un enlace HTTP.)
   * Vuetify (Biblioteca de interfaz de usuario de Vue que ofrece componentes de Material Design Framework)
   * ScrollDiv (componente contenedor de desplazamiento basado en vue.js)
   * VuePaginate (componente de paginacion basado en vue.js)
- Proporciona instrucciones claras sobre cómo configurar el entorno de desarrollo y cómo instalar dependencias.

## Diseño para dispositivos móviles

- El sistema fue diseñado utilizando Vuetify (Biblioteca de interfaz de usuario de Vue que ofrece componentes de Material Design Framework),esta libreria facilita el traajo para el manejo de interfaces de usuario responsivas, es decir, autoajusables a dispositivos móviles, tabien se trabajo con el sistema de cajas Flexbox, el cual es un modelo de diseño CSS3 para manejo de estructuras responsivas.
- Se realizó el diseño con tarjetas (cards), para facilitar la vista y navegación en el sitio y cualquier dispositivo movil.

## Recursos Adicionales Utilizados
- Reutilizacion de funciones
- try catch
- identacion de codigo
- documentación de codigo
- Async away
- Estucturacion en vistas y en componentes
- .ENV
---


```




 
