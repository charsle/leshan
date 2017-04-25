/*
 * @Author:  charsle
 * @Date: 2017/4/25 
 * @Last Modified by:  charsle
 * @Last Modified time:2017/4/25 
 */

!function () {
	var Weather = {
		url: 'https://free-api.heweather.com/v5/weather',
		city: 'chongqing',
		key: 'c6df7f3c8f5f44aab89776abd5902b6e',
		init: function () {
			this.getAjaxData();
		},
		getAjaxData: function () {
			var _this = this;
			$.ajax( {
				url: this.url,
				type: 'GET',
				data: {
					key: this.key,
					city: this.city
				}
			} ).then( function ( res ) {
				console.log( res );
				var data = res.HeWeather5[ 0 ];
				console.log( data );
				if ( data.status === 'ok' ) {
					var html = _this.render( data.basic, data.now, data.daily_forecast );
					$( '#weather' ).html( html )
				}
			} )


		},
		render: function ( base, now, daily ) {
			console.log( icon( now.cond.code ) );
			var rehtml = '';
			for ( var i = 0, len = daily.length; i < len; i++ ) {
				rehtml += '<div class="weather-forecast-items text-center">';
				rehtml += '	 <div class="weather-forecast-date ">' + daily[ i ].date + '</div>';
				rehtml += '	 <div class="weather-forecast-icon"><img src="' + icon( daily[ i ].cond.code_d ).icon + '">' + daily[ i ].cond.txt_d + '</div>';
				rehtml += '	 <div class="weather-forecast-du">最高温度:' + daily[ i ].tmp.max + '°C&nbsp;&nbsp;最底温度:' + daily[ i ].tmp.min + '°C</div>';
				rehtml += '	</div>';
			}

			return [
				'	<div class="weather-now">',
				'	<div class="weather-now-info">',
				'	<p>' + base.city + '&nbsp;&nbsp;</p>',
				'	<p>' + icon( now.cond.code ).text + '&nbsp;&nbsp;</p>',
				'	<p>' + now.tmp + '° C</p>',
				'	</div>',
				'	<div class="weather-now-icon">',
				'	<img src="' + icon( now.cond.code ).icon + '"alt="">',
				'		</div>',
				'		</div>',
				'		<div class="weather-forecast">' + rehtml + '</div>'
			].join( '' )
		}
	};
	Weather.init();
}();