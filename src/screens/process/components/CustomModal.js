import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import RadioGroup from './RadioGroup';
import Divider from './Divider';

const CustomModal = ({ 
  isVisible,
  toogleModal,
  ordenarPor,
  setOrdenarPor,
  sortHistoric,
  tipoOrdenacao,
  setTipoOrdernacao
}) => (
  <Modal
    swipeDirection={['up', 'left', 'right', 'down']}
    isVisible={isVisible}
    style={styles.modal}
    onBackButtonPress={() => toogleModal(false)}
    onBackdropPress={() => toogleModal(false)}
  >
    <View style={styles.modalContainer}>
      <RadioGroup text="Ordenar por data" selected={ordenarPor} onSelect={setOrdenarPor} sortHistoric={sortHistoric} />
      <RadioGroup text="Ordenar por Descriçao" selected={ordenarPor} onSelect={setOrdenarPor} sortHistoric={sortHistoric} />
      <Divider />
      <RadioGroup text="Crescente" selected={tipoOrdenacao} onSelect={setTipoOrdernacao} sortHistoric={sortHistoric} />
      <RadioGroup text="Decrescente" selected={tipoOrdenacao} onSelect={setTipoOrdernacao} sortHistoric={sortHistoric} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
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
});

export default CustomModal;