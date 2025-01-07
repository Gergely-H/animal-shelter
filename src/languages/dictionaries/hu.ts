import { paths } from '@/constants/paths';

export const hu = {
  metadata: {
    title: {
      default: 'Herosz Budapesti Állatotthon',
      template: '%s - Herosz Budapesti Állatotthon',
    },
    description:
      'Herosz Budapesti Állatotthon - Herman Ottó Magyar Országos Állat- és Természetvédő Egyesület budapesti állatotthona',
  },
  navbar: {
    news: { label: 'Hírek', path: paths.news },
    calendar: { label: 'Naptár, nyitvatartás', path: paths.calendar },
    dogs: { label: 'Kutyák', path: paths.dogs },
    cats: { label: 'Cicák', path: paths.cats },
    donation: { label: 'Adományozás', path: paths.donation },
    volunteering: { label: 'Önkéntesség', path: paths.volunteering },
    backers: { label: 'Támogatók', path: paths.backers },
    successStories: { label: 'Sikertörténetek', path: paths.successStories },
    aboutUs: { label: 'Rólunk', path: paths.aboutUs },
    contacts: { label: 'Kapcsolat', path: paths.contacts },
  },
} as const;
