import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AddScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(route.params?.openModal || true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Open Modal</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Modal Content */}
            <Text>yay!</Text>

            {/* Close Modal Button */}
            <TouchableOpacity onPress={() => {setModalVisible(false); navigation.goBack();}}>
              <Text>Close modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: windowWidth - 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    minHeight: windowHeight - 50
  },
});
