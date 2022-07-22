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

export const colors: ThemeColors = {
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
