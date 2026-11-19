import { StyleSheet } from 'react-native';
import menuBarStyles from './MenuBar.styles';

export default StyleSheet.create({
  screen: menuBarStyles.screen,
  topBar: menuBarStyles.topBar,
  topBarTitle: menuBarStyles.topBarTitle,
  topBarAction: menuBarStyles.topBarAction,
  topBarIcon: menuBarStyles.topBarIcon,
  topBarAvatar: menuBarStyles.topBarAvatar,
  scrollArea: {
    flex: 1,
  },
  preferencesContent: menuBarStyles.preferencesContent,
  preferencesHeader: menuBarStyles.preferencesHeader,
  preferencesAvatar: menuBarStyles.preferencesAvatar,
  preferencesAvatarIcon: {
    width: 46,
    height: 42,
    tintColor: '#CC6F00',
  },
  preferencesTitle: menuBarStyles.preferencesTitle,
  preferenceRow: menuBarStyles.preferenceRow,
  preferenceLabel: menuBarStyles.preferenceLabel,
  preferenceValue: menuBarStyles.preferenceValue,
  preferenceIcon: menuBarStyles.preferenceIcon,
  preferenceDivider: menuBarStyles.preferenceDivider,
  findGroupButton: menuBarStyles.findGroupButton,
  findGroupIcon: menuBarStyles.findGroupIcon,
  findGroupLabel: menuBarStyles.findGroupLabel,
  bottomBar: menuBarStyles.bottomBar,
  tab: menuBarStyles.tab,
  tabIndicator: menuBarStyles.tabIndicator,
  tabIndicatorActive: menuBarStyles.tabIndicatorActive,
  tabIcon: menuBarStyles.tabIcon,
  tabLabel: menuBarStyles.tabLabel,
});
