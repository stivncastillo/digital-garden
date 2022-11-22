---
layout: '@layouts/BlogPostLayout.astro'
title: 'React - Folder structure'
publishedAt: '2022-04-13'
description: 'Looking for the right way to order my application in react '
category: 'Code'
author: 'Stiven Castillo'
---

As described in the react page: ["React doesn’t have opinions"](https://reactjs.org/docs/faq-structure.html#is-there-a-recommended-way-to-structure-react-projects).
They do not propose an ideal structure for organizing a react application.

I'm going to expose and explore different folder structures that may help me to build a solid architecture for teamwork.

## Multi-package monorepo

The goal of this architecture is to provide an organization at the _feature_ level in order to decompose code into small 'applications' that can be maintained. in order to decompose the code into small 'applications' that can be maintained by different squads, allowing the by different teams, allowing the independence of each one of them.

By example:

```bash
├── packages
│   ├── core
│   │   ├── button
│   │   │   └── package.json
│   │   ├── layout
│   │   └── styles
│   └── product
│       ├── board
│       ├── issue
│       ├── sidebar
│       │   ├── data
│       │   ├── shared
│       │   └── ui
│       │       ├── development-section
│       │       └── planning-section
│       └── topbar
│           ├── logo
│           └── top-menu
└── website
    ├── pages
    │   └── issue
    └── public
```

**Note** I'm writing a completed post about Feature-Driven Development.