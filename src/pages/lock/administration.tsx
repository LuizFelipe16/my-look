import { View, myStyles, Text } from '_lib/web';
import { AdminSignIn, Page } from 'components';

export default function Administration() {
  return (
    <Page styles={MyStyles} title={'Admin'} showNavigation={false} showFooter={false}>
      <View style={'admin'}>
        <AdminSignIn />
      </View>
    </Page>
  );
}

const MyStyles = myStyles.create((theme) => ([
  theme.myStyles.create('admin', [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
  ])
]), 'div', true);
