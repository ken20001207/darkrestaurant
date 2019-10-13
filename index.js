import { createConnection } from 'mysql';

// 连接共享型MySQL
var connection = createConnection({
    host: 'w.rdc.sae.sina.com.cn',
    port: 3306,
    user: '5z0k2xll4n',
    password: 'w00wmhwlkmh2xk3xmk44ihl31i4jii0wz44j30iy',
    database: 'app_papic'
});

console.log('[INFO] 尝试连线至数据库中 ...');
connection.query('show status', function (err) {
    if (err) {
        console.log('[ERROR] 数据库连线失败，请检查配置');
        console.log('[ERROR] 错误内容：' + err.message);
    } else {
        console.log('[INFO] 数据库连线成功。');
    }
});

// 引入 express 套件
import express, { static } from "express";
var app = express();

import { json, urlencoded } from 'body-parser';
app.set('view engine', 'ejs');
app.use(json());
app.use(urlencoded({ extended: false }));

// 回传静态配置文件
app.use(static('static'));

// 显示网站画面
app.get("/", function (req, res) {
    res.render("mainpage", { islogin: false });
});

// 报名
app.post("/register", function (req, res) {
    conn.query("INSERT INTO `darkres` (`name`,`schoolnumber`,`gender`,`allergens`,`contact`) VALUES ('" + req.body.name + "','" + req.body.schoolnumber + "', '" + req.body.gender + "', '" + req.body.allergens + "','" + req.body.contact + "');");
    res.write("1");
    res.end();
});

// 建立连线服务器
var server = app.listen(5050, function () {
    console.log("[INFO] 浙大勤创黑暗餐厅活动报名系统服现已开放连线");
});