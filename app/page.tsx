export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track API Rate Limits<br />
          <span className="text-[#58a6ff]">Before They Break Your Team</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor rate limit consumption across GitHub, Stripe, OpenAI and more. Get real-time alerts, usage predictions, and optimization tips — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Monitoring — $13/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['GitHub', 'REST & GraphQL'], ['OpenAI', 'Tokens & RPM'], ['Stripe', 'API Calls']].map(([api, detail]) => (
            <div key={api} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-white font-semibold text-sm">{api}</div>
              <div className="text-[#8b949e] text-xs mt-1">{detail}</div>
              <div className="mt-2 h-1.5 bg-[#21262d] rounded-full overflow-hidden">
                <div className="h-full bg-[#58a6ff] rounded-full" style={{width: api === 'OpenAI' ? '72%' : api === 'GitHub' ? '45%' : '28%'}}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$13</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of rate limits</p>
          <ul className="space-y-3 mb-8">
            {[
              'Monitor unlimited API endpoints',
              'Real-time rate limit alerts',
              'Usage prediction & forecasting',
              'Team member usage breakdown',
              'GitHub, Stripe, OpenAI & more',
              'Slack & email notifications',
              'Optimization recommendations',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which APIs are supported?',
              a: 'GitHub (REST & GraphQL), OpenAI, Stripe, Twilio, SendGrid, and any API that returns standard rate limit headers. Custom API support is included.'
            },
            {
              q: 'How does the prediction work?',
              a: 'We analyze your historical usage patterns and current consumption rate to forecast when you will hit your limits, giving you time to throttle requests or upgrade your plan.'
            },
            {
              q: 'Can multiple team members be tracked?',
              a: 'Yes. Each team member can connect their API keys and you get a unified dashboard showing individual and aggregate consumption across the whole team.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} API Rate Limit Budget Tracker. All rights reserved.
      </footer>
    </main>
  )
}
