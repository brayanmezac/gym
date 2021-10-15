function mostrar(dato) {
    if (dato == "1") {
        document.getElementById("bucaramanga").style.display = "block";
        document.getElementById("barrancabermeja").style.display = "none";
        document.getElementById("velez").style.display = "none";
        document.getElementById("piedecuesta").style.display = "none";
        document.getElementById("virtual").style.display = "none";
    }
    if (dato == "2") {
        document.getElementById("bucaramanga").style.display = "none";
        document.getElementById("barrancabermeja").style.display = "block";
        document.getElementById("velez").style.display = "none";
        document.getElementById("piedecuesta").style.display = "none";
        document.getElementById("virtual").style.display = "none";
    }
    if (dato == "3") {
        document.getElementById("bucaramanga").style.display = "none";
        document.getElementById("barrancabermeja").style.display = "none";
        document.getElementById("velez").style.display = "block";
        document.getElementById("piedecuesta").style.display = "none";
        document.getElementById("virtual").style.display = "none";
    }
    if (dato == "4") {
        document.getElementById("bucaramanga").style.display = "none";
        document.getElementById("barrancabermeja").style.display = "none";
        document.getElementById("velez").style.display = "none";
        document.getElementById("piedecuesta").style.display = "block";
        document.getElementById("virtual").style.display = "none";
    }
    if (dato == "5") {
        document.getElementById("bucaramanga").style.display = "none";
        document.getElementById("barrancabermeja").style.display = "none";
        document.getElementById("velez").style.display = "none";
        document.getElementById("piedecuesta").style.display = "none";
        document.getElementById("virtual").style.display = "block";
    }
}