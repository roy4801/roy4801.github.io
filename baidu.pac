function FindProxyForURL(url, host)
{
    if(shExpMatch(host, "pan.baidu.com"))
    {
        if(shExpMatch(url, "pan.baidu.com/sns/*")
        || shExpMatch(url, "pan.baidu.com/box-static/*")
        || shExpMatch(url, "pan.baidu.com/disk/*")
        || shExpMatch(url, "pan.baidu.com/api/*")
        || shExpMatch(url, "pan.baidu.com/share/list*")
        || shExpMatch(url, "pan.baidu.com/share/verify*")
        || shExpMatch(url, "pan.baidu.com/pcloud/*"))
            return "DIRECT";
        else
            return "PROXY  45.125.32.181:3128";
    }
    else
        return "DIRECT";
}
