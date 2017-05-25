function mult() {
            var turkish = document.getElementById('try').value;
            var bitcoin = document.getElementById('btc').value;
            var result = parseFloat(turkish) / parseFloat(bitcoin);
            if (!isNaN(result)) {
                document.getElementById('rate').value = result;
            }
        }
