import { ThemeProvider } from 'next-themes'
import { Suspense } from 'react'
import './presentation/i18n/index'
import { HomePage } from './presentation/pages/HomePage'
import { LoadingScreen } from './presentation/components/LoadingScreen'

export default function App() {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <Suspense fallback={<LoadingScreen />}>
        <HomePage />
      </Suspense>
    </ThemeProvider>
  )
}
