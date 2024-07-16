function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultDiv.textContent = "Please enter a valid number";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    if (unitInput === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
        const kelvin = temperature + 273.15;
        resultDiv.innerHTML = `${temperature}°C = ${convertedTemperature.toFixed(2)}°F <br> ${temperature}°C = ${kelvin.toFixed(2)}K`;
    } else if (unitInput === "fahrenheit") {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
        const kelvin = (temperature + 459.67) * 5/9;
        resultDiv.innerHTML = `${temperature}°F = ${convertedTemperature.toFixed(2)}°C <br> ${temperature}°F = ${kelvin.toFixed(2)}K`;
    } else if (unitInput === "kelvin") {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "Celsius";
        const fahrenheit = (temperature * 9/5) - 459.67;
        resultDiv.innerHTML = `${temperature}K = ${convertedTemperature.toFixed(2)}°C <br> ${temperature}K = ${fahrenheit.toFixed(2)}°F`;
    }
}
