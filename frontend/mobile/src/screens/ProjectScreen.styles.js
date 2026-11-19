import { StyleSheet } from 'react-native';
import menuBarStyles from './MenuBar.styles';

const cardHeight = 80;

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
  content: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 408,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  projectList: {
    gap: 34,
  },
  projectCard: {
    minHeight: cardHeight,
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
    backgroundColor: '#F9E6A8',
    borderColor: '#CAC4D0',
    borderWidth: 1,
    borderRadius: 12,
  },
  projectCardContent: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },
  projectAvatar: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2A900',
    borderRadius: 20,
  },
  projectAvatarInitial: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  projectText: {
    flex: 1,
    gap: 4,
  },
  projectTitle: {
    color: '#1D1B20',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  projectSubtitle: {
    color: '#1D1B20',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  projectMedia: {
    width: 80,
    overflow: 'hidden',
  },
  honeycombImage: {
    width: '100%',
    height: '100%',
  },
  createProjectButton: {
    ...menuBarStyles.findGroupButton,
    maxWidth: 311,
    marginTop: 24,
  },
  createProjectIcon: menuBarStyles.findGroupIcon,
  createProjectLabel: menuBarStyles.findGroupLabel,
  bottomBar: menuBarStyles.bottomBar,
  tab: menuBarStyles.tab,
  tabIndicator: menuBarStyles.tabIndicator,
  tabIndicatorActive: menuBarStyles.tabIndicatorActive,
  tabIcon: menuBarStyles.tabIcon,
  tabLabel: menuBarStyles.tabLabel,
});
