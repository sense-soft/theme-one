export const DEFAULT_LOCALE_OPTIONS = {
    // color mode
    colorMode: 'auto',
    colorModeSwitch: true,
    // navbar
    navbar: [],
    logo: null,
    repo: null,
    selectLanguageText: '语言',
    selectLanguageAriaLabel: '选择语言',
    // sidebar
    sidebar: 'heading',
    sidebarDepth: 2,
    // page meta
    editLink: true,
    editLinkText: 'Edit this page',
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    contributors: true,
    contributorsText: 'Contributors',
    // 404 page messages
    notFound: [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`,
    ],
    backToHome: 'Take me home',
    // a11y
    openInNewWindow: 'open in new window',
    toggleColorMode: 'toggle color mode',
    toggleSidebar: 'toggle sidebar',
};
export const DEFAULT_LOCALE_DATA = {
    // navbar
    selectLanguageName: '中文',
};
/**
 * Assign default options
 */
export const assignDefaultLocaleOptions = (localeOptions) => {
    if (!localeOptions.locales) {
        localeOptions.locales = {};
    }
    if (!localeOptions.locales['/']) {
        localeOptions.locales['/'] = {};
    }
    Object.assign(localeOptions, {
        ...DEFAULT_LOCALE_OPTIONS,
        ...localeOptions,
    });
    Object.assign(localeOptions.locales['/'], {
        ...DEFAULT_LOCALE_DATA,
        ...localeOptions.locales['/'],
    });
};
