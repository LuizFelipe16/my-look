import { View, TitlePage, myStylesProvider } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Navigation, Loading, SignIn, SignUp } from 'components';

export default function Sign() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isFormSign, setIsFormSign] = useState<"signup" | "signin">("signin");

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 0) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t={isFormSign === 'signin' ? 'Signin' : 'Signup'} />
        <Navigation showOnlyLogo />
        <View style={'signup'}>
          <View style={`signup-content`}>
            {isFormSign === "signin"
              ? <SignIn onClickNotHaveAccount={() => setIsFormSign("signup")} />
              : <SignUp onClickAlreadyHaveAccount={() => setIsFormSign("signin")} />
            }
          </View>

          <View style={`illustration`}>

          </View>
        </View>
        {/* <Footer /> */}
      </View>
    </MyStyles>
  );
}

const MyStyles = myStylesProvider.create((theme) => ([
  theme.myStyles.create('signup', [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
  ], [
    theme.myStyles.childClass('signup-content', [
      theme.w.size(55, '%'),
      theme.h.fill(),
      theme.centerColumn,

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.w.size(100, '%'), theme.h.size(100, 'vh')], incluide: ['m', 't']
      })
    ]),

    theme.myStyles.childClass('illustration', [
      theme.w.size(45, '%'),
      theme.h.fill(),
      theme.bg.primary,

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.presets.hide()], incluide: ['m', 't']
      })
    ])
  ])
]), 'div', true);
