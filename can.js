function mult() {
            var turkish = document.getElementById('try').value;
            var bitcoin = document.getElementById('btc').value;
            var result =  parseFloat(turkish) /  parseFloat(bitcoin);
            var resultS = parseFloat(result.toFixed(3))
            if (!isNaN(resultS)) {
                document.getElementById('rate').value = resultS;
            }
        }
