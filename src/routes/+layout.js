import { loadTranslations } from '$lib/translations/translations';
import { getLocale } from '$lib/language';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const { pathname } = url;

	let initLocale = getLocale();

	await loadTranslations(initLocale, pathname);

	return {};
};

export const prerender = true;
export const ssr = false;
