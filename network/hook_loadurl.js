Java.perform(hook_loadurl);

function hook_loadurl () {
    //avalible hook
    var webviewer = Java.use("android.webkit.WebView");
    console.log("--hook start--")
    webviewer.loadUrl.overload("java.lang.String").implementation = function (url) {
        console.log("[*] url= >>  " + url);
        this.loadUrl(url);
    }
    webviewer.loadUrl.overload("java.lang.String").implementation = function (url) {
        console.log("[*] url= >>  " + url);
        this.loadUrl(url);
    }
}

