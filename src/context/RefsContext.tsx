import { createContext, useContext } from 'react';

interface RefsContextValue {
  techIcon: (name: string) => string | undefined;
  companyIcon: (name: string) => string | undefined;
}

export const RefsContext = createContext<RefsContextValue>({
  techIcon: () => undefined,
  companyIcon: () => undefined,
});

export const useRefs = () => useContext(RefsContext);
