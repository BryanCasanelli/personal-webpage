import { locale } from '$lib/translations/translations';

export const getLocale = () => {
	let defaultLocale = 'en';

	let initLocale;

	// Try to get locale from localStorage
	const cachedLocale = localStorage.getItem('locale');

	if (cachedLocale) {
		initLocale = cachedLocale;
	} else {
		// Get locale from the browser
		const browserLocale = navigator.language;

		if (browserLocale.startsWith('es')) {
			initLocale = 'es';
		} else if (browserLocale.startsWith('en')) {
			initLocale = 'en';
		} else {
			initLocale = defaultLocale;
		}
	}

	return initLocale;
};

export const getAvailableLocales = () => {
    return ['en', 'es'];
};

export const setLocale = (newLocale: string) => {
    locale.set(newLocale);
    localStorage.setItem('locale', newLocale);
};
