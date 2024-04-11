import { View, Text, StyleSheet, Button} from "react-native";
import axios from 'axios';
import { SERVERURL } from "../config";

const testConnection = () => {
  axios.get(`${SERVERURL}/`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



const PinScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Pin Screen</Text>
        <Button title="test connection" onPress={testConnection}></Button>
      </View>
    );
  };

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#CADEF6',
    alignItems: 'center',
    justifyContent: 'center',
},
});

export default PinScreen;