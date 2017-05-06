/*
 * @Author:  charsle
 * @Date: 2017/4/25 
 * @Last Modified by:  charsle
 * @Last Modified time:2017/4/25 
 */
function icon( code ) {
	var icon_json = {};
	var num = Number( code );
	switch ( num ) {
	case 100:
		icon_json.text = '晴';
		icon_json.en = 'Sunny/Clear';
		icon_json.icon = 'cond_icon/100.png';
		break;
		;
	case 101:
		icon_json.text = '多云';
		icon_json.en = 'Cloudy';
		icon_json.icon = 'cond_icon/101.png';
		break;
	case 102:
		icon_json.text = '少云';
		icon_json.en = 'Few Clouds';
		icon_json.icon = 'cond_icon/102.png';
		break;
	case 103:
		icon_json.text = '晴间多云';
		icon_json.en = 'Partly Cloudy';
		icon_json.icon = 'cond_icon/103.png';
		break;
	case 104:
		icon_json.text = '阴';
		icon_json.en = 'Overcast';
		icon_json.icon = 'cond_icon/104.png';
		break;
	case 200:
		icon_json.text = '有风';
		icon_json.en = 'Windy';
		icon_json.icon = 'cond_icon/200.png';
		break;
	case 201:
		icon_json.text = '平静';
		icon_json.en = 'Calm';
		icon_json.icon = 'cond_icon/201.png';
		break;
	case 202:
		icon_json.text = '微风';
		icon_json.en = 'Light Breeze';
		icon_json.icon = 'cond_icon/202.png';
		break;
	case 203:
		icon_json.text = '和风';
		icon_json.en = 'Moderate/Gentle Breeze';
		icon_json.icon = 'cond_icon/203.png';
		break;
	case 204:
		icon_json.text = '清风';
		icon_json.en = 'Fresh Breeze';
		icon_json.icon = 'cond_icon/204.png';
		break;

	case 205:
		icon_json.text = '强风/劲风';
		icon_json.en = 'Strong Breeze';
		icon_json.icon = 'cond_icon/205.png';
		break;
	case 206:
		icon_json.text = '疾风';
		icon_json.en = 'High Wind, Near Gale';
		icon_json.icon = 'cond_icon/206.png';
		break;
	case 207:
		icon_json.text = '大风';
		icon_json.en = 'Gale';
		icon_json.icon = 'cond_icon/207.png';
		break;
	case 208:
		icon_json.text = '烈风';
		icon_json.en = 'Strong Gale';
		icon_json.icon = 'cond_icon/208.png';
		break;
	case 209:
		icon_json.text = '风暴';
		icon_json.en = 'Storm';
		icon_json.icon = 'cond_icon/209.png';
		break;
	case 210:
		icon_json.text = '狂爆风';
		icon_json.en = 'Violent Storm';
		icon_json.icon = 'cond_icon/210.png';
		break;
	case 211:
		icon_json.text = '飓风';
		icon_json.en = 'Hurricane';
		icon_json.icon = 'cond_icon/211.png';
		break;
	case 212:
		icon_json.text = '龙卷风';
		icon_json.en = 'Tornado';
		icon_json.icon = 'cond_icon/212.png';
		break;
	case 213:
		icon_json.text = '热带风暴';
		icon_json.en = 'Tropical Storm';
		icon_json.icon = 'cond_icon/213.png';
		break;


	case 300:
		icon_json.text = '阵雨';
		icon_json.en = 'Shower Rain';
		icon_json.icon = 'cond_icon/300.png';
		break;

	case 301:
		icon_json.text = '强阵雨';
		icon_json.en = 'Shower Rain';
		icon_json.icon = 'cond_icon/301.png';
		break;


	case 302:
		icon_json.text = '雷阵雨';
		icon_json.en = 'Heavy Shower Rain';
		icon_json.icon = 'cond_icon/302.png';
		break;

	case 303:
		icon_json.text = '强雷阵雨';
		icon_json.en = 'Heavy Thunderstorm';
		icon_json.icon = 'cond_icon/303.png';
		break;

	case 304:
		icon_json.text = '雷阵雨伴有冰雹';
		icon_json.en = 'Hail';
		icon_json.icon = 'cond_icon/304.png';
		break;

	case 305:
		icon_json.text = '小雨';
		icon_json.en = 'Light Rain';
		icon_json.icon = 'cond_icon/305.png';
		break;

	case 306:
		icon_json.text = '中雨';
		icon_json.en = 'Moderate Rain';
		icon_json.icon = 'cond_icon/306.png';
		break;

	case 307:
		icon_json.text = '大雨';
		icon_json.en = 'Heavy Rain';
		icon_json.icon = 'cond_icon/307.png';
		break;

	case 308:
		icon_json.text = '极端降雨';
		icon_json.en = 'Extreme Rain';
		icon_json.icon = 'cond_icon/308.png';
		break;
	case 309:
		icon_json.text = '毛毛雨/细雨';
		icon_json.en = 'Drizzle Rain';
		icon_json.icon = 'cond_icon/309.png';
		break;
	case 310:
		icon_json.text = '暴雨';
		icon_json.en = 'Storm Rain';
		icon_json.icon = 'cond_icon/310.png';
		break;
	case 311:
		icon_json.text = '大暴雨';
		icon_json.en = 'Heavy Storm';
		icon_json.icon = 'cond_icon/311.png';
		break;
	case 312:
		icon_json.text = '特大暴雨';
		icon_json.en = 'Severe Storm';
		icon_json.icon = 'cond_icon/312.png';
		break;
	case 313:
		icon_json.text = '冻雨';
		icon_json.en = 'Freezing Rain';
		icon_json.icon = 'cond_icon/313.png';
		break;

	case 400:
		icon_json.text = '小雪';
		icon_json.en = 'Light Snow';
		icon_json.icon = 'cond_icon/400.png';
		break;
	case 401:
		icon_json.text = '中雪';
		icon_json.en = 'Moderate Snow';
		icon_json.icon = 'cond_icon/401.png';
		break;
	case 402:
		icon_json.text = '大雪';
		icon_json.en = 'Heavy Snow';
		icon_json.icon = 'cond_icon/402.png';
		break;
	case 403:
		icon_json.text = '暴雪';
		icon_json.en = 'Snowstorm';
		icon_json.icon = 'cond_icon/403.png';
		break;
	case 404:
		icon_json.text = '雨夹雪';
		icon_json.en = 'Sleet';
		icon_json.icon = 'cond_icon/404.png';
		break;
	case 405:
		icon_json.text = '雨雪天气';
		icon_json.en = 'Rain And Snow';
		icon_json.icon = 'cond_icon/405.png';
		break;
	case 406:
		icon_json.text = '阵雨夹雪';
		icon_json.en = 'Shower Snow';
		icon_json.icon = 'cond_icon/406.png';
		break;
	case 407:
		icon_json.text = '阵雪';
		icon_json.en = 'Snow Flurry';
		icon_json.icon = 'cond_icon/407.png';
		break;


	case 500:
		icon_json.text = '薄雾';
		icon_json.en = 'Mist';
		icon_json.icon = 'cond_icon/500.png';
		break;
	case 501:
		icon_json.text = '雾';
		icon_json.en = 'Foggy';
		icon_json.icon = 'cond_icon/501.png';
		break;
	case 502:
		icon_json.text = '霾';
		icon_json.en = 'Haze';
		icon_json.icon = 'cond_icon/502.png';
		break;
	case 503:
		icon_json.text = '扬沙';
		icon_json.en = 'Sand';
		icon_json.icon = 'cond_icon/503.png';
		break;

	case 504:
		icon_json.text = '浮尘';
		icon_json.en = 'Dust';
		icon_json.icon = 'cond_icon/504.png';
		break;
	case 507:
		icon_json.text = '沙尘暴';
		icon_json.en = 'Duststorm';
		icon_json.icon = 'cond_icon/507.png';
		break;
	case 508:
		icon_json.text = '强沙尘暴';
		icon_json.en = 'Sandstorm';
		icon_json.icon = 'cond_icon/508.png';
		break;

	case 900:
		icon_json.text = '热';
		icon_json.en = 'Hot';
		icon_json.icon = 'cond_icon/900.png';
		break;
	case 901:
		icon_json.text = '冷';
		icon_json.en = 'Cold';
		icon_json.icon = 'cond_icon/901.png';
		break;

	case 999:
		icon_json.text = '未知';
		icon_json.en = 'Unknown';
		icon_json.icon = 'cond_icon/999.png';
		break;
	}
	return icon_json;
}