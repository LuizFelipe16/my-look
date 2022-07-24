import { useState } from 'react';
import { stylesProvider } from '../_app';
import { Text, View, TitlePage } from '../_lib/web';
import { onMount } from '../_lib/global';
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
      <button className={`btn-theme ${theme}`} onClick={changeTheme}>
        {theme === 'dark' ? <MdWbSunny /> : <BsFillMoonFill /> }
      </button>
      </View>
    </Styles>
  );
}

const Styles = stylesProvider.create((theme) => (`
  .page {
    width: 100%;
    height: 100%;
    ${theme.centerColumn}
    ${theme.font.typography.text}
    
    .clock {
      ${theme.font.size(5)}
      ${theme.font.weight.rg}
    }

    .greeting {
      margin-top: ${theme.spacing.size(2)};
      ${theme.font.size(1.5)}
      ${theme.font.weight.rg}
      ${theme.font.typography.title}
    }

    .btn-theme {
      position: absolute;
      right: ${theme.presets.size(4)};
      top: ${theme.presets.size(3)};
      background-color: ${theme.colors.transparent};
    }
    
    .dark {
      color: ${theme.colors.text};
    }
    
    .light {
      color: ${theme.colors.primary};
    }
  }

  .dark {
    background-color: ${theme.colors.primary};
  }

  .light {
    background-color: ${theme.colors.text};
  }
`), true);
