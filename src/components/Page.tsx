import { TitlePage, View } from "_lib/web";
import { ReactComponent } from "_lib/global";
import { Navigation } from 'components';
import { Loading } from "./Loading";
import { useLoadingPage, useUser } from "hooks";
import { Footer } from "./layout/Footer";
import { TNavigationProps } from "./layout/Navigation";

type TPage = {
  styles: any;
  stylesProps?: any;
  title: string;
  children: ReactComponent;
  showNavigation?: boolean;
  showFooter?: boolean;
  navProps?: TNavigationProps;
  isLoading?: boolean;
};

export const Page = ({ styles, stylesProps, title, children, showNavigation = true, showFooter = true, navProps, isLoading = false }: TPage) => {
  const { isSessionLoading } = useUser();
  const { _loading, unmount } = useLoadingPage();

  const PageStyles = styles;

  if (_loading || isLoading || isSessionLoading) return <Loading unmount={unmount} />;

  return (
    <PageStyles theme={stylesProps}>
      <View style={`page`}>
        <TitlePage t={title} />
        {showNavigation && <Navigation {...navProps} />}
        {children}
        {showFooter && <Footer />}
      </View>
    </PageStyles>
  );
}
