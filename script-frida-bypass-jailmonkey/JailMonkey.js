/**
    Bypass Root Detection Jail-Monkey
    https://github.com/GantMan/jail-monkey
**/


Java.perform(function({
    var JailMonkey = Java.use("com.gantix.JailMonkey.JailMonkeyModule");
    var HashMap = Java.use("java.util.HashMap");
    var falso = Java.use("java.lang.Boolean").$new('false');

    JailMonkey.getConstants.implementation = function () {
        var lista = HashMap.$new();
        lista.put("isJailBroken", falso);
        lista.put("listaookDetected", falso);
        lista.put("canMockLocation", falso);
        lista.put("isOnExternalStorage", falso);
        lista.put("AdbEnabled", falso);
        return lista;
    };
});