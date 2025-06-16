WebFont.load({
    google: { families: ["Oswald:200,300,400,500,600,700"] },
});
!(function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    (n.className += t + "js"),
        ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
        (n.className += t + "touch");
})(window, document);
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-PLBQ4B2D");
history.scrollRestoration = "manual";