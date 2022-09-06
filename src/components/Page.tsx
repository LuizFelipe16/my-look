import { TitlePage, View } from "_lib/web";
import { ReactComponent } from "_lib/global";
import { Navigation } from 'components';
import { Loading } from "./Loading";
import { useLoadingPage } from "hooks";
import { Footer } from "./layout/Footer";
import { TNavigationProps } from "./layout/Navigation";

type TPage = {
  styles: any;
  title: string;
  children: ReactComponent;
  showNavigation?: boolean;
  showFooter?: boolean;
  navProps?: TNavigationProps;
};

export const Page = ({ styles, title, children, showNavigation = true, showFooter = true, navProps }: TPage) => {
  const { _loading, unmount } = useLoadingPage();

  const PageStyles = styles;

  if (_loading) return <Loading unmount={unmount} />;

  return (
    <PageStyles>
      <View style={`page`}>
        <TitlePage t={title} />
        {showNavigation && <Navigation {...navProps} />}
        {children}
        {showFooter && <Footer />}
      </View>
    </PageStyles>
  );
}
