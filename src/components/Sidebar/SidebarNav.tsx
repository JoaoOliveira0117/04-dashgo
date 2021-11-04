import { Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>
      <NavSection title="Automação">
        <NavLink icon={RiGitMergeLine}>Formulários</NavLink>
        <NavLink icon={RiInputMethodLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  );
}
