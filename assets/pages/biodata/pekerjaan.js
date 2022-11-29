function batal() {
    window.location = 'pekerjaan'
}

function edit() {
    window.location = 'editpekerjaan'
}

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;
    return true;
}
$('#desa').select2({
    ajax: {
        url: "./refer/wilayahselect2",
        type: "post",
        dataType: "json",
        delay: 250,
        data: function (params) {
            return {
                desa: params.term
            }
        },
        processResults: function (response) {
            return {
                results: response
            }
        },
        cache: true
    }
})



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
            $('#desa').html(msg)
        }
    })
})
//