const UNITS = {
  celcius: "°C",
  fahrenheit: "°F",
};

function convertTemperatureTo(temperature, unitTo) {
  if (unitTo === UNITS.celcius) {
    return ((temperature - 32) * 5) / 9;
  } else if (unitTo === UNITS.fahrenheit) {
    return (temperature * 9) / 5 + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

function isIced(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  } else if (unit === UNITS.fahrenheit) {
    return temperature <= 32;
  } else {
    throw new Error("Invalid unit");
  }
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIced };
