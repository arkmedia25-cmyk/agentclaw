import Link from 'next/link'
import { Check, X } from 'lucide-react'

export const metadata = {
  title: 'Amare vs Alternatieven | Vergelijking | AmareReview.nl',
  description: 'Vergelijk Amare producten met alternatieven. Prijs, kwaliteit, resultaten.',
}

export default function ComparisonPage() {
  const comparisons = [
    {
      feature: 'Prijs per dose',
      amare: '€1,50',
      alternative1: '€2,00',
      alternative2: '€1,20',
    },
    {
      feature: 'Probiotica stammen',
      amare: 'Meerdere',
      alternative1: 'Enkele',
      alternative2: 'Meerdere',
    },
    {
      feature: 'Onderzoeksondersteuning',
      amare: true,
      alternative1: false,
      alternative2: true,
    },
    {
      feature: 'Geld-terug garantie',
      amare: '30 dagen',
      alternative1: 'Geen',
      alternative2: '14 dagen',
    },
    {
      feature: 'Smaak opties',
      amare: 'Beperkt',
      alternative1: 'Veel',
      alternative2: 'Beperkt',
    },
    {
      feature: 'Gebruikersbeoordelingen',
      amare: '4.5/5',
      alternative1: '3.8/5',
      alternative2: '4.2/5',
    },
  ]

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Amare vs Alternatieven</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Vergelijk Amare producten met populaire alternatieven op prijs, kwaliteit en effectiviteit.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="container-max section-padding">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-bold">Kenmerk</th>
                <th className="px-6 py-4 text-center font-bold">Amare</th>
                <th className="px-6 py-4 text-center font-bold">Alternatief 1</th>
                <th className="px-6 py-4 text-center font-bold">Alternatief 2</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-soft'}>
                  <td className="px-6 py-4 font-bold text-primary border-b border-border">{row.feature}</td>
                  <td className="px-6 py-4 text-center border-b border-border">
                    {typeof row.amare === 'boolean' ? (
                      row.amare ? (
                        <Check className="inline text-success" size={24} />
                      ) : (
                        <X className="inline text-error" size={24} />
                      )
                    ) : (
                      row.amare
                    )}
                  </td>
                  <td className="px-6 py-4 text-center border-b border-border">
                    {typeof row.alternative1 === 'boolean' ? (
                      row.alternative1 ? (
                        <Check className="inline text-success" size={24} />
                      ) : (
                        <X className="inline text-error" size={24} />
                      )
                    ) : (
                      row.alternative1
                    )}
                  </td>
                  <td className="px-6 py-4 text-center border-b border-border">
                    {typeof row.alternative2 === 'boolean' ? (
                      row.alternative2 ? (
                        <Check className="inline text-success" size={24} />
                      ) : (
                        <X className="inline text-error" size={24} />
                      )
                    ) : (
                      row.alternative2
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analysis */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card border-2 border-accent">
            <h3 className="text-lg font-bold text-primary mb-3">Amare</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Goed onderzocht</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Sterke garantie</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Hoge ratings</span>
              </li>
            </ul>
            <p className="text-text-muted text-xs">
              Beste keuze voor wie kwaliteit en research prioriteit geeft.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-primary mb-3">Alternatief 1</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Veel smaken</span>
              </li>
              <li className="flex gap-2">
                <span className="text-error font-bold">✗</span>
                <span>Geen garantie</span>
              </li>
              <li className="flex gap-2">
                <span className="text-error font-bold">✗</span>
                <span>Minder reviews</span>
              </li>
            </ul>
            <p className="text-text-muted text-xs">
              Budget-optie, maar minder betrouwbaarheid.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-primary mb-3">Alternatief 2</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Goed onderzocht</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>Goedkoper</span>
              </li>
              <li className="flex gap-2">
                <span className="text-error font-bold">✗</span>
                <span>Korte garantie</span>
              </li>
            </ul>
            <p className="text-text-muted text-xs">
              Goed alternatief tegen lager prijs.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-white mb-4">Klaar voor Amare?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Amare biedt de beste combinatie van kwaliteit, onderzoek en klanttevredenheid.
          </p>
          <Link
            href="https://amarenl.com/optin?source=vergelijking"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-secondary"
          >
            Bekijk Amare Producten →
          </Link>
        </div>
      </section>
    </>
  )
}
