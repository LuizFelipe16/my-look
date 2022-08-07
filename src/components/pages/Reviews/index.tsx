import { View, myStylesProvider, Text, ImgZoom, Divider, Button } from '../../../_lib/web';

function Reviews() {
  return (
    <View style={'reviews'}>
      <Text type='h1' style={`title`} text='MyLook fora das telinhas:' />
      <Text type='h2' style={`subtitle`} text='Veja o que falam sobre nosso serviço?' />

      <View style={`revis`}>
        <View data-aos="fade-down" data-aos-duration="500" style={`card-review`}>
          <Text type='h1' text='MIKELYA' />
          <Text text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt.”' />
        </View>
        <View data-aos="fade-down" data-aos-duration="1000" style={`card-review`}>
          <Text type='h1' text='NIKE' />
          <Text text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt.”' />
        </View>
        <View data-aos="fade-down" data-aos-duration="1500" style={`card-review`}>
          <Text type='h1' text='LARIEM' />
          <Text text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt.”' />
        </View>
      </View>
    </View>
  );
}

const ReviewsStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('reviews', [
    theme.w.fill(),
    theme.h.min(100, 'vh'),
    theme.column.startCenter,
    theme.padding.full.size(6),
    theme.responsiveness.media([theme.column.centerCenter, theme.gapEls.full.size(1)], 100, 750),
  ], [
    theme.myStyles.childClass('title', [
      theme.font.apply('sb', 2.2, theme.font.typography.title, theme.colors.black),
    ]),

    theme.myStyles.childClass('subtitle', [
      theme.font.apply('sr', 2, theme.font.typography.text, theme.colors.gray),
    ]),

    theme.myStyles.childClass('revis', [
      theme.w.size(100, '%'),
      theme.h.auto(),
      theme.margin.top.size(5),
      theme.row.centerBetween,
    ], [
      theme.myStyles.childClass('card-review', [
        theme.w.size(30, '%'),
        theme.h.auto(),
        theme.column.startStart,
        theme.gapEls.full.size(1),
        theme.padding.horizontal.size(1),
        theme.padding.vertical.size(0.5),
        theme.border.in.left(2, theme.colors.primary),
      ], [
        theme.myStyles.child('h1', [theme.font.apply('sb', 1.5, theme.font.typography.title, theme.colors.black)]),
        theme.myStyles.child('p', [theme.font.apply('rg', 1, theme.font.typography.title, theme.colors.grayLight)]),
      ])
    ])
  ]),
]));

export { Reviews, ReviewsStyles };
