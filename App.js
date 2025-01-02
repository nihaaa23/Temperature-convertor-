import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/input/Input";
import { Temperature } from "./components/Temperature/Temperature";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
  isIced,
} from "./utils/temperature.js";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [unit, setUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(unit);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    setCurrentBackground(
      isIced(inputValue, unit) ? coldBackground : hotBackground
    );
  }, [inputValue, unit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }
  return (
    <>
      <ImageBackground style={s.backgroundImage} source={currentBackground}>
        <SafeAreaProvider>
          <SafeAreaView style={s.root}>
            <View style={s.workspace}>
              <Temperature
                currentUnit={oppositeUnit}
                Temperature={getConvertedTemperature()}
              />
              <Input currentUnit={unit} onChange={setInputValue} />
              <ButtonConvert
                unit={unit}
                onPress={() => {
                  setUnit(oppositeUnit);
                }}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}