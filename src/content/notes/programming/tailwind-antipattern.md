---
title: "Tailwind Antipattern"
description: "Tailwind is an antiparttern"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "ES"
tags: ["css", "tailwind"]
---

## Infla el HTML
Para estilar un botón hay que escribir al rededor de 9 a 15 clases, esto hace que no podamos leer correctamente el html y nos dificulta saber qué clases tiene el botón para futuras modificaciones, lo que hace que tengamos que leer todas las clases una y otra vez para saber como está compuesto el diseño del botón.

```html
<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">  
  <span class="sr-only">Open main menu</span>  
  <!-- Heroicon name: outline/menu -->  
  <svg class="h-6 w-6" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">  
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />  
  </svg>  
</button>
```

El código se lee mucho más a menudo de lo que se escribe

@apply es un error para el propósito de Tailwind, ya que entonces sólo escribirás CSS normal. Por supuesto, puedes mezclar ambas técnicas, pero entonces tienes dos formas de escribir CSS. Si además estás alineando algo de CSS, entonces son incluso tres. @apply lo empeora todo.

## Dificultad para leer clases
Tailwind css dice que con el no debemos pensar en nombrar los componentes, que es desgastante buscar un nombre para los elementos y que solo debemos usar clases a lo loco.

Ejemplo de un componente con tailwind

```html
<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">  
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>  
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>  
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>  
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>  
  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>  
</div>
```
No es muy claro, toca leer todas las clases, todos los elementos en ellas si queremos hacer algunos cambios

veamos uno con clases css propias
```html
<div class="navigation-desktop" role="navigation" aria-label="Main Navigation">  
  <a href="#">Product</a>  
  <a href="#">Features</a>  
  <a href="#">Marketplace</a>  
  <a href="#">Company</a>  
  <a href="#">Log in</a>  
</div>
```
Ahora es mucho más legible, sabemos el objetivo del componente, que elementos tiene y no tenemos que repasar el html una y otra vez.

## Saltar de un archivo a otro

Tener todo en un solo archivo muchas veces no es práctico, es poco legible, de echo es la razón por la cual se recomienda usar css y js en archivos separados.

## Css da miedo

Si solo el hecho de tener un archivo css debidamente organizado y separado, da un poco de susto cambiar algo; ahora imaginarme tener que releer y buscar en infinidad de clases dentro de un archivo html, eso da más miedo. vean esta clase `scale-[calc(204/299)]`, tiene números mágicos, se pueden imaginar tener que cambiar esos números que a veces a simple vista no entendemos que significa.

## El tamaño del bundle

Tailwind no reduce mágicamente el tamaño de tu paquete. Sólo traslada parte del tamaño a tu archivo HTML. Además, podrías declarar propiedades redundantes en las clases, lo que en última instancia aumentaría el tamaño del paquete. Pero no tienes que enviar todas las propiedades que utilizas en tu proyecto. En Tailwind, lo haces. La cadena de herramientas escanea tu proyecto , Este paquete contiene todas las propiedades que se utilizan en el proyecto. Incluso si el usuario nunca visita ningún sitio con esa propiedad específica. Un problema que no tienes con los Módulos CSS o los Componentes Web. Tailwind elimina un problema y lo sustituye por otro, ni más ni menos.   

Otro problema es que no estás aprendiendo patrones CSS usando Tailwind. Por ejemplo, ¿qué hace space-x-8? Se traduce en .your-element > * + * { margin-left: 2rem; } que es un patrón de diseño típico en CSS. ¿Sabes lo que hace? Es tan común que deberías ser capaz de reconocer este patrón a primera vista.