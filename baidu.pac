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
        || shExpMatch(url, "pcs.baidu.com/*"))
            return "DIRECT";
        else
            return "PROXY  39.104.189.169:8080";
    }
    else
        return "DIRECT";
}
