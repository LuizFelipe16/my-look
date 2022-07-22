import { useState } from 'react';
import { stylesProvider } from '../_app';
import { Text, View, TitlePage } from '../_lib/web';
import { onMount } from '../_lib/global';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';
import { Loading } from '../components';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [clock, setClock] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function getClock() {
    const getTime = (time: number | string) => time < 10 ? `0${time}` : time;
    
    let date = new Date();
    const value = `${getTime(date.getHours())}:${getTime(date.getMinutes())}:${getTime(date.getSeconds())}`;

    setClock(value)
  }

  const handleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  setInterval(getClock, 1000)

  onMount(() => {
    setTimeout(() => setIsLoading(false), 1000)
    getClock();
  })

  if (isLoading) return <Loading />

  return (
    <Styles>
      <TitlePage t='Welcome!' />
      <View style={`page page-${theme}`} w='100%' h='100%'>
      <Text style={`clock clock-${theme}`} text={clock} />
      <button className={`btn-theme btn-theme-${theme}`} onClick={handleTheme}>
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
    
    .clock-dark {
      color: ${theme.colors.text};
    }
    
    .clock-light {
      color: ${theme.colors.primary};
    }

    .btn-theme {
      position: absolute;
      right: ${theme.presets.size(4)};
      top: ${theme.presets.size(3)};
      background-color: ${theme.colors.transparent};
    }

    .btn-theme-dark {
      color: ${theme.colors.text};
    }

    .btn-theme-light {
      color: ${theme.colors.primary};
    }
  }

  .page-dark {
    background-color: ${theme.colors.primary};
  }

  .page-light {
    background-color: ${theme.colors.text};
  }
`), true);
