function updateTime() {
    let cityElements = document.querySelectorAll(".city");
    cityElements.forEach((cityElement) => {
        let cityDateElement = cityElement.querySelector(".date");
        let cityTimeElement = cityElement.querySelector(".time");
        let cityTime = moment().tz(cityElement.id);
        cityDateElement.innerHTML = moment().format("MMMM Do YYYY");
        cityTimeElement.innerHTML = `${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
        )}`;
    });
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    // if (cityTimeZone === "") {
    //     citiesElement.innerHTML = `<div class="city" id="America/Los_Angeles">
    //                 <div>
    //                     <h2>Los Angeles</h2>
    //                     <div class="date"></div>
    //                 </div>
    //                 <div class="time"><small></small></div>
    //             </div>
    //             <div class="city" id="Europe/Budapest">
    //                 <div>
    //                     <h2>Budapest</h2>
    //                     <div class="date"></div>
    //                 </div>
    //                 <div class="time"><small></small></div>
    //             </div>
    //             <div class="city" id="Europe/Madrid">
    //                 <div>
    //                     <h2>Madrid</h2>
    //                     <div class="date"></div>
    //                 </div>
    //                 <div class="time"><small></small></div>
    //             </div>`;
    //     return;
    // }
    citiesElement.innerHTML = `
                    <div class="city" id='${cityTimeZone}'>
                    <div>
                        <h2>${cityName}</h2>
                        <div class="date">${cityTime.format(
                            "MMMM Do YYYY"
                        )}</div>
                    </div>
                    <div class="time">${cityTime.format(
                        "h:mm:ss"
                    )} <small>${cityTime.format("A")}</small>
                    </div>
                    </div>
                    <a href="/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citysSelectElement = document.querySelector("#city");

citysSelectElement.addEventListener("change", updateCity);
