var table = $('#table-alumni').DataTable({
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": "./listalumni/ajax_list",
        "type": "POST",
        "data": function (data) {
            data.prodi = $('#prodi').val();
            data.thlulus = $('#thn_lulus').val();
            // data.sfsurat = $('#sfsurat').val();
            // data.stsurat = $('#stsurat').val();
        }
    },

})

function uploaddata() {
    var form = $('#formtoupload')[0]
    var form_data = new FormData(form)
    $.confirm({
        theme: 'dark',
        draggable: false,
        type: 'orange',
        escapeKey: true,
        animation: 'zoom',
        title: 'Server',
        content: 'Apakah Anda yakin akan mengunggah data alumni ini?',
        buttons: {
            sync: {
                text: 'Unggah',
                action: function () {
                    $('#btnuploadform').hide()
                    $('#statupload').show()
                    $('#import').attr('disabled', 'disabled')
                    $.ajax({
                        url: "./listalumni/uploaddaftar",
                        type: "POST",
                        enctype: "multipart/form-data",
                        data: form_data,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (msg) {
                            var pesan = JSON.parse(msg)
                            $.alert({
                                theme: 'dark',
                                type: 'blue',
                                title: 'Server',
                                escapeKey: true,
                                animation: 'zoom',
                                draggable: false,
                                content: 'Status: ' + pesan.status + '<br>' + 'Pesan: ' + pesan.pesan
                            })
                            // alert(pesan.pesan)
                            // alert(msg)
                            $('#btnuploadform').show()
                            $('#statupload').hide()
                            $('#import').removeAttr('disabled')
                            form.reset()
                            table.ajax.reload(null, false)
                        }
                    })
                }
            },
            batal: function () {
                $.alert({
                    theme: 'dark',
                    type: 'blue',
                    title: 'Server',
                    content: 'Aksi dibatalkan'
                })
            }
        }
    })
}

function resetFilter() {
    var form = $('#form-filter')[0];
    form.reset()
    table.ajax.reload(null, false)
    counteralumni()
}

function counteralumni() {
    var data = {
        prodi: $('#prodi').val(),
        thlulus: $('#thn_lulus').val()
    }
    $.ajax({
        type: "post",
        url: "./listalumni/inforecalumni",
        data: data,
        success: function (msg) {
            var pesan = JSON.parse(msg)
            $('#countAlumni').html(pesan.countalumni)
            $('#countAlumniTracer').html(pesan.counttracer)
        }
    })
}

function detail(id) {
    const data = {
        id: id
    };
    $.ajax({
        type: "post",
        url: "./detailalumni",
        data: data,
        success: function (msg) {
            $('#detail-data').html(msg);
            $('#myModal').modal('show')
        }
    })
}

function hapus(id) {
    const data = {
        id: id
    };
    $.confirm({
        theme: 'dark',
        draggable: false,
        type: 'orange',
        escapeKey: true,
        animation: 'zoom',
        title: 'Server',
        content: 'Apakah Anda yakin akan menghapus data alumni ini?',
        buttons: {
            sync: {
                text: 'Hapus',
                action: function () {
                    $.ajax({
                        url: "./hapusalumni",
                        type: "POST",
                        data: data,
                        success: function (msg) {
                            var pesan = JSON.parse(msg)
                            $.alert({
                                theme: 'dark',
                                type: 'blue',
                                title: 'Server',
                                escapeKey: true,
                                animation: 'zoom',
                                draggable: false,
                                content: 'Status: ' + pesan.status + '<br>' + 'Pesan: ' + pesan.pesan
                            })
                            table.ajax.reload(null, false);
                            counteralumni();
                        }
                    })
                }
            },
            batal: function () {
                $.alert({
                    theme: 'dark',
                    type: 'blue',
                    title: 'Server',
                    content: 'Aksi dibatalkan'
                })
            }
        }
    })
}

function unduh() {
    const data = {
        prodi: $('#prodi').val(),
        thlulus: $('#thn_lulus').val()
    }
    $.ajax({
        url: "./unduhtracer",
        data: data,
        type: "post",
        success: function (msg) {
            window.location = msg;
        }
    })
}

$('#statupload').hide()
$('#prodi').change(function () {
    table.ajax.reload(null, false)
    counteralumni()
})
$('#thn_lulus').change(function () {
    table.ajax.reload(null, false)
    counteralumni()
})
$(document).ready(function () {
    counteralumni()
})