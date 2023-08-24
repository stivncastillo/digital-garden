---
title: "SOLID Principles"
description: "SOLID is an acronym for five design principles—Single Responsibility Principle, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion"
publishedAt: 2022-08-29
updatedAt: 2022-08-29
author: "stiven-castillo"
category: "Programming"
heroImage: "/assets/images/blog/solid.jpg"
pinned: true
published: true
lang: "EN"
tags:
  - solid
  - typescript
---

SOLID is an acronym for five design principles—Single Responsibility Principle, Open-Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle. These principles aim to guide developers in writing clean, maintainable, and flexible code. In this post, we'll explore each principle and provide examples of how they can be applied in TypeScript.

## Single Responsibility Principle (SRP)

The Single Responsibility Principle states that a class should have only one reason to change. It emphasizes that a class should have a single responsibility and should not be responsible for multiple unrelated tasks. By adhering to SRP, classes become more focused and less prone to modification.

**Example:**

Let's say we have a `User` class that handles both user authentication and user profile management. Violating SRP, it might look like this:

```typescript
class User {
  authenticate(username: string, password: string) {
    // Authenticates user
  }

  updateProfile(user: User) {
    // Updates user profile
  }
}
```

To adhere to SRP, we can split the responsibilities into separate classes:

```typescript
class Authenticator {
  authenticate(username: string, password: string) {
    // Authenticates user
  }
}

class UserProfileManager {
  updateProfile(user: User) {
    // Updates user profile
  }
}
```

Now, each class has a single responsibility, making them easier to understand and maintain.

## Open-Closed Principle (OCP)

The Open-Closed Principle states that software entities (classes, modules, functions) should be open for extension but closed for modification. It encourages designing code in a way that allows adding new features or behavior without modifying existing code. This principle promotes code reuse, maintainability, and scalability.

**Example:**

Consider a `Shape` class with different subclasses representing different shapes. Violating OCP, we might add a new shape by modifying the existing code:

```typescript
class Shape {
  draw() {
    // Draw shape
  }
}

class Circle extends Shape {
  draw() {
    // Draw circle
  }
}

class Square extends Shape {
  draw() {
    // Draw square
  }
}
```

To adhere to OCP, we can introduce an abstract class and use inheritance and polymorphism:

```typescript
abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw() {
    // Draw circle
  }
}

class Square extends Shape {
  draw() {
    // Draw square
  }
}

class Triangle extends Shape {
  draw() {
    // Draw triangle
  }
}
```

Now, we can easily add new shapes by extending the `Shape` class without modifying the existing code.

## Liskov Substitution Principle (LSP)

The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. It ensures that subclasses adhere to the contract defined by the superclass. Violating LSP can lead to unexpected behavior and logic errors.

**Example:**

Let's consider a `Rectangle` class and a `Square` class that extends it. Violating LSP, we might mistakenly assume that a `Square` is a special case of a `Rectangle`:

```typescript
class Rectangle {
  constructor(protected width: number, protected height: number) {}

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number) {
    this.width = height;
    this.height = height;
  }
}
```

In this case, modifying the width or height of a `Square` object leads to unexpected behavior since it violates the behavior of a `Rectangle`. To adhere to LSP, we can redesign the classes:

```typescript
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(protected width: number, protected height: number) {}

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  setSide(side: number) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}
```

Now, `Rectangle` and `Square` are separate classes, and modifying one does not affect the behavior of the other.

## Interface Segregation Principle (ISP)

The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use. It promotes creating specific interfaces that are tailored to the needs of clients to avoid unnecessary dependencies and potential code bloat.

**Example:**

Consider an `Animal` interface with methods for flying and swimming. Violating ISP, if a client only needs the flying behavior, it would still have to implement the swimming methods:

```typescript
interface Animal {
  fly(): void;
  swim(): void;
}

class Bird implements Animal {
  fly() {
    // Bird flying behavior
  }

  swim() {
    // Bird swimming behavior
  }
}

class Fish implements Animal {
  fly() {
    // Fish cannot fly, empty method
  }

  swim() {
    // Fish swimming behavior
  }
}
```

To adhere to ISP, we can split the interfaces into smaller, more specific ones:

```typescript
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly() {
    // Bird flying behavior
  }
}

class Fish implements Swimmable {
  swim() {
    // Fish swimming behavior
  }
}
```

Now, clients can implement only the interfaces they need, reducing unnecessary dependencies.

## Dependency Inversion Principle (DIP)

The Dependency Inversion Principle states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. It encourages decoupling between modules and promotes the use of interfaces or abstractions to define contracts, reducing direct dependencies.

**Example:**

Consider a `NotificationService` that directly depends on a concrete `EmailSender` implementation. Violating DIP, it tightly couples the high-level module with a low-level module:

```typescript
class EmailSender {
  sendEmail() {
    // Sends email
  }
}

class NotificationService {
  private emailSender: EmailSender;

  constructor() {
    this.emailSender = new EmailSender();
  }

  sendNotification() {
    // Uses email sender to send notifications
    this.emailSender.sendEmail();
  }
}
```

To adhere to DIP, we can introduce an abstraction and depend on that instead:

```typescript
interface MessageSender {
  send(): void;
}

class EmailSender implements MessageSender {
  send() {
    // Sends email
  }
}

class NotificationService {
  private messageSender: MessageSender;

  constructor(messageSender: MessageSender) {
    this.messageSender = messageSender;
  }

  sendNotification() {
    // Uses message sender to send notifications
    this.messageSender.send();
  }
}

const emailSender = new EmailSender();
const notificationService = new NotificationService(emailSender);
```

Now, the `NotificationService` depends on the `MessageSender` interface, allowing for easier swapping of implementations and reducing the coupling between modules.

---

In this post, we explored the SOLID principles—SRP, OCP, LSP, ISP, and DIP—and saw how they can be applied in TypeScript code. By following these principles, we can design more maintainable, flexible, and scalable software systems.

Remember, SOLID principles are guidelines, and their application may vary based on the specific requirements and context of your projects. Nonetheless, understanding and applying these principles can help improve the quality and readability of your codebase.
