function exc() {
            var turkish = document.getElementById('try').value;
            var bitcoin = document.getElementById('btc').value;
            var result =  parseFloat(turkish) /  parseFloat(bitcoin);
            var resultS = parseFloat(result.toFixed(3))
            if (!isNaN(resultS)) {
                document.getElementById('rate').value = resultS;
            }
        }

function lexc() {
    var lturkish1 = document.getElementByID('ltry1').value;
    var lbit2 = document.getElementByID('lbtc2').value;
    var lrates = document.getElementByID('lrate').value;
    var lresultb = parseFloat(lturkish1) / parseFloat(lrates);
    var lresultbS= parseFloat(lresultb.toFixed(3));
    if (!isNaN(lresultbS)) {
      document.getElementByID('lbtc1').value = lresultbS;
    }
    var lresultt = parseFloat(lbit2) . parseFloat(lrates);
    var lresulttS= parseFloat(lresultt.toFixed(3));
    if (!isNaN(lresulttS)) {
      document.getElementByID('ltry2').value = lresulttS;
    }

  }
