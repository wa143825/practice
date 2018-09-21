$.ajax({
    method:"POST",
    url : "https://free-api.heweather.com/s6/weather/now?location=xiangyang&key=98e95de7029447b29b4e216a56a2b4fa", 
    success : function(data) { 
        let now = data.HeWeather6[0].now
        let basic = data.HeWeather6[0].basic
        let windSc = SectionToChinese(now.wind_sc)
        let weather = `
            <div class="weat_left">
                <p>${basic.location}</p>
                <img src="./img/weatherIcon/${now.cond_code}.png" />
                <p>${now.cond_txt}</p>
            </div>
            <div class="weat_right">
                <p class="celsius">${now.tmp}℃</p>
                <p>${now.wind_dir}${windSc}级</p>
                <p class="air"></p> 
            </div>
        `
        $('.weather>.weat').prepend(weather)
        $.ajax({
            method:"POST",
            url : "https://free-api.heweather.com/s6/air/now?location=xiangyang&key=98e95de7029447b29b4e216a56a2b4fa", 
            success : function(data) { 
                let airqlty = data.HeWeather6[0].air_now_city.qlty
                
                if(airqlty.length<2){
                    airqlty = '空气' + airqlty
                }
                $('.weather>.weat>.weat_right>.air').text(airqlty)
            } 
        });
    } 
});

