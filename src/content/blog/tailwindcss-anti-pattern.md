---
title: "Tailwind CSS is an Anti-Pattern"
description: "Is Tailwindcss an anti-patter?"
publishedAt: 2023-08-24
updatedAt: 2023-08-24
author: "stiven-castillo"
category: "Programming"
heroImage: "/assets/images/blog/tailwindcss-antipattern.jpg"
pinned: false
published: true
tags: ["css", "tailwindcss", "pattern"]
lang: "EN"
---

Tailwind CSS is a utility-first CSS framework that has become increasingly popular in recent years. It allows developers to quickly and easily style their websites without having to write a lot of custom CSS. However, there are some who argue that Tailwind CSS is an anti-pattern.

One of the main arguments against Tailwind CSS is that it can make your HTML code more verbose and difficult to read. When you use Tailwind CSS, you have to add a lot of utility classes to your HTML elements. This can make your code less readable and more difficult to maintain as we can see in the following example:

```html
<button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center
text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
  Action
</button>
```

`@apply` is a mistake for the purpose of Tailwind, because then you will just write normal CSS. Of course, you can mix both techniques, but then you have two ways of writing CSS. If you're also inlining some CSS, then it's even three. `@apply` makes it all worse.

Tailwindcss says that with it we shouldn't think about naming the components, that it is exhausting to look for a name for the elements and that we should only use classes in a crazy way.

Take a look at this example of a component with tailwindcss:

```html
<div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Product</a>
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Features</a>
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
  <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Company</a>
  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
</div>
```

It is not very clear, it is necessary to read all the classes, all the elements in them if we want to make some changes.

Another argument against Tailwindcss is it doesn't magically reduce the size of your package. It just moves some of the size to your HTML file. Also, you could declare redundant properties in classes, which would ultimately increase the size of the package. But you don't have to ship all the properties you use in your project. In Tailwind, you do. The toolchain scans your project , This package contains all the properties that are used in the project. Even if the user never visits any site with that specific property. A problem you don't have with CSS Modules or Web Components. Tailwind removes one problem and replaces it with another.

In conclusion, there are some valid arguments against using Tailwind CSS. If you are concerned about the readability of your HTML code, the size of your CSS files, or your ability to create custom styles, then you may want to consider using a different CSS framework.

However, there are also some benefits to using Tailwind CSS. It can be a quick and easy way to style your websites, and it can be a good choice for developers who are not familiar with CSS. Ultimately, the decision of whether or not to use Tailwind CSS is up to you.