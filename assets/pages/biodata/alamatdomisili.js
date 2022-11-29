function edit() {
    window.location = 'editalamatdomisili'
}

function bataledit() {
    window.location = 'alamatdomisili'
}

function samaid() {
    if ($('#samaid').prop('checked') == true) {
        $.ajax({
            url: "./biodata/getalamatid",
            type: "post",
            success: function (msg) {
                var pesan = JSON.parse(msg)
                $('#jalan').attr('readonly', 'readonly')
                $('#dusun').attr('readonly', 'readonly')
                $('#norumah').attr('readonly', 'readonly')
                $('#rt').attr('readonly', 'readonly')
                $('#rw').attr('readonly', 'readonly')
                $('#provinsi').attr('readonly', 'readonly')
                $('#kab_kot').attr('readonly', 'readonly')
                $('#kec').attr('readonly', 'readonly')
                $('#desa_kel').attr('readonly', 'readonly')
                $('#jalan').removeAttr('required')
                $('#dusun').removeAttr('required')
                $('#norumah').removeAttr('required')
                $('#rt').removeAttr('required')
                $('#rw').removeAttr('required')
                $('#provinsi').removeAttr('required')
                $('#kab_kot').removeAttr('required')
                $('#kec').removeAttr('required')
                $('#desa_kel').removeAttr('required')
                $('#jalan').val(pesan.jalan)
                $('#dusun').val(pesan.dusun)
                $('#norumah').val(pesan.norumah)
                $('#lat').val(pesan.lat)
                $('#lng').val(pesan.lng)
                $('#rt').val(pesan.rt)
                $('#rw').val(pesan.rw)
                $('#provinsi').html(pesan.prov)
                $('#kab_kot').html(pesan.kab)
                $('#kec').html(pesan.kec)
                $('#desa_kel').html(pesan.des)
            }
        })

    } else {
        $('#jalan').removeAttr('readonly')
        $('#dusun').removeAttr('readonly')
        $('#norumah').removeAttr('readonly')
        $('#rt').removeAttr('readonly')
        $('#rw').removeAttr('readonly')
        $('#provinsi').removeAttr('readonly')
        $('#kab_kot').removeAttr('readonly')
        $('#kec').removeAttr('readonly')
        $('#desa_kel').removeAttr('readonly')
        $('#jalan').attr('required', 'required')
        $('#dusun').attr('required', 'required')
        $('#norumah').attr('required', 'required')
        $('#rt').attr('required', 'required')
        $('#rw').attr('required', 'required')
        $('#provinsi').attr('required', 'required')
        $('#kab_kot').attr('required', 'required')
        $('#kec').attr('required', 'required')
        $('#desa_kel').attr('required', 'required')
        $('#fdomisili')[0].reset()
        listprov()
    }
}

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;
    return true;
}

function listprov() {
    $.ajax({
        url: "./refer/getProv",
        type: "post",
        success: function (msg) {
            $('#provinsi').html(msg)
        }
    })
}

$('#samaid').click(function () {
    samaid();
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
            $('#desa_kel').html(msg)
        }
    })
})
//