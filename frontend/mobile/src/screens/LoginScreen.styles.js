import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9E6A8',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 110,
    paddingBottom: 32,
  },
  content: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 322,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
  },
  fields: {
    gap: 20,
    marginTop: 61,
  },
  field: {
    minHeight: 56,
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomColor: '#49454F',
    borderBottomWidth: 1,
  },
  label: {
    color: '#49454F',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  input: {
    color: '#1D1B20',
    fontSize: 16,
    minHeight: 24,
    padding: 0,
    letterSpacing: 0.5,
  },
  recovery: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    minHeight: 44,
    paddingHorizontal: 16,
  },
  recoveryText: {
    color: '#005EAB',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  actions: {
    alignItems: 'flex-end',
    gap: 16,
    marginTop: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: 44,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F2A900',
    borderRadius: 100,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)',
  },
  loginButton: {
    minWidth: 96,
  },
  createButton: {
    minWidth: 178,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonIcon: {
    color: '#4D2A00',
    fontSize: 20,
    lineHeight: 24,
  },
  buttonLabel: {
    color: '#4D2A00',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});
