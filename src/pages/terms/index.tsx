import { View, myStyles, Text } from '_lib/web';
import { Page } from 'components';
import { renderHTMLTermUses, renderHTMLPolicy } from 'data/termuse';

export default function Terms() {
  return (
    <Page styles={MyStyles} title='Terms and Conditions of Use'>
      <View style={`terms`}>
        <Text type='h1' text='MyLook Terms and Conditions of Use' />
        <View style={`text`}>
          {renderHTMLTermUses()}
          {renderHTMLPolicy()}
        </View>
      </View>
    </Page>
  );
}

const MyStyles = myStyles.create((theme) => ([
  theme.myStyles.create('terms', [
    theme.w.size(100, '%'),
    theme.h.auto(),
    theme.h.min(90, 'vh'),
    theme.column.centerStart,
    theme.margin.top.size(6),
    theme.padding.full.md,
    theme.padding.bottom.size(4),
  ], [
    theme.myStyles.child('h1', [
      theme.w.size(80, '%'),
      theme.font.apply('bl', 3, theme.font.typography.title, theme.colors.black),
      theme.font.style.alignLeft,
      theme.margin.top.size(3),
    ]),
    
    theme.myStyles.childClass('text', [
      theme.w.size(80, '%'),
      theme.font.apply('sr', 1.2, theme.font.typography.text, theme.colors.black),
      theme.font.style.alignLeft,
      theme.column.startStart,
      theme.margin.top.size(3),
      theme.gapEls.full.size(2)
    ], [
      `
        h2 {
          ${theme.font.apply('bl', 1.5, theme.font.typography.text, theme.colors.black)}
        }

        h3 {
          ${theme.font.apply('sb', 1.2, theme.font.typography.text, theme.colors.gray)}
        }
      `
    ]),
  ])
]), 'div', true);
