/**
 * @fileName: pie.js
 * @author: coolboy11058@126.com
 * @time: 2017/5/7
 * @disc:
 */

var Pie = (function () {
	/**
	 * 人数统计
	 * @param id document element
	 */
	function personCount(id) {
		var myChart = echarts.init(document.getElementById(id));
		var option = {
			title: {
				text: '在线人数统计',
				subtext: '',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},

			series: [
				{
					name: '在线人数统计',
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: [
						{value: 335, name: '中文系'},
						{value: 310, name: '德语系'},
						{value: 234, name: '汽修专业'},
						{value: 135, name: '美容美化'},
						{value: 305, name: '土木工程'},
						{value: 350, name: '美术系'},
						{value: 334, name: '计算机于科学'},
						{value: 235, name: '数学系'},
						{value: 148, name: '皮条客'}
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};
		myChart.setOption(option);
	}

	/**
	 * 师资力量统计
	 * * @param id document element
	 */

	function teacherCount(id) {
		var myChart = echarts.init(document.getElementById(id));
	}

	/**
	 * 欠费统计
	 * * @param id document element
	 */
	function moneyCount(id) {
		var myChart = echarts.init(document.getElementById(id));
	}

	/**
	 * 收费情况统计
	 * * @param id document element
	 */
	function getMoneyCount(id) {
		var myChart = echarts.init(document.getElementById(id));
		var option = {
			title: {
				text: '各类收费情况统计',
				subtext: '',
				x: 'center'
			},
			color: ['#3398DB'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {            // 坐标轴指示器，坐标轴触发有效
					type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: ['学费', '住宿费', '包夜费', '伙食费', '学杂费', '陪税费', '消费'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: '收费情况统计',
					type: 'bar',
					barWidth: '60%',
					data: [10, 52, 200, 334, 390, 330, 220]
				}
			]
		};
		myChart.setOption(option);
	}

	return {
		personCount: personCount,
		teacherCount: teacherCount,
		moneyCount: moneyCount,
		getMoneyCount: getMoneyCount
	}
})()