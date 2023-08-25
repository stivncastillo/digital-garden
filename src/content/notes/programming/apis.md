---
title: "Javascript APIs"
description: "Small description about some API's in Javascript"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript", "abort controller", "interception observer"]
---

### Abort controller
The AbortController interface is a built-in JavaScript object that allows you to abort (cancel) asynchronous tasks or operations. It provides a way to signal and control the abortion of activities such as network requests, timers, or any other ongoing operation. By creating an instance of the AbortController and calling its `abort()` method, you can cancel the associated task and clean up any resources associated with it.

### Interception Observer
is an API that allows you to efficiently detect when an HTML element enters or exits the viewport (i.e., becomes visible or hidden). It provides a way to asynchronously observe changes in the intersection of a target element with its parent or the top-level document's viewport. This is particularly useful for implementing lazy loading of images, infinite scrolling, or triggering actions when certain elements become visible to the user.

### VisibilityChange
is a browser event that fires when the visibility state of a web page changes. It indicates whether the page is currently visible to the user or hidden (e.g., when the user switches to a different tab or minimizes the browser window). You can listen for this event and perform certain actions when the visibility state changes, such as pausing or resuming animations, updating data, or controlling resource usage based on the page's visibility.

### Service workers
are JavaScript files that run separately from web pages and act as network proxies. They allow you to control and intercept network requests made by your web application, enabling features such as offline support, background synchronization, and push notifications. Service workers run in the background, independent of web pages, and can cache resources, modify network requests and responses, and provide a persistent data storage called the Cache API. They enable the creation of Progressive Web Applications (PWAs) that can offer a native-like experience to users.