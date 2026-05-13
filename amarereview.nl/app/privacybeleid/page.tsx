import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacybeleid | AmareReview.nl',
  description: 'Hoe wij omgaan met jouw gegevens. Lees ons privacybeleid.',
  alternates: { canonical: 'https://amarereview.nl/privacybeleid' },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Privacybeleid</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Laatst bijgewerkt: 13 mei 2026
          </p>
        </div>
      </div>

      <div className="container-max section-padding">
        <article className="prose max-w-3xl text-text space-y-6">

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Over ons privacybeleid</h2>
            <p>
              AmareReview.nl hecht veel waarde aan de bescherming van jouw persoonsgegevens. In dit privacybeleid leggen we uit welke gegevens we verzamelen, waarom we dat doen, en wat jouw rechten zijn.
            </p>
            <p>
              Wij verwerken persoonsgegevens in overeenstemming met de <strong>Algemene Verordening Gegevensbescherming (AVG/GDPR)</strong> en de Nederlandse privacywetgeving.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Wie zijn wij</h2>
            <p>
              <strong>Website:</strong> <Link href="/" className="text-accent hover:underline">https://amarereview.nl</Link><br />
              <strong>E-mail:</strong> contact@amarereview.nl<br />
              <strong>Verantwoordelijke:</strong> De eigenaar van AmareReview.nl, bereikbaar via bovenstaand e-mailadres.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Welke gegevens verzamelen wij</h2>

            <h3 className="font-bold text-primary mt-4 mb-2">3.1 Gegevens die je zelf verstrekt</h3>
            <p>Wanneer je gebruik maakt van onze website, kun je vrijwillig de volgende gegevens verstrekken:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Naam</strong> (voornaam) — bij het aanvragen van een gratis gids</li>
              <li><strong>E-mailadres</strong> — bij het aanvragen van een gratis gids of inschrijven op de nieuwsbrief</li>
              <li><strong>Berichtinhoud</strong> — wanneer je het contactformulier invult</li>
            </ul>
            <p className="text-sm text-text-muted">Deze gegevens worden uitsluitend gebruikt voor het doel waarvoor je ze hebt verstrekt.</p>

            <h3 className="font-bold text-primary mt-4 mb-2">3.2 Automatisch verzamelde gegevens</h3>
            <p>Bij een bezoek aan onze website worden automatisch de volgende gegevens verzameld:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>IP-adres (geanonimiseerd)</li>
              <li>Browser type en versie</li>
              <li>Bezochte paginas en tijdsduur</li>
              <li>Verwijzende website (referrer)</li>
            </ul>
            <p className="text-sm text-text-muted">Deze gegevens worden uitsluitend gebruikt voor statistische doeleinden en het verbeteren van de website. Ze worden niet gekoppeld aan individuele personen.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Waarvoor gebruiken wij jouw gegevens</h2>
            <p>Wij gebruiken jouw gegevens voor de volgende doeleinden:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Gratis gidsen en informatie:</strong> Het toesturen van de door jou aangevraagde gratis gids, checklist of e-mailserie.</li>
              <li><strong>E-mailcommunicatie:</strong> Het versturen van educatieve e-mails met tips en informatie over Amare-producten, uitsluitend na jouw toestemming.</li>
              <li><strong>Klantenservice:</strong> Het beantwoorden van vragen die je stelt via het contactformulier.</li>
              <li><strong>Websiteverbetering:</strong> Het analyseren van bezoekgedrag om onze inhoud en gebruikerservaring te verbeteren.</li>
            </ul>
            <p>Wij gebruiken jouw gegevens <strong>nooit</strong> voor ongevraagde commerciële doeleinden zonder expliciete toestemming.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Cookies</h2>
            <p>Onze website gebruikt minimale cookies:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Functionele cookies:</strong> Noodzakelijk voor het functioneren van de website. Deze worden niet gebruikt voor tracking.</li>
              <li><strong>Analytische cookies:</strong> Optioneel — voor het meten van websitebezoek (via Vercel Analytics of Google Analytics, indien ingeschakeld). Deze cookies bevatten geen persoonsgegevens.</li>
            </ul>
            <p>Je kunt cookies uitschakelen in je browserinstellingen. De website blijft functioneren zonder cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Delen met derden</h2>
            <p>Wij delen jouw persoonsgegevens <strong>uitsluitend</strong> met de volgende verwerkers:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vercel Inc.</strong> (VS) — Hostingplatform. Verwerkt IP-adressen en verkeersgegevens. Privacy Shield-gecertificeerd.</li>
              <li><strong>E-maildienstverlener</strong> (Mailchimp / ConvertKit / Klaviyo) — Voor het versturen van e-mails na jouw aanmelding. Alleen actief indien je je e-mailadres vrijwillig verstrekt.</li>
            </ul>
            <p>Wij <strong>verkopen nooit</strong> jouw gegevens aan derden. Wij <strong>gebruiken nooit</strong> jouw gegevens voor doeleinden anders dan hierboven beschreven.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Bewaartermijn</h2>
            <p>Wij bewaren jouw persoonsgegevens niet langer dan noodzakelijk:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>E-mailadres:</strong> Totdat je je uitschrijft. Iedere e-mail bevat een uitschrijflink waarmee je direct kunt afmelden.</li>
              <li><strong>Contactformulier:</strong> Maximaal 12 maanden na laatste contact.</li>
              <li><strong>Analytische gegevens:</strong> Maximaal 26 maanden (standaard Google Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Jouw rechten</h2>
            <p>Op grond van de AVG/GDPR heb je de volgende rechten:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Recht op inzage:</strong> Je mag opvragen welke persoonsgegevens wij van jou verwerken.</li>
              <li><strong>Recht op rectificatie:</strong> Je mag onjuiste gegevens laten corrigeren.</li>
              <li><strong>Recht op verwijdering:</strong> Je mag je gegevens laten verwijderen (recht op vergetelheid).</li>
              <li><strong>Recht op beperking:</strong> Je mag de verwerking van je gegevens beperken.</li>
              <li><strong>Recht op overdracht:</strong> Je mag je gegevens in een gestructureerd formaat opvragen.</li>
              <li><strong>Recht op bezwaar:</strong> Je mag bezwaar maken tegen de verwerking van je gegevens.</li>
            </ul>
            <p>Voor het uitoefenen van deze rechten, stuur een e-mail naar <strong>contact@amarereview.nl</strong>. We reageren binnen 30 dagen.</p>
            <p>Heb je een klacht over hoe wij met je gegevens omgaan? Je hebt het recht een klacht in te dienen bij de <strong>Autoriteit Persoonsgegevens</strong> (<a href="https://autoriteitpersoonsgegevens.nl" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">9. Beveiliging</h2>
            <p>Wij nemen passende technische en organisatorische maatregelen om jouw persoonsgegevens te beveiligen tegen verlies, misbruik, onbevoegde toegang, openbaarmaking of wijziging, waaronder:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Versleutelde verbinding (HTTPS) voor alle paginas</li>
              <li>Toegangscontrole op server- en applicatieniveau</li>
              <li>Minimale gegevensopslag — alleen wat strikt noodzakelijk is</li>
              <li>Regelmatige beveiligingsupdates van het platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">10. Minderjarigen</h2>
            <p>Onze website is niet gericht op personen onder de 16 jaar. Wij verzamelen niet bewust gegevens van minderjarigen. Als je jonger bent dan 16 jaar, vraag dan toestemming aan je ouder of voogd voordat je persoonsgegevens verstrekt.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">11. Wijzigingen</h2>
            <p>Dit privacybeleid kan worden bijgewerkt. De meest recente versie is altijd beschikbaar op deze pagina. Bij ingrijpende wijzigingen informeren we je via de website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">12. Contact</h2>
            <p>Voor vragen over dit privacybeleid of over de verwerking van je gegevens:</p>
            <p>
              📧 <strong>E-mail:</strong> contact@amarereview.nl<br />
              🌐 <strong>Website:</strong> <Link href="/contact" className="text-accent hover:underline">Contactformulier</Link>
            </p>
          </section>

        </article>
      </div>
    </>
  )
}
