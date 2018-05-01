(function(global){
    //获取cookie对象，格式化成对象形式
    function getCookiesObj(){
        var cookies = {};
        if(document.cookie){
            var objs = document.cookie.split(';');
            for(var i in objs){
                var index = objs[i].indexOf('=');
                var key = objs[i].substr(0,index);
                while (key.charAt(0)==' ') {
                    key = key.substring(1);
                }
                var value = objs[i].substr(index+1,objs[i].length);
                cookies[key] = value;
            }
        }
        return cookies;
    }
    //获取cookie
    function getCookie(key){
        return decodeURIComponent(getCookiesObj()[key]) || null;
    }
    //设置cookie
    function set(name,value,opts){
        //opts: maxAge,path,domain,secure
        if(name && value){
            var cookie =name + '=' + encodeURIComponent(value);
            if(opts){
                if(opts.maxAge){
                    cookie += ';max-age=' + opts.maxAge;
                }
                if(opts.path){
                    cookie += ';path=' + opts.path;
                }
                if(opts.domain){
                    cookie += ';domain=' + opts.domain;
                }
                if(opts.secure){
                    cookie += ';secure=' + opts.secure;
                }
            }
            document.cookie = cookie;
            return cookie;
        }else{
            return '';
        }
    }
    function remove(key){
        if(getCookiesObj()[key]){
            document.cookie = key + '=;max-age=0';
        }
    }
    function clear(){
        var cookies = getCookiesObj();
        for(var i in cookies){
            document.cookie = cookies[i] + '=;max-age=0';
        }
    }
    global['cookie'] = {
        'getCookiesObj': getCookiesObj,
        'set': set,
        'getCookie': getCookie,
        'remove': remove,
        'clear': clear
    };
})(window);