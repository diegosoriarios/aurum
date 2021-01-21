import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    paddingBottom: 40,
    fontFamily: 'Cabin-SemiBold',
  },
  input: {
    borderColor: "grey",
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    marginVertical: 8,
  },
  error: {
    color: 'red',
    fontFamily: 'Cabin-SemiBold',
  }
});

export default styles;