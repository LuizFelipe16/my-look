import { View, TitlePage, myStylesProvider, Text, Link } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Loading } from 'components';
import { useUser } from 'hooks';
import { withSSRAuth } from 'functions';

export default function Welcome() {
  const { user } = useUser();
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 1000) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t='Welcome!' />

        <View style={`page-welcome`}>
          <View style={`overlap`}>
            <Text data-aos="fade-down" text={`Hello ${user.username}`} />
            <Text data-aos="fade-down" type='h1' text='Welcome to My'><strong>Look!</strong></Text>
            <Text>
              We are happy to have you with us, we suggest you start by looking <br /> 
              at the best looks available this week.
            </Text>
            <Link href='/' text='Get Started' />
          </View>
        </View>
      </View>
    </MyStyles>
  );
}

const MyStyles = myStylesProvider.create((theme) => ([
  theme.myStyles.create('page-welcome', [
    theme.w.size(100, '%'),
    theme.h.auto(),
    theme.h.min(100, 'vh'),
    theme.column.centerCenter,
    theme.bgImage.path('/bg-welcome.png'),
  ], [
    theme.myStyles.childClass('overlap', [
      theme.h.fill(),
      theme.w.fill(),
      theme.column.centerCenter,
      theme.padding.full.md,
      theme.bg.blackOverlap,
    ], [
      theme.myStyles.child('h1', [
        theme.font.apply('sb', 3, theme.font.typography.title, theme.colors.white),
        theme.myStyles.child('strong', [theme.textColor.background])
      ]),
      
      theme.myStyles.child('p', [
        theme.font.apply('sr', 1.3, theme.font.typography.text, theme.colors.white),
        theme.font.style.alignCenter,
        theme.margin.top.size(2),
      ]),
  
      theme.myStyles.child('a', [
        theme.font.apply('sr', 1.1, theme.font.typography.text, theme.colors.white),  
        theme.margin.top.size(5),
        theme.padding.horizontal.size(2.8),
        theme.padding.vertical.size(0.4),
        theme.border.rounded.sm,
        theme.bg.primary,
        theme.transition.apply(0.2),
        theme.effect.hover.inOwn([theme.effect.filter.glow(0.9)])
      ]),
    ]),
  ])
]), 'div', true);

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});
