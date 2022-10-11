import { AiOutlineSetting } from 'react-icons/ai';
import { BiHomeAlt, BiLockAlt, BiLogOutCircle } from 'react-icons/bi';
import { View, myStyles, Text, Avatar, Button } from '_lib/web';
import { EditInformations, EditLocation, EditSecurity } from 'components';
import { Page } from 'components';
import { useUser } from 'hooks';
import { withSSRAuth } from 'functions';
import { useState } from 'react';

type SectionType = 'informations' | 'location' | 'security';

export default function Account() {
  const { user, signOut, isLoading } = useUser();

  const [section, setSection] = useState<SectionType>('informations');
  
  return (
    <Page styles={MyStylesAccount} title='Account' isLoading={!user}>
      <View style={`page-welcome`}>
        <View style={`side-menu`}>
          <View style={`infos`}>
            <Avatar size='xl' name={user?.username} src={user?.avatar} />
            <Text style={`username`} text={user?.username} />
            <Text style={`email`} text={user?.email} />
          </View>

          <Button style={`option active`} onPress={() => setSection('informations')}>
            <AiOutlineSetting size={20} />
            Account
          </Button>

          <Button style={`option ${user?.accountType === 'google' && 'deactivate'}`} onPress={user?.accountType === 'google' ? () => null : () => setSection('security')}>
            <BiLockAlt size={20} />
            Security
          </Button>

          <Button style={`option deactivate`} onPress={() => setSection('location')}>
            <BiHomeAlt size={20} />
            Location
          </Button>

          <Button style={`option`} onPress={signOut}>
            <BiLogOutCircle size={20} />
            Logout
          </Button>
        </View>
          
        <View style={`content-menu`}>
          {section === 'informations' && <EditInformations isDisableInputs={isLoading} />}
          {section === 'location' && <EditLocation isDisableInputs={isLoading} />}
          {section === 'security' && <EditSecurity isDisableInputs={isLoading} />}
        </View>
      </View>
    </Page>
  );
}

const OptionStyles = myStyles.style((theme) => ([
  theme.myStyles.childClass('option', [
    theme.w.size(80, '%'),
    theme.border.rounded.sm,
    theme.padding.horizontal.size(3),
    theme.padding.vertical.size(0.7),
    theme.row.centerStart,
    theme.margin.top.size(0.5),
    theme.gapEls.full.size(0.5),
    theme.font.apply('rg', 1, theme.font.typography.title, theme.colors.black),

    theme.transition.apply(0.2),
    theme.effect.hover.inOwn([theme.bg.primary, theme.textColor.background]),

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.padding.horizontal.size(1.5)], incluide: ['m', 't']
    }),

    theme.myStyles.inOwnHasClass('active', [
      theme.bg.primary, 
      theme.textColor.background,
      theme.effect.hover.inOwn([theme.effect.filter.opacity(1), theme.effect.filter.glow(0.9)])
    ]),

    theme.myStyles.inOwnHasClass('deactivate', [theme.effect.filter.opacity(0.5), theme.presets.cursor('not-allowed')]),
  ])
]));

const InfosStyles = myStyles.style((theme) => ([
  theme.myStyles.childClass('infos', [
    theme.column.centerCenter,
    theme.margin.top.size(2.8),
    theme.margin.bottom.size(2.8),
    theme.padding.horizontal.lg,
    theme.gapEls.full.size(0.3),
  ], [
    theme.myStyles.childClass('username', [
      theme.margin.top.md,
      theme.font.apply('bl', 1.2, theme.font.typography.title, theme.colors.black)
    ]),
    theme.myStyles.childClass('email', [theme.font.apply('rg', 1, theme.font.typography.title, theme.colors.grayLight)]),
    theme.myStyles.childClass('edit-disable', [
      theme.font.apply('rg', 0.8, theme.font.typography.text, theme.colors.attention),
      theme.margin.top.md,
      theme.font.style.alignCenter,
    ]),
  ])
]));

export const MyStylesAccount = myStyles.create((theme) => ([
  theme.bg.white,

  theme.myStyles.create('page-welcome', [
    theme.w.size(100, '%'),
    theme.h.auto(),
    theme.h.min(85, 'vh'),
    theme.row.centerBetween,
    theme.margin.top.size(5),
    theme.margin.bottom.size(2),

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.column.centerCenter], incluide: ['m', 't', 'l']
    })
  ], [
    theme.myStyles.childClass('side-menu', [
      theme.w.size(30, '%'),
      theme.w.min(25, 'vw'),
      theme.h.size(100, '%'),
      theme.border.in.right(2, theme.colors.primary),
      theme.column.centerStart,

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.border.in.right(0, theme.colors.primary), theme.w.size(100, '%')], incluide: ['m', 't', 'l']
      })
    ], [InfosStyles, OptionStyles]),

    theme.myStyles.childClass('content-menu', [
      theme.h.size(100, '%'),
      theme.w.size(100, '%'),
      theme.column.startStart,
      theme.padding.horizontal.size(3),
      theme.gapEls.full.size(1),

      theme.responsiveness.platforms({}, {
        comommStyle: [theme.column.centerStart], incluide: ['m', 't', 'l']
      })
    ], [
      theme.myStyles.child('h1', [
        theme.font.apply('sb', 1.8, theme.font.typography.title, theme.colors.black),
        theme.margin.top.size(2.8)
      ]),

      theme.myStyles.child('h2', [
        theme.font.apply('sb', 1.2, theme.font.typography.title, theme.colors.primary),

        theme.responsiveness.platforms({}, {
          comommStyle: [theme.margin.bottom.size(3)], incluide: ['m', 't', 'l']
        })
      ]),
    ]),
  ])
]), 'div', true);

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
});
