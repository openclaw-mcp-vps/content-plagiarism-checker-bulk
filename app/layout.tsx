import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BulkPlagCheck — Bulk Content Plagiarism Checker for Agencies',
  description: 'Upload multiple articles via CSV and get instant plagiarism reports with similarity scores and source links. Built for content marketing agencies and large publishers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c1daf32d-4e46-44d8-ad04-83e5cefadc20"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
