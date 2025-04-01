import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['th', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'th',

  // Configures whether and which prefix is shown for a given locale.
  // localePrefix: 'as-needed'
});