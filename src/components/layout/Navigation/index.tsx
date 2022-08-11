import { useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { SidebarNav } from "./Sidebar";

type NavigationProps = {
  showLogin?: boolean;
  showOnlyLogo?: boolean;
};

export function Navigation({ showLogin = true, showOnlyLogo = false }: NavigationProps) {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return <SidebarNav />
  }

  return <Navbar showLogin={showLogin} showOnlyLogo={showOnlyLogo} />
}