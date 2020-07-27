function Converter(valNum) {
        if (converter.taka.value <= 0)
            window.alert("No value added!");
        else {

            if (document.getElementById("inputCurrency").value == 'bdt') {
                
                document.getElementById("BDT").value = (valNum / 1.00).toFixed(2);
                document.getElementById("USD").value = (valNum / 84.73).toFixed(2);
                document.getElementById("CAD").value = (valNum / 62.42).toFixed(2);
                document.getElementById("EUR").value = (valNum / 95.11).toFixed(2);
                
            }
            
            else if (document.getElementById("inputCurrency").value == 'usd') {
                
                document.getElementById("BDT").value = (valNum * 84.73).toFixed(2);
                document.getElementById("USD").value = (valNum * 1.00).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.36).toFixed(2);
                document.getElementById("EUR").value = (valNum * 0.89).toFixed(2);
            }
            
            else if (document.getElementById("inputCurrency").value == 'cad') {
                
                document.getElementById("BDT").value = (valNum * 62.42).toFixed(2);
                document.getElementById("USD").value = (valNum * 0.74).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.00).toFixed(2);
                document.getElementById("EUR").value = (valNum * 0.66).toFixed(2);
            }
            
            else if (document.getElementById("inputCurrency").value == 'eur') {
                
                document.getElementById("BDT").value = (valNum * 95.11).toFixed(2);
                document.getElementById("USD").value = (valNum * 1.12).toFixed(2);
                document.getElementById("CAD").value = (valNum * 1.52).toFixed(2);
                document.getElementById("EUR").value = (valNum * 1).toFixed(2);
            }
            
            
            
            
        }
    }