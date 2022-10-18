import { ReactChildren } from "_lib/global";
import { AppStatusProvider } from "./AppStatusContext";
import { AppModalsProvider } from "./ModalsProvider";
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

export { AppProvider };
