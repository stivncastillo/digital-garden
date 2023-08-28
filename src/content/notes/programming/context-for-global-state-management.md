---
title: "Context for Global State Management"
description: "By creating a context for your business logic, you can access the state and actions from any component within the context."
publishedAt: 2023-08-28
updatedAt: 2023-08-28
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["react", "context"]
---

For state management that needs to be shared across multiple components, React 18’s Context API can be leveraged. By creating a context for your business logic, you can access the state and actions from any component within the context.

Code Example (Using Context for State Management):

```jsx
// UserDataContext.js
import React, { createContext, useContext } from 'react';
import { useUserData } from './useUserData';

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const userData = useUserData();

  return (
    <UserDataContext.Provider value={{userData}}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserDataContext() {
	const context = useContext(UserDataContext);
	if (context === undefined) {
		throw new Error('useUserDataContext must be used within a UserDataProvider');
	}
	return context;
}
```

Here we can use the context to share the state:
```jsx
// Implement the provider
import {UserDataProvider} from './UserDataContext'
import UserList from './UserList'

const App = () => {
	return (
		<UserDataProvider>
			<UserList />
		</UserDataProvider>
	)
}
```

```jsx
import { useUserDataContext } from "./UserDataContext";

const UserList = () => {
	const { userData } = useUserDataContext();
	return (
		<ul>
			{userData.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
}
```

[[Separate Business Logic from UI Components]]