import { ReactChildren } from "_lib/global";
import { AppStatusProvider } from "./AppStatusContext";
import { ProductsProvider } from "./Products";
import { ShoppingCartProvider } from "./ShoppingCart";
import { ThemeProvider } from "./Theme";
import { UserProvider } from "./UserContext";

interface AppProviderProps {
  children: ReactChildren;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AppStatusProvider>
      <ThemeProvider>
        <UserProvider>
          <ProductsProvider>
            <ShoppingCartProvider>
              {children}
            </ShoppingCartProvider>
          </ProductsProvider>
        </UserProvider>
      </ThemeProvider>
    </AppStatusProvider>
  );
}

export { AppProvider };
