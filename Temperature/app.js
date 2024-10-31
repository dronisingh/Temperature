document.addEventListener('DOMContentLoaded', () => {
    // Ensure DOM is fully loaded before running the script

    let celsiusInput = document.querySelector('#celsius > input');
    let fahrenheitInput = document.querySelector('#fahrenheit > input');
    let kelvinInput = document.querySelector('#kelvin > input');

    let btn = document.querySelector('.button button');

    // Helper function to round numbers to 2 decimal places
    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    // Function to handle Celsius input and convert to Fahrenheit and Kelvin
    celsiusInput.addEventListener('input', function() {
        let cTemp = parseFloat(celsiusInput.value);
        if (!isNaN(cTemp)) {
            let fTemp = (cTemp * (9 / 5)) + 32;
            let kTemp = cTemp + 273.15;

            fahrenheitInput.value = roundNumber(fTemp);
            kelvinInput.value = roundNumber(kTemp);
        } else {
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }
    });

    // Function to handle Fahrenheit input and convert to Celsius and Kelvin
    fahrenheitInput.addEventListener('input', function() {
        let fTemp = parseFloat(fahrenheitInput.value);
        if (!isNaN(fTemp)) {
            let cTemp = (fTemp - 32) * (5 / 9);
            let kTemp = (fTemp - 32) * (5 / 9) + 273.15;

            celsiusInput.value = roundNumber(cTemp);
            kelvinInput.value = roundNumber(kTemp);
        } else {
            celsiusInput.value = '';
            kelvinInput.value = '';
        }
    });

    // Function to handle Kelvin input and convert to Celsius and Fahrenheit
    kelvinInput.addEventListener('input', function() {
        let kTemp = parseFloat(kelvinInput.value);
        if (!isNaN(kTemp)) {
            let cTemp = kTemp - 273.15;
            let fTemp = (kTemp - 273.15) * (9 / 5) + 32;

            celsiusInput.value = roundNumber(cTemp);
            fahrenheitInput.value = roundNumber(fTemp);
        } else {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
        }
    });

    // Function to clear all input fields
    btn.addEventListener('click', () => {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
    });
});

