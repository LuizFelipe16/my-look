import { TitlePage, View } from "_lib/web";
import { capitalize, ReactComponent } from "_lib/global";
import { NavigationAdmin, FooterAdmin } from 'components';
import { Loading } from "./Loading";
import { useLoadingPage } from "hooks";
import { TNavigationProps } from "./layout/Navigation";

type TPageLocked = {
  styles: any;
  stylesProps?: any;
  title: string;
  children: ReactComponent;
  showNavigation?: boolean;
  showFooter?: boolean;
  navProps?: TNavigationProps;
  isLoading?: boolean;
};

export const PageLocked = ({ styles, stylesProps, title, children, showNavigation = true, showFooter = true, navProps, isLoading = false }: TPageLocked) => {
  const { _loading, unmount } = useLoadingPage();

  const PageStyles = styles;

  if (_loading || isLoading) return <Loading unmount={unmount} />;

  return (
    <PageStyles theme={stylesProps}>
      <View style={`page`}>
        <View style={capitalize(title, 'lower')}>
          <TitlePage t={capitalize(title, 'first')} />
          {showNavigation && <NavigationAdmin {...navProps} />}
          {children}
        </View>
        {showFooter && <FooterAdmin />}
      </View>
    </PageStyles>
  );
}
