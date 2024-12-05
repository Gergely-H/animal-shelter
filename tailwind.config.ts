/* eslint-disable check-file/filename-blocklist -- Tailwind config needs to be named like this to work without additional configuration. Otherwise autocomplete and Tailwind Intellisense are not working. */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
/* eslint-enable check-file/filename-blocklist -- Made an exception because this is a library config file. */
