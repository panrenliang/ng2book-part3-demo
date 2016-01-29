
## 简介

### 目录结构：

- client
clone自 [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

    + 创建/编辑问卷
        * 4种问题控件（多选，打星，判断，文本）
        * 问卷大纲
        * 问卷页面框（首页，结尾页）
        * 预览（把当前编辑的问卷数据发送给server，返回html，通过iframe显示
    + 我的问卷
        * List 列表形式查看问卷
        * Grid 列表形式查看问卷
        * Card 网格情况下单个问卷的卡片
        * ActionList 问卷 Card支持的一些操作 （废弃）
        * Panel （问卷详情侧栏，显示基本信息如创建时间等）
    + 官网首页
        * navbar 顶部导航
        * login modal（登录框）
        * showcase
    + 帮助页
        * 项目描述和截图等文本


- server
完成一下功能：

    + 轻量级的server(json-server, with cors support?)，问卷数据持久化，登录mock等
    + render questionnaire （预览功能，查看问卷）
    + 接受答案和统计（mock）


### 开发：

#### Server

- https://github.com/typicode/json-server
- swig 模板引擎来渲染问卷页面

#### Client

- https://github.com/AngularClass/angular2-webpack-starter


### 关于测试：

暂时移除 ph

```json
{
    "karma": "^0.13.15",
    "karma-chrome-launcher": "^0.2.1",
    "karma-coverage": "^0.5.3",
    "karma-jasmine": "^0.3.6",
    "karma-phantomjs-launcher": "^0.2.1",
    "karma-sourcemap-loader": "^0.3.6",
    "karma-webpack": "1.7.0",
    "ncp": "^2.0.0",
    "phantomjs": "^1.9.18",
    "phantomjs-polyfill": "0.0.1",
    "phantomjs-prebuilt": "^2.1.3",
    "protractor": "^3.0.0",
}
```

### Caution：

- keep eyes on [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) ，保持更新
- 