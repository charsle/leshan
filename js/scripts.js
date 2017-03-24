// navigation slide-in
$(window).load(function() {
    $(function() {
        var regexmobile = "^1[3|5|7|8|][0-9]{9}$";
        var getLoginView = function(type) {
            if (type == "DynamicLogin") {
                $(".nav-current").stop().animate({
                    left: 180,
                    width: 150
                }, 300);
                $("#jsAccountLoginDiv").hide();
                $("#jsMobileLoginDiv").show();
            } else {
                $(".nav-current").stop().animate({
                    left: 5,
                    width: 150
                }, 300);
                $("#jsMobileLoginDiv").hide();
                $("#jsAccountLoginDiv").show();

            }
        }
        var initTab = function(type) {
            if (type == "DynamicLogin") {
                $("#jsLoginTab a[data-type='DynamicLogin']").addClass("active");
                getLoginView("DynamicLogin");
            } else {
                $("#jsLoginTab a[data-type='AccountLogin']").addClass("active");
                getLoginView("AccountLogin");
            }
        }
        $("#jsLoginTab").find("a").click(function() {
            var $this = $(this);
            initTab($this.data("type"));
        });
        $("#jsLoginTab a").click(function() {
            $("#jsLoginTab a").removeClass("active");
            $(this).addClass("active");
            type = $(this).data("type");
            getLoginView(type);
        });


        $("#jsGetDynamic").click(function() {
            $("#DynamicPassword").val("");
            var mobile = $('#Mobile').val();
            if ($.trim(mobile) == "") {
                $("#jsErrorDynamic").html("请先输入手机号码");
                return false;
            }
            var regexValidateMobile = new RegExp(regexmobile);
            if (!regexValidateMobile.exec(mobile)) {
                $("#jsErrorDynamic").html("手机号码格式错误");
                return false;
            }
            return false;

        });
    });
});