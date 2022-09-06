import { useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { SidebarNav } from "./Sidebar";

export type TNavigationProps = {
  showLogin?: boolean;
  showOnlyLogo?: boolean;
  hasImage?: boolean;
};

export function Navigation({ showLogin = true, showOnlyLogo = false, hasImage = false }: TNavigationProps) {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return <SidebarNav />
  }

  return <Navbar hasImage={hasImage} showLogin={showLogin} showOnlyLogo={showOnlyLogo} />
}
