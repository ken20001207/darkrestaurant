$(document).ready(function() {
    $('#form').submit(function(e) {

        e.preventDefault();

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

    });

});
