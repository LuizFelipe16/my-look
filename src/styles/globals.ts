import { myStyles } from '_lib/web';

export const { MyStylesGlobal } = myStyles.global.create(theme => ([
  theme.myStyles.global.insert([theme.margin.full.size(0), theme.padding.full.size(0), theme.presets.boxBorder]),
  theme.myStyles.tag('body', [theme.bg.background, theme.over.hide('horizontal')]),
  theme.myStyles.tag('button', [theme.presets.cursor('pointer')]),
  theme.myStyles.tag('div', [theme.presets.displayFlex]),
  theme.myStyles.tag('html', [
    theme.responsiveness.media([theme.font.size(93.75, '%')], 721, 1000),
    theme.responsiveness.media([theme.font.size(87.5, '%')], 100, 720)
  ]),
  theme.myStyles.selectorProp('selection', [theme.textColor.black, theme.bg.primary]),
  theme.myStyles.elementProp('disabled', [theme.effect.filter.opacity(0.6), theme.presets.cursor('not-allowed')]),
  theme.myStyles.webkit('scrollbar', [theme.w.size(6, 'px'), theme.bg.background]),
  theme.myStyles.webkit('scrollbar-thumb', [theme.bg.primary]),
]));
