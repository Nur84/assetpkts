function updatepass() {
    $.confirm({
        theme: 'dark',
        draggable: false,
        type: 'orange',
        escapeKey: true,
        animation: 'zoom',
        title: 'Server',
        content: 'Apakah Anda yakin akan mengubah kata sandi?',
        buttons: {
            sync: {
                text: 'Ya',
                action: function () {
                    $.ajax({
                        url: "./updatepas",
                        type: "POST",
                        data: $('#form-ubah-sandi').serialize(),
                        success: function (msg) {
                            var pesan = JSON.parse(msg)
                            $('.alert').addClass(pesan.alert)
                            $('#text-alert').html(pesan.pesan)
                            $('.alert').show()
                            $('#form-ubah-sandi')[0].reset()
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
$(document).ready(function () {
    $('.alert').hide()

})