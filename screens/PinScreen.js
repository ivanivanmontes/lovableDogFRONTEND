import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";

const PinScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Pins Screen</Text>
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