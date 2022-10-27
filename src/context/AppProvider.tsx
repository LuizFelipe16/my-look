import { ReactChildren } from "_lib/global";
import { AppStatusProvider, useAppStatus } from "./AppStatusContext";
import { AppModalsProvider, useAppModals } from "./ModalsProvider";
import { ProductsProvider, useProducts } from "./Products";
import { ShoppingCartProvider, useShoppingCart } from "./ShoppingCart";
import { ThemeProvider, useTheme } from "./Theme";
import { UserProvider, UserContext } from "./UserContext";

interface AppProviderProps {
  children: ReactChildren;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AppStatusProvider>
      <ThemeProvider>
        <UserProvider>
          <AppModalsProvider>
            <ProductsProvider>
              <ShoppingCartProvider>
                  {children}
              </ShoppingCartProvider>
            </ProductsProvider>
          </AppModalsProvider>
        </UserProvider>
      </ThemeProvider>
    </AppStatusProvider>
  );
}

const ProvidersManager = {
  useAppStatus,
  useAppModals,
  useProducts,
  useShoppingCart,
  useTheme,
}

export { AppProvider, ProvidersManager };
