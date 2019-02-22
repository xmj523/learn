/*提取公共头部和底部，利用js加载到每个页面中去*/
var MYAPP = {};//全局变量--将各全局变量作为属性存放
MYAPP.dom = {};
MYAPP.fun = {};
//新建文本节点
MYAPP.dom.Text = function (text) {
    this.text = text;
    this.insert = function(where){
        var txt = document.createTextNode(this.text);
        where.appendChild(txt);
    };
};
/*新建节点
* @param type 元素名称
* @param text 文本内容
* @param properties 元素属性对象*/
MYAPP.dom.Element = function (type,text,properties) {
    this.text = text;
    this.insert = function (where) {
        var tmp = document.createElement(type);
        tmp.innerHTML = this.text;
        for(var i in properties){
            if(properties.hasOwnProperty(i)){
                //tmp[i] = properties[i];
                tmp.setAttribute(i,properties[i]);
            }
        }
        where.appendChild(tmp);
    }
};
//将字符串转化为DOM,添加到页面中
MYAPP.dom.EleByStr = function (str) {
    this.str = str;
    this.insert = function (where) {
        where.innerHTML += this.str;
    }
};
//加载头
MYAPP.fun.loadHead = function(current) {
    var headEle = '<div class="container  clearfix">' +
    '           <div class="menuLogo"><img class="logoImg" src="img/common/logoblack.jpg"/></div>\n' +
    '           <div class="menuNav">\n' +
    '                <ul class="clearfix">\n' +
    '                    <li class="navItem '+(current == 'Home'?'navItemOn':'')+'"><a href="">Home</a></li>\n' +
    '                    <li class="navItem '+(current == 'FightChapter'?'navItemOn':'')+'"><a href="">FightChapter</a></li>\n' +
    '                    <li class="navItem '+(current == 'LifeChapter'?'navItemOn':'')+'"><a href="">LifeChapter</a></li>\n' +
    '                    <li class="navItem '+(current == 'AboutMe'?'navItemOn':'')+'"><a href="">AboutMe</a></li>\n' +
        '                </ul>\n' +
        '            </div>' +
        '        </div>';
    document.getElementById('publicMenu').innerHTML += headEle;
};
//加载底部
MYAPP.fun.loadFoot = function() {
    var footEle = '<div class="container clearfix">\n' +
        '            <ul class="footerUl">\n' +
        '                <li><a>关于我</a></li>\n' +
        '                <li><span>意见或反馈</span></li>\n' +
        '            </ul>\n' +
        '            <ul class="footerUl">\n' +
        '                <li><span>QQ:1430099096</span></li>\n' +
        '                <li><span>邮箱:1430099096@qq.com</span></li>\n' +
        '            </ul>\n' +
        '            <ul class="footerUl">\n' +
        '                <li><span>Logo Created By Ms.</span></li>\n' +
        '                <li><span>Pages Designed By Ms.</span></li>\n' +
        '            </ul>\n' +
        '            <ul class="footerUlLogo">\n' +
        '                <li><img class="footerLogo" src="img/common/logowhite.png"/></li>\n' +
        '            </ul>\n' +
        '        </div>';
    document.getElementById('publicFooter').innerHTML += footEle;
};

window.onload = function () {

};
