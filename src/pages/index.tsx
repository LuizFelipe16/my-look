import { Text, View, TitlePage, stylesProvider, Button } from '../_lib/web';
import { onMount, useState } from '../_lib/global';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';
import { Loading } from '../components';
import { useTheme } from '../context';

export default function App() {
  const { theme, changeTheme } = useTheme();

  const [clock, setClock] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  onMount(() => {
    setTimeout(() => setIsLoading(false), 1000)
    getClock();
    getGreeting();
  });

  function getGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good night!');
    }
  };

  function getClock() {
    const getTime = (time: number | string) => time < 10 ? `0${time}` : time;
    
    let date = new Date();
    const value = `${getTime(date.getHours())}:${getTime(date.getMinutes())}:${getTime(date.getSeconds())}`;

    setClock(value)
  };

  setInterval(getClock, 1000);

  if (isLoading) return <Loading />;

  return (
    <Styles>
      <TitlePage t='Welcome!' />
      <View style={`page ${theme}`} w='100%' h='100%'>
      <Text style={`clock ${theme}`} text={clock} />
      <Text style={`greeting ${theme}`} text={greeting} />
      <Button style={`handleTheme ${theme}`} onPress={changeTheme}>
        {theme === 'dark' ? <MdWbSunny /> : <BsFillMoonFill /> }
      </Button>
      </View>
    </Styles>
  );
}

const Styles = stylesProvider.create((theme) => (`
  .page {
    ${theme.presets.fullView}
    ${theme.centerColumn}
    ${theme.font.weight.rg}

    &.dark {
      ${theme.bg.primary}
    }
    
    &.light {
      ${theme.bg.text}
    }
    
    .clock {
      ${theme.font.size(5)}
      ${theme.font.typography.text}
    }

    .greeting {
      ${theme.font.size(1.5)}
      ${theme.font.typography.title}
      ${theme.margin.top.sm}
    }

    .handleTheme {
      ${theme.position.top.value(3)}
      ${theme.position.right.value(4)}
      ${theme.position.absolute}
      ${theme.bg.transparent}
      ${theme.border.rounded.circle}
      ${theme.padding.full.md}
      ${theme.transition.apply(0.2)}
      
      &.dark {
        ${theme.border.fillByPixel(1, theme.colors.text)}
        
        &:hover {
          ${theme.bg.text}
          ${theme.textColor.primary}
        }
      }
      
      &.light {
        ${theme.border.fillByPixel(1, theme.colors.primary)}

        &:hover {
          ${theme.bg.primary}
          ${theme.textColor.text}
        }
      }

      ${theme.responsiveness.phone(`
        ${theme.position.right.percentage(43)}
      `,)}
    }
    
    .dark {
      ${theme.textColor.text}
    }
    
    .light {
      ${theme.textColor.primary}
    }
  }
`), true);
