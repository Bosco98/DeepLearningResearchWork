var predictor_Nextword = document.getElementById('predictor_Nextword');
var predictor_MaskedWord = document.getElementById('predictor_MaskedWord');
var predictor_Summary = document.getElementById('predictor_Summary');

var predictor_Nextword_btn = document.getElementById('predictor_Nextword_btn');
var predictor_MaskedWord_btn = document.getElementById('predictor_MaskedWord_btn');
var predictor_Summary_btn = document.getElementById('predictor_Summary_btn');

var ngrok_Url = document.getElementById('ngrok_Url');
var predictionOutput = document.getElementById('predictionOutput');
var errorAlerts = document.getElementById('errorAlerts');


predictor_Nextword_btn.addEventListener('click', async () => {

    var MainUrl = ngrok_Url.value;
    if (MainUrl && predictor_Nextword.value) {
        var url = MainUrl + '/api/autocomplete';
        predictionOutput.innerHTML = '';
        var resData = {
            input: predictor_Nextword.value + " [MASK] . "
        }
        var payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resData)
        };
        const rawResponse = await fetch(url, payload);
        const content = await rawResponse.json();
        html = '<ul>';

        for (i = 0; i < content.length; i++) {
            // html += '<li>' + content[i].sequence + ', Probabilty : ' + content[i].score + '</li>'
            html += '<li>' + JSON.stringify(content[i]["sequence"]) + '  <small><small> | probability : ' + JSON.stringify(content[i]["score"]) + ' </small></small></li>'
        }
        html += '</ul>'
        predictionOutput.innerHTML = html;
        console.log(content);

    } else {
        errorAlerts.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> Fill the configurations first <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    }

});
// the [MASK] of the life is 
predictor_MaskedWord_btn.addEventListener('click', async () => {
    var MainUrl = ngrok_Url.value;
    if (MainUrl && predictor_MaskedWord.value) {
        var url = MainUrl + '/api/autocomplete';
        predictionOutput.innerHTML = '';
        var resData = {
            input: predictor_MaskedWord.value 
        }
        var payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resData)
        };
        const rawResponse = await fetch(url, payload);
        const content = await rawResponse.json();
        html = '<ul>';

        for (i = 0; i < content.length; i++) {
            // html += '<li>' + content[i].sequence + ', Probabilty : ' + content[i].score + '</li>'
            html += '<li>' + JSON.stringify(content[i]["sequence"]) + '  <small><small><small> | probability : ' + JSON.stringify(content[i]["score"]) + ' </small></small></small></li>'
        }
        html += '</ul>'
        predictionOutput.innerHTML = html;
        console.log(content);

    } else {
        errorAlerts.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"> Fill the configurations first <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    }

});
predictor_Summary_btn.addEventListener('click', async () => { });


// window.addEventListener('load', async () => {
//     var MainUrl = 'http://8ed4-35-185-79-32.ngrok.io';
//     var url = MainUrl + '/api/autocomplete';

//     var resData = {
//         input: "where are [MASK] . "
//     }
//     var payload = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(resData)
//     };
//     const rawResponse = await fetch(url, payload);
//     const content = await rawResponse.json();
//     console.log(content);

//     // fetch('http://23c0-35-185-79-32.ngrok.io')
//     //     .then(response => console.log(response))
// });



