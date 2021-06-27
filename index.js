
const Country = document.getElementById("Country");
const NewConfirmed = document.getElementById("NewConfirmed");
const Newdeaths = document.getElementById("Newdeaths");
const NewRecovery = document.getElementById("NewRecovery");
const TotalConfirmed = document.getElementById("TotalConfirmed");
const totalDeaths = document.getElementById("totalDeaths");
const totalRecovery = document.getElementById("totalRecovery");
const SelectBox = document.getElementById("SelectBox");
// console.log(Selectvalue)

// function setup

const covid19 = async (optiondata) =>{
    const fetchdata = await fetch("https://api.covid19api.com/summary");

    const jsondata = await fetchdata.json();

    const countrydata = await jsondata.Countries.filter((x) =>{
        const filterdata = x.Country == optiondata;
        return filterdata;
    }) ;

    // console.log(countrydata[0].Country);
    // console.log("id : " + countrydata[0].ID);
    // console.log("newconfirmed :" +countrydata[0].NewConfirmed);
    // console.log("newDeaths : " + countrydata[0].NewDeaths);
    // console.log(" Newrecovered : " + countrydata[0].NewRecovered);
    // console.log(countrydata[0])
    // console.log(`totalconfirmed ${countrydata[0].TotalConfirmed}`)
    // console.log(`totaldeath ${countrydata[0].TotalDeaths}`)
    // console.log(`totalrecoverd ${countrydata[0].TotalRecovered}`)

    // input value transfer

    Country.value = countrydata[0].Country ;
    NewConfirmed.value = countrydata[0].NewConfirmed ;
    Newdeaths.value = countrydata[0].NewDeaths;
    NewRecovery.value = countrydata[0].NewRecovered ;
    TotalConfirmed.value = countrydata[0].TotalConfirmed ;
    totalDeaths.value = countrydata[0].TotalDeaths ;
    totalRecovery.value = countrydata[0].TotalRecovered ;

    
};


// function define

SelectBox.addEventListener("change", (selectbox) =>{
    var selectdata = selectbox.target.value ;
    // console.log(selectbox.target.value);
    covid19(selectdata)
});


