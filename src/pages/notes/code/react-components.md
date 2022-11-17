---
layout: '../../../layouts/BlogPostLayout.astro'
title: 'React - Components'
publishedAt: '2022-05-02'
description: "Structures or components that I've created and seem interesting to me"
category: 'Code'
author: 'Stiven Castillo'
---


## Dynamic icons

The svg icons are kept on `assets/icons` folder

  * Create an file `iconNames.ts` it contains the icons name.

  ```ts
  export type iconName =
    | 'icon_phone',
    | 'icon_home',
    ...
  ```

  * Create paths icons file `iconPaths.ts`:


  ```ts
  import IconPhone from './assets/icons/icon_phone.svg';
  ...

  interface PathsTypes {
    [key: string]: any;
  }

  export const allPaths: PathsTypes = {
    icon_phone: IconPhone,
    ...
  }
  ```

  * And finally, create icon component `Icon.tsx`:

  ```ts
  import { allIcons } from './iconNames';
  import { allPaths } from './iconPaths';

  export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name: allIcons;
    color?: string;
    width?: number;
    height?: number;
  }

  const Icon: React.FC<Props> = ({ name, color = "#009933", width = 15, height = 15, ...props }) => {
    const DynamicIcon = allPaths[name];

    return (
      DynamicIcon ?
        <DynamicIcon width={width} height={height} color={color} {...props} />
        : null
    )
  }

  export default Icon
  ```

## Polyformic components

The `as` property has become very popular when building polyformic components in React.
What this property allows is that we can define which HTML tag is painted when rendering the component.

```ts
import React from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// This is the first reusable type utility we built
type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// This is a new type utitlity with ref!
type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// This is the type for the "ref" only
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

/**
* This is the updated component props using PolymorphicComponentPropWithRef
*/
type TextProps<C extends React.ElementType> =
PolymorphicComponentPropWithRef<
  C,
  { color?: Rainbow | "black" }
>;

/**
* This is the type used in the type annotation for the component
*/
type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = "span">(
    { as, color, children }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";

    const style = color ? { style: { color } } : {};

    return (
      <Component {...style} ref={ref}>
        {children}
      </Component>
    );
  }
);

```

Post link: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/