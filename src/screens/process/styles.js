import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    paddingBottom: 20,
    fontFamily: 'Cabin-Bold',
  },
  subtitle: {
    fontSize: 14,
    color: "grey",
    fontFamily: 'Cabin-SemiBold',
  },
  description: {
    fontSize: 18,
    color: "black",
    paddingBottom: 10,
    fontFamily: 'Cabin-SemiBold',
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  historyHeaderBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  historyHeaderTitle: {
    fontSize: 20,
    fontFamily: 'Cabin-SemiBold',
  },
});

export default styles;