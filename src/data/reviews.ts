export type ReviewSource = 'google' | 'facebook';

export type Review = {
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  source: ReviewSource;
  date?: string;
};

export const reviewScore = {
  rating: 5,
  label: 'na podstawie ponad 260 opinii w Google!',
} as const;

export const reviews: Review[] = [
  {
    author: 'Krzysztof K.',
    rating: 5,
    source: 'google',
    date: 'sierpień 2026',
    text: 'Pan Krzysztof i Pan Kamil to PROFESJONALIŚCI a zarazem dobrzy i uczynni ludzie - szczerze POLECAM!!!!! Cały przebieg importu przedstawiony krok po kroku zanim zaczęliśmy przeglądać samochody, po udanej licytacji punkt po punkcie wykonywany wcześniej przedstawiony proces aż do wyczekiwanego momentu pojawienia się samochodu " pod dom". Proces naprawy oraz przygotowania do rejestracji wykonywałem sam, lecz w każdym momencie mogłem liczyć na 100% wsparcie ze strony wyżej wymienionych Panów. Jako, że to był mój pierwszy import z USA, pytań z kategorii "głupich" (oczywiście z mojej strony) pewnie nie brakowało, jednak za każdym razem Panowie wykazywali się ogromnym profesjonalizmem, zrozumieniem i cierpliwością. Dzięki czemu kolejny import z w trakcie, z nadzieją, że przebiegnie podobnie jak ten pierwszy.\nDziękuję Panowie jeszcze raz za usługę, pomoc i wyrozumiałość.',
  },
  {
    author: 'Paweł',
    rating: 5,
    source: 'facebook',
    date: 'wrzesień 2026',
    text: 'Szybko profesjonalnie. Polecam',
  },
  {
    author: 'Monika M.',
    rating: 5,
    source: 'google',
    date: 'czerwiec 2026',
    text: 'PROFESJONALIZM, a do tego życzliwość, cierpliwość i prawdomówność. Poznałam Pana Krzysztofa przez wymianę kilku wiadomości, miał w sobie jakąś prawdę i od razu Mu zaufałam. Poszłam za tym w ciemno i po kilku miesiącach miałam samochód. Od samego początku Panowie byli w kontakcie, byli cierpliwi, informowali o każdym etapie. Kiedy auto przyjechało do Polski, szukali części po całym świecie, żebym ja była zadowolona i dostała od nich samochód w super stanie. Dodatkowo pomogli we wszystkich sprawach związanych z urzędami i opłatami. A ja tylko przyjechałam odebrać Hondę. KAŻDEMU POLECAM USŁUGI PANA KRZYSZTOFA I PANA KAMILA. Zaufajcie im, a będziecie cieszyć się fajnym samochodem. Bez nerwów i napięć.\nA Wam Panowie - kłaniam się w pas i dziękuję. Następny też będzie z Wami :)',
  },
  {
    author: 'Damian D.',
    rating: 5,
    source: 'google',
    date: 'styczeń 2026',
    text: 'Chłopaki z Fenix Cars spisali się na medal. Od znalezienia samochodu idealnie dopasowanego do moich oczekiwań, przez dokładne sprawdzenie historii i dokumentów, aż po pełne wsparcie na każdym etapie procesu.\nPo wygranej licytacji otrzymywałem regularne aktualizacje: zdjęcia z portu przed wypłynięciem, link do śledzenia statku, zdjęcia z portu w Rotterdamie oraz pomoc z tłumaczeniem dokumentów, rzeczoznawcą i opłatą akcyzy – wszystko zdalnie i bez stresu.\nZ czystym sumieniem polecam tę firmę każdemu, kto planuje import auta z USA lub Kanady. Krzysztof i Kamil to prawdziwi profesjonaliści! 🔥',
  },
  {
    author: 'Maciej N.',
    rating: 5,
    source: 'google',
    date: 'lipiec 2026',
    text: 'Zdecydowanie polecam, pełen profesjonalizm, wsparcie w całym procesie, poszukiwania samochodu bez zbędnej presji, panowie zadbali żeby nie wtopić i kupić auto z dobrą historia a jednocześnie żeby nie przekroczyć założonego budżetu. Zdecydowanie polecam! Jeśli będę szukał kolejnego auta z USA to z pewnością wrócę!',
  },
  {
    author: 'GiBaL',
    rating: 5,
    source: 'google',
    date: 'styczeń 2026',
    text: 'Z czystym sumieniem mogę polecić sprowadzenie auta z USA przez Krzysztofa i Kamila. Panowie wykonali kawał naprawdę dobrej roboty - pełen profesjonalizm od pierwszego kontaktu aż po odbiór samochodu. Wszystko było jasno wytłumaczone, stały kontakt, pomoc na każdym etapie i żadnych niemiłych niespodzianek. Auto w pełni zgodne z opisem, wszystkie formalności dopilnowane na czas. Widać doświadczenie i zaangażowanie. Zdecydowanie polecam każdemu, kto myśli o aucie z USA.',
  },
  {
    author: 'Grzesiek D.',
    rating: 5,
    source: 'google',
    date: 'maj 2026',
    text: 'Szybko, sprawnie i na temat. Profesjonalne podejście do tematu. Dziękuję Panu Krzysztofowi za uratowanie mnie przed zakupem auta, które znalazlem na innym ogloszeniu i na 1 rzut oka wyglądało całkiem fajnie. Dopiero dokładna weryfikacja przez Fenix Cars dostarczyła pełen obraz sytuacji. Dziękuję',
  },
  {
    author: 'Kristo',
    rating: 5,
    source: 'google',
    date: 'marzec 2026',
    text: 'Bardzo zaangażowany importer. Mam doświadczenie z innymi firmami. Tutaj już zostanę. Krzysztof pokazał klasę w trudnych momentach, co pokazuje ich dojrzałość i podejście do biznesu. Cyfrowe dokumenty z cła i vatu, super kontakt i zwykłe ludzkie „chce mi sie” dają sukces. Życzę wielu zadowolonych Klientów, takich jak ja.',
  },
  {
    author: 'Paweł K.',
    rating: 5,
    source: 'google',
    date: 'maj 2026',
    text: 'Bardzo szybki i sprawny kontakt napisałem w sobotę koło 23 w sprawie Carfaxa. Szok... rano w niedzielę dostałem pełna historię z komentarzem. Szacun mega sprawa polecam każdemu kto chce sprawdzić Carfaxa auta w normalnej cenie.\n\nPozdrawiam z poważaniem\nPaweł Korol',
  },
];

export function sourceLabel(source: ReviewSource) {
  return source === 'google' ? 'Opinia z Google' : 'Opinia z Facebooka';
}

export function starLabel(rating: number) {
  return '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating));
}
