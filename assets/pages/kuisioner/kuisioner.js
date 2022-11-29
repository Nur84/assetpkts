function hide1() {
    $('#f04').hide()
    $('#f05').hide()
    $('#f06').hide()
    $('#f07').hide()
    $('#f07a').hide()
    document.getElementById('f303').value = ''
    document.getElementById('f302').value = ''
    $('#f302').attr('disabled', 'disabled')
    $('#f303').attr('disabled', 'disabled')
    $('#f401').prop('checked', false)
    $('#f402').prop('checked', false)
    $('#f403').prop('checked', false)
    $('#f404').prop('checked', false)
    $('#f405').prop('checked', false)
    $('#f406').prop('checked', false)
    $('#f407').prop('checked', false)
    $('#f408').prop('checked', false)
    $('#f409').prop('checked', false)
    $('#f410').prop('checked', false)
    $('#f411').prop('checked', false)
    $('#f412').prop('checked', false)
    $('#f413').prop('checked', false)
    $('#f414').prop('checked', false)
    $('#f415').prop('checked', false)
    $('#f501-1').prop('checked', false)
    $('#f501-2').prop('checked', false)
    document.getElementById('f502').value = ''
    document.getElementById('f503').value = ''
    $('#f502').attr('disabled', 'disabled')
    $('#f503').attr('disabled', 'disabled')
    document.getElementById('f6').value = ''
    document.getElementById('f7').value = ''
    document.getElementById('f7a').value = ''
}

function show1a() {
    $('#f04').show()
    $('#f05').show()
    $('#f06').show()
    $('#f07').show()
    $('#f07a').show()
    $('#f302').removeAttr('disabled', 'disabled')
    $('#f303').attr('disabled', 'disabled')
    document.getElementById('f303').value = ''
}

function show1b() {
    $('#f04').show()
    $('#f05').show()
    $('#f06').show()
    $('#f07').show()
    $('#f07a').show()
    $('#f303').removeAttr('disabled', 'disabled')
    $('#f302').attr('disabled', 'disabled')
    document.getElementById('f302').value = ''
}

function open1() {
    $('#f502').removeAttr('disabled')
    $('#f503').attr('disabled', 'disabled')
    document.getElementById('f502').value = ''
    document.getElementById('f503').value = ''
}

function open2() {
    $('#f503').removeAttr('disabled')
    $('#f502').attr('disabled', 'disabled')
    document.getElementById('f502').value = ''
    document.getElementById('f503').value = ''
}

function hide2() {
    $('#f09').hide()
    $('#f10').hide()
    $('#f12').show()
    $('#f11').show()
    $('#f13').show()
    $('#f14').show()
    $('#f15').show()
    $('#f16').show()
    $('#f17').show()
    $('#f901').prop('checked', false)
    $('#f902').prop('checked', false)
    $('#f903').prop('checked', false)
    $('#f904').prop('checked', false)
    $('#f905').prop('checked', false)
    $('#f1001-1').prop('checked', false)
    $('#f1001-2').prop('checked', false)
    $('#f1001-3').prop('checked', false)
    $('#f1001-4').prop('checked', false)
    $('#f1001-5').prop('checked', false)
}

function show2() {
    $('#f09').show()
    $('#f10').show()
    $('#f12').show()
    $('#f11').hide()
    $('#f13').hide()
    $('#f14').hide()
    $('#f15').hide()
    $('#f16').hide()
    $('#f17').show()
    $('#f1101-1').prop('checked', false)
    $('#f1101-2').prop('checked', false)
    $('#f1101-3').prop('checked', false)
    $('#f1101-4').prop('checked', false)
    $('#f1101-5').prop('checked', false)
    document.getElementById('f1301').value = ''
    document.getElementById('f1302').value = ''
    document.getElementById('f1303').value = ''
    $('#f14-1').prop('checked', false)
    $('#f14-2').prop('checked', false)
    $('#f14-3').prop('checked', false)
    $('#f14-4').prop('checked', false)
    $('#f14-5').prop('checked', false)
    $('#f15-1').prop('checked', false)
    $('#f15-2').prop('checked', false)
    $('#f15-3').prop('checked', false)
    $('#f15-5').prop('checked', false)
    $('#f1601').prop('checked', false)
    $('#f1602').prop('checked', false)
    $('#f1603').prop('checked', false)
    $('#f1604').prop('checked', false)
    $('#f1605').prop('checked', false)
    $('#f1606').prop('checked', false)
    $('#f1607').prop('checked', false)
    $('#f1608').prop('checked', false)
    $('#f1609').prop('checked', false)
    $('#f1610').prop('checked', false)
    $('#f1611').prop('checked', false)
    $('#f1612').prop('checked', false)
    $('#f1613').prop('checked', false)
}

function hide3() {
    $('#f11').hide()
    $('#f13').hide()
    $('#f14').hide()
    $('#f15').hide()
    $('#f16').hide()
    $('#f12').show()
    $('#f17').show()
}

function show3() {
    $('#f11').show()
    $('#f12').show()
    $('#f13').show()
    $('#f14').show()
    $('#f15').show()
    $('#f16').show()
    $('#f17').show()
}

function defaultshow() {
    $('#f02').show()
    $('#f03').show()
    $('#f08').show()
    $('#f12').show()
    $('#f1202').hide()
    $('#f04').hide()
    $('#f416').hide()
    $('#f05').hide()
    $('#f06').hide()
    $('#f07').hide()
    $('#f07a').hide()
    $('#f09').hide()
    $('#f906').hide()
    $('#f10').hide()
    $('#f1002').hide()
    $('#f11').hide()
    $('#f1102').hide()
    $('#f13').hide()
    $('#f14').hide()
    $('#f15').hide()
    $('#f16').hide()
    $('#f1614').hide()
    $('#f17').hide()
    $('#f302').attr('disabled', 'disabled')
    $('#f303').attr('disabled', 'disabled')
    $('#f502').attr('disabled', 'disabled')
    $('#f503').attr('disabled', 'disabled')
}

function lainnya1() {
    if ($('#f415').prop('checked') == true) {
        $('#f416').show()
        document.getElementById('f416').value = ''
    } else {
        $('#f416').hide()
        document.getElementById('f416').value = ''
    }
}

function lainnya2() {
    if ($('#f1201-7').prop('checked') == true) {
        $('#f1202').show()
        document.getElementById('f1202').value = ''
    } else {
        $('#f1202').hide()
        document.getElementById('f1202').value = ''
    }
}

function lainnya3() {
    if ($('#f905').prop('checked') == true) {
        $('#f906').show()
        document.getElementById('f906').value = ''
    } else {
        $('#f906').hide()
        document.getElementById('f906').value = ''
    }
}

function lainnya4() {
    if ($('#f1001-5').prop('checked') == true) {
        $('#f1002').show()
        document.getElementById('f1002').value = ''
    } else {
        $('#f1002').hide()
        document.getElementById('f1002').value = ''
    }
}

function lainnya5() {
    if ($('#f1101-5').prop('checked') == true) {
        $('#f1102').show()
        document.getElementById('f1102').value = ''
    } else {
        $('#f1102').hide()
        document.getElementById('f1102').value = ''
    }
}

function lainnya6() {
    if ($('#f1613').prop('checked') == true) {
        $('#f1614').show()
        document.getElementById('f1614').value = ''
    } else {
        $('#f1614').hide()
        document.getElementById('f1614').value = ''
    }
}

function save() {
    var form_data = $('#fkuisioner').serialize();
    $.confirm({
        theme: 'dark',
        draggable: false,
        type: 'orange',
        escapeKey: true,
        animation: 'zoom',
        title: 'Server',
        content: 'Apakah Anda yakin akan menyimpan Jawaban dari kuisioner ini?<br>Pastikan jawaban Anda sudah sesuai.',
        buttons: {
            sync: {
                text: 'Unggah',
                action: function () {
                    $.ajax({
                        url: "./kuisioner/save",
                        type: "POST",
                        data: form_data,
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
                            $('#fkuisioner')[0].reset();
                            defaultshow();
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
//