// Get Current Weather Data from Weather API

$(document).ready(function () {
    let cityName = localStorage.getItem('cityName');
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: `https://api.weatherapi.com/v1/current.json?key=4378378be636462db6990842201610&q=${cityName}`,
        success: function (res) {
            // calculate Current time

            var current_time = res.location.localtime;
            console.log(current_time)
            var time = current_time.slice(11, 16)


            // Current temperature

            let current_temp;
            current_temp = `
                <span><h6>${res.location.name} <span class="mx-5" style="float:right"><pre><h5>Wind Speed                                   ${res.current.wind_kph} kph</h5><hr></pre></span></h6></span>
                <span><img src="${res.current.condition.icon}" ><span class="mx-5" style="float:right"><pre><h5>Humidity                                          ${res.current.humidity}</h5><hr></pre></span></h6></span>
               <span><h1>${res.current.temp_c}&#8451 <span class="mx-5" style="float:right"><pre><h5>Precipitation                                   ${res.current.precip_mm} MM</h5><hr></pre></span></h6></h1></span>
               <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span><br>
               <span>${res.current.condition.text}</span>
                `


            console.log(res)

            // Navigation Bar Temperature,Location and Icon


            let temp_location;
            temp_location = `
            <span class="text-white p-5">
            <span>${res.location.name}</span>
            <span>${res.current.temp_c}&#8451</span>
            <span><img src="${res.current.condition.icon}" ></span>
            </span>`


            $(".temp").html(temp_location)
            $("#time").html(time)
            $(".current").html(current_temp);
        }

    })
    $("button").click(function () {
        cityName = $("#search").val();
        console.log(cityName);
        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: `https://api.weatherapi.com/v1/current.json?key=4378378be636462db6990842201610&q=${cityName}`,
            success: function (res) {
                // calculate Current time

                var current_time = res.location.localtime;
                console.log(current_time)
                var time = current_time.slice(11, 16)

                //    Current temperature
                let current_temp;
                current_temp = `
                    <span><h6>${res.location.name} <span class="mx-5" style="float:right"><pre><h5>Wind Speed                                   ${res.current.wind_kph} kph</h5><hr></pre></span></h6></span>
                    <span><img src="${res.current.condition.icon}" ><span class="mx-5" style="float:right"><pre><h5>Humidity                                          ${res.current.humidity}</h5><hr></pre></span></h6></span>
                   <span><h1>${res.current.temp_c}&#8451 <span class="mx-5" style="float:right"><pre><h5>Precipitation                                   ${res.current.precip_mm} MM</h5><hr></pre></span></h6></h1></span>
                   <span><h5>RealFeels ${res.current.feelslike_c}&#8451</h5></span><br>
                   <span>${res.current.condition.text}</span>
                    `


                // show Navigation bar data on HTML of current location,temp and icon

                let temp_location;
                temp_location = `
                <span class="text-white p-5">
                <span>${res.location.name}</span>
                <span>${res.current.temp_c}&#8451</span>
                <span><img src="${res.current.condition.icon}" ></span>
                </span>`


                $(".temp").html(temp_location)
                $("#time").html(time)
                $(".current").html(current_temp);
            }

        })
    })
})