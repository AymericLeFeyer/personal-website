import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export function Page400() {
  return (
    <main className="flex flex-col items-center gap-8">
      <div className="max-w-lg space-y-3 text-center">
        <Typography variant="code">400</Typography>
        <Typography variant="h1">Oh non ! Erreur inattendue.</Typography>
        <Typography variant="base">
          Il semble que nous rencontrons quelques difficultés techniques. Pas de
          panique, notre équipe travaille dessus. En attendant, essayez de
          rafraîchir la page ou de revenir un peu plus tard.
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "invert" })}>
          <p>Retourner à la page d&aposaccueil</p>
        </Link>
      </div>
    </main>
  );
}
