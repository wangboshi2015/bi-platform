define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.list,f=(b.item,b.$index,c.$escape),g="";return g+='<div class="con-tab">\n    <!--<span class="item">静止时间</span>-->\n    <span class="item">动态时间</span>\n</div>\n<div class="con-tab-content">\n    ',d(e,function(a){g+="\n    ","D"==a.type&&(g+='\n    <div class="item j-item" data-type="D">\n        <div class="title">日粒度设置</div>\n        <div class="content">\n            <input type="text" name="" value="',g+=f(a.defaultSelectedVal),g+='"/>\n            <select>\n                <option value="D">日</option>\n            </select>\n        </div>\n    </div>\n    '),g+="\n\n    ","W"==a.type&&(g+='\n    <div class="item j-item" data-type="W">\n        <div class="title">周粒度设置</div>\n        <div class="content">\n            <input type="text" name="" value="-1"/>\n            <select>\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+=">周</option>\n            </select>\n        </div>\n    </div>\n    "),g+="\n\n    ","M"==a.type&&(g+='\n    <div class="item j-item" data-type="M">\n        <div class="title">月粒度设置</div>\n        <div class="content">\n            <input type="text" name="" value="-1"/>\n            <select>\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+='>周</option>\n                <option value="M"',"M"==a.defaultSelectedUnit&&(g+=" selected"),g+=">月</option>\n            </select>\n        </div>\n    </div>\n    "),g+="\n\n    ","Q"==a.type&&(g+='\n    <div class="item j-item" data-type="Q">\n        <div class="title">季粒度设置</div>\n        <div class="content">\n            <input type="text" name="" value="-1"/>\n            <select>\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+='>周</option>\n                <option value="M"',"M"==a.defaultSelectedUnit&&(g+=" selected"),g+='>月</option>\n                <option value="Q"',"Q"==a.defaultSelectedUnit&&(g+=" selected"),g+=">季</option>\n            </select>\n        </div>\n    </div>\n    "),g+="\n\n    ","Y"==a.type&&(g+='\n    <div class="item j-item" data-type="Y">\n        <div class="title">季粒度设置</div>\n        <div class="content">\n            <input type="text" name="" value="-1"/>\n            <select>\n                <option value="D"',"D"==a.defaultSelectedUnit&&(g+=" selected"),g+='>日</option>\n                <option value="W"',"W"==a.defaultSelectedUnit&&(g+=" selected"),g+='>周</option>\n                <option value="M"',"M"==a.defaultSelectedUnit&&(g+=" selected"),g+='>月</option>\n                <option value="Q"',"Q"==a.defaultSelectedUnit&&(g+=" selected"),g+='>季</option>\n                <option value="Y"',"Y"==a.defaultSelectedUnit&&(g+=" selected"),g+=">年</option>\n            </select>\n        </div>\n    </div>\n    "),g+="\n    "}),g+="\n</div>"}return{render:b}});