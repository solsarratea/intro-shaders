---
title: '01 Clases'
date: 2019-02-11T19:27:37+10:00
weight: 2
---

Los encuentros serán virtuales y usaremos  [Big Blue Button](https://bigbluebutton.org/) para gestionarlas.

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

Introducción a GLSL, vemos su sintáxis básica. Exploramos [glsl_Editor](https://thebookofshaders.com/edit.php).
Introducimos sistemas de coordenadas uv y uvN para posicionar a un píxel. Exploramos el espacio de color RGB.

##### Objetivo: Entender a un shader como programa que recibe posiciones y devuelve valor para cada píxel en simultáneo.


# **Segundo Encuentro** 
## Sistemas de coordenadas y dibujo de geometrias
#### Fecha: 14/09/2021

Seguiremos con los fundamentales sobre los fragment shaders, introducimos otros sistemas de coordenaas, y dibujamos geometrías simples a través de las SDFs(funciones de distancia con signo).
Introducimos transformaciones simplesÑ escalar, trasladar y rotar.


#####  Objetivo:  Tener presente el sistema de coordenadas (rangos de nuestras variables que describen posición en la pantalla) cuando queremos escribir un shader. 


# **Segundo Encuentro** 
## Explorar geometrias procedurales
#### Fecha: 21/09/2021

Profundizamos sobre transformaciones simples: escalar, trasladar y rotar.Introducimos los ciclos(loop) como estructuras de control del flujo del programa, y como al combinarla con transformaciones simplesque nos permiten crear estructuras complejas.

Bonus: Exploremos la función coseno para generar paletas de color.


##### Objetivo:  Generar una “geometría” a partir de un procedimiento (loop), en donde cada paso es una combinación  de transformaciones simples: escalar, trasladar y rotar.

