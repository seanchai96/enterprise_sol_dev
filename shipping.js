            let country = sessionStorage.getItem("country");
            let postal = sessionStorage.getItem("postal");

            var request = new XMLHttpRequest();
		
            request.open('POST', 'https://api.easyship.com/rate/v1/rates');

            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('Authorization', 'Bearer prod_4dHdKJmXwRVlJwfzSrXwbq8oKLLX3hsU3P4/seNF8n0=');

            request.onreadystatechange = function () {

            if (this.readyState === 4) {

                var data = JSON.parse(this.responseText);

                var rates = data.rates;
                for (i=0; i<rates.length; i++){
                    console.log(rates[i])
                    console.log(rates[i].shipment_charge)
                }


            }


        };

        var body = {
        'origin_country_alpha2': country,
        'origin_postal_code': '178902',
        'destination_country_alpha2': country,
        'destination_postal_code': postal,
        'taxes_duties_paid_by': 'Sender',
        'is_insured': false,
        'items': [
        {
        'actual_weight': 1.2,
        'height': 10,
        'width': 15,
        'length': 20,
        'category': 'mobiles',
        'declared_currency': 'SGD',
        'declared_customs_value': 100
        }
        ]
        };

    request.send(JSON.stringify(body));    
    
