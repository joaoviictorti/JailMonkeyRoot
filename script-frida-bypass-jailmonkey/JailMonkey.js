/**
    Bypass Root Detection Jail-Monkey
    https://github.com/GantMan/jail-monkey
**/


Java.perform(() => {
    var classeJailmonkey = Java.use("com.gantix.JailMonkey.JailMonkeyModule");
    var hash = Java.use("java.util.HashMap");
    var falso = Java.use("java.lang.Boolean").$new('false');

    classeJailmonkey.getConstants.implementation = function () {
        var lista = hash.$new();
        lista.put("isJailBroken", falso);
        lista.put("listaookDetected", falso);
        lista.put("canMockLocation", falso);
        lista.put("isOnExternalStorage", falso);
        lista.put("AdbEnabled", falso);
        return lista;
    };
});