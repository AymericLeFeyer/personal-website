import { useTranslation } from 'react-i18next'
import { AlertTriangle } from 'lucide-react'

export function ErrorScreen() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <AlertTriangle size={40} className="text-muted-foreground" />
        <p className="text-muted-foreground">{t('error')}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
