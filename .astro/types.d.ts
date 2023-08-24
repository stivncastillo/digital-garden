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
	export type CollectionEntry<C extends keyof AnyEntryMap> = AnyEntryMap[C][keyof AnyEntryMap[C]];

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
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

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
"design/Atomic Design.md": {
	id: "design/Atomic Design.md";
  slug: "design/atomic-design";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/Designing for Web Accessibility.md": {
	id: "design/Designing for Web Accessibility.md";
  slug: "design/designing-for-web-accessibility";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/Dieter Ram's 10 Principles of Good Design.md": {
	id: "design/Dieter Ram's 10 Principles of Good Design.md";
  slug: "design/dieter-rams-10-principles-of-good-design";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/Maneras de transmitir información.md": {
	id: "design/Maneras de transmitir información.md";
  slug: "design/maneras-de-transmitir-información";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/Micro-interactions and micro-animations.md": {
	id: "design/Micro-interactions and micro-animations.md";
  slug: "design/micro-interactions-and-micro-animations";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"design/Why use a design system.md": {
	id: "design/Why use a design system.md";
  slug: "design/why-use-a-design-system";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"life/disenar-un-hambiente-optimo.md": {
	id: "life/disenar-un-hambiente-optimo.md";
  slug: "life/disenar-un-hambiente-optimo";
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
"programming/guard-clauses-javascript.md": {
	id: "programming/guard-clauses-javascript.md";
  slug: "programming/guard-clauses-javascript";
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
