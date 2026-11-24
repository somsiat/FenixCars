export interface Advantage {
  title: string;
  body: string;
}

export const advantages: Advantage[] = [
  {
    title: 'Sprawdzenie auta z USA przed zakupem',
    body: 'Nie licytujemy w ciemno. Sprawdzenie auta z USA (i odpowiednio z Kanady) to u nas analiza dostępnej historii oraz informacji o egzemplarzu, zanim podejmiemy licytację. Korzystamy z raportów Carfax, EpicVIN i AutoCheck — bez dodatkowych opłat po stronie klienta.',
  },
  {
    title: 'Nie kupujemy aut za wszelką cenę',
    body: 'Jeżeli samochód budzi nasze wątpliwości, mówimy o tym otwarcie. Nie licytujemy „ulepów”, aut po zalaniu ani pojazdów z problematycznym statusem własności: junk, parts only, COD i podobnych.',
  },
  {
    title: 'Wiesz, ile naprawdę kosztuje auto',
    body: 'Licytujemy zgodnie z ustalonym budżetem i przygotowujemy wyliczenie „pod dom” w złotówkach. Jeśli potrzebujesz kalkulacji importu auta z USA albo z Kanady, robimy ją dla konkretnego egzemplarza — to nie jest uniwersalna tabela podatków.',
  },
  {
    title: 'Wylicytowany samochód - co dalej',
    body: 'Po wygranej licytacji przesyłamy rachunki do opłacenia w walucie dolara amerykańskiego (USA - waluta USD) bądź dolara kanadyjskiego (Kanada - waluta CAD). Do tego kroku zalecamy mieć założony kantor bankowy w banku, uzyskać najkorzystniejszy przelicznik walutowy. W tym etapie też pomagamy w razie potrzeby.<br /><br />Po wygranej licytacji przesyłamy zdjęcia z placu spedytora przed załadunkiem do kontenera.',
  },
  {
    title: 'Kompleksowo - od wyboru auta do dostawy „pod dom”',
    body: 'Możesz zamówić samochód z USA na zamówienie: od rozmowy o budżecie i znalezienia auta, przez weryfikację i licytację, aż po dostawę pod wskazany adres. Ten sam schemat stosujemy przy pojazdach z Kanady.',
  },
  {
    title: 'Prowizję pobieramy po dostawie',
    body: 'Rozliczamy się dopiero wtedy, gdy samochód stoi u Ciebie - zgodnie z warunkami ustalonymi na początku współpracy. Nasza prowizja za pośrednictwo wynosi <strong>3000 zł brutto</strong>.',
  },
  {
    title: 'Po drugiej stronie zawsze jest człowiek',
    body: 'Nie AI, nie bot, nie automatyczna infolinia. Jesteśmy po to, aby przeprowadzić Cię przez cały proces importu i odpowiedzieć na każde pytanie - normalnie i uczciwie.',
  },
];

export interface ProcessStep {
  title: string;
  /** Skrót na stronę główną */
  summary: string;
  /** Rozwinięcie na podstronę z przebiegiem importu */
  detail: string[];
}

export const homeProcessSteps = [
  {
    title: 'Rozmowa, budżet i wybór auta',
    summary:
      'Ustalamy, jakie auto Cię interesuje i jaki masz budżet „pod dom”. Przeglądamy aukcje w USA i Kanadzie i pokazujemy tylko egzemplarze, które naprawdę mają sens.',
  },
  {
    title: 'Weryfikacja i licytacja',
    summary:
      'Przed zakupem sprawdzamy Carfax, EpicVIN i AutoCheck, a także wyposażenie auta (window sticker) - bez dodatkowych opłat. Licytujemy na naszych kontach, do limitu finansowego ustalonego z Tobą.',
  },
  {
    title: 'Transport, odprawa i auto pod dom',
    summary:
      'Zapewniamy kompleksową obsługę logistyczną - od transportu morskiego i lądowego zza oceanu do portu w Holandii, aż po dostawę auta pod wskazany adres w Polsce. Przeprowadzamy Cię przez cały proces celny (cło i VAT), organizujemy odbiór pojazdu z portu oraz bezpieczny transport lawetą. Ponadto pomagamy w uzyskaniu opinii rzeczoznawcy, tłumaczeniu dokumentów oraz dopełnieniu formalności związanych z akcyzą w kraju. Co ważne, naszą prowizję rozliczamy dopiero po dostarczeniu samochodu pod Twoje drzwi.',
  },
] as const;

export const processSteps: ProcessStep[] = [
  {
    title: 'Rozmowa i ustalenie budżetu',
    summary:
      'Ustalamy, jakie auto Cię interesuje i jakim budżetem całkowitym dysponujesz. Mówimy wprost, co realnie da się za to kupić.',
    detail: [
      'Zaczynamy od zwykłej rozmowy - telefonicznie albo na WhatsAppie. Pytamy o model, rocznik, przeznaczenie auta i o budżet całkowity, czyli kwotę, za którą samochód ma stanąć pod Twoim domem.',
      'Na tym etapie mówimy otwarcie, czy Twoje oczekiwania mieszczą się w budżecie. Jeśli import konkretnego modelu nie ma ekonomicznego sensu, powiemy to od razu, zamiast ciągnąć temat.',
    ],
  },
  {
    title: 'Selekcja aut na aukcjach samochodowych USA i Kanady',
    summary:
      'Przeglądamy oferty z aukcji w USA i Kanadzie i wybieramy egzemplarze, które faktycznie mają sens przy Twoim budżecie.',
    detail: [
      'Codziennie przeglądamy aukcje samochodowe USA i Kanady. Wybieramy egzemplarze pasujące do ustalonych założeń i odrzucamy te, które na pierwszy rzut oka są pułapką.',
      'Wyselekcjonowane auta pokazujemy Ci wraz z naszą oceną: co jest uszkodzone, co trzeba będzie naprawić i jak to wpłynie na koszt końcowy.',
    ],
  },
  {
    title: 'Weryfikacja samochodu przed zakupem i historia pojazdu',
    summary:
      'Sprawdzamy raporty Carfax, EpicVIN i AutoCheck oraz dostępne informacje o historii i wyposażeniu. Bez dodatkowych opłat.',
    detail: [
      'Weryfikacja samochodu przed zakupem obejmuje u nas raporty Carfax, EpicVIN i AutoCheck oraz dostępne informacje o historii serwisowej i wyposażeniu. To wsparcie decyzji przed licytacją, a nie gwarancja braku wad niewidocznych w dokumentach.',
      'Za weryfikację i raporty nie pobieramy żadnych dodatkowych opłat - to część naszej pracy, a nie płatny dodatek.',
      'Jeżeli auto ma naruszoną strukturę, ślady zalania albo problematyczny status własności, odpuszczamy je. Wolimy odpuścić konkretny pojazd, niż sprowadzić Ci samochód, który później będzie problemem.',
    ],
  },
  {
    title: 'Licytacja aut USA i Kanady do ustalonego limitu',
    summary:
      'Licytujemy na naszych kontach aukcyjnych, więc nie musisz zakładać żadnych dostępów ani wpłacać depozytów, by podjąć z nami współpracę.',
    detail: [
      'Licytacja aut USA i Kanady odbywa się na naszych kontach aukcyjnych, więc nie musisz zakładać własnych dostępów ani wpłacać depozytów, aby z nami zacząć.',
      'Trzymamy się ustalonego limitu. Jeśli auto przebije ustalony budżet „pod dom”, odpuszczamy i szukamy dalej - bez podbijania ceny na własną rękę.',
    ],
  },
  {
    title: 'Transport i fracht morski',
    summary:
      'Organizujemy transport z placu aukcyjnego do portu, a następnie fracht morski do Europy. Auta climy w Holandii.',
    detail: [
      'Po wygranej licytacji organizujemy transport lądowy z placu aukcyjnego do portu, a potem fracht morski do Europy. Auta climy w Holandii.',
      'Na bieżąco informujemy Cię, gdzie jest auto i na jakim etapie jest transport. Wysyłamy również tracking auta, byś mógł swobodnie śledzić postępy w logistyce.',
    ],
  },
  {
    title: 'Odprawa celna, VAT',
    summary:
      'Zajmujemy się odprawą celną oraz rozliczeniem należności: cła, podatku VAT w walucie EURO. Wysyłamy również zdjęcia z rozładunku auta w Holandii.',
    detail: [
      'Po dopłynięciu auta zajmujemy się odprawą celną oraz rozliczeniem należności: cła, podatku VAT w walucie EURO. Wysyłamy klientowi również zdjęcia z rozładunku auta w Holandii.',
    ],
  },
  {
    title: 'Uszkodzenia w transporcie',
    summary:
      'Każdy etap dokumentujemy fotograficznie. Jeżeli uszkodzenia powstały podczas transportu, składamy w imieniu Klienta roszczenie o odszkodowanie.',
    detail: [
      'Transport auta zza oceanu to złożony proces, obejmujący wiele etapów i przeładunków. Niestety, podczas pokonywania tysięcy kilometrów może dojść do uszkodzeń powstałych w transporcie.',
      'Każdy etap dokumentujemy fotograficznie. Jeżeli uszkodzenia są zasadne i można potwierdzić, że powstały podczas transportu, w imieniu Klienta składamy roszczenie o odszkodowanie, odpowiednio je dokumentując i prowadząc proces jego uzyskania.',
    ],
  },
  {
    title: 'Dostawa pod wskazany adres',
    summary:
      'Dowozimy samochód pod wskazany adres i rozliczamy prowizję - dopiero na tym etapie.',
    detail: [
      'Import samochodu z USA pod dom oznacza u nas dostawę pod wskazany przez Ciebie adres po transporcie i odprawie. Zakres wyceny „pod dom” zawsze potwierdzamy przed licytacją; część formalności krajowych może zostać poza tą kwotą.',
      'Prowizję rozliczamy dopiero po dostawie, zgodnie z warunkami ustalonymi na początku współpracy.',
    ],
  },
  {
    title: 'Akcyza, opinia rzeczoznawcy, tłumaczenia dokumentów, rejestracja pojazdu i OC',
    summary:
      'Na każdym etapie formalności po imporcie możemy zapewnić opcjonalne wsparcie: akcyza, rzeczoznawca, tłumaczenia, rejestracja i ubezpieczenie.',
    detail: [
      'Na każdym etapie formalności po imporcie auta zza oceanu możemy również zapewnić opcjonalne wsparcie. Współpracujemy ze sprawdzonymi i skrupulatnymi rzeczoznawcami oraz tłumaczami dokumentów. Pomagamy przejść przez proces opłaty akcyzy, przygotowania niezbędnej dokumentacji, rejestracji oraz ubezpieczenia pojazdu w Polsce - sprawnie i kompleksowo.',
    ],
  },
  {
    title: 'Radość z jazdy',
    summary: 'Ostatni etap to radość z jazdy, a z naszej strony podziękowania za zaufanie 🤝',
    detail: ['Ostatni etap to radość z jazdy, a z naszej strony podziękowania za zaufanie 🤝'],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Jaki jest minimalny budżet importu auta z USA bądź Kanady?',
    answer:
      '<p>Minimalny budżet na import auta zza oceanu pod dom to około 23 000 zł. Wynika to z faktu, że koszty logistyczne, transportowe i obsługi pozostają na zbliżonym poziomie niezależnie od wartości pojazdu. Nieco niższe koszty minimalne są za import motocykla. Zmienną jest przede wszystkim cena wylicytowanego auta, jak i różnice w kursach walut, które potrafią zmieniać się z dnia na dzień mając wpływ na całkowity koszt importu „pod dom”. Wyliczenia kwoty „pod dom” to jedyna zmienna, na którą nie mamy wpływu jako importer.</p>',
  },
  {
    question: 'Co to znaczy określenie import auta „pod dom”?',
    answer:
      '<p>W Fenix Cars cena „pod dom” to jasne i w pełni przejrzyste rozliczenie - bez ukrytych kosztów. Kwota ta obejmuje wszystko, co niezbędne, aby sprowadzić auto z Kanady lub USA: kompleksowy zakup pojazdu wraz z opłatami aukcyjnymi, cały transport lądowy i morski do Europy, odprawę celną (cło i VAT rozliczamy w Holandii), bezpieczny transport lawetą prosto pod Twój adres oraz naszą prowizję.</p><p>Po stronie klienta pozostają jedynie standardowe, krajowe formalności oraz przygotowanie auta do drogi: opłata akcyzy, ewentualna naprawa pojazdu, tłumaczenie dokumentów oraz opinia rzeczoznawcy (w których opcjonalnie oczywiście pomagamy), dostosowanie lamp (o ile jest konieczne), badanie techniczne, ubezpieczenie oraz... czysta radość z jazdy nowym autem 😉</p>',
  },
  {
    question: 'Ile trwa cały proces importu auta „pod dom”?',
    answer:
      '<p>Import auta / motocykla / quada zza oceanu trwa zazwyczaj od 2 do 4 miesięcy. Czas zależy od regionu zakupu: ze wschodniego wybrzeża USA i Kanady zajmuje to ok. 2–3 miesiące, natomiast z zachodniego wybrzeża ok. 3–4 miesiące ze względu na dłuższą trasę. Na ten okres składa się transport morski i lądowy do Holandii, odprawa celna, dowóz lawetą do Polski oraz dopełnienie formalności.</p>',
  },
  {
    question: 'Jak sprawdzacie auto przed licytacją?',
    answer:
      '<p>Weryfikujemy historię i dostępne informacje o pojeździe, zanim zdecydujemy o podejściu do licytacji. Korzystamy z raportów Carfax, EpicVIN i AutoCheck oraz sprawdzamy dostępne dane o historii i wyposażeniu. Za weryfikację i raporty nie pobieramy dodatkowych opłat.</p>',
  },
  {
    question: 'Jakich pojazdów nie sprowadzacie?',
    answer:
      '<p>Nie licytujemy aut/ motocykli/ quadów po zalaniu, egzemplarzy mocno uszkodzonych (w tej branży tanio może znaczyć finalnie drogo), ani pojazdów z problematycznym statusem własności, takich jak junk, parts only czy COD jak również z „kręconymi licznikami” co wynika z raportu podczas procesu weryfikacji pojazdu przed licytacją. Jeżeli samochód budzi nasze wątpliwości, mówimy o tym otwarcie i odpuszczamy.</p>',
  },
  {
    question: 'Kiedy płacę prowizję?',
    answer:
      '<p>Prowizję pobieramy dopiero po dostarczeniu samochodu, zgodnie z warunkami ustalonymi na początku współpracy. Wysokość naszego wynagrodzenia znasz od pierwszej rozmowy - nie pojawia się na końcu jako niespodzianka. Koszt naszej usługi wynosi <strong>3000 zł brutto</strong>.</p>',
  },
  {
    question: 'Czy mogę wskazać konkretne auto, które sam znalazłem?',
    answer:
      '<p>Tak. Sprawdzimy taki egzemplarz dokładnie tak samo jak te, które wybieramy sami, i przedstawimy wyliczenie kosztu końcowego. Jeśli zobaczymy ryzyko, powiemy o tym wprost - również wtedy, gdy auto bardzo Ci się podoba.</p>',
  },
  {
    question: 'Czy muszę zakładać konto na aukcji albo wpłacać depozyt?',
    answer:
      '<p>Nie. Licytujemy na własnych kontach aukcyjnych, więc nie musisz rejestrować się na amerykańskich platformach ani wpłacać zaliczek czy depozytów, by z nami zacząć współpracę. Warunki rozliczenia ustalamy bezpośrednio z Tobą.</p>',
  },
  {
    question: 'Czy mogę zrezygnować z usługi importu?',
    answer:
      '<p>Tak. Rezygnacja jest możliwa bez dodatkowych zobowiązań finansowych, jeśli nie przystąpiliśmy jeszcze do licytacji konkretnego pojazdu. Potwierdzenie podejścia do licytacji jest momentem wiążącym.</p><p>Po wylicytowaniu pojazdu rezygnacja może wiązać się z dodatkowymi kosztami nakładanymi przez dom aukcyjny. W przypadku Copart opłata za rezygnację wynosi minimum 10% całkowitych kosztów aukcyjnych (cena wylicytowanego pojazdu + opłaty aukcyjne). W przypadku IAAI rezygnacja z zakupu nie jest możliwa, a wylicytowany pojazd należy odebrać z placu.</p><p>Dlatego prosimy o przemyślane podejście do wyboru pojazdu i potwierdzania udziału w licytacji.</p>',
  },
  {
    question: 'Ile razy mogę podchodzić do licytacji?',
    answer:
      '<p>Nie ma limitu liczby podejść do licytacji. Czasami udaje się zakupić auto już przy pierwszym podejściu, innym razem proces wymaga większej cierpliwości.</p>',
  },
  {
    question: 'Co to znaczy oferta „Dla Sportu”?',
    answer:
      '<p>Naszym celem jest wylicytowanie pojazdu w bardzo dobrej cenie dla klienta. Często zdarza się zakupić pojazd poniżej zakładanego budżetu „pod dom”. Stąd w naszej społeczności na WhatsApp funkcjonuje określenie „Oferta dla sportu” - czyli świadomie niska oferta, z którą próbujemy swoich sił podczas licytacji.</p><p>Wiele pojazdów udało się nam zakupić zdecydowanie poniżej założonego budżetu, szczególnie na aukcjach PURE SALE, gdzie nie obowiązuje cena minimalna.</p><p>Wyznajemy prostą zasadę: jedyny sposób, żeby nie wylicytować auta, to nie podejść do licytacji 😉 W praktyce „ryzykujemy” jedynie tym, że ktoś przebije naszą ofertę.</p>',
  },
  {
    question: 'Czy dowozicie samochód pod dom?',
    answer:
      '<p>Tak. Gotowe auto dostarczamy pod wskazany adres. Obsługujemy klientów z Rzeszowa i całego Podkarpacia, a także z pozostałych regionów Polski.</p>',
  },
  {
    question: 'Czy naprawiacie auta „na gotowo”?',
    answer:
      '<p>Tak, zajmujemy się importem i kompleksową naprawą aut z USA i Kanady „na gotowo”. Oznacza to, że przejmujemy cały proces - od zakupu i transportu, przez ubezpieczenie transportowe, aż po profesjonalną odbudowę blacharską, lakierniczą i mechaniczną. Ponieważ każdy pojazd ma inny zakres uszkodzeń, kosztorys oraz wycenę prac przygotowujemy zawsze indywidualnie.</p><p>Zdejmujemy z Ciebie również ciężar biurokracji: zapewniamy tłumaczenia dokumentów, zlecamy opinie rzeczoznawcy, pomagamy w deklaracji akcyzowej, ubezpieczeniu pojazdu, przeglądzie oraz finalnej rejestracji auta.</p>',
  },
  {
    question: 'Skąd mam wiedzieć, że można Wam zaufać?',
    answer:
      '<p>Najlepszym potwierdzeniem naszej pracy są samochody, które już sprowadziliśmy, oraz opinie klientów na Google i Facebooku. Działamy jako spółka z o.o. z siedzibą w Rzeszowie - nasze dane rejestrowe (NIP, REGON, KRS) znajdziesz w sekcji kontakt.</p>',
  },
  {
    question: 'Czy licytujecie auta na aukcjach Copart i IAAI?',
    answer:
      '<p>Tak. W opisanym procesie importu korzystamy z własnych kont aukcyjnych i licytujemy pojazdy w USA oraz Kanadzie, m.in. na platformach Copart i IAAI. Dodatkowo posiadamy konto z dostępem do przetargów kopertowych w Kanadzie. Przed udziałem w konkretnej licytacji sprawdzamy dostępne informacje o pojeździe i ustalamy z klientem kwotę „pod dom”.</p>',
  },
  {
    question: 'Czy przygotowujecie kalkulację importu auta z USA i Kanady?',
    answer:
      '<p>Tak. Przed licytacją omawiamy wyliczenie „pod dom” w złotówkach dla konkretnego pojazdu. Na cenę tę wpływa lokalizacja samochodu w USA lub Kanadzie, koszty aukcyjne, prowizja brokerska, kompleksowa logistyka morsko-lądowa zza oceanu do portu w Holandii, transport auta z portu pod wskazany adres klienta oraz nasza prowizja, która wynosi 3000 zł brutto. Nasze wynagrodzenie rozliczamy dopiero wtedy, gdy auto znajduje się pod domem klienta – i tak, jest ono już wliczone w całkowitą kwotę „pod dom”. Ostateczne koszty potwierdzamy na podstawie danych wybranego egzemplarza.</p>',
  },
  {
    question: 'Czy mogę zamówić samochód z USA bądź Kanady, jeśli sam nie znalazłem oferty?',
    answer:
      '<p>Tak. Możesz określić markę, model, rocznik, wyposażenie oraz budżet na auto, a my poszukamy egzemplarzy pasujących do tych założeń. Możesz też przesłać własną ofertę z sieci do weryfikacji. Jeśli pojazd nie będzie budzić zastrzeżeń pod kątem jego obecnego stanu na aukcji, historii serwisowej w raportach Carfax, AutoCheck czy EpicVin oraz braku przeciwwskazań do rejestracji w kraju, możemy podejść do licytacji. Zakupu nie gwarantujemy, natomiast wyznajemy złotą zasadę: jedyna opcja, by nie wylicytować auta, to nie podejść do licytacji w budżecie ustalonym z klientem.</p>',
  },
  {
    question: 'Czy obsługujecie import samochodów w Rzeszowie i na Podkarpaciu?',
    answer:
      '<p>Tak. Fenix Cars ma siedzibę przy ul. Towarowej 12/201A w Rzeszowie. Obsługujemy klientów z Rzeszowa, z Podkarpacia, jak również z pozostałych regionów Polski, zapewniając dostawę pod wskazany adres. Przed wizytą w biurze warto wcześniej umówić się na spotkanie. Rozmowa nic nie kosztuje, a pozwala wiele wyjaśnić i odpowiedzieć na każde pytanie dotyczące kompleksowego importu auta zza oceanu do Polski.</p>',
  },
];
