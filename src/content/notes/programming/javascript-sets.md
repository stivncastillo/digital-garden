---
title: "Javascript Sets"
description: "Javascript Sets are about to become a lot more useful with theses 7 new methods"
publishedAt: 2023-08-25
updatedAt: 2023-08-25
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript", "sets"]
---

This is a proposal to add methods like union and intersection to JavaScript's built-in `Set` class.

It is currently at stage 3.

- `Set.prototype.intersection(other)`
- `Set.prototype.union(other)`
- `Set.prototype.difference(other)`
- `Set.prototype.symmetricDifference(other)`
- `Set.prototype.isSubsetOf(other)`
- `Set.prototype.isSupersetOf(other)`
- `Set.prototype.isDisjointFrom(other)`

Some examples:

```javascript
const hosts = new set(['Wes', 'Scott', 'Snickers']);
const team = new Set(['Wes', 'Scott', 'Kaitlin', 'Ben']);
const fans = new Set([ 'Paige', 'Nick']);

// Difference between two sets
team.difference(hosts); // Set {'Kaitlin', 'Ben'}

// overlap between two sets
team.intersection(hosts); // Set {'Wes', 'Scott'}

// Items that are in one set or the other, but not both
team. symmetricDifference(hosts); // Set {'Kaitlin', 'Ben', 'Snickers'}

// All items in both sets
team.union(hosts); // Set {'Wes', 'Scott', 'Kaitlin', 'Ben', 'Snickers'}

// Are Wes and scott in this set? 
new Set(['Wes', 'Scott']).isSubsetof(hosts); // true

// Does this set have all items in the passed in set? 
hosts.isSupersetof(new Set(['Wes', 'Scott' ])); // true

/ Is there no overlap between these two sets? 
team.isDisjointFrom(hosts); // false
team.isDisjointFrom( fans); // true
```

These methods would all require their arguments to be a Set, or at least something which looks like a Set in terms of having a numeric `size` property as well as `keys` and `has` methods.

https://github.com/tc39/proposal-set-methods