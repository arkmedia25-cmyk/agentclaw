import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer | AmareReview.nl',
  description: 'Lees onze disclaimer over affiliate links, medische claims, en aansprakelijkheid.',
  alternates: { canonical: 'https://amarereview.nl/disclaimer' },
}

export default function DisclaimerPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Disclaimer</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Laatst bijgewerkt: 13 mei 2026
          </p>
        </div>
      </div>

      <div className="container-max section-padding">
        <article className="prose max-w-3xl text-text space-y-6">

          <div className="bg-accent-light border-l-4 border-accent p-5 rounded mb-8">
            <p className="text-sm font-bold text-primary mb-1">⚠️ Belangrijk — Lees dit zorgvuldig</p>
            <p className="text-sm text-text">Door gebruik te maken van deze website ga je akkoord met onderstaande voorwaarden. Als je het niet eens bent met (een deel van) deze disclaimer, verlaat dan de website.</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">1. Geen medisch advies</h2>
            <p className="font-bold text-error">WAARSCHUWING:</p>
            <p>
              De informatie op AmareReview.nl is uitsluitend bedoeld voor <strong>informatieve en educatieve doeleinden</strong>. Niets op deze website mag worden opgevat als:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medisch advies, diagnose of behandeling</li>
              <li>Vervanging voor professioneel medisch consult</li>
              <li>Aanbeveling om voorgeschreven medicatie te staken of wijzigen</li>
              <li>Garantie op resultaten van supplementen of producten</li>
            </ul>
            <p className="font-bold">
              Raadpleeg altijd een gekwalificeerde arts of zorgverlener voordat je begint met een supplement, dieet of trainingsprogramma — vooral bij zwangerschap, borstvoeding, bestaande medische aandoeningen of medicijngebruik.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">2. Affiliate disclaimer</h2>
            <p>
              AmareReview.nl neemt deel aan affiliate-programmas. Dit betekent:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sommige links op deze website zijn <strong>affiliate links</strong>. Wanneer je via zo'n link een aankoop doet, ontvangen wij een commissie van de verkoper.</li>
              <li>Dit heeft <strong>geen enkele invloed op de prijs</strong> die jij betaalt — je betaalt exact hetzelfde als wanneer je direct zou bestellen.</li>
              <li>Onze reviews, ratings en aanbevelingen zijn <strong>volledig onafhankelijk</strong>. Affiliate-relaties beïnvloeden nooit onze beoordeling van producten.</li>
              <li>We schrijven zowel positieve als negatieve punten — onze geloofwaardigheid is belangrijker dan commissie.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3. Informatieve nauwkeurigheid</h2>
            <p>
              Wij doen ons best om alle informatie op deze website actueel, correct en volledig te houden. Echter:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Productprijzen, beschikbaarheid en specificaties kunnen wijzigen zonder voorafgaande kennisgeving.</li>
              <li>Ingrediëntenlijsten en productclaims zijn gebaseerd op informatie van de fabrikant — wij kunnen niet garanderen dat deze 100% actueel is.</li>
              <li>Reviews en ratings zijn gebaseerd op onderzoek, gebruikerervaringen en onze eigen analyse op het moment van publicatie.</li>
              <li>Resultaten van supplementen variëren per persoon — wat voor de een werkt, werkt mogelijk niet voor de ander.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">4. Beperking van aansprakelijkheid</h2>
            <p>
              AmareReview.nl, de eigenaar en eventuele medewerkers zijn <strong>niet aansprakelijk</strong> voor:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Directe of indirecte schade voortvloeiend uit het gebruik van informatie op deze website.</li>
              <li>Beslissingen die je neemt op basis van onze reviews, aanbevelingen of andere inhoud.</li>
              <li>Resultaten of bijwerkingen van producten die via onze links worden aangeschaft.</li>
              <li>Fouten, onvolledigheden of verouderde informatie op de website.</li>
              <li>De inhoud van externe websites waarnaar wij linken (inclusief Amare.com en AmareNL.com).</li>
              <li>Technische storingen, onderbrekingen of onbeschikbaarheid van de website.</li>
            </ul>
            <p>
              Het gebruik van deze website is volledig voor <strong>eigen risico</strong>. Door de website te gebruiken, vrijwaar je AmareReview.nl van alle aansprakelijkheid voor schade of verlies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">5. Externe links</h2>
            <p>
              Onze website bevat links naar externe websites, waaronder maar niet beperkt tot:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amare.com — de officiële webshop van Amare</li>
              <li>AmareNL.com — onze lead capture en informatiepagina</li>
              <li>Andere review- en informatiewebsites</li>
            </ul>
            <p>
              Wij hebben <strong>geen controle</strong> over de inhoud, het privacybeleid of de praktijken van deze externe websites. Wij aanvaarden geen verantwoordelijkheid of aansprakelijkheid voor deze websites. Bezoek externe links op eigen risico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">6. Geen garantie op productresultaten</h2>
            <p>
              De producten die wij bespreken zijn supplementen. De effecten van supplementen verschillen per persoon en zijn afhankelijk van factoren zoals:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Individuele gezondheidstoestand en stofwisseling</li>
              <li>Consistentie van gebruik</li>
              <li>Dieet en levensstijl</li>
              <li>Eventuele medische aandoeningen</li>
            </ul>
            <p>
              Wij <strong>garanderen geen specifieke resultaten</strong>. Gebruikerservaringen die we delen zijn individuele ervaringen en mogen niet worden gezien als typische of gegarandeerde resultaten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">7. Intellectueel eigendom</h2>
            <p>
              Alle inhoud op AmareReview.nl — inclusief teksten, afbeeldingen, logos, en grafische elementen — is eigendom van AmareReview.nl, tenzij anders vermeld. Zonder voorafgaande schriftelijke toestemming is het niet toegestaan om:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Inhoud te kopiëren, reproduceren of verspreiden</li>
              <li>Inhoud te gebruiken voor commerciële doeleinden</li>
              <li>Inhoud te wijzigen of te bewerken</li>
              <li>Onze merknaam of logo te gebruiken zonder toestemming</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">8. Geen professionele relatie</h2>
            <p>
              Het gebruik van deze website creëert <strong>geen</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Arts-patiënt relatie</li>
              <li>Therapeut-cliënt relatie</li>
              <li>Coach-cliënt relatie</li>
              <li>Enige andere professionele relatie</li>
            </ul>
            <p>
              Wij zijn reviewers en informanten, geen medische professionals. Voor medische vragen: raadpleeg altijd een arts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">9. Gepubliceerde meningen</h2>
            <p>
              Reviews en meningen op deze website zijn de <strong>persoonlijke mening</strong> van de auteur(s). Ze vertegenwoordigen geen officiële standpunten van Amare of andere fabrikanten. Gebruikerervaringen zijn individueel en kunnen afwijken van jouw ervaring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">10. E-mailcommunicatie</h2>
            <p>
              Door je e-mailadres achter te laten via onze formulieren, ga je akkoord met het ontvangen van:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>De aangevraagde gratis gids of informatie</li>
              <li>Educatieve e-mails gerelateerd aan het door jou opgegeven onderwerp</li>
            </ul>
            <p>
              Je kunt je op elk moment <strong>direct uitschrijven</strong> via de afmeldlink onderaan elke e-mail. Je e-mailadres wordt nooit gedeeld, verkocht of gebruikt voor andere doeleinden dan hier beschreven. Zie ons <Link href="/privacybeleid" className="text-accent hover:underline">privacybeleid</Link> voor meer informatie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">11. Toepasselijk recht</h2>
            <p>
              Op deze disclaimer en het gebruik van deze website is <strong>Nederlands recht</strong> van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">12. Wijzigingen</h2>
            <p>
              Wij behouden ons het recht voor deze disclaimer op elk moment te wijzigen. De meest recente versie is altijd beschikbaar op deze pagina. Controleer deze pagina regelmatig op updates. Voortgezet gebruik van de website na wijzigingen betekent aanvaarding van de gewijzigde disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">13. Volledige overeenkomst</h2>
            <p>
              Deze disclaimer, samen met ons <Link href="/privacybeleid" className="text-accent hover:underline">privacybeleid</Link>, vormt de volledige overeenkomst tussen jou en AmareReview.nl met betrekking tot het gebruik van deze website. Mocht een bepaling uit deze disclaimer ongeldig of niet-afdwingbaar zijn, dan blijven de overige bepalingen volledig van kracht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">14. Contact</h2>
            <p>
              Voor vragen over deze disclaimer:
            </p>
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
