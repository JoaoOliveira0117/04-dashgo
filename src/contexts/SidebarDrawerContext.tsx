import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext } from "react";
import { useEffect } from "toasted-notes/node_modules/@types/react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  //Fecha a navegação ao trocar de página.
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);