import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'
import './layout.scss'

/* 
  Root Layout:
    This is the root layout of the website, it will be used on every page.
*/

export const metadata: Metadata = {
  title: 'Movie Website',
  description: 'In progress',
}

export default function RootLayout({
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
        {/* Footer */}
      </body>
    </html>
  )
}
