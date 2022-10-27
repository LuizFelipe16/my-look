import { useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { SidebarNav } from "./Sidebar";

export type TNavigationAdminProps = {
  showLogin?: boolean;
  showOnlyLogo?: boolean;
  hasImage?: boolean;
};

export function NavigationAdmin({ showLogin = true, showOnlyLogo = false, hasImage = false }: TNavigationAdminProps) {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return <SidebarNav />
  }

  return <Navbar hasImage={hasImage} showLogin={showLogin} showOnlyLogo={showOnlyLogo} />
}
