import { TouchableOpacity, Text } from "react-native";
import { s } from "./ButtonConvert.style.js";
export function ButtonConvert({ unit, onPress }) {
  return (
    <>
      <TouchableOpacity style={s.button} onPress={onPress}>
        <Text style={s.ButtonText}>Convert to {unit}</Text>
      </TouchableOpacity>
    </>
  );
}
