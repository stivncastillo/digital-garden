---
title: "Stop using return null"
description: "null is treated by React as a valid value to render, and it can cause the component's children to become disconnected from the tree"
publishedAt: 2023-08-25
updatedAt: 2023-08-25
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["react", "return", "null"]
---

## The Problem with “`return null"`

The primary issue with using `return null` in a component is that it can cause unexpected behavior in the application. Specifically, `null` is treated by React as a valid value to render, and it can cause the component's children to become disconnected from the tree. This can result in a variety of issues, such as unexpected re-renders or state inconsistencies

## The Benefits of "`return false"`

Instead of using `return null`, a better approach is to use `return false`. When a component returns `false`, React treats it as if it had returned `null`, but it also tells React not to render any of the component's children. This ensures that the component and its children remain connected to the tree, avoiding the issues that can arise from using `return null`

## When to Use “`return false"`

While using `return false` instead of `return null` is generally considered better practice, it's important to note that there are cases where it may not be appropriate. Specifically, `return false` should only be used when a component needs to indicate that it should not render anything. If a component needs to render something conditionally, it should use conditional rendering techniques such as `if` statements or ternary operators.