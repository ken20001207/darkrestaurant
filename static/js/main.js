$(document).ready(function() {

    // 设置背景
    $.backstretch("../images/bg.png");

    // 一开始先隐藏水果过敏问题
    $('#fruitaller').fadeOut(1);

    // 一开始先隐藏迟到问题
    $('#willdelay').fadeOut(1);

    // 一开始先隐藏黑白二维码
    $('#ori_qrcode').fadeOut(1);

    $('#form').submit(function(e) {

        e.preventDefault();

        // 报名截止日期处理
        var date = new Date();
        if (date.getMonth() > 10 || date.getDate() > 22) {

            alert("对不起，报名已经截止了！");

        } else {

            // 食物过敏栏位处理
            var all = "无";
            for (var i = 01; i <= 12; i++) {
                if ($('#allergens' + i).prop("checked") == true) {
                    if (all == "无") all = "";
                    all = all + $('#allergens' + i).val();
                }
            }
            all = all + $('#allergens9').val();
            $('#allergens').val(all);

            // 提交报名表
            $.ajax({
                type: "POST",
                url: 'register',
                data: $(this).serialize(),
                success: function(data) {
                    if (data == 1) {

                        // 成功
                        alert("报名成功！请关注短信通知。");
                        location.reload();

                    } else {

                        // 错误
                        alert("报名失败，请联系勤创工作人员。");

                    }
                }
            });
        }

    });

});

function showfruitaller() {
    if ($('#allergens7').prop("checked") == true) {
        $('#fruitaller').fadeIn(200);
    } else {
        $('#fruitaller').fadeOut(200);
    }
}


function showwilldelay() {
    if ($('#ifdelay').prop("checked") == true) {
        $('#willdelay').fadeIn(200);
    } else {
        $('#willdelay').fadeOut(200);
    }
}

function show_ori_qrcode() {
    $('#ori_qrcode').fadeIn(200);
}