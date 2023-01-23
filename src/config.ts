

export const SITE = {
	title: 'SFMC cheatsheet',
	website: 'https://starlessdocs.github.io/',
	description: 'A concise tutorial for SFMC.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Developer : Basics': [
			{ text: 'AMPScript', link: 'ampscript-basics' },
			{ text: 'SSJS', link: 'ssjs-basics' },
			{ text: 'SQL for SFMC', link: 'sql-tips' },
			{ text: 'HTML Tips', link: 'html-tips' },
			{ text: 'CSS Tips', link: 'css-tips' },
		],
		/*
		'Developer : advanced': [
			{text: 'Understand those red errors', link: 'en/page-4' },
			{text: 'Forms security', link: 'en/page-4' },
			{text: 'CSS warzone : clients compatility tips', link: 'en/page-4' },
			{text: 'Custom Activity', link: 'en/page-4' },
		],
		'Administrator side': [
			{text: 'Audience creation', link: 'en/page-4' },
			],
		*/
	},
};
