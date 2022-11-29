function hide1() {
    $('#f04').hide();
    $('#f504').hide();
    $('#f06').hide();
    $('#f07').hide();
    $('#f07a').hide();
    $('#f08').show();
    document.getElementById('f303').value = '';
    document.getElementById('f302').value = '';
    $('#f302').attr('disabled', 'disabled');
    $('#f303').attr('disabled', 'disabled');
    $('#f401').prop('checked', false);
    $('#f402').prop('checked', false);
    $('#f403').prop('checked', false);
    $('#f404').prop('checked', false);
    $('#f405').prop('checked', false);
    $('#f406').prop('checked', false);
    $('#f407').prop('checked', false);
    $('#f408').prop('checked', false);
    $('#f409').prop('checked', false);
    $('#f410').prop('checked', false);
    $('#f411').prop('checked', false);
    $('#f412').prop('checked', false);
    $('#f413').prop('checked', false);
    $('#f414').prop('checked', false);
    $('#f415').prop('checked', false);
    $('#f501-1').prop('checked', false);
    $('#f501-2').prop('checked', false);
    $('#f504-1').prop('checked', false);
    $('#f504-2').prop('checked', false);
    document.getElementById('f5-02').value = '';
    f502_hide();
    f506_hide();
    /*$('#f502').attr('disabled', 'disabled');
    $('#f503').attr('disabled', 'disabled');*/
    document.getElementById('f6').value = '';
    document.getElementById('f7').value = '';
    document.getElementById('f7a').value = '';
    $('#f302').prop('required', false);
    $('#f303').prop('required', false);
    $('#f6').prop('required', false);
    $('#f7').prop('required', false);
    $('#f7a').prop('required', false);
}

function show1a() {
    $('#f04').show();
    $('#f504').show();
    $('#f06').show();
    $('#f07').show();
    $('#f07a').show();
    $('#f08').show();
    $('#f302').removeAttr('disabled', 'disabled');
    $('#f302').attr('required', 'required');
    $('#f303').attr('disabled', 'disabled');
    document.getElementById('f303').value = '';
    $('#f6').attr('required', 'required');
    $('#f7').attr('required', 'required');
    $('#f7a').attr('required', 'required');
    document.getElementById('f6').value = '';
    document.getElementById('f7').value = '';
    document.getElementById('f7a').value = '';
}

function show1b() {
    $('#f04').show();
    $('#f504').show();
    $('#f06').show();
    $('#f07').show();
    $('#f07a').show();
    $('#f08').show();
    $('#f303').removeAttr('disabled', 'disabled');
    $('#f303').attr('required', 'required');
    $('#f302').attr('disabled', 'disabled');
    document.getElementById('f302').value = '';
    $('#f6').attr('required', 'required');
    $('#f7').attr('required', 'required');
    $('#f7a').attr('required', 'required');
    document.getElementById('f6').value = '';
    document.getElementById('f7').value = '';
    document.getElementById('f7a').value = '';
}

function open1() {
    $('#f502').removeAttr('disabled');
    $('#f503').attr('disabled', 'disabled');
    document.getElementById('f502').value = '';
    document.getElementById('f503').value = '';
}

function open2() {
    $('#f503').removeAttr('disabled');
    $('#f502').attr('disabled', 'disabled');
    document.getElementById('f502').value = '';
    document.getElementById('f503').value = '';
}

function hide2() {
    $('#f10').hide();
    $('#f12').show();
    $('#f11').show();
    $('#f13').show();
    $('#f14').show();
    $('#f15').show();
    $('#f16').show();
    $('#f17').show();
    $('#f901').prop('checked', false);
    $('#f902').prop('checked', false);
    $('#f903').prop('checked', false);
    $('#f904').prop('checked', false);
    $('#f905').prop('checked', false);
    $('#f1001-1').prop('checked', false);
    $('#f1001-2').prop('checked', false);
    $('#f1001-3').prop('checked', false);
    $('#f1001-4').prop('checked', false);
    $('#f1001-5').prop('checked', false);
}

function show2() {
    $('#f10').show();
    $('#f12').show();
    $('#f11').hide();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f17').show();
    $('#f1101-1').prop('checked', false);
    $('#f1101-2').prop('checked', false);
    $('#f1101-3').prop('checked', false);
    $('#f1101-4').prop('checked', false);
    $('#f1101-5').prop('checked', false);
    document.getElementById('f1301').value = '';
    document.getElementById('f1302').value = '';
    document.getElementById('f1303').value = '';
    $('#f14-1').prop('checked', false);
    $('#f14-2').prop('checked', false);
    $('#f14-3').prop('checked', false);
    $('#f14-4').prop('checked', false);
    $('#f14-5').prop('checked', false);
    $('#f15-1').prop('checked', false);
    $('#f15-2').prop('checked', false);
    $('#f15-3').prop('checked', false);
    $('#f15-5').prop('checked', false);
    $('#f1601').prop('checked', false);
    $('#f1602').prop('checked', false);
    $('#f1603').prop('checked', false);
    $('#f1604').prop('checked', false);
    $('#f1605').prop('checked', false);
    $('#f1606').prop('checked', false);
    $('#f1607').prop('checked', false);
    $('#f1608').prop('checked', false);
    $('#f1609').prop('checked', false);
    $('#f1610').prop('checked', false);
    $('#f1611').prop('checked', false);
    $('#f1612').prop('checked', false);
    $('#f1613').prop('checked', false);
}

function hide3() {
    $('#f11').hide();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f12').show();
    $('#f17').show();
}

function show3() {
    $('#f11').show();
    $('#f12').show();
    $('#f13').show();
    $('#f14').show();
    $('#f15').show();
    $('#f16').show();
    $('#f17').show();
}

function defaultshow() {
    $('#f02').show();
    $('#f03').show();
    $('#f08').hide();
    $('#f12').show();
    $('#f1202').hide();
    $('#f04').hide();
    $('#f416').hide();
    $('#f504').hide();
    $('#f06').hide();
    $('#f07').hide();
    $('#f07a').hide();
    $('#f906').hide();
    $('#f10').hide();
    $('#f1002').hide();
    $('#f11').hide();
    $('#f1102').hide();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f1614').hide();
    $('#fsubmit').hide();
    $('#f17').hide();
    $('#f302').attr('disabled', 'disabled');
    $('#f303').attr('disabled', 'disabled');
    $('#f502').attr('disabled', 'disabled');
    $('#f503').attr('disabled', 'disabled');
    all_status_hide();
    f502_hide();
    f506_hide();
}

function lainnya1() {
    if ($('#f415').prop('checked') == true) {
        $('#f416').show();
        document.getElementById('f416').value = '';
        $('#f416').attr('required','required')
    } else {
        $('#f416').hide();
        document.getElementById('f416').value = '';
        $('#f416').removeAttr('required')
    }
}

function lainnya2() {
    if ($('#f1201-7').prop('checked') == true) {
        $('#f1202').show();
        document.getElementById('f1202').value = '';
        $('#f1202').attr('required','required')
    } else {
        $('#f1202').hide();
        document.getElementById('f1202').value = '';
        $('#f1202').removeAttr('required')
    }
}

function lainnya4() {
    if ($('#f1001-5').prop('checked') == true) {
        $('#f1002').show();
        $('#f1002').attr('required','required');
        document.getElementById('f1002').value = '';
    } else {
        $('#f1002').hide();
        document.getElementById('f1002').value = '';
        $('#f1002').removeAttr('required');
    }
}

function lainnya5() {
    if ($('#f1101-5').prop('checked') == true) {
        $('#f1102').show();
        document.getElementById('f1102').value = '';
        $('#f1102').attr('required','required');
    } else {
        $('#f1102').hide();
        document.getElementById('f1102').value = '';
        $('#f1102').removeAttr('required');
    }
}

function lainnya6() {
    if ($('#f1613').prop('checked') == true) {
        $('#f1614').show();
        $('#f1614').attr('required','required');
        document.getElementById('f1614').value = '';
    } else {
        $('#f1614').hide();
        document.getElementById('f1614').value = '';
        $('#f1614').removeAttr('required');
    }
}

function statussaatini(){
    if($('#f8-1').prop('checked') == true){
        bekerja_show();
        $('#fsubmit').show();
    }
    if($('#f8-3').prop('checked') == true){
        wiraswasta_show();
        $('#fsubmit').show();
    }
    if($('#f8-4').prop('checked') == true){
        studilanjut_show();
        $('#fsubmit').show();
    }
    if($('#f8-5').prop('checked') == true){
        tidak_kerja_cari_kerja();
        $('#fsubmit').show();
    }
    if($('#f8-2').prop('checked') == true){
        belum_kerja();
        $('#fsubmit').show();
    }
}

function bekerja_show(){
    $('#f5-10').show();
    $('#f11').show();
    $('#f5-b').show();
    $('#f5-c').hide();
    $('#f5-d').show();
    $('#f18').hide();
    $('#f13').show();
    $('#f14').show();
    $('#f15').show();
    $('#f16').show();
    $('#f17').show();
    $('#f10').hide();
    $('#f1001-1').prop('checked', false);
    $('#f1001-2').prop('checked', false);
    $('#f1001-3').prop('checked', false);
    $('#f1001-4').prop('checked', false);
    $('#f1001-5').prop('checked', false);
    document.getElementById('f1002').value = '';
    document.getElementById('f5b').value = '';
    $('#f5b').attr('required', 'required');
    $('#f1101-1').attr('required', 'required');
    provSelect2();
    $('#f18a').removeAttr('required');
    $('#f18b').removeAttr('required');
    $('#f18c').removeAttr('required');
    $('#f18d').removeAttr('required');
    document.getElementById('f18d').value = '';
}

function f502_show(){
    $('#f502').show();
    $('#f5-02').attr('required', 'required');
    $('#f5-05').attr('required', 'required');
    document.getElementById('f5-05').value = '';
    document.getElementById('f5-02').value = '';
}
function f506_show(){
    $('#f506').show();
    $('#f5-06').attr('required', 'required');
    document.getElementById('f5-06').value = '';
}
function f502_hide(){
    $('#f502').hide();
    document.getElementById('f5-05').value = '';
    document.getElementById('f5-02').value = '';
}
function f506_hide(){
    $('#f506').hide();
    document.getElementById('f5-06').value = '';
}

function kerja_enam(){
    if($('#f504-1').prop('checked') == true){
        f502_show();
        f506_hide();
    }
    if($('#f504-2').prop('checked') == true){
        f502_hide();
        f506_show();
    }
}

function wiraswasta_show(){
    $('#f5-10').show();
    $('#f11').show();
    $('#f5-b').show();
    $('#f5-c').show();
    $('#f5-d').show();
    $('#f18').hide();
    $('#f13').show();
    $('#f14').show();
    $('#f15').show();
    $('#f16').show();
    $('#f17').show();
    $('#f10').hide();
    document.getElementById('f5b').value = '';
    $('#f5b').attr('required', 'required');
    $('#f1101-1').attr('required', 'required');
    provSelect2();
    $('#f18a').removeAttr('required');
    $('#f18b').removeAttr('required');
    $('#f18c').removeAttr('required');
    $('#f18d').removeAttr('required');
    document.getElementById('f18d').value = '';
}
function studilanjut_show(){
    $('#f5-10').hide();
    $('#f11').hide();
    $('#f5-b').hide();
    $('#f5-c').hide();
    $('#f5-d').hide();
    $('#f18').show();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f17').show();
    $('#f10').hide();
    $('#f504-1').prop('required',false);
    $('#f504-2').prop('required',false);
    $('#f18a').attr('required','required');
    $('#f18b').attr('required','required');
    $('#f18c').attr('required','required');
    $('#f18d').attr('required','required');
    $('#f1101-1').prop('checked', false);
    $('#f1101-2').prop('checked', false);
    $('#f1101-3').prop('checked', false);
    $('#f1101-4').prop('checked', false);
    $('#f1101-5').prop('checked', false);
    $('#f1101-6').prop('checked', false);
    $('#f1101-7').prop('checked', false);
    ptSelect2();
}
function tidak_kerja_cari_kerja(){
    $('#f5-10').hide();
    $('#f11').hide();
    $('#f5-b').hide();
    $('#f5-c').hide();
    $('#f5-d').hide();
    $('#f18').hide();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f17').show();
    $('#f10').show();
    $('#f504-1').prop('required',false);
    $('#f504-2').prop('required',false);
    $('#f1101-1').prop('checked', false);
    $('#f1101-2').prop('checked', false);
    $('#f1101-3').prop('checked', false);
    $('#f1101-4').prop('checked', false);
    $('#f1101-5').prop('checked', false);
    $('#f1101-6').prop('checked', false);
    $('#f1101-7').prop('checked', false);
    $('#f18a').removeAttr('required');
    $('#f18b').removeAttr('required');
    $('#f18c').removeAttr('required');
    $('#f18d').removeAttr('required');
    document.getElementById('f18d').value = '';
}
function belum_kerja(){
    $('#f5-10').hide();
    $('#f11').hide();
    $('#f5-b').hide();
    $('#f5-c').hide();
    $('#f5-d').hide();
    $('#f18').hide();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f10').hide();
    $('#f17').show();
    $('#f504-1').prop('required',false);
    $('#f504-2').prop('required',false);
    $('#f1101-1').prop('checked', false);
    $('#f1101-2').prop('checked', false);
    $('#f1101-3').prop('checked', false);
    $('#f1101-4').prop('checked', false);
    $('#f1101-5').prop('checked', false);
    $('#f1101-6').prop('checked', false);
    $('#f1101-7').prop('checked', false);
    $('#f18a').removeAttr('required');
    $('#f18b').removeAttr('required');
    $('#f18c').removeAttr('required');
    $('#f18d').removeAttr('required');
    document.getElementById('f18d').value = '';
}
function all_status_hide(){
    $('#f5-10').hide();
    $('#f11').hide();
    $('#f5-b').hide();
    $('#f5-c').hide();
    $('#f5-d').hide();
    $('#f18').hide();
    $('#f13').hide();
    $('#f14').hide();
    $('#f15').hide();
    $('#f16').hide();
    $('#f17').hide();
    $('#f10').hide();
    
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
                        url: "./saveans",
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
    });
}
function provSelect2(){
    $('#f5a1').select2({
        minimumInputLength: 3,
        allowClear: true,
        placeholder: 'masukkan nama propinsi',
        ajax: {
            dataType: 'json',
            url: '/listprovinsi2',
            delay: 800,
            processResults: function (data) {
                return {
                    results: data
                };
            },
        }
    })
}
function ptSelect2(){
    $('#f18b').select2({
        minimumInputLength: 3,
        allowClear: true,
        placeholder: 'cari nama perguruan tinggi',
        ajax: {
            dataType: 'json',
            url: '/listpt',
            delay: 800,
            processResults: function (data) {
                return {
                    results: data
                };
            },
        }
    })
}
defaultshow()


$('#f5a1').change(function(){
    var prop = $('#f5a1').val()
    $('#f5a2').select2({
        minimumInputLength: 3,
        allowClear: true,
        placeholder: 'masukkan nama kabupaten',
        ajax: {
            dataType: 'json',
            url: '/listkab2/'+prop,
            delay: 800,
            processResults: function (data, page) {
                return {
                    results: data
                };
            },
        }
    })
})
$('#f18b').change(function(){
    var prop = $('#f18b').val()
    $('#f18c').select2({
        minimumInputLength: 3,
        allowClear: true,
        placeholder: 'cari nama program studi',
        ajax: {
            dataType: 'json',
            url: '/listps/'+prop,
            delay: 800,
            processResults: function (data, page) {
                return {
                    results: data
                };
            },
        }
    })
});
//