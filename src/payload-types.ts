/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    events: Event;
    articles: Article;
    pages: Page;
    quotes: Quote;
    people: Person;
    tags: Tag;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    articles: ArticlesSelect<false> | ArticlesSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    quotes: QuotesSelect<false> | QuotesSelect<true>;
    people: PeopleSelect<false> | PeopleSelect<true>;
    tags: TagsSelect<false> | TagsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    footer: Footer;
  };
  globalsSelect: {
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: string;
  title: string;
  image: string | Media;
  tag: (string | Tag)[];
  location: string;
  date: string;
  link: string;
  guests?: string | null;
  description: string;
  otherInfo?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: string;
  title: string;
  image?: (string | null) | Media;
  tag: (string | Tag)[];
  'Data Articolo': string;
  Link: string;
  Descrizione?: string | null;
  source: string;
  author?: string | null;
  eventRelated?: (string | Event)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  /**
   * Es: home, chi-siamo, contatti...
   */
  slug: string;
  layout: (
    | HeroBlockProps
    | SectionWithMediaAndText
    | CarouselBlock
    | QuoteBlock
    | PageTitleBlock
    | ArticlesBlock
    | BimTeamProps
  )[];
  meta?: {
    metaTitle?: string | null;
    metaDescription?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlockProps".
 */
export interface HeroBlockProps {
  title: string;
  ctaPrimary?: {
    label?: string | null;
    url?: string | null;
  };
  ctaSecondary?: {
    label?: string | null;
    url?: string | null;
  };
  image?: (string | null) | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SectionWithMediaAndText".
 */
export interface SectionWithMediaAndText {
  title: string;
  reference?: string | null;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  image?: (string | null) | Media;
  layout?: ('right' | 'left') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'sectionWithMediaAndText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CarouselBlock".
 */
export interface CarouselBlock {
  title?: string | null;
  reference?: string | null;
  events: (string | Event)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'carousel';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock".
 */
export interface QuoteBlock {
  blockTitle?: string | null;
  reference?: string | null;
  quotes: {
    quote?: (string | null) | Quote;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'quoteBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quotes".
 */
export interface Quote {
  id: string;
  content: string;
  source: string;
  article?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PageTitleBlock".
 */
export interface PageTitleBlock {
  title: string;
  titleColor: 'black' | 'white' | 'teal-600';
  image?: (string | null) | Media;
  layoutSelector: 'background' | 'imageDown' | 'imageUp';
  paragraphTitle?: string | null;
  paragraph?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'pageTitleBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ArticlesBlock".
 */
export interface ArticlesBlock {
  sectionTitle?: string | null;
  reference?: string | null;
  articlesToShow?: number | null;
  articles?:
    | {
        article?: (string | null) | Article;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'articlesBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BimTeamProps".
 */
export interface BimTeamProps {
  sectionTitle?: string | null;
  reference?: string | null;
  people: (string | Person)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'bimTeamBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "people".
 */
export interface Person {
  id: string;
  name: string;
  image: string | Media;
  role?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'events';
        value: string | Event;
      } | null)
    | ({
        relationTo: 'articles';
        value: string | Article;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'quotes';
        value: string | Quote;
      } | null)
    | ({
        relationTo: 'people';
        value: string | Person;
      } | null)
    | ({
        relationTo: 'tags';
        value: string | Tag;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  title?: T;
  image?: T;
  tag?: T;
  location?: T;
  date?: T;
  link?: T;
  guests?: T;
  description?: T;
  otherInfo?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles_select".
 */
export interface ArticlesSelect<T extends boolean = true> {
  title?: T;
  image?: T;
  tag?: T;
  'Data Articolo'?: T;
  Link?: T;
  Descrizione?: T;
  source?: T;
  author?: T;
  eventRelated?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  layout?:
    | T
    | {
        hero?: T | HeroBlockPropsSelect<T>;
        sectionWithMediaAndText?: T | SectionWithMediaAndTextSelect<T>;
        carousel?: T | CarouselBlockSelect<T>;
        quoteBlock?: T | QuoteBlockSelect<T>;
        pageTitleBlock?: T | PageTitleBlockSelect<T>;
        articlesBlock?: T | ArticlesBlockSelect<T>;
        bimTeamBlock?: T | BimTeamPropsSelect<T>;
      };
  meta?:
    | T
    | {
        metaTitle?: T;
        metaDescription?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlockProps_select".
 */
export interface HeroBlockPropsSelect<T extends boolean = true> {
  title?: T;
  ctaPrimary?:
    | T
    | {
        label?: T;
        url?: T;
      };
  ctaSecondary?:
    | T
    | {
        label?: T;
        url?: T;
      };
  image?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SectionWithMediaAndText_select".
 */
export interface SectionWithMediaAndTextSelect<T extends boolean = true> {
  title?: T;
  reference?: T;
  content?: T;
  image?: T;
  layout?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CarouselBlock_select".
 */
export interface CarouselBlockSelect<T extends boolean = true> {
  title?: T;
  reference?: T;
  events?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock_select".
 */
export interface QuoteBlockSelect<T extends boolean = true> {
  blockTitle?: T;
  reference?: T;
  quotes?:
    | T
    | {
        quote?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "PageTitleBlock_select".
 */
export interface PageTitleBlockSelect<T extends boolean = true> {
  title?: T;
  titleColor?: T;
  image?: T;
  layoutSelector?: T;
  paragraphTitle?: T;
  paragraph?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ArticlesBlock_select".
 */
export interface ArticlesBlockSelect<T extends boolean = true> {
  sectionTitle?: T;
  reference?: T;
  articlesToShow?: T;
  articles?:
    | T
    | {
        article?: T;
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BimTeamProps_select".
 */
export interface BimTeamPropsSelect<T extends boolean = true> {
  sectionTitle?: T;
  reference?: T;
  people?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quotes_select".
 */
export interface QuotesSelect<T extends boolean = true> {
  content?: T;
  source?: T;
  article?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "people_select".
 */
export interface PeopleSelect<T extends boolean = true> {
  name?: T;
  image?: T;
  role?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags_select".
 */
export interface TagsSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  title: string;
  description?: string | null;
  mail: string;
  socialLinks?:
    | {
        socialName?: ('Linkedin' | 'Instagram' | 'Facebook' | 'Altro') | null;
        socialLink?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  mail?: T;
  socialLinks?:
    | T
    | {
        socialName?: T;
        socialLink?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}