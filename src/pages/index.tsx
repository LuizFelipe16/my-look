import { myStyles } from '_lib/web';
import { AppStatus, Page } from 'components';
import { 
  ShopStyles, Shop, 
  Welcome, WelcomeStyles, 
  Reviews, ReviewsStyles, 
  AppStore, AppStoreStyles, 
  Description, DescriptionStyles
} from 'components/pages';

export default function App() {
  return (
    <Page styles={MyStyles} title='Home' navProps={{ hasImage: true }}>
      <Welcome />
      <Shop />
      <Description />
      <Reviews />
      <AppStore />
      <AppStatus />
    </Page>
  );
}

const MyStyles = myStyles.create((theme) => ([
  theme.over.hide('full'),
  WelcomeStyles, ShopStyles, ReviewsStyles, AppStoreStyles, DescriptionStyles
]), 'div', true);
