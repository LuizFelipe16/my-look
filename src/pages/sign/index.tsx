import { View, TitlePage, myStylesProvider, Text, Link } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Loading, SignIn, SignUp } from 'components';
import { withSSRGuest } from 'functions';

export default function Sign() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isFormSign, setIsFormSign] = useState<"signup" | "signin">("signin");

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 100) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t={isFormSign === 'signin' ? 'Signin' : 'Signup'} />
        <View style={'signup'}>
          <View style={`signup-content`}>
            {isFormSign === "signin"
              ? <SignIn onClickNotHaveAccount={() => setIsFormSign("signup")} />
              : <SignUp onClickAlreadyHaveAccount={() => setIsFormSign("signin")} />
            }
          </View>

          <View data-aos="fade-left" data-aos-duration="500" style={`illustration`}>
            <Text type='h1' text='Welcome to,' />
            <Text data-aos-duration="500" text='perfect place to find the best looks for different occasions!' />

            <Link href='/' text='Back page' />
          </View>
        </View>
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
      theme.border.rounded.inPositions(15, 'top', 'left'),
      theme.border.rounded.inPositions(15, 'bottom', 'left'),
      theme.column.endCenter,
      theme.padding.full.size(3.5),

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.presets.hide()], incluide: ['m', 't']
      })
    ], [
      theme.myStyles.child('h1', [theme.font.apply('bl', 3, theme.font.typography.title, theme.colors.white)]),
      theme.myStyles.child('p', [
        theme.font.apply('sr', 1.2, theme.font.typography.text, theme.colors.white),
        theme.font.style.alignRight,
        theme.margin.top.size(1)
      ]),
      theme.myStyles.child('a', [
        theme.font.apply('md', 0.9, theme.font.typography.text, theme.colors.white),
        theme.font.style.alignRight,
        theme.margin.top.size(3.5),
        theme.font.style.underline,
      ]),
    ])
  ])
]), 'div', true);

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});
