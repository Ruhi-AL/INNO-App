let reverse = false;

function convert() {
    let value = parseFloat(document.getElementById("inputValue").value);
    let unitType = document.getElementById("metricType").value;
    let result;
    let isHighAltitude = document.getElementById("altitude").checked;

    if (isNaN(value)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    // Conversion logic based on selected metric
    if (!reverse) {
        switch(unitType) {
            case "meters":
                result = value * 3.28084 + " feet";
                break;
            case "kilometers":
                result = value * 0.621371 + " miles";
                break;
            case "centimeters":
                result = value * 0.393701 + " inches";
                break;
            case "millimeters":
                result = value * 0.0393701 + " inches";
                break;
            case "grams":
                result = value * 0.035274 + " ounces";
                break;
            case "kilograms":
                result = value * 2.20462 + " pounds";
                break;
            case "liters":
                result = value * 0.264172 + " gallons";
                break;
            case "milliliters":
                result = value * 0.033814 + " fluid ounces";
                break;
            case "litersToCups":
                result = value * 4.22675 + " cups";  // Added Liters to Cups conversion
                break;
            case "celsius":
                result = (value * 9/5) + 32 + " °F";
                if (isHighAltitude) {
                    result += " (adjusted for altitude: " + ((value * 9/5) + 32 + 10) + " °F)";
                }
                break;
            case "fahrenheit":
                result = (value - 32) * 5/9 + " °C";
                if (isHighAltitude) {
                    result += " (adjusted for altitude: " + ((value - 32) * 5/9 + 5.5) + " °C)";
                }
                break;
            default:
                result = "Invalid input";
        }
    } else {
        // Reverse conversions go here
    }

    document.getElementById("result").innerText = result;
}

function reverseConversion() {
    reverse = !reverse;
    if (reverse) {
        document.getElementById("reverse-btn").innerText = "Switch to Metric to Imperial";
    } else {
        document.getElementById("reverse-btn").innerText = "Switch to Imperial to Metric";
    }
}
