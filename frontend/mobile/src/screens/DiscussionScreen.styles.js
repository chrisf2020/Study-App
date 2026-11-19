import { StyleSheet } from 'react-native';
import menuBarStyles from './MenuBar.styles';

const yellow = '#F9E6A8';
const gold = '#F2A900';
const textColor = '#1D1B20';
const bodyText = {
  color: textColor,
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.25,
};

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
    maxWidth: 404,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 23,
  },
  sortOptions: {
    flexDirection: 'row',
    gap: 21,
    paddingHorizontal: 11,
  },
  sortButton: {
    flex: 1,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: yellow,
    borderRadius: 16,
  },
  sortLabel: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlign: 'center',
  },
  postCard: {
    overflow: 'hidden',
    backgroundColor: yellow,
    borderRadius: 12,
  },
  postHeader: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingLeft: 16,
    paddingRight: 4,
    paddingVertical: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: yellow,
  },
  postHeaderText: {
    flex: 1,
    gap: 4,
  },
  postAuthor: {
    color: textColor,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  postAuthorDetail: bodyText,
  postMenu: menuBarStyles.topBarAction,
  postMenuIcon: {
    width: 24,
    height: 24,
    tintColor: gold,
  },
  postMedia: {
    width: '100%',
    aspectRatio: 372 / 188,
    backgroundColor: gold,
  },
  postBody: {
    padding: 16,
    gap: 32,
  },
  postTitle: {
    color: textColor,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  postSubtitle: {
    ...bodyText,
    color: gold,
  },
  postDescription: bodyText,
  postActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
  },
  postButton: {
    minWidth: 61,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: yellow,
    borderRadius: 100,
  },
  postButtonLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  bottomBar: menuBarStyles.bottomBar,
  tab: menuBarStyles.tab,
  tabIndicator: menuBarStyles.tabIndicator,
  tabIndicatorActive: menuBarStyles.tabIndicatorActive,
  tabIcon: menuBarStyles.tabIcon,
  tabLabel: menuBarStyles.tabLabel,
});
