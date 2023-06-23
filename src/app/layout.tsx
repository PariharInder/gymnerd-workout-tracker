import Providers from '@/components/Providers'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Rubik } from 'next/font/google'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Gym Nerd - Workout tracking and monitoring',
  description: 'Gym nerd is a workout tracking tool, this tool allows you to track your workouts, visualize your progress and compare your strength and endurance levels overtime.',
}

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      className={rubik.className}
    >
      <body className='min-h-screen bg-zinc-100 dark:bg-stone-900 antialiased'>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
