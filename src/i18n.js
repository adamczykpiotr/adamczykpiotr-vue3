import {createI18n} from 'vue-i18n'
import plTranslations from '@/locales/pl';
import enTranslations from '@/locales/en';

function loadLocaleMessages() {
    return {
        pl: plTranslations,
        en: enTranslations,
    };
}

const i18n = createI18n({
    globalInjection: true,
    locale: process.env.I18N_DEFAULT_LOCALE || 'en',
    fallbackLocale: process.env.I18N_FALLBACK_LOCALE || 'pl',
    messages: loadLocaleMessages()
});

export const translate = (key) => {
    return i18n.global.t(key);
};

export default i18n;