---
title: "Atomic Design"
description: "It is a systematic approach that breaks down a UI into its fundamental building blocks, called atoms"
publishedAt: 2023-06-13
updatedAt: 2023-06-13
category: "Design"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["design-systems", "atomic", "ui"]
---

Atomic design system is a design methodology first coined by Brad Frost that's inspired by chemistry. It described a simple model for constructing interfaces made of smaller elements that fit together and form bigger blocks and larger components to create complete and polished designs

It is a systematic approach that breaks down a UI into its fundamental building blocks, called atoms, and then progressively combines them to form more complex components and ultimately complete interface systems.

## Atomic Structure:

### Atoms
These are the smallest, indivisible elements of a UI, such as buttons, input fields, labels, icons, etc. They are the smallest interface elements that can't be broken down any further and represent basic HTML tags or UI patterns.

### Molecules
Molecules are a collection of atoms bonded together. They are built using the most basic elements and build bigger components like input fields, list items, simple cards, menu items, etc.
Examples include a search form (composed of an input field, a button, and a label) or a navigation bar (composed of a logo, menu items, and icons).

### Organisms
Organisms are more complex interface elements that are consisting of bigger groups of atoms and molecules. They are usually contact forms, charts, more complex cards, calendars, tab bars, headers, menus, etc.

Organisms are groups of molecules and atoms working together as a functional unit. Examples include a header, a footer, or a product card. Organisms represent sections or modules of a UI.

### Templates
Templates focus on the page's content structure rather than the page's final content. They are like low fidelity wireframes. Pages however, are specific templates that show what a UI looks like with real and finalised content put in place.

Templates provide the basic structure for an entire page by arranging multiple organisms. They define the layout and positioning of different organisms on a page but don't contain specific content.

### Pages
Pages are the final implementations of templates. They are the specific instances where content is populated into the defined structures of templates.


## Component Reusability: 
The Atomic Design approach promotes reusability of UI components. Atoms and molecules can be reused across different organisms and templates, providing consistency and scalability to the design system.

## Design System Thinking
Atomic Design encourages the development of a design system—a centralized collection of reusable components, guidelines, and principles that ensure consistency and efficiency in UI design and development. This system helps streamline the design process, encourages collaboration, and promotes a unified user experience across products and platforms.

## Incremental Design and Development
Atomic Design allows designers and developers to work incrementally. Starting from atoms, they gradually build up to more complex components and UIs. This modular approach supports iterative design and development, making it easier to maintain, update, and extend the UI system over time.

## Collaboration and Communication
Atomic Design facilitates collaboration between designers, developers, and stakeholders. The shared vocabulary and structured hierarchy of components enable effective communication and understanding across teams, resulting in a more cohesive and efficient design process.

## Tooling and Implementation
Various design and development tools can assist in implementing Atomic Design principles. Design tools like Sketch, Figma, or Adobe XD allow designers to create and organize components. Development tools like React, Vue.js, or Angular can help developers build reusable UI components.