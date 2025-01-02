import { s } from "./Temperature.style.js";
import { Text } from "react-native";
export function Temperature({ Temperature, currentUnit }) {
  return (
    <>
      <Text style={s.TemperatureText}>
        {Temperature}
        {currentUnit}
      </Text>
    </>
  );
}
