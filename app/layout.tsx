import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Rate Limit Budget Tracker — Monitor Team API Usage',
  description: 'Track API rate limit consumption across your team. Predict when limits will be hit and get optimization suggestions for GitHub, Stripe, OpenAI and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a0bcae3-db02-4862-ab44-2564d84d551c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
