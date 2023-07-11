import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'

export const metadata: Metadata = {
  title: 'Movie Website',
  description: 'In progress',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
