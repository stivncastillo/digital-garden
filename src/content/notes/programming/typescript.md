---
title: 'Typescript'
description: 'Typescript tips and tricks'
publishedAt: 2022-05-07
updatedAt: 2022-05-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["web-development", "typescript"]
---

## Choose some properties with Pick

Typescript is very powerful in terms of type checking, but sometimes it gets tedious when some types are subsets of other types and you need to define type checking for them.

Let's take an example, we have 2 types of response:

```ts
interface UserResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
}
```

```ts
interface SignInResponse {
  id: number;
  name: string;
  token: string;
}
```

Instead of defining types of the same context `SignInResponse` and `UserResponse`, we can define the type for `UserResponse` and choose some properties for `SignInResponse`. Let's see:

```ts
interface SignInResponse extends Pick<UserResponse, "id" | "name"> {
  token: string;
};
```

## Uppercase / Lowercase

```ts
type Role = "admin" | "user" | "guest";
type UppercaseRole = Uppercase<Role>; // "ADMIN" | "USER" | "GUEST"

type Role = "ADMIN" | "USER" | "GUEST";
type LowercaseRole = Lowercase<Role>; // "admin" | "user" | "guest"
```

Lo mismo sería con `Capitalize` y `Uncapitalize`

## Optional properties with Partial

Creates a type with all properties of Type set as optional.

```ts
interface Product {
  name: string;
  price: number;
  units: number;
}

type PartialProduct = Partial<Product>;

// It's like to do
interface PartialProduct {
  name?: string;
  price?: number;
  units?: number;
}
```

For the opposite effect is used `Required<Product>`

## Record

```ts
interface User {
  id: number;
  name: string;
  lastName: string
}
interface Book {
  createdBy: User;
  updatedBy: User;
}

type BookRecord = Record<"createdBy" | "updatedBy", User>;
```
