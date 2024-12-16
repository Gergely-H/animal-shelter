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
    news: { label: 'Hírek', path: '/hirek' },
    dogs: { label: 'Kutyák', path: '/kutyak' },
    cats: { label: 'Cicák', path: '/cicak' },
    donation: { label: 'Adományozás', path: '/adomanyozas' },
    volunteering: { label: 'Önkéntesség', path: '/onkentesseg' },
    backers: { label: 'Támogatók', path: '/tamogatok' },
    successStories: { label: 'Sikertörténetek', path: '/sikertortenetek' },
    aboutUs: { label: 'Rólunk', path: '/rolunk' },
    contacts: { label: 'Kapcsolat', path: '/kapcsolat' },
  },
} as const;
