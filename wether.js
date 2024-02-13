function detalis() {
    let pt =document.getElementById("pt");
    let pw =document.getElementById("pw");
    let ps =document.getElementById("ps");
    let pc0 =document.getElementById("pc0");
    let pc1 =document.getElementById("pc1");
    let pc2 =document.getElementById("pc2");
    var cname = document.getElementById("get_value");
    const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

    let c =cname.value;
   let fdata = fetch(`https://goweather.herokuapp.com/weather/${c}`).then(data => { return data.json()}).then( daa => {
       var weatherDetails = document.getElementById("weatherDetails");
       weatherDetails.style.display = "flex";
          
           pt.innerHTML = 'Temperature: '+ daa.temperature;
           pw.innerHTML =  'Wind speed :' +daa.wind;
           ps.innerHTML = `Weather in ${c} :` + daa.description;
           pc0.innerHTML = ` <center> ${day+1}-${month}-${year} </center>  Temperature : ${daa.forecast[0].temperature} <br> wind spped : ${daa.forecast[0].wind}` ;
           pc1.innerHTML = ` <center> ${day+2}-${month}-${year} </center>  Temperature : ${daa.forecast[1].temperature} <br> wind spped : ${daa.forecast[1].wind}` ;
           pc2.innerHTML = `<center> ${day+3}-${month}-${year} </center>  Temperature : ${daa.forecast[2].temperature} <br> wind spped : ${daa.forecast[2].wind}` ;
        
       } )

}
