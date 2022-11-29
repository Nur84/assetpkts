function edit() {
    window.location = 'editalamatid'
}

function bataledit() {
    window.location = 'alamatid'
}

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;
    return true;
}

$('#provinsi').change(function () {
    var data = {
        provinsi: $('#provinsi').val()
    }
    $.ajax({
        url: "./refer/getKab",
        type: "post",
        data: data,
        success: function (msg) {
            $('#kab_kot').html(msg)
        }
    })
})
$('#kab_kot').change(function () {
    var data = {
        kab: $('#kab_kot').val()
    }
    $.ajax({
        url: "./refer/getKec",
        type: "post",
        data: data,
        success: function (msg) {
            $('#kec').html(msg)
        }
    })
})
$('#kec').change(function () {
    var data = {
        kec: $('#kec').val()
    }
    $.ajax({
        url: "./refer/getDes",
        type: "post",
        data: data,
        success: function (msg) {
            $('#desa_kel').html(msg)
        }
    })
})
//