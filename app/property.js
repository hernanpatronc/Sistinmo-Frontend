"use strict";
(function (States) {
    States[States["ANPI"] = 0] = "ANPI";
    States[States["ANSI"] = 1] = "ANSI";
    States[States["ANRI"] = 2] = "ANRI";
    States[States["RETI"] = 3] = "RETI";
    States[States["VEYA"] = 4] = "VEYA";
    States[States["ASDI"] = 5] = "ASDI";
    States[States["XANU"] = 6] = "XANU";
    States[States["REMO"] = 7] = "REMO";
})(exports.States || (exports.States = {}));
var States = exports.States;
(function (Paises) {
    Paises[Paises["AR"] = 0] = "AR";
    Paises[Paises["BO"] = 1] = "BO";
    Paises[Paises["PE"] = 2] = "PE";
    Paises[Paises["UY"] = 3] = "UY";
    Paises[Paises["PY"] = 4] = "PY";
    Paises[Paises["BR"] = 5] = "BR";
    Paises[Paises["MX"] = 6] = "MX";
    Paises[Paises["CH"] = 7] = "CH";
})(exports.Paises || (exports.Paises = {}));
var Paises = exports.Paises;
(function (OFR) {
    OFR[OFR["OFR"] = 1] = "OFR";
    OFR[OFR["REQ"] = 2] = "REQ";
})(exports.OFR || (exports.OFR = {}));
var OFR = exports.OFR;
(function (Operaciones) {
    Operaciones[Operaciones["CV"] = 0] = "CV";
    Operaciones[Operaciones["AL"] = 1] = "AL";
})(exports.Operaciones || (exports.Operaciones = {}));
var Operaciones = exports.Operaciones;
var Property = (function () {
    function Property() {
    }
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=property.js.map