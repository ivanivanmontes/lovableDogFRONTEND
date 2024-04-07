import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet} from "react-native";

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFE5DC',
    alignItems: 'center',
    justifyContent: 'center',
},
});

export default SettingsScreen;