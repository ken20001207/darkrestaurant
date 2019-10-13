var mysql = require('mysql');

// 连接共享型MySQL
var connection = mysql.createConnection({
    host: 'w.rdc.sae.sina.com.cn',
    port: 3306,
    user: '5z0k2xll4n',
    password: 'w00wmhwlkmh2xk3xmk44ihl31i4jii0wz44j30iy',
    database: 'app_papic'
});

// 引入 express 套件
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 回传静态配置文件
app.use(express.static('static'));

// 显示网站画面
app.get("/", function (req, res) {
    res.render("mainpage", { islogin: false });
});

// 报名
app.post("/register", function (req, res) {
    console.log('[INFO] 收到来自 ' + req.body.name + ' 同学的报名表，写入数据库中...');
    connection.query("INSERT INTO `darkres` (`name`,`schoolnumber`,`gender`,`allergens`,`contact`) VALUES ('" + req.body.name + "','" + req.body.schoolnumber + "', '" + req.body.gender + "', '" + req.body.allergens + "','" + req.body.contact + "');", function (err) {
        if (err) {
            console.log('[ERROR] 写入数据库失败！');
            console.log('[ERROR] 错误内容：' + err.message);
            res.end();
        } else {
            console.log('[INFO] 写入数据库完成')
            res.write("1");
            res.end();
        }
    });
});

// 建立连线服务器
app.listen(5050, function () {
    console.log("[INFO] 浙大勤创黑暗餐厅活动报名系统服现已开放连线");
});