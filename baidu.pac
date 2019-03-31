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
        || shExpMatch(url, "pan.baidu.com/pcloud/*")
        || shExpMatch(url, "pcs.baidu.com/*")
        || shExpMatch(url, "hm.baidu.com/*"))
            return "DIRECT";
        else
            return "PROXY  202.108.2.42:80";
    }
    else
        return "DIRECT";
}
