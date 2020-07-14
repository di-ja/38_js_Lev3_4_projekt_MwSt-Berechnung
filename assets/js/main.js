function berechne() {
    // console.log("test")

    let estYear = document.getElementById("year").value
    // console.log(estYear)

    let zvE
    let ESt
    if (document.getElementById("alone").checked) {
        zvE = document.getElementById("zvE").value * 1
    } else if (document.getElementById("pair").checked) {
        zvE = (document.getElementById("person1").value * 1 + document.getElementById("person2").value * 1) / 2
    }
    console.log(zvE)

    if (estYear == "year20") {
        if (zvE <= 9408) {
            document.getElementById("output").innerHTML = ("Sie müssen nichts bezahlen")
            // console.log("test2")
        } else if (zvE <= 14532) {
            let y = (zvE - 9408) / 10000
            ESt = (972.87 * y + 1400) * y
        } else if (zvE <= 57051) {
            let z = (zvE - 14532) / 10000
            ESt = (212.02 * z + 2397) * z + 972.79
        } else if (zvE <= 270500) {
            ESt = (0.42 * zvE - 8963.74)
        } else if (zvE >= 270501) {
            ESt = (0.45 * zvE - 17078.74)
        }
        document.getElementById("output").innerHTML = ESt.toFixed(2)
    }
    if (estYear == "year19") {
        if (zvE <= 9168) {
            document.getElementById("output").innerHTML = ("Sie müssen nichts bezahlen")
        } else if (zvE <= 14254) {
            let y = (zvE - 9168) / 10000
            ESt = (980.14 * y + 1400) * y
        } else if (zvE <= 55960) {
            let z = (zvE - 14254) / 10000
            ESt = (216.16 * z + 2397) * z + 965.58
        } else if (zvE <= 265.326) {
            ESt = (0.42 * zvE - 8780.90)
        } else if (zvE >= 265327) {
            ESt = (0.45 * zvE - 16740.68)
        }
        document.getElementById("output").innerHTML = ESt.toFixed(2)
    
    }
    if (estYear == "year18") {
        if (zvE <= 9000) {
            document.getElementById("output").innerHTML = ("Sie müssen nichts bezahlen")
        } else if (zvE <= 13996) {
            let y = (zvE - 9000) / 10000
            ESt = (997.80 * y + 1400) * y
        } else if (zvE <= 54949) {
            let z = (zvE - 13996) / 10000
            ESt = (220.13 * z + 2397) * z + 948.49
        } else if (zvE <= 260532) {
            ESt = (0.42 * zvE - 8621.75)
        } else if (zvE >= 260533) {
            ESt = (0.45 * zvE - 16437.70)
        }
        document.getElementById("output").innerHTML = ESt.toFixed(2)
    }
}



function show() {
    document.getElementById("labelPerson1").style.display = "block"
    document.getElementById("person1").style.display = "block"
    document.getElementById("labelPerson2").style.display = "block"
    document.getElementById("person2").style.display = "block"
    document.getElementById("zvE").style.display = "none"
    document.getElementById("zvElable").style.display = "none"
}

function hide() {
    document.getElementById("labelPerson1").style.display = "none"
    document.getElementById("person1").style.display = "none"
    document.getElementById("labelPerson2").style.display = "none"
    document.getElementById("person2").style.display = "none"
    document.getElementById("zvE").style.display = "inline"
    document.getElementById("zvElable").style.display = "inline"
}
function resetForm() {
    // document.getElementById("output").innerHTML = ""
    location.reload();

}