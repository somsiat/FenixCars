export const SITE_URL = 'https://fenixcars.pl';

export const company = {
  name: 'Fenix Cars',
  legalName: 'FENIX CARS Sp. z o.o.',
  tagline: 'Import aut z USA i Kanady',
  /** Stały opis encji */
  description:
    'Import aut z USA i Kanady. Sprowadzamy samochody z USA i Kanady pod dom — Rzeszów, Podkarpacie. CARFAX, EpicVIN i AutoCheck za darmo, wyposażenie pojazdu za darmo, prowizja 3000 zł, dostawa pod wskazany adres.',

  address: {
    street: 'Towarowa 12/201A',
    postalCode: '35-231',
    city: 'Rzeszów',
    region: 'Podkarpackie',
    countryCode: 'PL',
  },

  /** Współrzędne wizytówki Google */
  geo: {
    latitude: 50.0531675,
    longitude: 21.9997138,
  },

  registry: {
    nip: '5170462127',
    regon: '542363013',
    krs: '0001186849',
  },

  email: 'kontakt@fenixcars.pl',

  openingHours: {
    label: 'Poniedziałek–piątek: 9:00–17:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },

  /** Oba numery WhatsApp */
  people: [
    { name: 'Krzysztof', phone: '+48603274775', phoneLabel: '603 274 775' },
    { name: 'Kamil', phone: '+48787548618', phoneLabel: '787 548 618' },
  ],

  links: {
    whatsappGroup: 'https://chat.whatsapp.com/GH8gcYqFofiBUatDatHnw0',
    googleMaps: 'https://www.google.com/maps/place/Fenix+Cars/@50.0531675,21.9997138,17z',
    googleProfile: 'https://share.google/HOsoAY9E3DyxntqzB',
    googleReviews: 'https://tiny.pl/vd-g8gcpv',
    googleProjects:
      'https://www.google.com/maps/place/Fenix+Cars+%2F+Import+aut+KANADA+oraz+USA+%2F+Rzesz%C3%B3w/@50.0533018,21.9998424,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDnQZSYuouIg-dAbylDSkRp!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgrass-cs%2FAABkmLerSVNdCK9_cdfaEj0CDNDyqfSIKxjhfwIyAczvqNDZJ1Ezku-AeOtWMfkxg50PAN2FWR6qJmBZCzJ-kolNxvXcpxBvJw2Wn_019VaIeQJGaDdfCAP6mCM9PaPjTJWpG0QV9Iqd-6wiQHWr%3Dw114-h86-k-no!7i2100!8i1575!4m7!3m6!1s0x473cfb4010df2df9:0x40ad710f34caca15!8m2!3d50.0531675!4d21.9997138!10e5!16s%2Fg%2F11xt9dzpk2?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D',
    facebook: 'https://www.facebook.com/FenixCarsImportAut',
    facebookReviews:
      'https://www.facebook.com/FenixCarsImportAut/reviews/?id=100066227694305&sk=reviews',
    instagram: 'https://www.instagram.com/fenix.cars.rzeszow/',
    tiktok: 'https://www.tiktok.com/@fenix.cars.rzeszow',
    youtube: null as string | null,
  },

  /** Identyfikator wizytówki firmy w Google Knowledge Graph */
  googleKgMid: '/g/11xt9dzpk2',
} as const;

export const primaryContact = company.people[0];

export function formatAddress(address = company.address): string {
  return `${address.street}, ${address.postalCode} ${address.city}`;
}

/** Link do WhatsAppa z wstępnie wpisaną treścią wiadomości. */
export function waLink(phone: string, message?: string): string {
  const number = phone.replace(/[^\d]/g, '');
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${number}${query}`;
}

export const DEFAULT_WA_MESSAGE =
  'Dzień dobry, chciałbym poznać koszt sprowadzenia auta z USA/Kanady.';

export const navigation = [
  { label: 'Dlaczego my', href: '/#dlaczego-my' },
  { label: 'Przebieg importu', href: '/#przebieg' },
  { label: 'Opinie', href: '/#opinie' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

export const WA_GROUP_PITCH =
  'Jeśli rozważasz import aut z Kanady albo z USA, możesz dołączyć do naszej grupy Sportowców: codziennie pokazujemy wyselekcjonowane oferty. ' +
  'Uczestnictwo do niczego nie zobowiązuje i pozwala zobaczyć, jak pracujemy.';
