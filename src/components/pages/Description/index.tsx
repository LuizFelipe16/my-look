import { View, myStylesProvider, Text, Img, Button } from '../../../_lib/web';

function Description() {
  return (
    <View style={'services-description'}>
      <View style={`logo-store`}>
        <View style={`wrapper`}>
          <Img src='super-woman.png' style={'super-woman-illustration'} description='Logo' />
        </View>
      </View>

      <View style={`content`}>
        <Text type='h1' style={`title`} text='Feel powerful!' />
        <Text type='h2' style={`subtitle`} text='the perfect look awaits you.' />
        <Text style={`text`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
        <Text style={`text sub-text`} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

        <View style={`wrapper-services`}>
          <View data-aos="fade-left" data-aos-duration="1000" style={`service`}>
            <Text style={`service-text`} text='1. Quality, looks created with original fabrics: incredible textures.' />
          </View>
          <View data-aos="fade-left" data-aos-duration="1000" style={`service`}>
            <Text style={`service-text`} text='2. Ease and reliability, we prioritize the ease of creating your own looks.' />
          </View>
          <View data-aos="fade-left" data-aos-duration="1000" style={`service`}>
            <Text style={`service-text`} text='3. Individuality, your look is yours alone!' />
          </View>
        </View>
      </View>
    </View>
  );
}

const DescriptionStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('services-description', [
    theme.w.fill(),
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
    theme.padding.full.size(4),
    theme.bg.white,

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.column.reverse.centerBetween, theme.gapEls.full.xl, theme.padding.full.size(2)], incluide: ['m', 't']
    }),
  ], [
    theme.myStyles.childClass('content', [
      theme.h.size(100, '%'),
      theme.w.size(55, '%'),
      theme.column.startCenter,

      theme.responsiveness.platforms({
        mobile: [theme.w.size(100, '%')],
        tablet: [theme.w.size(90, '%')],
      })
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

      theme.myStyles.childClass('sub-text', [theme.margin.top.size(0.7)]),

      theme.myStyles.childClass('wrapper-services', [
        theme.margin.top.xl,
        theme.w.fill(),
        theme.h.auto(),
        theme.column.startStart,
        
        theme.responsiveness.platforms({}, {
          comommStyle: [theme.presets.hide()], incluide: ['m', 't']
        })
      ], [
        theme.myStyles.childClass('service', [
          theme.margin.top.size(0.7),
          theme.w.fill(),
          theme.bg.blackTransparent,
          theme.border.rounded.size(0.3),
          theme.padding.horizontal.size(1.5),
          theme.padding.vertical.size(1),
          theme.transition.apply(0.2),
          theme.effect.hover.inOwn([theme.margin.left.size(0.3)])
        ], [
          theme.myStyles.childClass('service-text', [
            theme.font.apply('rg', 1, theme.font.typography.text, theme.colors.black)
          ]),
        ]),
      ])
    ]),

    theme.myStyles.childClass('logo-store', [
      theme.h.size(100, '%'),
      theme.w.size(45, '%'),
      theme.column.centerCenter,

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.w.size(100, '%')], incluide: ['m', 't']
      }),
    ], [
      theme.myStyles.childClass('wrapper', [
        theme.h.size(28),
        theme.w.size(28),
        theme.column.centerCenter,
        theme.bg.transparent,

        theme.responsiveness.platforms({}, {
          comommStyle: [theme.h.size(23), theme.w.size(23)], incluide: ['m', 't']
        }),
      ], theme.myStyles.childClass('super-woman-illustration', [theme.w.fill(), theme.h.fill(), theme.effect.filter.objectCover]))
    ])
  ]),
]));

export { Description, DescriptionStyles };
