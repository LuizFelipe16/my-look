import { View, myStyles, Text, Divider, Button, Link } from '_lib/web';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ScrollTopButton } from '_lib/web/components/ScrollTopButton';

function Footer() {
  return (
    <Wrapper>
      <View style={`wrapper-content`}>
        <View style='session'>
          <Text type='h1' text='SITEMAP' />
          <Text text='Home' />
          <Text text='Services' />
          <Text text='Contact' />
          <Text text='Blog' />
        </View>

        <Divider style='separator' />

        <View style='session'>
          <Text type='h1' text='PRODUCT' />
          <Text text='Pricing' />
          <Text text='Customers' />
          <Text text='Feedback' />
        </View>

        <Divider style='separator' />

        <View style='session'>
          <Text type='h1' text='HELP' />
          <Text text='FAQ' />
          <Text text='Feedback' />
          <Text text='Terms &amp; Conditions' />
        </View>

        <Divider style='separator' />

        <View style='session-subscribe'>
          <Text type='h2' text='NETWORKS' />
          <View style='social-links'>
            <Link href='#'><FaFacebookF /></Link>
            <Link href='#'><FaInstagram /></Link>
            <Link href='#'><FaLinkedinIn /></Link>
          </View>

          <ScrollTopButton isNotIcon />
        </View>
      </View>
      
      <View style={`wrapper-copyright`}>
        <Text>© 2022 All rights reserved. By create <strong>LouizDeveloper</strong></Text>
      </View>
    </Wrapper>
  );
}

const Wrapper = myStyles.create(theme => ([
  theme.w.fill(),
  theme.h.auto(),
  theme.column.centerBetween,
  
  theme.myStyles.childClass('wrapper-content', [
    theme.w.fill(),
    theme.h.auto(),,
    theme.bg.blackTransparent,

    theme.responsiveness.platforms({}, { comommStyle: [theme.column.centerCenter], incluide: ['m', 't'] }),
  ], [
    theme.myStyles.childClass('session', [
      theme.w.size(20, '%'),
      theme.column.startStart,
      theme.padding.horizontal.xl,
      theme.padding.vertical.size(4),

      theme.responsiveness.platforms({}, { 
        comommStyle: [theme.w.size(100, '%'), theme.column.centerCenter, theme.padding.vertical.size(2.5)], 
        incluide: ['m', 't'] 
      }),

      theme.myStyles.child('h1', [
        theme.font.apply('sb', 1.2, theme.font.typography.text, theme.colors.black),
        theme.margin.bottom.size(1),
      ]),
      theme.myStyles.child('p', [
        theme.font.apply('rg', 1, theme.font.typography.text, theme.colors.gray),
        theme.margin.top.size(1),
        theme.transition.apply(0.2),
        theme.presets.cursor('pointer'),
        theme.effect.hover.inOwn([theme.margin.left.size(0.1), theme.textColor.primary]),
      ]),
    ]),

    theme.myStyles.childClass('separator', [
      theme.margin.top.size(2),
      theme.w.size(2, 'px'),
      theme.h.size(75, '%'),
      theme.border.hide,
      theme.border.rounded.size(5),
      theme.bg.blackTransparent,

      theme.responsiveness.platforms({}, { 
        comommStyle: [theme.w.size(80, '%'), theme.h.size(2, 'px')], incluide: ['m', 't'] 
      }),
    ]),

    theme.myStyles.childClass('session-subscribe', [
      theme.w.size(40, '%'),
      theme.column.startStart,
      theme.padding.horizontal.xl,
      theme.padding.vertical.size(4),

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.w.size(100, '%'), theme.column.centerCenter, theme.padding.vertical.size(2.5)],
        incluide: ['m', 't']
      }),
    ], [
      theme.myStyles.child('h2', [theme.font.apply('sb', 1.2, theme.font.typography.text, theme.colors.black)]),
      
      theme.myStyles.childClass('social-links', [
        theme.bg.transparent,
        theme.row.centerStart,
        theme.gapEls.full.xl,
        theme.margin.top.xl,
      ], [
        theme.myStyles.child('a', [
          theme.textColor.black,
          theme.padding.full.size(0.8),
          theme.font.size(1.2),
          theme.border.rounded.circle,
          theme.border.fillByPixel(1, theme.colors.black),
          theme.transition.apply(0.2),
          theme.effect.hover.inOwn([theme.bg.black, theme.border.fillByPixel(1, theme.colors.white), theme.textColor.white])
        ])
      ]),

      theme.myStyles.childClass('my-scrollToTop', [
        theme.textColor.grayLight,
        theme.font.size(1),
        theme.font.style.underline,
        theme.margin.top.size(6),
        theme.transition.apply(0.2),
        theme.effect.hover.inOwn([theme.textColor.primary, theme.animation.apply('jump-text', 1, 'infinite')]),
        theme.animation.define.full(
          'jump-text', 
          [theme.animation.transform.apply((t) => [t.translate.y(0)])], 
          [theme.animation.transform.apply((t) => [t.translate.y(-5)])], 
          [theme.animation.transform.apply((t) => [t.translate.y(0)])], 
        ),

        theme.responsiveness.platforms({}, { comommStyle: [theme.margin.top.size(3.5)], incluide: ['m', 't'] }),
      ])
    ]),
  ]),
  
  theme.myStyles.childClass('wrapper-copyright', [
    theme.w.fill(),
    theme.h.auto(),
    theme.bg.primary,
    theme.column.centerCenter,
    theme.font.apply('rg', 0.9, theme.font.typography.title, theme.colors.white),
    theme.padding.full.size(1.5),
  ]),
]), 'div', false);

export { Footer };
