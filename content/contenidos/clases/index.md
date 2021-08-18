---
title: '01 Clases'
date: 2019-02-11T19:27:37+10:00
weight: 2
image: "/images/class.gif"
summary: "Los encuentros serán virtuales y usaremos Big Blue Button para gestionarlas. Tendremos como referencia teórica al libro \"The book of Shaders\" escrito por Patricio Gonzalez Vivo. Cada clase dura 2hs y estará dada por la siguiente estruc"
---

Los encuentros serán virtuales y usaremos [Big Blue Button](https://bigbluebutton.org/) para gestionarlas.

Tendremos como referencia teórica al libro [**"The book of Shaders"**](https://thebookofshaders.com/) escrito por [Patricio Gonzalez Vivo](http://patriciogonzalezvivo.com/)

Cada clase dura 2hs y estará dada por la siguiente estructura:

```
18:00 - 18:40 (30 min): Intro a temas teóricos.
18:40 - 19-20 (50 min): Escribimos juntes un script pasando por checkpoints.
19:20 - 19-50 (30 min): Tiempo creativo! Y muestra.
19:50 - 20-00 (10 min): Preguntas y respuestas.

```


# **Primer Encuentro** 
## Introducción a shaders con GLSL
##### Fecha: 07/09/2021

Introducción a la computación gráfica y GLSL. Vemos su sintáxis básica. Exploramos [glsl_Editor](https://thebookofshaders.com/edit.php) para escribir un programa.

Introducimos sistemas de coordenadas: uv y uvN para posicionar a un píxel. Exploramos el espacio de color RGB.
Introducimos transformaciones simples escalar y rotar.

##### Objetivo: Entender a un shader como programa que recibe posiciones y devuelve valor para cada píxel en simultáneo.

# **Segundo Encuentro** 
## Sistemas de coordenadas y dibujo de geometrias
#### Fecha: 14/09/2021

Seguiremos con los fundamentales sobre los fragment shaders, introducimos sistemas de coordenadas polares. Dibujamos geometrías simples a través de las SDFs(funciones de distancia con signo).
Profundizamos sobre transformaciones simples: escalar, trasladar y rotar.

Bonus: Exploremos la función coseno para generar paletas de color.

#####  Objetivo:  Tener presente el sistema de coordenadas (rangos de nuestras variables que describen posición en la pantalla) cuando queremos escribir un shader. 


# ** Tercer  Encuentro** 
## Explorar geometrias procedurales
#### Fecha: 21/09/2021

Introducimos los ciclos(loop) como estructuras de control del flujo del programa, y como al combinarla con transformaciones simples que nos permiten crear estructuras complejas.
Veremos como doblar el espacio nos permite generar geometrías procedurales, o fractales.

Bonus: Exploremos el espacio de color HSV.

##### Objetivo:  Generar una “geometría” a partir de un procedimiento (loop), en donde cada paso es una combinación  de transformaciones simples: escalar, trasladar y rotar.

