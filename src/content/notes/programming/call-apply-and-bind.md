---
title: "Call, apply y bind"
description: "Estos nos sirve para establecer el valor por defecto de this"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "ES"
tags: ["javascript"]
---

Estos nos sirve para establecer el valor por defecto de this, es decir, nos sirve para cambiar el contexto de la función cuando sea llamada.

## Call
Llama la función y recibe el objeto `this` que se quiere definir. los siguientes parámetros serían los parámetros de la función propia.

```jsx
function.call(thisArg[, arg1[, arg2[, ...]]])
```

## Apply
Hace lo mismo de call pero se pasan los parámetros diferente, por medio de un arreglo:

```jsx
fun.apply(thisArg[, argsArray])
```

## Bind
No llama a la función de una, retorna una nueva función con un contexto, ese contexto se define en el primer parámetro

El método **`bind()`** crea una nueva función, que cuando es llamada, asigna a su operador  _this_ el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

```jsx
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```