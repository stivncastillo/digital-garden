---
layout: '../../layouts/BlogPostLayout.astro'
title: 'How I built my Digital garden?'
description: 'The tools I used to build my digital garden quickly and easily.'
publishedAt: '2022-04-01'
updatedAt: '2022-11-15'
author: 'Stiven Castillo'
heroImage: "/assets/images/blog/nextjs.jpg"
pinned: false
---

When I started to create my [digital garden](/blog/what-is-digital-gardens)  I had many doubts about how to build it, at the begining I wanted to use some boilerplate I found on GitHub, but I did not want to work with a structure that I was not used to, I was convinced that I wanted to do something that would scale with my ideas (you can't imagine how many times I have created projects for my personal web 😅).Taking advantage of the fact that I was watching the [Nextjs](https://platzi.com/cursos/next/) course in Platzi and that in the company where I work we were about to start a project in the same technology, I did it.

## Stack

### Nextjs

The official Nextjs deffinition is: _"Next.js is a React framework that gives you building blocks to create web applications."_

By framework it means that Nextjs is in charge of the tools and configuration to make web applications in React, it provides us with a structure, features and many additional optimizations for your application's performance. provides a structure, features and many additional optimizations for the performance of your application.

Besides the reason I mentioned at the beginning, I decided for Nextjs because it has many features that this project required, React ❤️, SSR, Defined Structure, Routing, Typescript, etc. I've always started with CRA (Create React App) but I feel like I take too long setting up navigation, typescript, folder structure, webpack, eslint, deploy, SSR, etc. The ideas die before I can have a place to publish.

### MD|MDX

For this project I decided to leave apart connections to APIs (Contentful, Firebase, etc.) that implied a little more effort and time, using Markdown to create the posts and notes seemed to me a great idea, it's simple and very common in the JAMStack world. [MDX](https://mdxjs.com) is Markdown with super powers, it allows me to use JSX and what do you know, yes, I can use react components inside my `.mdx` files, I love it!

The integration with Nextjs was not easy at all, I had to build a 'pre-process' that compiled the mdx files to pages with Nextjs. I found a super interesting repository from where I copied 🙈 this pre-process: https://github.com/timlrx/tailwind-nextjs-starter-blog (boilerplate recommended).

I really like this integration, my posts are no longer in a database, it's a file inside my project and it's very easy for me to edit it.
But it has a disadvantage and that is, what will happen when I have a lot of files... the project will become very large 🤔.

**I will implemetation with Obsidian** I'm going to create a private repository where I will keep my `.md|mdx` files which I will get them in the process of building the site to integrate them at the end of that process.

### Tailwindcss

When it comes to look-and-feel I really like working with Tailwindcss, its philosophy of atomic styles gives me great agility when building components, I don't have to have a separate file while I'm designing, it has a very cool color palette 😎 and something very important: it reduces the bundle size in production by purging the styles I'm not using.

Tailwind also offers me a very easy way to customize the Theme, use dark-mode and the responsice utilities are exquisite.

**Note:** Since Tailwindcss is considered an anti-pattern (https://javascript.plainenglish.io/tailwind-is-an-anti-pattern-ed3f64f565f0), I will eventually replace it with native CSS (without any framework).

---
[15-Nov-2022]
### Moving to Astro
**I've decided to stop using Nextjs to use Astrojs!**

Yes, I 'rebuilt' this site in [Astro](https://astro.build/), in my last talk I was discussing [island architecture](https://youtu.be/WtBdMd238aU) and I was self convinced to start using a framework with that philosophy. Nextjs is pretty powerful, but it's like using a big frying pan to fry an egg.

Astro has a few implementations that I'm interested in, for example, I don't have to do anything extra to start using MDX, I just install the implementation and that's it.

Given the island based architecture I can use any UI library (React, Vue, Svelte...) within the same site without affecting the performance of the site. I love this, because I can do some 'experiments' with other libraries I have in mind.

### Obsidian

Currently I use [Obsidian](https://obsidian.md/) to take notes and relate my ideas (My deep digital garden), the cool thing about Obsidian is that it allows me to edit Markdown files and save them in the file system of SO, which I can have in a private repository on GitHub and consume it when building the site on the server.