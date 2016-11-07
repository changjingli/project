$(function() {
	var Time = (function () {
		function getDate () {
			var d = new Date();
			var y = d.getFullYear(), m = d.getMonth() + 1, r = d.getDate();
			
			m = m > 9 ? m : '0' + m;
			r = r > 9 ? r : '0' + r;
			
			return y + "年" + m + "月" + r + "日";
		}
		
		function getTime () {
			var d = new Date();
			var h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
			
			m = m > 9 ? m : '0' + m;
			s = s > 9 ? s : '0' + s;
			
			return h + ":" + m + ":" + s;
		}
		
		function getDateTime () {
			return getDate() + " " + getTime();
		}
		
		return {
			getDate: getDate,
			getTime: getTime,
			getDateTime: getDateTime
		}
		
	})();
	
	function pageEvents () {
		// 表情隐显
		$("#js-emoji").mouseenter(function(event) {
			$("div.emoji").show();
		}).mouseleave(function(event) {
			$("div.emoji").hide();
		});
	
		$("div.emoji").mouseenter(function(event) {
			$("div.emoji").show();
		}).mouseleave(function(event) {
			$("div.emoji").hide();
		});
		
		// 发送表情
		$(".emoji img").on('click', function () {
			var s = this.src;
			var h = "<li><p class='title'><span class='author'>嘿嘿</span>"+Time.getTime()+"</p><p class='content'><img class='thumb' src="+s+" /></p></li>"
			$("#course-item-list").append(h);
		});
	}
	
	pageEvents();
});