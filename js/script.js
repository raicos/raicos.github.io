document.getElementById("top_date").innerHTML = getNow()

function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();

    return "1996.10.5 - " + year + "." + month + "." + day
}
