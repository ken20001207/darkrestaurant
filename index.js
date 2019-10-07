/*var mysql = require('mysql');

var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'zju'
});

conn.connect(function (err) {
    if (err) {
        console.log("\x1b[31m%s\x1b[0m", '[严重] 数据库连线失败，请检查配置');
        console.log("\x1b[31m%s\x1b[0m", '[严重] 错误内容：' + err.message);
        console.log("\x1b[31m%s\x1b[0m", '[严重] 服务器初始化失败，即将关闭 ...');
        server.close();
    } else
        console.log("\x1b[32m%s\x1b[0m", '[信息] 数据库连线成功。');

}); */

// 引入 express 套件
var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.set('view engine', 'ejs'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 回传静态配置文件
app.use(express.static('static'));

// 显示网站画面
app.get("/", function (req, res) {
    res.render("mainpage", { islogin: false });
});

// 建立连线服务器
var server = app.listen(80, function () {
    console.log("\x1b[32m%s\x1b[0m", "[信息] 浙大勤创黑暗餐厅活动报名系统服现已开放连线于 http://localhost/ ");
});