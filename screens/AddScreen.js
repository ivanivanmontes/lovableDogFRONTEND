import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";

const AddScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Add Screen</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
},
});


export default AddScreen;