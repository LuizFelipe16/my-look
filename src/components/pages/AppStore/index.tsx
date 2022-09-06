import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { View, myStyles, Text, Img, Divider, Button } from '_lib/web';

function AppStore() {
  return (
    <View style={'app-store'}>
      <View style={`content`}>
        <Text type='h1' style={`title`} text='A new experience,' />
        <Text data-aos="fade-right" data-aos-duration="500" type='h2' style={`subtitle`} text='mount looks in the palm of your hand.' />
        <Text data-aos="fade-right" data-aos-duration="800" style={`text`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

        <View style={`stores`}>
          <Button style={`btn-store`} onPress={() => null}>
            <FaGooglePlay size={22} /> Google Play
          </Button>

          <Button style={`btn-store`} onPress={() => null}>
            <FaApple size={22} /> Apple Store
          </Button>
        </View>
      </View>

      <View style={`logo-store`}>
        <View style={`wrapper`}>
          <Img src='logo.png' style={'logo'} description='Logo' />
        </View>
      </View>
    </View>
  );
}

const AppStoreStyles = myStyles.style(theme => ([
  theme.myStyles.create('app-store', [
    theme.w.fill(),
    theme.h.auto(),
    theme.row.centerBetween,
    theme.padding.full.size(4),
    theme.bg.white,

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.column.startCenter, theme.gapEls.full.md, theme.padding.horizontal.size(2), theme.padding.vertical.size(4)],
      incluide: ['m', 't']
    })
  ], [
    theme.myStyles.childClass('content', [
      theme.h.size(100, '%'),
      theme.w.size(55, '%'),
      theme.column.startCenter,

      theme.responsiveness.platforms({ mobile: [theme.w.fill()], tablet: [theme.w.fill()] })
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

      theme.myStyles.childClass('stores', [
        theme.row.centerStart,
        theme.gapEls.full.lg,
        theme.margin.top.size(4),

        theme.responsiveness.platforms({
          mobile: [theme.column.startStart, theme.w.fill()],
          tablet: [theme.column.startStart, theme.w.fill()],
        })
      ], [
        theme.myStyles.childClass('btn-store', [
          theme.w.size(15),
          theme.padding.horizontal.size(1.5),
          theme.padding.vertical.size(1.2),
          theme.border.hide,
          theme.border.rounded.size(0.5),
          theme.bg.black,
          theme.transition.apply(0.2),
          theme.font.apply('md', 1, theme.font.typography.text, theme.colors.white),
          theme.effect.hover.inOwn([theme.bg.gray]),
          theme.centerRow,
          theme.gapEls.full.size(0.5),

          theme.responsiveness.platforms({ mobile: [theme.w.fill()], tablet: [theme.w.fill()] }),
        ]),
      ])
    ]),

    theme.myStyles.childClass('logo-store', [
      theme.h.size(100, '%'),
      theme.w.size(45, '%'),
      theme.column.centerCenter,

      theme.responsiveness.platforms({ 
        mobile: [theme.w.fill(), theme.margin.top.xl], 
        tablet: [theme.w.fill(), theme.margin.top.xl] 
      })
    ], [
      theme.myStyles.childClass('wrapper', [
        theme.h.size(22),
        theme.w.size(22),
        theme.column.centerCenter,
        theme.bg.transparent,

        theme.responsiveness.platforms({ 
          mobile: [theme.w.fill(), theme.h.fill()], 
          tablet: [theme.w.fill(), theme.h.fill()] 
        })
      ], [
        theme.myStyles.childClass('logo', [
          theme.w.fill(), 
          theme.h.fill(), 
          theme.over.hide('full'), 
        ]),
      ])
    ])
  ]),
]));

export { AppStore, AppStoreStyles };
