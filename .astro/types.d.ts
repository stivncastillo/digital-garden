declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"how-build-my-digital-garden.md": {
	id: "how-build-my-digital-garden.md";
  slug: "how-build-my-digital-garden";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"solid-principles.md": {
	id: "solid-principles.md";
  slug: "solid-principles";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tailwindcss-anti-pattern.md": {
	id: "tailwindcss-anti-pattern.md";
  slug: "tailwindcss-anti-pattern";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-digital-gardens.md": {
	id: "what-is-digital-gardens.md";
  slug: "what-is-digital-gardens";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"notes": {
"books/fragmento-de-el-hombre-rebelde.md": {
	id: "books/fragmento-de-el-hombre-rebelde.md";
  slug: "books/fragmento-de-el-hombre-rebelde";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/10-usability-principles-to-improve-ui-design.md": {
	id: "design/10-usability-principles-to-improve-ui-design.md";
  slug: "design/10-usability-principles-to-improve-ui-design";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/atomic-design.md": {
	id: "design/atomic-design.md";
  slug: "design/atomic-design";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/designing-for-web-accessibility.md": {
	id: "design/designing-for-web-accessibility.md";
  slug: "design/designing-for-web-accessibility";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/micro-interactions-and-micro-animations.md": {
	id: "design/micro-interactions-and-micro-animations.md";
  slug: "design/micro-interactions-and-micro-animations";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/why-use-a-design-system.md": {
	id: "design/why-use-a-design-system.md";
  slug: "design/why-use-a-design-system";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"life/disenar-un-ambiente.md": {
	id: "life/disenar-un-ambiente.md";
  slug: "life/disenar-un-ambiente";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/apis.md": {
	id: "programming/apis.md";
  slug: "programming/apis";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/call-apply-and-bind.md": {
	id: "programming/call-apply-and-bind.md";
  slug: "programming/call-apply-and-bind";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/closures.md": {
	id: "programming/closures.md";
  slug: "programming/closures";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/color-functions.md": {
	id: "programming/color-functions.md";
  slug: "programming/color-functions";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/container-query.md": {
	id: "programming/container-query.md";
  slug: "programming/container-query";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/context-for-global-state-management.md": {
	id: "programming/context-for-global-state-management.md";
  slug: "programming/context-for-global-state-management";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/css-recipes.md": {
	id: "programming/css-recipes.md";
  slug: "programming/css-recipes";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/different-types-of-variables.md": {
	id: "programming/different-types-of-variables.md";
  slug: "programming/different-types-of-variables";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/domcontentloaded.md": {
	id: "programming/domcontentloaded.md";
  slug: "programming/domcontentloaded";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/first-contentful-paint.md": {
	id: "programming/first-contentful-paint.md";
  slug: "programming/first-contentful-paint";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/first-input-delay-fid.md": {
	id: "programming/first-input-delay-fid.md";
  slug: "programming/first-input-delay-fid";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/function-chaining.md": {
	id: "programming/function-chaining.md";
  slug: "programming/function-chaining";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/functional-components-with-hooks.md": {
	id: "programming/functional-components-with-hooks.md";
  slug: "programming/functional-components-with-hooks";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/generator-function.md": {
	id: "programming/generator-function.md";
  slug: "programming/generator-function";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/getters-and-setters.md": {
	id: "programming/getters-and-setters.md";
  slug: "programming/getters-and-setters";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/guard-clauses.md": {
	id: "programming/guard-clauses.md";
  slug: "programming/guard-clauses";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/higher-order-functions.md": {
	id: "programming/higher-order-functions.md";
  slug: "programming/higher-order-functions";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/hoisting.md": {
	id: "programming/hoisting.md";
  slug: "programming/hoisting";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/iife.md": {
	id: "programming/iife.md";
  slug: "programming/iife";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/implicit-type-coercion.md": {
	id: "programming/implicit-type-coercion.md";
  slug: "programming/implicit-type-coercion";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/inp-interaction-to-next-paint.md": {
	id: "programming/inp-interaction-to-next-paint.md";
  slug: "programming/inp-interaction-to-next-paint";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/javascript-sets.md": {
	id: "programming/javascript-sets.md";
  slug: "programming/javascript-sets";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/object-destructuring.md": {
	id: "programming/object-destructuring.md";
  slug: "programming/object-destructuring";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/prototype-partten.md": {
	id: "programming/prototype-partten.md";
  slug: "programming/prototype-partten";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/script-type.md": {
	id: "programming/script-type.md";
  slug: "programming/script-type";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/separate-business-logic-from-ui-components.md": {
	id: "programming/separate-business-logic-from-ui-components.md";
  slug: "programming/separate-business-logic-from-ui-components";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/spread-operator-and-rest-parameter.md": {
	id: "programming/spread-operator-and-rest-parameter.md";
  slug: "programming/spread-operator-and-rest-parameter";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/stop-using-return-null.md": {
	id: "programming/stop-using-return-null.md";
  slug: "programming/stop-using-return-null";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/stop-using-usememo.md": {
	id: "programming/stop-using-usememo.md";
  slug: "programming/stop-using-usememo";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/style-queries.md": {
	id: "programming/style-queries.md";
  slug: "programming/style-queries";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/subgrid.md": {
	id: "programming/subgrid.md";
  slug: "programming/subgrid";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/tailwind-antipattern.md": {
	id: "programming/tailwind-antipattern.md";
  slug: "programming/tailwind-antipattern";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"programming/typescript.md": {
	id: "programming/typescript.md";
  slug: "programming/typescript";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
};
"portfolio": {
"aloveci-design.mdx": {
	id: "aloveci-design.mdx";
  slug: "aloveci-design";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"backend-meli-test.mdx": {
	id: "backend-meli-test.mdx";
  slug: "backend-meli-test";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"comments-section.mdx": {
	id: "comments-section.mdx";
  slug: "comments-section";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"covid-status-app.mdx": {
	id: "covid-status-app.mdx";
  slug: "covid-status-app";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"digital-garden.mdx": {
	id: "digital-garden.mdx";
  slug: "digital-garden";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"family-tracker-design.mdx": {
	id: "family-tracker-design.mdx";
  slug: "family-tracker-design";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"la-manicurista-new-design.mdx": {
	id: "la-manicurista-new-design.mdx";
  slug: "la-manicurista-new-design";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"mi-derecho-de-peticion.mdx": {
	id: "mi-derecho-de-peticion.mdx";
  slug: "mi-derecho-de-peticion";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"planning-poker.mdx": {
	id: "planning-poker.mdx";
  slug: "planning-poker";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
"spotify-single-clone.mdx": {
	id: "spotify-single-clone.mdx";
  slug: "spotify-single-clone";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"authors": {
"stiven-castillo": {
	id: "stiven-castillo";
  collection: "authors";
  data: InferEntrySchema<"authors">
};
};
"talks": {
"design-system": {
	id: "design-system";
  collection: "talks";
  data: InferEntrySchema<"talks">
};
"island-arquitecture": {
	id: "island-arquitecture";
  collection: "talks";
  data: InferEntrySchema<"talks">
};
"mon-i-wanna-be-a-developer": {
	id: "mon-i-wanna-be-a-developer";
  collection: "talks";
  data: InferEntrySchema<"talks">
};
"react-server-components": {
	id: "react-server-components";
  collection: "talks";
  data: InferEntrySchema<"talks">
};
"react-state-patterns": {
	id: "react-state-patterns";
  collection: "talks";
  data: InferEntrySchema<"talks">
};
"tailwind-workshop": {
	id: "tailwind-workshop";
  collection: "talks";
  data: InferEntrySchema<"talks">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
