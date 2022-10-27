import { View, myStyles, Text } from '_lib/web';

function FooterAdmin() {
  return (
    <Wrapper>
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

  theme.myStyles.childClass('wrapper-copyright', [
    theme.w.fill(),
    theme.h.auto(),
    theme.bg.primary,
    theme.column.centerCenter,
    theme.font.apply('rg', 0.9, theme.font.typography.title, theme.colors.white),
    theme.padding.full.size(1),
  ]),
]), 'div', false);

export { FooterAdmin };
