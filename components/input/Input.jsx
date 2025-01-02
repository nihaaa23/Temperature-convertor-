import { View, TextInput, Text, Keyboard } from "react-native";
import { s } from "./Input.style";
export function Input({ onChange, currentUnit }) {
  return (
    <>
      <View style={s.root}>
        <TextInput
          style={s.input}
          maxLength={4}
          onSubmitEditing={Keyboard.dismiss}
          placeholder="Type your Temperature"
          onChangeText={(text) => {
            onChange(text);
          }}
        />
        <Text style={s.unit}>{currentUnit}</Text>
      </View>
    </>
  );
}
