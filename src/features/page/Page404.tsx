import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export function Page404() {
  return (
    <main className="flex flex-col items-center gap-8">
      <div className="space-y-3 text-center">
        <Typography variant="code">404</Typography>
        <Typography variant="h1">Page non trouvée</Typography>
        <Typography variant="base">
          Désolé, nous n&aposavons pas pu trouver la page que tu cherchais.
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "invert" })}>
          Retourner à la page d&aposaccueil
        </Link>
      </div>
    </main>
  );
}
