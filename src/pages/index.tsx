import { View, TitlePage, myStylesProvider } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Navigation, Loading, Footer } from 'components';
import { ShopStyles, Shop, Welcome, WelcomeStyles, Reviews, ReviewsStyles, AppStore, AppStoreStyles } from 'components/pages';
import { Description, DescriptionStyles } from 'components/pages/Description';

export default function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 1000) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t='Home' />
        <Navigation />

        <Welcome />
        <Shop />
        <Description />
        <Reviews />
        <AppStore />
    
        <Footer />
      </View>
    </MyStyles>
  );
}

const MyStyles = myStylesProvider.create(() => ([
  WelcomeStyles, ShopStyles, ReviewsStyles, AppStoreStyles, DescriptionStyles
]), 'div', true);
