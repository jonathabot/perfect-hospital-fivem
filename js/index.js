$(document).ready(function () {
    //const scriptName = window.GetParentResourceName();
    const scriptName = "PerfectHospital"

    $("#baterPontoEntrada").click(function() {
        console.log("Called On Duty")
        $.post(`https://${scriptName}/OnDuty`, JSON.stringify({ creator: "jon"}));
    })

    $("#baterPontoSaida").click(function() {
        console.log("Called Off Duty")
        $.post(`https://${scriptName}/OffDuty`, JSON.stringify({ creator: "jon"}));
    })

    $("#fecharSistema").click(function() {
        console.log("Called Close System")
        $.post(`https://${scriptName}/CloseSystem`, JSON.stringify({ creator: "Obrigado Muullllphzhzodj <3"}));
    })

});