export type ThemeColors = {
  black: string;
  white: string;

  input: {
    background: string;
    placeholder: string;
  };

  primary: string;
  secondary: string;
  secondaryLight: string;

  success: string;
  successLight: string;

  attention: string;
  attentionLight: string;

  shape: string;
  title: string;
  text: string;
  background: string;
  transparent: string;
}

type Property = 'color' | 'background-color' | 'border-color';

type Color = {
  name: string;
  value: string;
};

export const appColors: ThemeColors = {
  black: '#121015',
  white: '#fff',

  input: {
    background: '#1F1E25',
    placeholder: '#555',
  },

  primary: '#101010',
  secondary: '#FF872C',
  secondaryLight: 'rgba(255, 135, 44, 0.3)',

  success: '#12A454',
  successLight: 'rgba(18, 164, 84, 0.5)',

  attention: '#E83F5B',
  attentionLight: 'rgba(232, 63, 91, 0.5)',

  shape: '#FFFFFF',
  title: '#363F5F',
  text: '#DEEFE7',
  background: '#F0F2F5',

  transparent: '#FFF0',
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
  };

  return styles;
};
