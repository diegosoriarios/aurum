import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Process({route, navigation}) {
  const { title, number, court, amount, customers, historicals } = route.params;
  const {name, roleName} = customers[0];
  const [modalVisible, setModalVisible] = useState(false);
  const [ordenarPor, setOrdenarPor] = useState("Ordenar por data");
  const [tipoOrdenacao, setTipoOrdernacao] = useState("Crescente");

  useEffect(() => {
    navigation.setOptions({
      title: 'Processo',
      headerRight: () => <TouchableOpacity style={{padding: 10}}><Icon name="attach-file" size={30} color="#11A8F3" /></TouchableOpacity>,
      headerLeft: () => <TouchableOpacity style={{padding:10}} onPress={() => navigation.goBack()}><Icon name="keyboard-backspace" size={30} color="#11A8F3" /></TouchableOpacity>
    })
  }, []);

  const renderHistoric = () => {
    let historic
    if (ordenarPor === "Ordenar por data") {
      if (tipoOrdenacao === "Crescente") {
        historic = historicals.sort((a, b) => new Date(a) - new Date(b)); 
      } else {

      }
    } else {

    }

    return historicals.map(item => <ListItem item={item} />);
  }

  return (
    <ScrollView>
      <View  style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Numero</Text>
        <Text style={styles.description}>{number}</Text>
        <Text style={styles.subtitle}>Cliente</Text>
        <Text style={styles.description}>{name}</Text>
        <Text style={styles.subtitle}>Parte</Text>
        <Text style={styles.description}>{roleName}</Text>
        <Text style={styles.subtitle}>Forum</Text>
        <Text style={styles.description}>{court}</Text>
        <Text style={styles.subtitle}>Valor</Text>
        <Text style={styles.description}>{amount}</Text>
        <Text style={styles.subtitle}>Anexo</Text>
        <View style={styles.attachmentContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>NomeDoAnexo_máx20car.pdf</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeContainer}>
            <Text><Icon name="close" size={30} color="#000" /></Text>
          </TouchableOpacity>
        </View>  
      </View>
      <View style={styles.divider} />
      <View style={styles.container}>
        <View style={styles.historyHeader}>
          <Text style={styles.historyHeaderTitle}>HISTÓRICO</Text>
          <TouchableOpacity style={styles.historyHeaderBtn} onPress={() => setModalVisible(true)}>
            <Text>{ordenarPor}</Text>
            <Icon name={tipoOrdenacao === "Crescente" ? "arrow-drop-down" : "arrow-drop-up"} size={30} color="#000" />
            <Icon name="sort" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        { historicals && renderHistoric() }
        
      </View>

      <Modal
        swipeDirection={['up', 'left', 'right', 'down']}
        isVisible={modalVisible}
        style={styles.modal}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <RadioGroup text="Ordenar por data" selected={ordenarPor} onSelect={setOrdenarPor} />
          <RadioGroup text="Ordenar por Descriçao" selected={ordenarPor} onSelect={setOrdenarPor} />
          <View style={styles.divider} />
          <RadioGroup text="Crescente" selected={tipoOrdenacao} onSelect={setTipoOrdernacao} />
          <RadioGroup text="Decrescente" selected={tipoOrdenacao} onSelect={setTipoOrdernacao} />
        </View>
      </Modal>
    </ScrollView>
  );
}

function ListItem({item}) {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const { description, date, id } = item;
  const itemDate = new Date(date);
  const day = itemDate.getDate();
  const month = itemDate.getMonth();
  const year = itemDate.getFullYear();

  return (
    <View style={styles.cardContainer} key={id}>
          <View style={styles.cardContainerHeader}>
            <View style={styles.dayContainer}>
              <Text style={styles.dayContainerText}>{day}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.monthContainer}>{months[month]}</Text>
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

function RadioGroup({text, selected, onSelect}) {
  let child = text == selected ? <Icon name="check" color="#11A8F3" size={30} /> : <View />
  return (
    <TouchableOpacity style={styles.radioGroup} onPress={() => onSelect(text)}>
      <View style={styles.radioSelected}>
        {child}
      </View>
      <Text style={styles.radioGroupText}>{text}</Text>
    </TouchableOpacity>
  )
}

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
  attachmentContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    height: 50,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#11A8F3",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  btnText: {
    fontWeight: "bold",
    color: "white",
  },
  closeContainer: {
    height: 50,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "grey",
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  radioGroupText: {
    fontSize: 20,
    fontFamily: 'Cabin-Bold',
  },
  radioSelected: {
    width: 50,
    height: 50,
  },
});

export default Process;