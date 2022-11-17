---
layout: '../../../layouts/BlogPostLayout.astro'
title: 'React'
publishedAt: '2022-05-12'
description: 'Tips generales de la librería'
category: 'Code'
author: 'Stiven Castillo'
---

## Key attribute

The key attribute is one of the properties that I don't experiment much with,
here a couple of tips when using this property in lists.

### Array index as key

```tsx
{users.map((user, index) => <ItemMemo user={user} key={index} />)}
```

In this case when I update the array (i.e., I sort it) the items are going to be rendered.

- For static lists whose number and order remain the same ✅
- For `Item` with state (e.g. if the Item has a state selected). React renders again but does not recognize which item is selected. ❌
- With Memoized Item, it will not work, since React differs that the items are different and must render them. ❌
- For dynamic lists with stateless items, where items are replaced by new ones: paginated lists, search results and autocomplete and the like. ❌


### Unique 'id' as key

```ts
{users.map((user, index) => <ItemMemo user={user} key={user.id} />)}
```

In this case when the list is reordering it will not render the `Item`, which allows good performance.

- For lists that can be reordered and items can be added in random places. ✅
- For lists with memorized items (React.memo) ✅

### Ramdon string as key

```ts
{users.map((user, index) => <ItemMemo user={user} key={Math.random()} />)}
```

When you have a random string the list (DOM) will be updated every time the array is updated, therefore,
React will always identify that the items are different and when this happens React unmount and renders them again.
 which gives a hard hit to the performance of our list.

**Note** DO NOT use random strings, never. ❌