import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';
import UserContext from '../../store/UserContext';
import { ascendingDescription, ascendingSortDate, descendingDescription, descendingSortDate } from '../../utils/DateHelper';

import ProcessListItem from './components/ProcessListItem';
import CustomModal from './components/CustomModal';
import IconButton from './components/IconButton';
import AttachmentButton from './components/AttachmentButton';
import Divider from './components/Divider';
import styles from './styles';

const Process = ({ route, navigation }) => {
  const { title, number, court, amount, customers, historicals, id } = route.params;
  const { addFilesToCase, files, removeFile } = useContext(UserContext);

  const { name, roleName } = customers[0];
  const [modalVisible, setModalVisible] = useState(false);
  const [historicalState, setHistoricalState] = useState(historicals);
  const [ordenarPor, setOrdenarPor] = useState("Ordenar por data");
  const [tipoOrdenacao, setTipoOrdernacao] = useState("Crescente");

  const navigationOptions = {
    title: 'Processo',
    headerRight: () => <IconButton onPress={documentPicker} icon="attach-file" />,
    headerLeft: () => <IconButton onPress={() => navigation.goBack()} icon="keyboard-backspace" />
  }
  useEffect(() => {
    navigation.setOptions(navigationOptions)
  }, []);

  const documentPicker = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });
      for (const res of results) {
        addFilesToCase(res, id);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {} 
      else throw err;
    }
  }

  const sortHistoric = () => {
    let historic = [...historicals];
    if (ordenarPor === "Ordenar por data" && tipoOrdenacao === "Crescente") ascendingSortDate(historic);
    else if (ordenarPor === "Ordenar por data" && tipoOrdenacao === "Decrescente") descendingSortDate(historic)
    else if (ordenarPor === "Ordenar por Descriçao" && tipoOrdenacao === "Crescente") ascendingDescription(historic)
    else if (ordenarPor === "Ordenar por Descriçao" && tipoOrdenacao === "Decrescente") descendingDescription(historic)

    setHistoricalState(historic);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
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
        {
          files && files.map(file => {
            if (file.caseId == id) {
              const fileName = file.file.name.split('.')[0].substring(0,20)
              const fileType = file.file.name.split('.')[1]
              return <AttachmentButton filename={`${fileName}.${fileType}`} handleOnPress={() => removeFile(file)} />
            }
          })
        }
      </View>
      <Divider />
      <View style={styles.container}>
        <View style={styles.historyHeader}>
          <Text style={styles.historyHeaderTitle}>HISTÓRICO</Text>
          <TouchableOpacity style={styles.historyHeaderBtn} onPress={() => setModalVisible(true)}>
            <Text>{ordenarPor}</Text>
            <Icon name={tipoOrdenacao === "Crescente" ? "arrow-drop-down" : "arrow-drop-up"} size={30} color="#000" />
            <Icon name="sort" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        {historicalState && historicalState.map(item => <ProcessListItem key={item.id} item={item} />)}

      </View>

      <CustomModal
        isVisible={modalVisible}
        toogleVisible={setModalVisible} 
        ordenarPor={ordenarPor}
        setOrdenarPor={setOrdenarPor}
        sortHistoric={sortHistoric}
        tipoOrdenacao={tipoOrdenacao}
        setTipoOrdernacao={setTipoOrdernacao}
      />
    </ScrollView>
  );
}

export default Process;