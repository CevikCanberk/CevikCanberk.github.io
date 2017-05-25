function mult() {
            var turkish = document.getElementById('try').value;
            var bitcoin = document.getElementById('btc').value;
            var result = parseInt(turkish) / parseInt(bitcoin);
            if (!isNaN(result)) {
                document.getElementById('rate').value = result;
            }
        }
