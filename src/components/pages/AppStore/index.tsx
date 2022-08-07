import { FaGooglePlay } from 'react-icons/fa';
import { View, myStylesProvider, Text, ImgZoom, Divider, Button } from '../../../_lib/web';

function AppStore() {
  return (
    <View style={'app-store'}>
      <View style={`content`}>
        <Text data-aos="fade-right" data-aos-duration="500" type='h1' style={`title`} text='Uma nova experiência,' />
        <Text data-aos="fade-right" data-aos-duration="1000" type='h2' style={`subtitle`} text='monte looks na palma da sua mão.' />
        <Text data-aos="fade-right" data-aos-duration="1000" style={`text`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

        <Button onPress={() => null}>
          <FaGooglePlay size={22} /> Google Play
        </Button>
      </View>

      <View style={`logo-store`}>
        <View style={`wrapper`}>
          <Text style={`logo`} text='ML' />
        </View>
      </View>
    </View>
  );
}

const AppStoreStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('app-store', [
    theme.w.fill(),
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
    theme.padding.full.size(4),
    theme.bg.blackTransparent,
  ], [

    theme.myStyles.childClass('content', [
      theme.h.size(100, '%'),
      theme.w.size(55, '%'),
      theme.column.startCenter,
    ], [
      theme.myStyles.childClass('title', [
        theme.font.apply('sb', 2.2, theme.font.typography.title, theme.colors.black),
      ]),
  
      theme.myStyles.childClass('subtitle', [
        theme.font.apply('sr', 2, theme.font.typography.text, theme.colors.gray),
      ]),
  
      theme.myStyles.childClass('text', [
        theme.margin.top.size(2),
        theme.font.apply('rg', 1, theme.font.typography.text, theme.colors.grayLight),
      ]),

      theme.myStyles.child('button', [
        theme.w.size(15),
        theme.padding.horizontal.size(1.5),
        theme.padding.vertical.size(1.2),
        theme.margin.top.size(5),
        theme.border.hide,
        theme.border.rounded.size(0.5),
        theme.bg.black,
        theme.transition.apply(0.2),
        theme.font.apply('md', 1, theme.font.typography.text, theme.colors.white),
        theme.effect.hover.inOwn([theme.bg.gray]),
        theme.centerRow,
        theme.gapEls.full.size(0.5)
      ]),
    ]),

    theme.myStyles.childClass('logo-store', [
      theme.h.size(100, '%'),
      theme.w.size(45, '%'),
      theme.column.centerCenter,
    ], [
      theme.myStyles.childClass('wrapper', [
        theme.h.size(22),
        theme.w.size(22),
        theme.column.centerCenter,
        theme.border.rounded.size(1.5),
        theme.bg.primary,
        theme.presets.shadow.hover,
      ], [
        theme.myStyles.childClass('logo', [theme.font.apply('sb', 6, theme.font.typography.text, theme.colors.white)]),
      ])
    ])
  ]),
]));

export { AppStore, AppStoreStyles };
