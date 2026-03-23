import { AnchorHTMLAttributes } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;

/**
 * Lien externe qui ouvre dans un nouvel onglet sur desktop,
 * et remplace la page courante sur mobile.
 */
export function SmartLink({ children, ...props }: Props) {
  const isMobile = useIsMobile();

  return (
    <a
      {...props}
      target={isMobile ? '_self' : '_blank'}
      rel={isMobile ? undefined : 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}
