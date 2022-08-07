import { View, myStylesProvider, Text, Divider, Button, Link } from '../../../_lib/web';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
          <Text text='Getting Started' />
          <Text text='FAQ' />
          <Text text='Feedback' />
        </View>

        <Divider style='separator' />

        <View style='session-subscribe'>
          <Text type='h2' text='SUBSCRIBE' />
          <View style='social-links'>
            <Link href='#'><FaFacebookF /></Link>
            <Link href='#'><FaInstagram /></Link>
            <Link href='#'><FaLinkedinIn /></Link>
          </View>
        </View>
      </View>
      <View style={`wrapper-copyright`}>
        <Text>© 2022 All rights reserved. By create <strong>LouizDeveloper</strong></Text>
      </View>
    </Wrapper>
  );
}

const Wrapper = myStylesProvider.create(theme => ([
  theme.w.fill(),
  theme.h.min(65, 'vh'),
  theme.column.centerBetween,
  
  theme.myStyles.childClass('wrapper-content', [
    theme.w.fill(),
    theme.h.min(85, '%'),
    theme.bg.blackTransparent,
  ], [
    theme.myStyles.childClass('session', [
      theme.w.size(20, '%'),
      theme.column.startStart,
      theme.padding.horizontal.xl,
      theme.padding.vertical.size(4),

      theme.myStyles.child('h1', [
        theme.font.apply('sb', 1.2, theme.font.typography.text, theme.colors.black),
        theme.margin.bottom.size(1),
      ]),
      theme.myStyles.child('p', [
        theme.font.apply('rg', 1, theme.font.typography.text, theme.colors.gray),
        theme.margin.top.size(1),
        theme.transition.apply(0.2),
        theme.presets.cursor.pointer,
        theme.effect.hover.inOwn([theme.margin.left.size(0.1), theme.textColor.primary]),
      ]),
    ]),

    theme.myStyles.childClass('separator', [
      theme.margin.top.size(2),
      theme.w.size(2, 'px'),
      theme.h.size(75, '%'),
      theme.border.hide,
      theme.border.rounded.size(5),
      theme.bg.blackTransparent
    ]),

    theme.myStyles.childClass('session-subscribe', [
      theme.w.size(40, '%'),
      theme.column.startStart,
      theme.padding.horizontal.xl,
      theme.padding.vertical.size(4),

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
      ]),
      ]),
    ]),
  ]),
  
  theme.myStyles.childClass('wrapper-copyright', [
    theme.w.fill(),
    theme.h.min(15, '%'),
    theme.bg.primary,
    theme.column.centerCenter,
    theme.font.apply('rg', 0.9, theme.font.typography.title, theme.colors.white),
    theme.padding.full.size(1.5),
  ]),
]), 'div', false);

export { Footer };
