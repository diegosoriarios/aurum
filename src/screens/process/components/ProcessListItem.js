import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { extractDate } from '../../../utils/DateHelper';

const ProcessListItem = ({ item }) => {
  const { description, date, id } = item;
  const itemDate = new Date(date);
  const { day, month, year } = extractDate(itemDate);

  return (
    <View style={styles.cardContainer} key={id}>
      <View style={styles.cardContainerHeader}>
        <View style={styles.dayContainer}>
          <Text style={styles.dayContainerText}>{day}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.monthContainer}>{month}</Text>
          <Text style={styles.yearContainer}>{year}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.dividerContainer}>
          <View style={styles.verticalDivider} /></View>
        <View style={styles.historyDescriptionBox}>
          <Text style={styles.historyDescription}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  cardContainerHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  dayContainer: {
    backgroundColor: "#11A8F3",
    height: 50,
    width: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  dayContainerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    fontFamily: 'Cabin-SemiBold',
  },
  dateContainer: {
    paddingHorizontal: 10,
  },
  monthContainer: {
    fontSize: 16,
    fontFamily: 'Cabin-SemiBold',
  },
  yearContainer: {
    fontSize: 12,
    color: "grey",
    fontFamily: 'Cabin-SemiBold',
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  dividerContainer: {
    width: 50,
    alignItems: 'center',
  },
  verticalDivider: {
    width: 2,
    flex: 1,
    backgroundColor: "black",
  },
  historyDescriptionBox: {
    width: "80%"
  },
  historyDescription: {
    fontSize: 18,
    paddingHorizontal: 10,
    textAlign: "justify",
    fontFamily: 'Cabin-Regular',
  },
})

export default ProcessListItem;