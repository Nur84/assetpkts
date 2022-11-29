function chartgrafik() {
    var data = {
        prodi: $('#prodi').val(),
        thlulus: $('#thlulus').val()
    }
    $.ajax({
        url: "./report/chartpage",
        type: "post",
        data: data,
        success: function (rest) {
            $('#hasil').html(rest);
        }
    })
    // alert(prodi)
}

function reset() {
    $('#form-filter')[0].reset();
    chartgrafik()
}

function unduh() {
    const data = {
        prodi: $('#prodi').val(),
        thlulus: $('#thn_lulus').val()
    }
    $.ajax({
        url: "./reportpkts",
        data: data,
        type: "post",
        success: function (msg) {
            window.location = msg;
        }
    })
}

$(document).ready(function () {
    chartgrafik()
    $('#prodi').change(function () {
        chartgrafik()
    })
    $('#thlulus').change(function () {
        chartgrafik()
    })
    $('#btn-reset').click(function () {
        reset()
    })
})