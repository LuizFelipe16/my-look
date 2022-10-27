
export type ThemeColors = typeof appColors;

type Property = 'color' | 'background-color' | 'border-color';

type Color = {
  name: string;
  value: string;
};

export const appColors = {
  black: '#121015',
  white: '#fff',

  input: {
    background: '#1F1E25',
    placeholder: '#edf2f7',
  },

  primary: '#ff4321',
  secondary: '#FF872C',
  secondaryLight: 'rgba(255, 135, 44, 0.3)',

  success: '#12A450',
  successLight: 'rgba(18, 164, 84, 0.2)',

  attention: '#E83F5B',
  attentionLight: 'rgba(232, 63, 91, 0.5)',

  shape: '#FFFFFF',
  title: '#363F5F',
  text: '#DEEFE7',
  background: '#edf2fc',

  transparent: '#FFF0',
  gray: '#212121',
  grayLight: '#606163',

  blackTransparent: '#0001',
  googleBlue: '#4885ed',
  blackOverlap: '#0007',

  backgroundDark: '#dbe5fa',

  grayVeryLight: '#eee',
  primaryDark: '#ff4000',
};

const colorsArray: Color[] = [
  { name: 'black', value: appColors.black },
  { name: 'white', value: appColors.white },
  { name: 'transparent', value: appColors.transparent },
  { name: 'primary', value: appColors.primary },
  { name: 'secondary', value: appColors.secondary },
  { name: 'secondaryLight', value: appColors.secondaryLight },
  { name: 'success', value: appColors.success },
  { name: 'successLight', value: appColors.successLight },
  { name: 'attention', value: appColors.attention },
  { name: 'attentionLight', value: appColors.attentionLight },
  { name: 'shape', value: appColors.shape },
  { name: 'title', value: appColors.title },
  { name: 'text', value: appColors.text },
  { name: 'background', value: appColors.background },
  { name: 'inputBackground', value: appColors.input.background },
  { name: 'inputPlaceholder', value: appColors.input.placeholder },
  { name: 'gray', value: appColors.gray },
  { name: 'grayLight', value: appColors.grayLight },
  { name: 'blackTransparent', value: appColors.blackTransparent },
  { name: 'googleBlue', value: appColors.googleBlue },
  { name: 'blackOverlap', value: appColors.blackOverlap },
  { name: 'backgroundDark', value: appColors.backgroundDark },
  { name: 'grayVeryLight', value: appColors.grayVeryLight },
  { name: 'primaryDark', value: appColors.primaryDark },
];

export function getStyleColorProperty(property: Property) {
  const stylesArray = colorsArray.map(c => {
    const propertyStyle = `${property}: ${c.value};`

    return { [c.name]: propertyStyle }
  });

  const styles = {
    black: stylesArray[0].black,
    white: stylesArray[1].white,
    transparent: stylesArray[2].transparent,
    primary: stylesArray[3].primary,
    secondary: stylesArray[4].secondary,
    secondaryLight: stylesArray[5].secondaryLight,
    success: stylesArray[6].success,
    successLight: stylesArray[7].successLight,
    attention: stylesArray[8].attention,
    attentionLight: stylesArray[9].attentionLight,
    shape: stylesArray[10].shape,
    title: stylesArray[11].title,
    text: stylesArray[12].text,
    background: stylesArray[13].background,
    input: {
      background: stylesArray[14].inputBackground,
      placeholder: stylesArray[15].inputPlaceholder,
    },
    gray: stylesArray[16].gray,
    grayLight: stylesArray[17].grayLight,
    blackTransparent: stylesArray[18].blackTransparent,
    googleBlue: stylesArray[19].googleBlue,
    blackOverlap: stylesArray[20].blackOverlap,
    backgroundDark: stylesArray[21].backgroundDark,
    grayVeryLight: stylesArray[22].grayVeryLight,
    primaryDark: stylesArray[23].primaryDark,
  };

  return styles;
};
