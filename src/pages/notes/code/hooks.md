---
layout: '../../../layouts/BlogPostLayout.astro'
title: 'React Hooks'
publishedAt: '2021-02-28'
description: 'Custom hooks and tricks about it.'
category: 'Code'
author: 'Stiven Castillo'
---

## useTimeout

```js
import React from 'react';

export default function useTimeout(callback, delay) {
  const timeoutRef = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
};
```

How to use:

```js {3-5} showLineNumbers
function App() {
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
  useTimeout(() => {
    setHasTimeElapsed(true);
  }, 5000);
  return (
    <p>
      {hasTimeElapsed
        ? '5 seconds has passed!'
        : 'The timer is running…'}
    </p>
  )
}

```
## Use useRef instead useState

To avoid re-renders in the component it is a good alternative to use *useRef* as in
this example creating an input component:

```tsx
const CustomInput: React.FC = () => {
  const [text, setText] = useState<string>()

  return (
    <input
      value={text}
      onChange={e => setValue(e.target.value)}
      type={text}
    />
  )
}
```

In this example, each keystroke will be re-rendered due to the change of state with the onChange event.

```tsx
const CustomInput: React.FC = () => {
  const inputElementRef = useRef(null);
  console.log(inputElementRef?.current?.value);

  return (
    <input ref={inputElementRef} type="text" />
  );
}
```

In this example, what is written to the input can be read using the input reference. This approach avoids unnecessary re-rendering at each keystroke.
