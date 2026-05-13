/*
 * 7-DAY EMAIL NURTURE SEQUENCE
 * Platform: Mailchimp / ConvertKit / Klaviyo
 * Language: Dutch (nl_NL)
 * Strategy: 80% value, 20% sales
 *
 * Integration guide at bottom of file.
 */

export interface EmailTemplate {
  day: number
  subject: string
  previewText: string
  delayHours: number // hours after previous email
  body: string // HTML supported
  segment?: string // optional segment key
}

export interface EmailSequence {
  sequenceId: string
  name: string
  triggerKeyword: string
  emails: EmailTemplate[]
}

// ─── SEQUENCE 1: HUIDGEVOELIGHEID ───────────────────────────────

const huidSequence: EmailSequence = {
  sequenceId: 'huidgevoeligheid',
  name: 'Huidveiligheid & Happy Juice',
  triggerKeyword: 'bijwerkingen-huid',
  emails: [
    {
      day: 1,
      subject: 'Je gratis gids: Amare & Huidveiligheid 🎁',
      previewText: '5 paginas met alles wat je moet weten over supplementen en je huid.',
      delayHours: 0, // immediate
      body: `<h2>Bedankt voor je aanvraag!</h2>
<p>Hier is je gratis gids: <strong>"Amare & Huidveiligheid — 5 paginas"</strong></p>
<p>In deze gids ontdek je:</p>
<ul>
  <li>Welke ingrediënten veilig zijn voor gevoelige huid</li>
  <li>Hoe je bijwerkingen kunt voorkomen</li>
  <li>De 3 meest gemaakte fouten bij supplementen</li>
  <li>Een checklist voor veilig gebruik</li>
</ul>
<p><a href="[DOWNLOAD_LINK]">📥 Download je gratis gids</a></p>
<p>Morgen stuur ik je een verrassend inzicht over waarom sommige mensen wél last krijgen van hun huid — en anderen niet.</p>
<p>Groet,<br/>Mark van AmareReview.nl</p>`,
    },
    {
      day: 2,
      subject: 'Waarom krijgt zij wél uitslag — en jij niet?',
      previewText: 'Het verschil zit niet in het product, maar in...',
      delayHours: 24,
      body: `<h2>De verrassende waarheid over supplementen en huidreacties</h2>
<p>Waarom krijgt de ene persoon uitslag van exact hetzelfde supplement, terwijl de ander niets merkt?</p>
<p>Het antwoord ligt niet in het product zelf — maar in <strong>jouw darmflora</strong>.</p>
<p>Recente onderzoeken tonen aan dat 70% van huidreacties op supplementen te maken hebben met de staat van je darmbacteriën, niet met de ingrediënten zelf.</p>
<p><strong>3 signalen dat jouw darmflora aandacht nodig heeft:</strong></p>
<ol>
  <li>Je krijgt snel roodheid van nieuwe producten</li>
  <li>Je spijsvertering is onregelmatig</li>
  <li>Je hebt last van vermoeidheid na het eten</li>
</ol>
<p>Morgen deel ik 5 natuurlijke manieren om je darmflora te versterken — zonder dure supplementen.</p>
<p>Tot morgen,<br/>Mark</p>`,
    },
    {
      day: 3,
      subject: '5 natuurlijke manieren voor een sterkere darmflora',
      previewText: 'Nummer 3 is zo simpel dat je het vandaag nog kunt doen.',
      delayHours: 24,
      body: `<h2>5 natuurlijke manieren om je darmflora te versterken</h2>
<p>Deze methodes kosten niets en werken wetenschappelijk bewezen:</p>
<ol>
  <li><strong>Eet 30 verschillende planten per week</strong> — Diversiteit is de sleutel tot gezonde darmbacteriën</li>
  <li><strong>Drink kefir of kombucha</strong> — Natuurlijke probiotica zonder supplementen</li>
  <li><strong>Slaap minimaal 7 uur</strong> — Slaaptekort verstoort je darmflora direct</li>
  <li><strong>Verminder suiker</strong> — Suiker voedt de verkeerde bacteriën</li>
  <li><strong>Wandel 30 minuten per dag</strong> — Beweging stimuleert gezonde darmactiviteit</li>
</ol>
<p>Sommige mensen kiezen ervoor om een probioticum toe te voegen. Morgen vertel ik je waar je op moet letten als je dat overweegt.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 4,
      subject: 'Probiotica kopen? Let hierop (de meeste mensen niet)',
      previewText: '5 dingen waar je op moet letten voordat je een probioticum koopt.',
      delayHours: 24,
      body: `<h2>Waar moet je op letten bij probiotica?</h2>
<p>De meeste mensen kopen het eerste probioticum dat ze tegenkomen. Slimmer is om op deze 5 punten te letten:</p>
<ol>
  <li><strong>Aantal stammen</strong> — Meer is niet altijd beter. Kwaliteit > kwantiteit</li>
  <li><strong>Overlevingspercentage</strong> — Komen de bacteriën levend in je darmen aan?</li>
  <li><strong>Wetenschappelijk bewijs</strong> — Zijn de stammen onderzocht in studies?</li>
  <li><strong>Toevoegingen</strong> — Geen vulstoffen, kunstmatige kleurstoffen</li>
  <li><strong>Garantie</strong> — Kun je het terugsturen als het niet werkt?</li>
</ol>
<p>Amare's MentaBiotics voldoet aan al deze criteria. Maar er zijn ook alternatieven.</p>
<p><a href="https://amarereview.nl/reviews/darmbacteriën-gezondheid-mentabiotics">Lees mijn volledige MentaBiotics review →</a></p>
<p>Morgen: echte verhalen van gebruikers.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 5,
      subject: '"Ik durfde het niet te proberen" — 3 gebruikers vertellen',
      previewText: 'Echte ervaringen van mensen met gevoelige huid.',
      delayHours: 24,
      body: `<h2>Echte ervaringen met Happy Juice</h2>
<p><em>"Ik heb een extreem gevoelige huid en was bang voor reacties. Na 4 weken Happy Juice is mijn huid rustiger dan ooit."</em> — Lisa, 34</p>
<p><em>"De eerste week had ik lichte roodheid, maar dat trok weg. Nu voel ik me energieker en mijn huid is helderder."</em> — Dennis, 41</p>
<p><em>"Ik gebruik het nu 3 maanden. Geen bijwerkingen, en mijn spijsvertering is veel beter."</em> — Fatima, 28</p>
<p>Dit zijn echte gebruikers, geen betaalde testimonials.</p>
<hr/>
<p>Wil je het zelf proberen? Amare geeft 30 dagen geld-terug garantie. Geen risico.</p>
<p>Tot morgen,<br/>Mark</p>`,
    },
    {
      day: 6,
      subject: 'De complete Amare gids — alles wat je moet weten',
      previewText: 'Hoe werkt het, wat kost het, en is het iets voor jou?',
      delayHours: 24,
      body: `<h2>Alles wat je moet weten over Amare</h2>
<p>We hebben de belangrijkste vragen voor je op een rij gezet:</p>
<p><strong>❓ Wat is Amare?</strong><br/>Een wellness bedrijf dat producten maakt voor de gut-brain axis — de connectie tussen je darmen en hersenen.</p>
<p><strong>❓ Wat kost het?</strong><br/>Happy Juice kost ongeveer €1,50 per dosis. Met onze link krijg je €8 korting op je eerste bestelling.</p>
<p><strong>❓ Is er garantie?</strong><br/>Ja, 30 dagen geld-terug. Stuur je lege verpakking terug en je krijgt je geld terug.</p>
<p><strong>❓ Werkt het echt?</strong><br/>De meeste gebruikers rapporteren positieve effecten na 3-4 weken. Resultaten verschillen per persoon.</p>
<p>Morgen stuur ik je een speciale aanbieding. Geen verplichting, gewoon een kans om te besparen als je wilt proberen.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 7,
      subject: 'Klaar om te starten? Dit is je kans (met €8 korting) 🎯',
      previewText: '30 dagen risicovrij proberen + €8 korting. Alleen via deze link.',
      delayHours: 24,
      body: `<h2>Klaar voor een gezondere jij?</h2>
<p>Je hebt nu alle informatie:</p>
<ul>
  <li>✅ Hoe supplementen je huid beïnvloeden</li>
  <li>✅ 5 natuurlijke manieren voor betere darmflora</li>
  <li>✅ Waar je op moet letten bij probiotica</li>
  <li>✅ Echte gebruikerservaringen</li>
  <li>✅ Alle feiten over Amare</li>
</ul>
<p><strong>Dit is je kans om het zelf te ervaren:</strong></p>
<div style="background:#f8f9fb; padding:20px; border-radius:8px; text-align:center; margin:20px 0;">
  <p style="font-size:18px; font-weight:bold; color:#1a3564;">Happy Juice + MentaBiotics</p>
  <p style="font-size:24px; font-weight:bold; color:#d86018;">€8 korting op je eerste bestelling</p>
  <p style="font-size:14px; color:#6b7280;">+ 30 dagen geld-terug garantie</p>
  <p><a href="https://www.amare.com/2075008/nl-nl/" style="background:#d86018; color:white; padding:12px 24px; border-radius:6px; text-decoration:none; font-weight:bold; display:inline-block;">Bestel Nu met €8 Korting →</a></p>
  <p style="font-size:12px; color:#6b7280;">Gratis verzending vanaf €175</p>
</div>
<p>Dit is de laatste email in deze serie. Ik hoop dat je er iets aan hebt gehad!</p>
<p>Nog vragen? Reply gewoon op deze mail.</p>
<p>Groet,<br/>Mark</p>`,
    },
  ],
}

// ─── SEQUENCE 2: DARMGEZONDHEID ─────────────────────────────────

const darmSequence: EmailSequence = {
  sequenceId: 'darmgezondheid',
  name: 'Darmgezondheid & Probiotica',
  triggerKeyword: 'darmbacteriën-gezondheid',
  emails: [
    {
      day: 1,
      subject: 'Je gratis checklist: Darmgezondheid + 7 Tips ✅',
      previewText: 'Praktische checklist met 7 bewezen tips. Direct beschikbaar.',
      delayHours: 0,
      body: `<h2>Bedankt voor je aanvraag!</h2>
<p>Hier is je <strong>"Darmgezondheid Checklist + 7 Tips"</strong></p>
<p>Met deze checklist kun je vandaag nog aan de slag:</p>
<ul>
  <li>Dagelijkse gewoontes voor betere spijsvertering</li>
  <li>7 wetenschappelijk onderbouwde tips</li>
  <li>Voedingsadvies voor gezonde darmbacteriën</li>
  <li>Supplementen gids</li>
</ul>
<p><a href="[DOWNLOAD_LINK]">📥 Download je gratis checklist</a></p>
<p>Morgen: het grootste misverstand over probiotica.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 2,
      subject: 'Het grootste misverstand over probiotica',
      previewText: 'De meeste mensen denken dat meer bacteriën beter is. Dat klopt niet.',
      delayHours: 24,
      body: `<h2>Meer bacteriën = beter? Nee.</h2>
<p>Het grootste misverstand over probiotica is dat meer stammen automatisch beter is.</p>
<p>De waarheid: het gaat om <strong>diversiteit</strong>, niet om aantallen. En de bacteriën moeten levend in je darmen aankomen — anders doen ze niets.</p>
<p>3 vragen die je moet stellen bij elk probioticum:</p>
<ol>
  <li>Overleven de bacteriën het maagzuur?</li>
  <li>Zijn de stammen wetenschappelijk onderzocht?</li>
  <li>Bevat het product prebiotica (voeding voor de bacteriën)?</li>
</ol>
<p>Morgen: 5 natuurlijke methodes die net zo goed werken als supplementen.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 3,
      subject: '5 gratis methodes voor betere darmgezondheid',
      previewText: 'Zonder supplementen, zonder dieet. Nummer 4 is verrassend.',
      delayHours: 24,
      body: `<h2>5 gratis manieren voor gezondere darmen</h2>
<ol>
  <li><strong>Eet gefermenteerd voedsel</strong> — zuurkool, kimchi, yoghurt</li>
  <li><strong>Drink water vóór de maaltijd</strong> — niet tijdens</li>
  <li><strong>Kauw 30 keer per hap</strong> — spijsvertering begint in je mond</li>
  <li><strong>Verminder stress</strong> — stress verstoort je darmflora direct</li>
  <li><strong>Eet op vaste tijden</strong> — regelmaat helpt je spijsvertering</li>
</ol>
<p>Wil je toch een probioticum proberen? Morgen help ik je kiezen.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 4,
      subject: 'Probiotica: welke past bij jou?',
      previewText: 'Een praktische gids voor het kiezen van het juiste supplement.',
      delayHours: 24,
      body: `<h2>Hoe kies je het juiste probioticum?</h2>
<p>Niet elk probioticum is geschikt voor iedereen. Dit zijn de belangrijkste keuzes:</p>
<p><strong>Voor spijsvertering:</strong> Lactobacillus en Bifidobacterium stammen</p>
<p><strong>Voor mentale focus:</strong> Lactobacillus rhamnosus en Bifidobacterium longum</p>
<p><strong>Voor immuunsysteem:</strong> Lactobacillus plantarum</p>
<p>Amare's MentaBiotics bevat al deze stammen in één product.</p>
<p><a href="https://amarereview.nl/reviews/darmbacteriën-gezondheid-mentabiotics">Lees mijn volledige MentaBiotics review →</a></p>
<p>Tot morgen,<br/>Mark</p>`,
    },
    {
      day: 5,
      subject: 'Echte resultaten: dit zeggen gebruikers over MentaBiotics',
      previewText: 'Geen marketing, gewoon eerlijke ervaringen.',
      delayHours: 24,
      body: `<h2>Gebruikers over MentaBiotics</h2>
<p><em>"Al 2 jaar last van mijn darmen. Na 6 weken MentaBiotics eindelijk verbetering."</em> — Robert, 52</p>
<p><em>"Mijn buik is minder opgeblazen en ik heb meer energie."</em> — Sanne, 37</p>
<p><em>"Duur, maar het werkt. De garantie gaf me vertrouwen om het te proberen."</em> — Henk, 45</p>
<p>Dit zijn echte verhalen. Jouw ervaring kan anders zijn — maar de 30-dagen garantie maakt het risicovrij.</p>
<p>Tot morgen,<br/>Mark</p>`,
    },
    {
      day: 6,
      subject: 'De ultieme Amare gids',
      previewText: 'Alles wat je moet weten voordat je bestelt.',
      delayHours: 24,
      body: `<h2>Alles over Amare producten</h2>
<p><strong>Wat is Amare?</strong> — Wellness bedrijf gespecialiseerd in gut-brain producten</p>
<p><strong>Wat kost MentaBiotics?</strong> — Ongeveer €1,50 per dag. Met korting zelfs minder.</p>
<p><strong>Garantie?</strong> — 30 dagen geld-terug. Geen vragen.</p>
<p><strong>Hoe snel resultaat?</strong> — Meeste gebruikers merken verschil na 3-4 weken.</p>
<p>Morgen: een speciale aanbieding.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 7,
      subject: 'Start vandaag nog — met €8 korting 🎯',
      previewText: '30 dagen risicovrij + €8 korting. Exclusief via deze link.',
      delayHours: 24,
      body: `<h2>Klaar voor een gezondere darmflora?</h2>
<p>Je hebt nu alle kennis in handen. Tijd om te handelen.</p>
<div style="background:#f8f9fb; padding:20px; border-radius:8px; text-align:center; margin:20px 0;">
  <p style="font-size:18px; font-weight:bold; color:#1a3564;">MentaBiotics — Probiotica voor Darm & Brein</p>
  <p style="font-size:24px; font-weight:bold; color:#d86018;">€8 korting op je eerste bestelling</p>
  <p style="font-size:14px; color:#6b7280;">+ 30 dagen geld-terug garantie</p>
  <p><a href="https://www.amare.com/2075008/nl-nl/" style="background:#d86018; color:white; padding:12px 24px; border-radius:6px; text-decoration:none; font-weight:bold; display:inline-block;">Bestel Nu met €8 Korting →</a></p>
</div>
<p>Bedankt voor het lezen van deze serie. Ik hoop dat het helpt!</p>
<p>Vragen? Reply direct op deze mail.</p>
<p>Groet,<br/>Mark</p>`,
    },
  ],
}

// ─── SEQUENCE 3: FOCUS & CONCENTRATIE ───────────────────────────

const focusSequence: EmailSequence = {
  sequenceId: 'focus-concentratie',
  name: 'Focus & Productiviteit',
  triggerKeyword: 'focus-concentratie',
  emails: [
    {
      day: 1,
      subject: 'Je gratis serie: 10 Natuurlijke Focus Hacks 🧠',
      previewText: 'Dag 1 van 7: De #1 oorzaak van slechte focus.',
      delayHours: 0,
      body: `<h2>Welkom bij je 7-daagse focus serie!</h2>
<p><strong>Dag 1: De #1 oorzaak van slechte focus</strong></p>
<p>Het is niet je telefoon. Het is niet social media. Het is... <strong>slaaptekort</strong>.</p>
<p>Zelfs 1 uur minder slaap dan je nodig hebt vermindert je focus met 30%. De komende dagen krijg je elke dag een nieuwe, wetenschappelijk onderbouwde hack.</p>
<p><strong>Vandaag:</strong> Ga vanavond 30 minuten eerder naar bed. Meer niet. Begin simpel.</p>
<p>Morgen: hack #2 — waarom koffie niet werkt (en wat wél).</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 2,
      subject: 'Focus Hack #2: Waarom koffie niet werkt',
      previewText: 'En wat je beter kunt drinken voor concentratie.',
      delayHours: 24,
      body: `<h2>Hack #2: Cafeïne — vriend of vijand?</h2>
<p>Koffie geeft je een tijdelijke boost, maar de crash erna maakt je focus slechter dan ervoor.</p>
<p><strong>Wat werkt beter:</strong></p>
<ul>
  <li>Groene thee — L-theanine + cafeïne voor rustige focus</li>
  <li>Water met citroen — dehydratie is funest voor concentratie</li>
  <li>Matcha — langdurige energie zonder crash</li>
</ul>
<p>Edge Plus van Amare gebruikt L-theanine als hoofdbestanddeel — precies wat je nodig hebt voor stabiele focus.</p>
<p>Morgen: hack #3 — de 25-minuten regel.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 3,
      subject: 'Focus Hack #3: De 25-minuten truc',
      previewText: 'Deze methode verdubbelt je productiviteit.',
      delayHours: 24,
      body: `<h2>Hack #3: De Pomodoro Techniek</h2>
<p>25 minuten focus, 5 minuten pauze. Herhaal 4x, dan 15 minuten pauze.</p>
<p>Waarom het werkt:</p>
<ul>
  <li>Je hersenen kunnen maar ~25 minuten echte focus vasthouden</li>
  <li>Regelmatige pauzes voorkomen mentale uitputting</li>
  <li>De timer creëert urgentie — je stelt minder uit</li>
</ul>
<p>Combineer dit met een focus-supplement en je productiviteit gaat door het dak.</p>
<p>Morgen: hack #4 — bewegen voor betere concentratie.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 4,
      subject: 'Focus Hack #4: Bewegen = betere focus',
      previewText: '10 minuten beweging kan je concentratie uren verbeteren.',
      delayHours: 24,
      body: `<h2>Hack #4: Beweging vóór focuswerk</h2>
<p>10 minuten beweging verhoogt je concentratie voor de volgende 2 uur met 40%.</p>
<p>Wat werkt:</p>
<ul>
  <li>5 minuten jumping jacks of burpees</li>
  <li>10 minuten wandelen in de buitenlucht</li>
  <li>3 minuten traplopen</li>
</ul>
<p>Het gaat niet om intensiteit — het gaat om bloedtoevoer naar je hersenen.</p>
<p>Morgen: hack #5 — de kracht van stilte.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 5,
      subject: 'Focus Hack #5: Stilte is een superkracht',
      previewText: 'De meeste mensen kunnen niet tegen stilte. Jij straks wel.',
      delayHours: 24,
      body: `<h2>Hack #5: Stilte als focus-wapen</h2>
<p>Wist je dat complete stilte stress vermindert en focus verbetert?</p>
<p>Probeer dit:</p>
<ol>
  <li>Zet alle notificaties uit</li>
  <li>Doe noise-cancelling headphones op (zonder muziek)</li>
  <li>Werk 25 minuten in absolute stilte</li>
</ol>
<p>De eerste keer voelt ongemakkelijk. De derde keer ben je verslaafd aan de productiviteit.</p>
<p>Morgen: waarom voeding belangrijker is dan supplementen.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 6,
      subject: 'Focus Hack #6: Eet jezelf slimmer',
      previewText: 'Deze 5 voedingsmiddelen verbeteren je focus direct.',
      delayHours: 24,
      body: `<h2>Hack #6: Voeding voor je brein</h2>
<p>Top 5 focus-voedingsmiddelen:</p>
<ol>
  <li><strong>Blauwe bessen</strong> — antioxidanten voor snellere denkprocessen</li>
  <li><strong>Vette vis</strong> — omega-3 voor betere signaaloverdracht</li>
  <li><strong>Noten & zaden</strong> — vitamine E tegen mentale achteruitgang</li>
  <li><strong>Donkere chocolade</strong> — flavonoïden voor bloedtoevoer naar hersenen</li>
  <li><strong>Groene bladgroenten</strong> — foliumzuur voor helder denken</li>
</ol>
<p>Supplementen zoals Edge Plus kunnen dit ondersteunen, maar voeding is de basis.</p>
<p><a href="https://amarereview.nl/reviews/edge-plus-focus-concentratie">Lees mijn Edge Plus review →</a></p>
<p>Morgen: de laatste en belangrijkste hack + een aanbieding.</p>
<p>Groet,<br/>Mark</p>`,
    },
    {
      day: 7,
      subject: 'Focus Hack #7 + €8 korting op Edge Plus 🎯',
      previewText: 'De laatste hack + een speciale aanbieding.',
      delayHours: 24,
      body: `<h2>Hack #7: Slaap is de ultieme focus-hack</h2>
<p>We zijn de cirkel rond. Hack #1 was meer slapen. Hack #7 is: <strong>betere slaap</strong>.</p>
<p>3 tips voor betere slaap:</p>
<ol>
  <li>Geen schermen 1 uur voor bedtijd</li>
  <li>Vaste bedtijd — ook in het weekend</li>
  <li>Slaapkamer alleen voor slapen — geen werk, geen TV</li>
</ol>
<p>En als je focus een extra boost wilt geven:</p>
<div style="background:#f8f9fb; padding:20px; border-radius:8px; text-align:center; margin:20px 0;">
  <p style="font-size:18px; font-weight:bold; color:#1a3564;">Edge Plus — Natuurlijke Focus & Energie</p>
  <p style="font-size:24px; font-weight:bold; color:#d86018;">€8 korting op je eerste bestelling</p>
  <p style="font-size:14px; color:#6b7280;">+ 30 dagen geld-terug garantie</p>
  <p><a href="https://www.amare.com/2075008/nl-nl/" style="background:#d86018; color:white; padding:12px 24px; border-radius:6px; text-decoration:none; font-weight:bold; display:inline-block;">Bestel Nu met €8 Korting →</a></p>
</div>
<p>Bedankt voor het volgen van deze serie! Hopelijk heb je er iets aan.</p>
<p>Groet,<br/>Mark</p>`,
    },
  ],
}

// ─── ALL SEQUENCES ──────────────────────────────────────────────

export const emailSequences: Record<string, EmailSequence> = {
  huidgevoeligheid: huidSequence,
  darmgezondheid: darmSequence,
  focus: focusSequence,
}

export function getSequenceForKeyword(keyword: string): EmailSequence | null {
  for (const seq of Object.values(emailSequences)) {
    if (seq.triggerKeyword === keyword) return seq
  }
  return null
}

/*
 * ═══════════════════════════════════════════════════════════════
 * INTEGRATION GUIDE — Mailchimp / ConvertKit / Klaviyo
 * ═══════════════════════════════════════════════════════════════
 *
 * MAILCHIMP SETUP:
 * 1. Create Audience: "AmareReview.nl Leads"
 * 2. Add merge tags: FNAME, LNAME, SOURCE, KEYWORD
 * 3. Create 3 Automations (one per sequence)
 * 4. Trigger: Tag added (e.g., "seq-huidgevoeligheid")
 * 5. Import emails with delayHours between each
 *
 * CONVERTKIT SETUP:
 * 1. Create 3 Sequences (one per keyword)
 * 2. Add emails with the delay settings above
 * 3. Create 3 Forms (one per lead magnet)
 * 4. Form submits → Subscriber added to Sequence
 *
 * KLAVIYO SETUP:
 * 1. Create 3 Flows
 * 2. Trigger: "Submitted Lead Magnet Form"
 * 3. Filter by keyword → Branch to correct sequence
 * 4. Add emails with the delay settings above
 *
 * TRACKING:
 * - Add UTM: ?utm_source=email&utm_medium=sequence&utm_campaign=SEQ_ID
 * - Track opens, clicks, and unsubscribes
 * - Monitor which day has highest drop-off
 */
