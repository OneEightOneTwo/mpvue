# 微信小程序

进入这个网站，注册小程序的账号

https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN

注册

https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN

332004976@qq.com
abc123456.

选个人，写登陆信息，注册成功后就下载开发者工具

# 开发者工具

下载开发者工具

https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html?t=1477656485006

选择左边的小程序调试，初始化一个项目

# 登陆公众号平台

https://mp.weixin.qq.com/wxopen/initprofile?action=home&lang=zh_CN&token=1438257976

登陆公众号账号-》选择开发-》开发设置-》AppID(小程序 ID)

放入项目 appid 选项里面，其实开发阶段可以没有 appid

# mpvue

http://mpvue.com/mpvue/

进入 my-project 目录里面，用 yarn 或者 cnpm 安装所有依赖

使用 npm run dev 启动项目

启动成功后会生成一个 dist 的文件夹，里面有一个 wx 的文件夹，他就是经过 mpvue 编译而成的微信小程序项目

打开微信开发者工具，并且引入 wx 目录，开发的时候我们写代码是在 vscode 里面，而调试在微信开发者工具里面

<img src="1.png">
