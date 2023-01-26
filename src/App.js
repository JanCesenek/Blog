import "./App.css";
import czechFlag from "./imgs/czflag.png";
import britishFlag from "./imgs/gbflag.png";
import React, { useState } from "react";

function App() {
  const [czech, setCzech] = useState(true);
  const [article, setArticle] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);
  return czech ? (
    <div className="App">
      <nav id="navbar">
        <button className="flags">
          <img
            src={britishFlag}
            className="full-brightness"
            alt=""
            onClick={() => setCzech(false)}
          />
        </button>
        <button className="flags">
          <img src={czechFlag} className="full-brightness" alt="" onClick={() => setCzech(true)} />
        </button>
        <ul>
          <span id="biggerSize">
            <li className="thisChapter">
              <span
                className={article === 1 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(1)}>
                Úvod
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 2 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(2)}>
                Motivace ke studiu
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 3 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(3)}>
                Začátky
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 4 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(4)}>
                Výhody studia v zahraničí
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 5 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(5)}>
                Školství
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 6 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(6)}>
                Práce
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 7 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(7)}>
                Životní náklady
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 8 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(8)}>
                Ubytování
              </span>
            </li>
          </span>
          <span id="smallerSizeForText">
            <li id="firstElement">
              <div onClick={() => setArticle(1)}>
                <span className="textMode">Úvod</span>
              </div>
            </li>
            <li>
              <div onClick={() => setShowDropdown(!showDropdown)}>&#9776;</div>
              <ul className={showDropdown ? "" : "hidden-content"}>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(2)}>Motivace ke studiu</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(3)}>Začátky</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(4)}>Výhody studia v zahraničí</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(5)}>Školství</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(6)}>Práce</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(7)}>Životní náklady</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(8)}>Ubytování</div>
                </li>
              </ul>
            </li>
          </span>
        </ul>
      </nav>
      {article === 1 && (
        <article id="Uvod" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Úvod</h1>
          </div>
          <p>
            Ahoj všem, jmenuju se Honza, je mi 22 let a již čtvrtým rokem žiju ve Velké Británii v
            Colchesteru.
            <br />
            Tento blog je pouze experiment, jelikož můj hlavní cíl je momentálně získat zkušenosti s
            tvorbou webovek, ačkoliv pokud následující obsah přesvědčí byť jedinou osobu o studiu v
            zahraničí, budu to brát jako obrovský úspěch!
            <br />
            Ačkoliv to nemohu vzít celoplošně, jelikož nemám žádné statistiky, které by dokazovaly
            moje tvrzení, z mého okolí jsem vypozoroval, že se jen zoufale malé procento Čechů
            vydává studovat do zahraničí, (pro upřesnění: nepočítám studenty, co vycestují do
            zahraničí pouze na jeden semestr, ale na celou délku oboru tj. 3-4 roky), ať už je to
            proto, že jsou málo informovaní, z finančních důvodů, mají z tak velké změny zbytečné
            obavy, nebo se jim prostě nechce. Když jsem se ve čtvrťáku hlásil na univerzity ve Velké
            Británii, byl jsem jediný ze všech posledních ročníků gymnázia (což je zhruba 80
            studentů!), kdo se rozhodl studovat v zahraničí. Na mojí univerzitě je několikanásobně
            více studentů například z Litvy nebo Kypru, přestože tyto země mají mnohem méně obyvatel
            než ČR.
            <br />
            Jak důvěryhodně na vás tyto informace působí, to si musíte rozhodnout sami. Podle mého
            názoru vám to minimálně pomůže udělat si přibližnou představu.
            <br />
            Jak jsem se o možnosti studia v zahraničí dozvěděl? Zcela náhodou. Ve třeťáku jsem byl v
            Praze na{" "}
            <a href="https://www.gaudeamus.cz" target="_blank" rel="noreferrer">
              Gaudeamu
            </a>
            , což je „veletrh“ vysokých škol, kde se jednotlivé univerzity prezentují a lákají
            studenty středních škol, aby si podali přihlášku právě u nich. Narazil jsem tam na{" "}
            <a href="https://www.unilink.cz" target="_blank" rel="noreferrer">
              UniLink
            </a>
            , což je agentura, která pomáhá studentům se studiem ve Velké Británii (vřele
            doporučuji, rozhodně je kontaktujte!). Dozvěděl jsem se od nich pár užitečných informací
            a díky nim jsem začal vážně přemýšlet o zahraničních univerzitách. Na cestě domů jsem si
            důkladně pročetl jejich letáček, doma zavítal na jejich webové stránky a zanedlouho poté
            navštívil jejich přednášku v Praze. Od té doby jsem měl jasno. Upnul jsem se na myšlenku
            studia v zahraničí a nechtěl jsem ani uvažovat o ničem jiném.
          </p>
        </article>
      )}

      {article === 2 && (
        <article id="Motivacekestudiu" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Motivace ke studiu</h1>
          </div>
          <p>
            Rád bych začal s tím, co na začátku motivovalo mě osobně (věřím, že se najdou tací,
            kteří se teď na střední škole cítí [nebo tenkrát cítili] velice podobně). Když jsem
            nastoupil do posledního ročníku na gymplu, nic nenasvědčovalo tomu, že bych změnil svůj
            přístup. Školu jsem flákal jako doposud, známky jsem měl mizerné, na vysvědčení mi
            absolutně nezáleželo. Jak doma, tak ve škole jsem neustále poslouchal, že mrhám svůj
            potenciál a že mám na jedničky. To mě nezajímalo, nikdo mě nedokázal motivovat k učení a
            vysvětlit mi, jak danou látku uplatním v praxi, vše bylo pořád jenom dokola o tom,
            naučit se seznam naprosto zbytečných informací na písemku (což je dle mého názoru kámen
            úrazu českého školství, k čemuž se dostanu později).
            <br />
            Během čtvrťáku jsem se cítil příšerně a věděl jsem, že je čas na změnu. Bylo mi 18, ze
            zákona tedy již plnoletý člověk, ale rozhodně jsem si tak nepřipadal. Byl jsem stále
            nesamostatný a finančně závislý na rodičích, s nimiž jsem žil pod jednou střechou.
            Potřeboval jsem vlastní prostor pro osobní rozvoj, už jen to, že mě mohl neustále někdo
            kontrolovat, co dělám ve svém volném čase mě demotivovalo se sebou cokoliv dělat.
            <br />
            Maturita se blížila a všichni mě začali odepisovat. Učitelé, i rodiče pochybovali o tom,
            že maturitu vůbec udělám. Rodiče navíc stejně dobře jako já věděli, že potřebuju mít
            maturitní průměr minimálně 2, abych mě přijali na anglickou univerzitu. Jelikož jsem
            odmítal podat si přihlášku na českou školu, protože jsem o tom ani nechtěl slyšet,
            rodiče se obávali, že se nikam nedostanu a skončím někde ve skladu za minimální mzdu. Ve
            druhém pololetí krátce před maturitou jsem měl asi sedm nebo osm čtyřek. Na maturitu
            jsem se začal učit asi měsíc před zkouškou a každý den jsem tomu věnoval asi deset
            hodin. Výsledek? Průměr 1.75, o chloupek zmeškané vyznamenání a šestá nejlepší maturita
            ze třídy (bylo nás 30). Hádám, že budu v historii gymplu student s největším rozdílem
            mezi vysvědčením a maturitou.
            <br />
            Proč vám tohle píšu? Rozhodně ne proto, že bych si tu chtěl vylévat srdce. Chci jen na
            názorném příkladu ukázat, že se do Anglie může dostat opravdu každý, pokud pro to udělá
            maximum, studium v zahraničí zdaleka není jen pro „elitní studenty“ s výborným
            prospěchem.
          </p>
        </article>
      )}

      {article === 3 && (
        <article id="Zacatky" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Začátky</h1>
          </div>
          <p>
            Jak jsem už zmínil, studium v zahraničí je opravdu pro každého, nezáleží na povaze.
            Tvrdit, že nechcete opustit domov, protože jste stydliví introverti, kteří velmi
            těžkoazují kontakty, nechcete ztratit těch pár přátel, co máte doma a určitě byste tam
            zůstali sami, je naprosto nesmyslná výmluva.
            <br />
            Já sám jsem v té době byl velice uzavřený člověk, který těžkoazoval kontakty (kdo měl na
            začátku gymplu dokonce některé symptomy autismu a sebevražedné myšlenky), navíc jsem tam
            na rozdíl od mnoha dalších studentů, kteří si dali přihlášku na stejnou univerzitu se
            svými kamarády, jel úplně sám. Ačkoliv pokud to opravdu chcete, žádné výmluvy si
            vymýšlet nebudete, já jsem to bral jako výzvu a novou životní příležitost.
            <br />
            Nehodlám nijak předstírat, že začátky nebyly složité, nějakou dobu trvá, než se
            aklimatizujete na nové prostředí, kulturní šok taky hraje určitou roli. Čím více
            zaujmete proaktivní přístup, tím rychleji si zvyknete. Na kampusu je zhruba několik set
            zájmových kroužků a s nimi spojených aktivit, z nichž si každý člověk dokáže vybrat
            něco, pokud není nihilista.
          </p>
        </article>
      )}

      {article === 4 && (
        <article id="Vyhodystudiavzahranici" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Výhody studia v zahraničí</h1>
          </div>
          <div>
            <ul>
              <li className="GiveTheSpace">Navazování mezinárodních kontaktů</li>
              Jedna z obrovských výhod studia v zahraničí je možnost najít si přátele z celého světa
              díky prolínání desítek různých kultur. Velká Británie je díky své koloniální minulosti
              jednou z nejvíce multikulturních společností na světě, což vám dává příležitost
              rozšířit si obzory a dozvědět se z první ruky mnoho zajímavých věcí o životě v různých
              zemích po celém světě. Pokud budete mít štěstí a najdete si opravdu dobré přátele,
              umožní vám to cestovat po světě za velmi nízké náklady (oni vás pozvou na prázdniny k
              sobě domů a vy je zase na oplátku můžete pohostit a provést po vaší rodné zemi).
              <li className="GiveTheSpace">Osobní rozvoj</li>
              Pravděpodobně úplně nejdůležitější věc a hlavní důvod, proč se vydat studovat do
              zahraničí. Jste tu sami za sebe, nikdo vám neříká, co máte dělat, nikdo vás
              nekontroluje ani za vás neřeší vaše problémy. Začátky bývají nejtěžší, než si
              zvyknete. Ale věřte mi, že to stojí za to. Vy si toho, jak vás tahle zkušenost změní,
              možná zas tolik nevšimnete, ale vaše okolí rozhodně ano. Když se něco zvrtne, tak
              nemůžete prostě sednout na vlak a za 40 korun a 2 hodiny být doma. Naučíte se být
              samostatní, zodpovědní a spolehliví dospělí lidé, co si dokážou úplně všechno zařídit
              sami. Jinými slovy, dospějete několikanásobně rychleji, než kdybyste zůstali doma.
              <br />
              Jediný bod, který se nevztahuje pouze na Velkou Británii, ale na život v zahraničí na
              vlastní pěst obecně.
              <li className="GiveTheSpace">Osobní svoboda</li>
              Vysoké školství ve Velké Británii je daleko více založeno na samostudiu a dává vám
              mnohem víc prostoru a možností, jak naložit se svým volným časem (o čemž se ještě více
              rozepíšu v následující kapitole). Nikdo tu nijak neřeší docházku a učitelé se vám ve
              všem snaží vyjít vstříc. Pokud je vaše docházka opravdu nízká, musíte se dostavit na
              povinnou schůzku se svým osobním mentorem, který se bude snažit zjistit důvod. Vůbec
              se toho ale nebojte, můžete být naprosto upřímní, nikdo vás nebude soudit! Schůzka je
              pouze informativní a slouží k sbírání dat, která se následně využívají ke zlepšení
              blahobytu a spokojenosti studentů s univerzitou. Není vůbec problém říct, že jeden z
              povinných předmětů vás absolutně nebaví a přednášky berete jako naprostou ztrátu času,
              nebo že máte finanční problémy a potřebujete si vydělat peníze, oni vám opravdu
              naslouchají a nesoudí vás.
              <br />
              Víc volného času především souvisí s možností stát se finančně nezávislými, bez čehož
              se nikdy nemůžete stát plnohodnotně dospělými.
              <li className="GiveTheSpace">
                Naučíte se plynně mluvit nejdůležitějším jazykem na světě
              </li>
              Tady se snad ani nemusím nijak rozepisovat. Naučíte se plynně mluvit anglicky, bez
              toho, aniž byste angličtinu museli studovat, což vám na pracovním trhu otevře dveře do
              mnoha mezinárodních firem po celém světě.
            </ul>
          </div>
        </article>
      )}

      {article === 5 && (
        <article id="Skolstvi" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Školství</h1>
          </div>
          <p>
            Pokud očekáváte od britského vysokého školství zázraky, pak vás nenadchnu. Já jsem si
            před příletem dělal mnoho iluzí a pak přišla tvrdá realita a hořké zklamání.
            <br />
            Zatím nemám žádné zkušenosti s českým vysokým školstvím a nehodlám vás balamutit
            dezinformacemi vycucanými z prstu, takže moc porovnávat nebudu. Oba systémy mají své
            výhody i nevýhody a každému vyhovuje úplně jiný přístup.
            <br />
            Pár věcí však vím s jistotou. Jak jsem již dříve zmínil, vysoké školství ve Velké
            Británii je více založeno na samostudiu a sebeprezentaci. Esejím se nevyhnete, ať chcete
            studovat cokoliv. Každý trimestr dostanete buď dané téma, nebo více variant, z kterých
            si můžete vybrat a s pomocí akademických zdrojů o tom něco napsat, pokaždé má esej
            různou strukturu a záleží na zadání, někdy se klade větší důraz na zdroje a obsah a
            někdy zase na vaši vlastní argumentaci.
            <br />
            Pokud porovnám rozvrh v prváku na britské a české univerzitě z hlediska počtu hodin
            (samozřejmě záleží na oboru, porovnávám pouze dva rozdílné systémy v obecném měřítku,
            pokud to vůbec jde), nelíbí se mi ani jeden. Český je příliš přeplněný a britský příliš
            prázdný, ideální by byl kompromis. Díky kámošům, co studují v ČR, vím, že jejich rozvrh
            je tak přeplněný, že nemají ani pořádně čas najít si kloudnou práci při studiu kromě
            víkendů. To je mimo jiné z hlavních důvodů, proč jsem se rozhodl napsat blog právě na
            toto téma, na vysoké škole už by člověk měl být schopný se finančně osamostatnit a pokud
            se tomu univerzita nesnaží pomáhat, něco je špatně.
            <br />
            Vysoká škola má z principu být z valné většiny o samostudiu, ale u některých oborů je
            třeba mnohem větší interakce, jako příklad mohu uvést studium cizích jazyků. Minulý rok
            jsem měl čtyři hodiny týdně španělštiny (což je samo o sobě zoufale málo) a jen dvě(!)
            hodiny týdně němčiny. Pokud nechcete být překladatel nebo tlumočník a chcete cizí jazyky
            využít čistě jako dorozumívací prostředek, neudělejte stejnou chybu jako já, vybrat si
            obor zaměřený pouze na studium cizích jazyků je ztráta času. Úplně se stejnou
            efektivitou se dá studovat na vlastní pěst.
            <br />
            Ještě jedna důležitá věc, kterou bych rád zmínil, nebojte se změnit obor, pokud nejste
            spokojení. Mně trvalo tři roky a dvě změny oboru, než jsem si našel obor, který mě
            opravdu baví, naplňuje mě a má na pracovním trhu velký potenciál. I přesto, že se
            chystám pokračovat ve studiu od příštího roku v Prazea z Velké Británie si neodvezu
            žádný akademický titul, rozhodně tu svůj pobyt nevnímám jako ztrátu času. Jsou tací
            lidé, a není jich málo, kteří kompletně změní profesi třeba po deseti letech praxe,
            někteří i později. Tímto rozhodně nehodlám nijak zlehčovat význam univerzitního titulu
            na pracovním trhu! Věřím, že pokud smysluplně využijete svůj čas ještě před nástupem na
            univerzitu hledáním toho, co vás opravdu baví, budete při výběru úspěšnější než já
            (pokud ne, vůbec nic se neděje).
          </p>
        </article>
      )}

      {article === 6 && (
        <article id="Prace" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Práce</h1>
          </div>
          <p>
            Minimální mzda ve Velké Británii je v současné době pro 18-20leté £6.45/hod (190-200
            CZK), £8.20/hod (240-250 CZK) pro 21-24leté a £8.72/hod (260-270 CZK) pro 25+. Koho
            zajímá oficiální dokument, může si ho stáhnout{" "}
            <a
              href="https://www.gov.uk/government/publications/the-national-minimum-wage-in-2020"
              target="_blank"
              rel="noreferrer">
              zde
            </a>
            . Pokud máte hluboko do kapsy, nebo se chcete co nejdřív finančně osamostatnit nebo
            obojí, rozhodně doporučuju udělat si CV už před příjezdem a hned první týden si oběhnout
            obchody jak na kampusu, tak v centru města. Další důležitá informace, kterou potřebujete
            vědět: musíte si zařídit NIN (National Insurance Number). Dá se domluvit schůzka přímo
            přes univerzitu, nebo se musíte objednat sami{" "}
            <a
              href="https://www.gov.uk/apply-national-insurance-number"
              target="_blank"
              rel="noreferrer">
              zde
            </a>
            . Proces zabere zhruba dva měsíce, můžete však začít pracovat ihned, i pokud ještě
            nemáte NIN.
            <br />
            Já sám jsem s hledáním práce po příjezdu začal příliš pozdě, takže vám radím, abyste
            neudělali stejnou chybu, protože jinak budete mít problémy něco si najít. Před Vánocemi
            jsem narazil na agenturu, přes kterou se mi podařilo občas sehnat práci v různých
            skladech, ale byl to velice nestabilní příjem, ačkoliv po nějaké době jsem se v jednom
            skladu uchytil a začal jsem si vydělávat pravidelně. Vydržel jsem u nich zhruba rok a
            půl, než jsem si našel lepší práci za lepší plat opět přes jinou agenturu jako sociální
            pracovník, což dělám doteď už asi rok. Pokud si najdete opravdu dobrou práci, tak si
            můžete přes prázdniny naspořit až £1000 (30000 CZK) za měsíc, za předpokladu že
            pracujete na plný úvazek a utrácíte pouze za stravu a nájem.
          </p>
        </article>
      )}

      {article === 7 && (
        <article id="Zivotninaklady" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Životní náklady</h1>
          </div>
          <p>
            Jednoznačně největší výdaj je ubytování, což je zároveň jediný pravidelný výdaj spolu s
            dopravou, který je ve Velké Británii výrazně vyšší než v ČR. Já jsem zatím vystřídal tři
            ubytování, tak vám mohu na názorném příkladu ukázat, kolik jsem platil/platím. První rok
            jsem bydlel na kampusu za £320 měsíčně (9-10K CZK) (avšak pozor, platí se v tříměsíčních
            intervalech dopředu!), ve druháku jsem si našel soukromé ubytování za £362 za měsíc a
            minulý a následující rok jiné soukromé ubytování za zhruba £370-390 měsíčně (£315 fixní
            cena a zbytek jsou energie, které platíme odděleně).
            <br />
            Zapomeňte na levné studentské jídelny, které znáte z ČR. Na kampusu je mnoho restaurací,
            avšak ceny jsou přestřelené. Začněte si sami vařit, a pokud to neumíte, naučte se to! Za
            potraviny v supermarketu utratíte v průměru zhruba stejně jako v ČR a některé produkty
            jsou dokonce levnější, například 10 vajec v přepočtu za 20 korun nebo kilo mraženého
            hrášku za 40 korun.
            <br />
            Za jídlo v průměru týdně utratím necelých £30 (900 CZK), dá se ale vyžít i s 20.
            <br />
            Oblečení je tu také levnější než v ČR. Jako příklad můžu uvést rifle, středně drahé
            nakoupím zhruba za £10 (300 CZK), ve slevě se dají pořídit i levněji.
            <br />
            Pokud hrubě zaokrouhlím svoje celkové měsíční výdaje a počítám jen nájem a stravu,
            dostanu £500 (15K CZK).
            <br />
            Jako studentům vám bohatě stačí pracovat 20h/týdně k pokrytí životních nákladů a ještě
            si něco málo naspoříte (samozřejmě záleží za co všechno utrácíte).
            <br />
            Poslední věc, která stojí za zmínku, je doprava. Samozřejmě záleží, ve kterém městě se
            nacházíte. Já platím £2.60 (75 CZK) za jednosměrnou jízdenku do centra města a £4.30
            (130 CZK) za výhodnější denní jízdenku po městském okruhu, který zahrnuje i nejbližší
            okolní vesnice. Většina studentů, co znám, využila možnosti koupit si roční jízdenku za
            £175 (5200 CZK). Já chodím skoro všude pěšky, takže za dopravu utrácím jen minimálně,
            ale to samozřejmě záleží na okolnostech, každý to má jinak.
          </p>
        </article>
      )}

      {article === 8 && (
        <article id="Ubytovani" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Ubytování</h1>
          </div>
          <div>
            Když jsem si vybíral ubytování, dostal jsem doporučení z UniLinku, že pro první ročníky
            je nejlepší ubytování na kampusu. Řekl bych, že to záleží na člověku. Pokud se chystáte
            do zahraničí přímo ze střední školy a máte minimum životních zkušeností, pak bych s nimi
            rozhodně souhlasil. Veškeré dění na kampusu máte přímo před nosem a je pro vás nejsnazší
            navázat nové kontakty a rychleji si zvyknout na nové prostředí. Každá univerzita má
            samozřejmě odlišnou kvalitu ubytování, takže je pro mě těžké dávat nějakou univerzální
            radu.
            <br />
            Co se týče ubytování na kampusu, tak kromě nejlevnější možnosti je cena ubytování
            opravdu přestřelená, většina jich je o polovinu dražší než moje současné ubytování a
            přitom kvalita ubytování je nižší.
            <br />
            V prváku jsem bydlel v South Towers, což jsou obří paneláky s 15 patry. Z finančních
            důvodů jsem si vybral tu nejlevnější možnost. Sdílel jsem jednu větší kuchyň s 15
            náhodnými lidmi a sprchu a 2 záchody se 7 spolubydlícími (na patře nás bylo 16 a v
            každém křídle byla jedna sprcha a 2 záchody). Pro introverta jako já to byl nepříjemný
            šok a nikdy bych podobnou zkušenost znovu dobrovolně zažít nechtěl, ačkoliv na druhou
            stranu to byla životní zkušenost, která mě mnohé naučila.
            <br />
            Pro ty, kteří se chystají v podobném ubytování žít, mám pár užitečných rad:
            <ol>
              <li className="GiveTheSpace">Kupte si špunty do uší.</li>
              Bez nich se bohužel pořádně nevyspíte. Spolubydlící dělají občas v noci hluk, stejně
              tak jako náhodné kouřové alarmy, které ze začátku zvonily uprostřed noci třikrát do
              týdne (Samozřejmě po zaznění měli všichni povinnost se shromáždit venku před vchodem,
              ale proč bych to měl dělat? Já jsem se špunty dál vesele spal a nikdo na mě nikdy
              nepřišel.).
              <li className="GiveTheSpace">Obrňte se pořádnou dávkou trpělivosti.</li>
              Je to dost o náhodě, na jaké spolubydlící narazíte. Já jsem zhruba s půlkou vycházel
              velice dobře a s asi čtyřmi lidmi jsem se furt hádal. V kuchyni byl neustále
              nepořádek, neměl jsem dostatek místa na vaření a párkrát se mi stalo, že si někdo bez
              dovolení půjčil moje věci a nechal je neumyté. Je pravděpodobné, že na takové lidi
              narazíte. Na kampusu žije drtivá většina prváků z celého světa a různých kultur,
              většina doposud žila u rodičů, a tak se ještě musí základní vlastnosti nutné pro
              soužití s ostatními lidmi jako samostatnost, ohleduplnost a respekt k druhým ještě
              naučit.
              <li className="GiveTheSpace">Snažte se trávit co nejvíce času mimo svůj pokoj.</li>
              Kampus máte přímo pod nosem. Využijte toho! Z vlastní zkušenosti vím, že čím více času
              strávíte mezi lidmi v prostředí, které vám je blízké místo mezi čtyřmi zdmi temné
              depresivní kobky (jo, přesně tak můj pokoj vypadal), tím pro vás bude první rok
              snazší. Na kampusu je každý den velké množství různých akcí a zájmových aktivit, kde
              je pro vás mnohem snadnější najít si přátele, než na koleji.
            </ol>
            <br />
            V druháku jsem si našel soukromé ubytování opět s náhodnými lidmi, s kterými jsem ale
            tentokrát vycházel v pohodě (ačkoliv jsem je nepovažoval úplně za kámoše). Zase jsem měl
            problémy s druhým extrémem. Bydlel jsem moc daleko od univerzity a tak jsem měl mnohem
            menší motivaci se angažovat v jakýchkoliv aktivitách.
            <br />
            Minulý rok jsem začal hledat ubytování s předstihem a díky tomu se na mě usmála
            štěstěna. Povedlo se mi najít velmi dobře vybavené soukromé ubytování za skvělou cenu a
            blízko k univerzitě. Díky tomu, že jsem byl první, mohl jsem si k sobě vybrat lidi, co
            dobře znám a kterým můžu důvěřovat.
            <br />
            Závěr? Opět se snažím na názorném příkladu ilustrovat a zdůvodnit svoji radu. Obecně
            bych každému doporučil v prvním ročníku buď ubytování na kampusu, nebo soukromé
            ubytování blízko k univerzitě, ale jen tehdy, pokud dobře znáte lidi, s kterými hodláte
            bydlet, nebo jste ochotni to risknout (jestliže chcete najít to nejlepší ubytování na
            příští rok, začněte už v lednu!). Pokud máte problémy se spolubydlícími na kampusu,
            vždycky se dá obrátit buď na RA (Residence Assistant), což je starší student, který má
            za úkol dohlížet na soužití svých spolubydlících a řešit jakékoliv konflikty, nebo přímo
            na univerzitu. Pokud jste opravdu nešťastní, dá se totiž zařídit, že vás v rámci
            stejného ubytovacího zařízení přestěhují do jiného patra nebo budovy. To se o soukromém
            ubytování říci nedá a tam vám univerzita nepomůže.
            <br />V případě, že uvažujete o soukromém ubytování, doporučil bych vám skupiny na
            Facebooku, kde studenti sdílejí inzeráty (stačí zadat správná klíčová slova podle
            oblasti, nebo se poptat na fórech, já osobně jsem FB skupinu pro hledání ubytování
            nepoužil). Ještě vám můžu doporučit{" "}
            <a href="https://www.gumtree.com/property-to-rent" target="_blank" rel="noreferrer">
              Gumtree
            </a>
            , kde jsem našel bydlení já.
            <br />
            Pokud se chcete podívat, jak vypadá ubytování na kampusu, stačí zabrousit na stránky
            jakékoliv univerzity. Pro ty, co zajímá, jak vypadá soukromé ubytování, jsem udělal pár
            fotek{" "}
            <a href="Images.html" target="_blank">
              zde
            </a>
            .
          </div>
        </article>
      )}
      <div className="footer">
        <span className="copyright1">
          <i className="fas fa-copyright"></i> Jan Cesenek | 2020 | All rights reserved
        </span>
      </div>
    </div>
  ) : (
    <div>
      <nav id="navbar">
        <button className="flags">
          <img
            src={britishFlag}
            className="full-brightness"
            alt=""
            onClick={() => setCzech(false)}
          />
        </button>
        <button className="flags">
          <img src={czechFlag} className="full-brightness" alt="" onClick={() => setCzech(true)} />
        </button>
        <ul>
          <span id="biggerSize">
            <li className="thisChapter">
              <span
                className={article === 1 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(1)}>
                Introduction
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 2 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(2)}>
                Motivation to study
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 3 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(3)}>
                Beginnings
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 4 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(4)}>
                Advantages of studying abroad
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 5 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(5)}>
                Education system
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 6 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(6)}>
                Work
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 7 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(7)}>
                Living costs
              </span>
            </li>
            <span className="points">•</span>
            <li className="thisChapter">
              <span
                className={article === 8 ? "navBlink active-chapter" : "navBlink"}
                onClick={() => setArticle(8)}>
                Accommodation
              </span>
            </li>
          </span>
          <span id="smallerSizeForText">
            <li id="firstElement">
              <div onClick={() => setArticle(1)}>
                <span className="textMode">Introduction</span>
              </div>
            </li>
            <li>
              <div onClick={() => setShowDropdown(!showDropdown)}>&#9776;</div>
              <ul className={showDropdown ? "" : "hidden-content"}>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(2)}>Motivation to study</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(3)}>Beginnings</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(4)}>Advantages of studying abroad</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(5)}>Education system</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(6)}>Work</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(7)}>Living costs</div>
                </li>
                <li className="dropdownContent">
                  <div onClick={() => setArticle(8)}>Accommodation</div>
                </li>
              </ul>
            </li>
          </span>
        </ul>
      </nav>
      {article === 1 && (
        <article id="Introduction" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Introduction</h1>
          </div>
          <p>
            Hello everyone, my name is John, I'm 22 and I've been living in Great Britain in
            Colchester slightly over three years.
            <br />
            This blog is just an experiment as my main goal ATM is to gain experience with web
            development, however if the following content convinces even one person about studying
            abroad, I will consider it a huge success!
            <br />
            Although I can't make an overall comparison as I don't have any data which would support
            my claims, I found out by observation of my surroundings, that only a small percentage
            of Czechs going to study abroad, (just to clarify: I don't count students who travel
            abroad to study only for one semester, but those who study for the whole duration of the
            course, which is 3-4 years), no matter if it's because they don't have enough
            information, from financial reasons, they are unnecessarily scared of such a big change,
            or they just don't want to. When I was applying to universities in Great Britain, I was
            the only one out of all last years of our grammar school (which is approximately 80
            students!), who chose to study abroad. At my university, there is several times more
            students for example from Lithuania or Cyprus, although those countries have much less
            inhabitants than Czech Republic.
            <br />
            How trustworthy you find this information, is entirely up to you. In my opinion, it will
            at least help you to make an approximate picture.
            <br />
            How did I find out about the possibility of studying abroad? By coincidence. In my third
            year of grammar school, I was in Prague to visit{" "}
            <a href="https://www.gaudeamus.cz" target="_blank" rel="noreferrer">
              Gaudeamus
            </a>
            , which is a “market” of universities, where different universities introduce themselves
            and lure high school students to apply with them. I came across{" "}
            <a href="https://www.unilink.cz" target="_blank" rel="noreferrer">
              UniLink
            </a>{" "}
            over there, which is an agency helping CZ/SK students with studying in Great Britain (I
            can highly recommend, definitely contact them!). I found out a plenty of useful
            information and started to seriously think about studying abroad thanks to them. On my
            way home I thoroughly read the flyer the gave me, when I got home, I visited their
            website and shortly after went to their lecture in Prague. Since then everything was
            clear to me. I became attached to the thought of studying abroad and didn't even wanna
            consider anything else.
          </p>
        </article>
      )}

      {article === 2 && (
        <article id="Motivationtostudy" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Motivation to study</h1>
          </div>
          <p>
            I would like to start with what motivated me personally (I believe that plenty of people
            at high school feel [or felt back then] in a very similar way). When I started my final
            year at grammar school, nothing indicated I would change my attitude. I was sloppy at
            school as usual, had terrible grades, I didn't care about my school report at all. I had
            to listen, that I could get top grades if I wasn't wasting my potential, at home as well
            as at school. I didn't care, no one was able to motivate me to study and explain to me,
            how to utilize given syllabus in practice, everything was always about learning a list
            of completely useless information for the test (which is IMO a stumbling block of Czech
            education system, I will get to it in more details later on).
            <br />
            During my final year I felt miserably, and I knew is time for a change. I was 18, adult
            by law, but I definitely didn't feel like one. I was still dependant and financially
            reliant on my parents who I was living with under the same roof. I needed my own space
            for self-development, even the fact that someone could constantly check up on me what I
            was doing in my free time discouraged me from doing anything productive.
            <br />
            My final exams were coming, and everybody started to write me off. Teachers, even my
            parents doubted I would pass. My parents knew as well as me that I need an average of 2
            (in our schools, we have marks from 1 to 5, 1 is the best, 5 is the worst), to be
            accepted to an English university. Because I refused to apply for any Czech universities
            as I didn't even wanna hear about it, my parents were worried I'm not gonna get anywhere
            and I would end up in a warehouse working for minimum wage. In the second term shortly
            before my finals I had approximately seven or eight 4s. I started studying for my finals
            roughly a month before the deadline and I spent ten hours a day studying and revising.
            Result? Average of 1.75, almost passing with distinction and sixth best Maturita (that's
            how our final exam in high school is called) from my class (there was 30 of us). I
            guess, I will be a student with the biggest grade contrast between mid-term + end-term
            school report, and Maturita exam in the history of my grammar school.
            <br />
            Why am I writing this? Certainly not to pour my heart out. I just wanna show on a good
            example, that anyone can get to England, if he/she does whatever it takes, studying
            abroad is definitely not just for “elite students” with top grades.
          </p>
        </article>
      )}

      {article === 3 && (
        <article id="Beginnings" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Beginnings</h1>
          </div>
          <p>
            As I've already mentioned, studying abroad is really for everyone, your character
            doesn't matter. Saying that you don't wanna leave home, just because you are shy
            introverts, who hardly get to know new people, you don't wanna lose those few friends
            you have at home and you would definitely stay lonely out there, is a completely
            nonsensical excuse.
            <br />
            I myself was at that time very closed person, who had huge trouble getting to know new
            people (who even had some symptoms of autism and suicidal tendencies at the start of
            grammar school). Besides, I went there completely on my own unlike some others, who
            applied to the same uni with their best friends. Although if you really want it, you
            won't find any excuses, I saw it as a challenge and a new life opportunity.
            <br />
            I'm not gonna pretend, that the beginnings weren't difficult, it takes some time, before
            you get used to the new environment, culture shock also plays its role. The more
            proactive attitude you adopt, the quicker you accustom. There are few hundreds of
            various societies and free-time activities on campus, which anyone can choose from, if
            you're not a nihilist.
          </p>
        </article>
      )}

      {article === 4 && (
        <article id="Advantagesofstudyingabroad" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Advantages of studying abroad</h1>
          </div>
          <div>
            <ul>
              <li className="GiveTheSpace">Getting to know people from all around the world</li>
              One of the huge advantages of studying abroad is to find friends from all around the
              world thanks to the blending of dozens of various cultures. GB is thanks to their
              colonial past one of the most multicultural societies in the world, which gives you
              the opportunity to broaden your horizons and learn about a lot of interesting things
              about life in different countries across the whole world first-hand. If you get lucky
              enough and find really good friends, it allows you to travel low-cost around the world
              (they invite you to their country for holidays and in return, you can host them in
              your country).
              <li className="GiveTheSpace">Self-development</li>
              Probably the most important thing and the main reason why to study abroad. You're here
              on your own, no one tells you what to do, no one checks up on you nor solves your
              problems. The beginnings tend to be harsh, before you accustom. But trust me, it's
              worth it. You probably won't notice that much how this experience changes you, but
              your surroundings will. When something goes wrong, you can't just hop on a train and
              get home in 2 hours for minimal expenses. You learn how to be independent, responsible
              and reliable adults, who can arrange everything on their own. In other words, you will
              grow up several times faster than if you stayed home.
              <br />
              The only point, which doesn't refer only to studying in GB, but to living abroad on
              your own in general.
              <li className="GiveTheSpace">Personal freedom</li>
              University education in GB is much more focused on self-study and gives you much more
              space and opportunities, how to manage your free time (which I'm gonna write about in
              more details in the following chapter). No-one makes a big deal out of your attendance
              and the teachers try to meet your needs in everything. If your attendance is very low,
              you must attend a compulsory meeting with your personal tutor, who will look for a
              reason. Don't be afraid, you can be as honest as you want, no-one is gonna judge you!
              The meeting is only informative and serves for data collection, which are then used to
              improve student's welfare and overall satisfaction with the university. It's not a
              problem to say that one of the compulsory modules doesn't entertain you at all and you
              see the lectures as a complete waste of time, or that you have financial difficulties
              and you need to earn extra money, they really do listen to you and don't judge you at
              all.
              <br />
              More free time mainly relates to the fact that you have the opportunity to become
              financially independent, which is something you can't become fully-fledged adults
              without.
              <li className="GiveTheSpace">
                You will become fluent in the most important language in the world
              </li>
              I guess I don't even need to justify this point (plus you are reading this in English
              either just because you wanna practice, or because you don't speak Czech and still
              somehow became interested in my blog which is mainly focused on Czech students). You
              will become automatically fluent in English without even having to study the language,
              which will open the doors to many international companies all around the world on the
              job market.
            </ul>
          </div>
        </article>
      )}

      {article === 5 && (
        <article id="Educationsystem" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Education system</h1>
          </div>
          <p>
            If you expect miracles from British universities, then I'm not gonna impress you. I had
            plenty of illusions before arrival and gradually came harsh reality and bitter
            disappointment.
            <br />
            I don't really have any experience with Czech universities ATM and I don't intend to
            deceive you with made up disinformation, so I'm not gonna compare too much. Both systems
            have their pros and cons and each person prefers a different approach.
            <br />
            However, I know a few things with certainty. As I've already mentioned, university
            education in GB is more based on self-study and self-presentation. You're not gonna
            avoid essays, no matter which course you choose. You'll be given a topic, or opportunity
            to choose from more options every trimester and write something about it with the help
            of academic resources, the essay doesn't always have the same structure and it depends
            on the context, sometimes you're expected to focus more on good resources and content
            and sometimes more on building your own argument.
            <br />
            If I compare a first-year timetable at a British uni and a Czech uni (obviously depends
            on the course, I roughly compare two different systems in general, if that's even
            possible), I don't like either of them. The Czech one is way too full and the British
            one too empty, a compromise between those two would be ideal. Thanks to some of my
            friends who study in CZ, I know that their timetable is so full that they are not even
            able to find a proper job beside studying apart from weekends. This is by the way one of
            the main reasons, why I chose to write a blog on this particular topic, you should be
            already able to become financially independent at the uni and if the university doesn't
            even try to allow you so, something is wrong.
            <br />
            A university should be from principle mostly about self-study, but in some courses, you
            need a lot more interaction, let's take foreign languages as an example. Last year I had
            four hours a week of Spanish (which is itself very low) and just two(!) hours a week of
            German. If you don't wanna be a translator or an interpreter and wanna use languages
            purely for communication, don't make the same mistake as I did, choosing a course
            focused solely on foreign languages is a waste of time. You can study on your own with
            the same efficiency.
            <br />
            Another important thing that I would like to mention, don't be afraid to change a
            course, if you are really unhappy. It took me three years and two changes of course
            before I found a field which I find very entertaining, fulfils me and has a great
            potential on the job market. Although I intend to continue studying in Prague next year
            and I won't bring any degree from GB, I certainly don't see my stay here as a waste of
            time. There are such people, not just a few, who completely change their job after ten
            years of practice, some even later. By saying this, I definitely don't intend to lower
            the importance of a degree on the job market! I believe if you meaningfully utilize your
            free time before even going to uni by looking for a field of study that you feel
            passionate about, you will be more successful in choosing your course than me (if not,
            nothing happens).
          </p>
        </article>
      )}

      {article === 6 && (
        <article id="Work" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Work</h1>
          </div>
          <p>
            The minimum wage in the Great Britain is currently £6.45/hr for 18-20 year-olds,
            £8.20/hr for 21-24 year-olds and £8.72/hr for 25+. If you are interested in an official
            document, you can download it{" "}
            <a
              href="https://www.gov.uk/government/publications/the-national-minimum-wage-in-2020"
              target="_blank"
              rel="noreferrer">
              here
            </a>
            .
            <br />
            If you have financial difficulties, or want to become financially independent ASAP, or
            both, I highly recommend making a CV before arrival and visit all shops on campus and in
            the town centre immediately during the first week. Another important info you need to
            know: you have to arrange a NIN (National Insurance Number). You can make an appointment
            through uni, otherwise you have to apply yourself{" "}
            <a
              href="https://www.gov.uk/apply-national-insurance-number"
              target="_blank"
              rel="noreferrer">
              here
            </a>
            . The process takes approximately two months, but you can start working immediately,
            even if you still don't have NIN.
            <br />I started looking for a job way too late myself, so I strongly advise you not to
            make the same mistake, otherwise you will have trouble finding something decent. Before
            Christmas, I came across an agency, through which I managed to find a job in various
            warehouses, but it was a very unstable income, although after a while I started to work
            in one warehouse on a regular basis finally being able to pay my own bills. I stayed
            roughly for a year and a half, before I found a better job where I got paid more again
            through a different agency as a care worker, which I have been doing until now for a
            year. If you find a really good job, you can save up during holidays up to £1000/month,
            considering you work full-time and spend your money only on food and rent.
          </p>
        </article>
      )}

      {article === 7 && (
        <article id="Livingcosts" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Living costs</h1>
          </div>
          <p>
            The biggest expense is by far the accommodation, which is the only regular expense along
            with the public transport, which is significantly higher than in CZ. I have already
            switched three accommodations, so I can show you how much I paid/pay now. I lived in
            campus during my first year for £320/month (although you pay in advance in quarterly
            intervals!), then a year later found a private accommodation for £362/month and last
            year found another private accommodation for £370-390 month (£315 fixed price and the
            rest are utility bills, which we pay separately).
            <br />
            Forget about cheap student bistros you might know from CZ. There is a plenty of
            restaurants on campus, however the prices are very high. Start cooking on your own and
            if you can't, learn it! On average, you spend for food in supermarket the same price as
            in CZ and some products are even cheaper, for example 10 eggs for 77p or 1kg of frozen
            peas for £1.30.
            <br />
            I spend for food just under £30/week on average, although you can easily budget with 20.
            <br />
            The clothes are also cheaper here than in CZ. Let's take jeans as an example, I buy
            middle-priced ones for £10, I can get them even cheaper on sale.
            <br />
            If I roughly round up my overall monthly expenses and count only rent and food, I get
            £500.
            <br />
            As students, it's more than enough for you to work 20hrs/week to cover your expenses and
            you might even save up a little (of course depends what you spend your money on).
            <br />
            The last thing worth mentioning is the public transport. It obviously depends on which
            city you live in. I pay £2.60 for one-way ticket to the town centre and £4.30 for more
            favourable daily ticket that's valid everywhere around the town plus a few surrounding
            villages. Most students I know of prefer to spend £175 for a yearly ticket. I walk
            almost everywhere, so I spend a negligible amount of money on public transport, but it
            apparently depends on the circumstances, everyone has it different.
          </p>
        </article>
      )}

      {article === 8 && (
        <article id="Accommodation" className="menu-content">
          <div className="centered">
            <h1 className="hideTheH1">Accommodation</h1>
          </div>
          <div>
            When I was choosing my accommodation, I was advised by UniLink that on-campus
            accommodation is the best choice for first-years. I would say it depends on what kind of
            a person you are. If you are going to study abroad straight from the high school and you
            have minimal life experience, then I would definitely agree with them. You have right
            under your nose literally everything that's happening on campus and it's far easier for
            you to get to know new people and adapt to the new environment. Each university has
            obviously a different quality of accommodation, so it's difficult for me to give you a
            universal advice.
            <br />
            When it comes to on-campus accommodation, all of the facilities except the cheapest ones
            are very expensive, most of them are 50% more expensive than my current accommodation
            even tho the living standard is lower.
            <br />
            I was living in South Towers during my first year, which are 15-floor huge blocks of
            flats. I chose the cheapest option for financial reasons. I shared one bigger kitchen
            with 15 random people and shower and 2 toilets with 7 flatmates (there was 16 of us in
            one floor and we had one shower and 2 toilets in each wing). It was a very unpleasant
            shock for an introvert like me and I would never want to live there ever again, although
            it was a life experience that taught me a lot of things.
            <br />I have some useful advice for those who intend to live in a similar facility:
            <ol>
              <li className="GiveTheSpace">Buy earplugs.</li>
              Unfortunately, you won't get a proper sleep without them. Flatmates are sometimes
              noisy at night as well as random smoke alarms, which used to ring three times a week
              in the middle of the night (Obviously after ringing everyone was obliged to gather in
              front of the building, but why should I do that? I kept soundly sleeping with earplugs
              on and no-one ever found out.).
              <li className="GiveTheSpace">Learn how to be patient.</li>
              You get completely random flatmates, so you might not have the same experience as I
              had, could be better, could be worse. I got along very well with half of them and kept
              fighting with four of them. There was a constant mess in the kitchen, I didn't have
              enough space to cook and several times someone borrowed my kitchen stuff without
              asking me and left them unwashed. It's very likely you will come across such people.
              Vast majority of first-years from all around the world and from different cultures
              live on campus, most of them used to live with their parents until then, and so they
              still have to learn basic personality traits necessary for coexistence with others
              such as independence, consideration and respecting their flatmates.
              <li className="GiveTheSpace">
                Try to spend as much time as possible outside of your room.
              </li>
              Campus is right under your nose. Utilize it! I know from my personal experience that
              the more time you spend with people in an environment close to you instead of among
              four walls of a dark depressing cell (yeah, that's exactly how my room looked like),
              the easier you find your first-year. Every day, there is a plenty of various societies
              and activities on campus, where it's much easier for you to find friends than in your
              accommodation.
            </ol>
            <br />
            A year after that, I found a private accommodation, again with random people, who I got
            along completely fine with tho (although I didn't really consider them as friends). This
            time, I had issues with the opposite extreme. I was living way too far from the uni, so
            I had less motivation to participate in any on-campus activities.
            <br />
            Last year, I started to look for an accommodation way in advance and thanks to my
            determination, I got lucky. I managed to find a very well-equipped house for a
            reasonable price close to the uni. Thanks to the fact I came first, I could choose
            people to live with, who I know well and can trust.
            <br />
            Conclusion? Again, I'm trying to illustrate and justify my advice by this example. I
            would generally recommend everyone in the first year either on-campus accommodation, or
            a private accommodation close to the uni, but only if you know people you will be living
            with, or you are willing to risk it (if you want to find the best accommodation for the
            next year, start in January!). If you have problems with your flatmates on campus, you
            can always discuss this with your RA (Resident Assistant), who is an older student,
            whose task is to supervise the coexistence of his flatmates and solve any issues
            whatsoever, or you can contact directly the university. If you are really unhappy, you
            can be moved to a different floor within the same facility. The same thing can't be
            applied to private accommodation, the university can't help you with that.
            <br />
            In case you are wondering about private accommodation, I would recommend you Facebook
            groups, where students share last-minute accommodation adverts (just use the right
            keywords, you should find plenty of such groups according to your location, or you can
            ask at different forums, I personally never used FB group to look for an accommodation).
            I can also recommend you{" "}
            <a href="https://www.gumtree.com/property-to-rent" target="_blank" rel="noreferrer">
              Gumtree
            </a>
            , which is where I found my accommodation.
            <br />
            For those interested in how uni accommodation looks like, just visit their website. For
            those interested in private accommodation, I made a few photos for you{" "}
            <a href="Images.html" target="_blank">
              here
            </a>
            .
          </div>
        </article>
      )}
      <div className="footer">
        <span className="copyright1">
          <i className="fas fa-copyright"></i> Jan Cesenek | 2020 | All rights reserved
        </span>
      </div>
    </div>
  );
}

export default App;
