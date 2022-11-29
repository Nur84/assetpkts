var image_crop = $('#image_demo').croppie({
    enableExif: true,
    viewport: {
        width: 300,
        height: 300,
        type: 'square'
    },
    boundary: {
        width: 350,
        height: 350
    }
});

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))

        return false;
    return true;
}

function editbiodata() {
    window.location = "editbiodata"
}

function bataledit() {
    window.location = "biodata"
}


// function uploadimage() {

//     // $('#modalUpload').modal('hide');
// }

$('#btn-upload').on('click', function (ev) {
    image_crop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (response) {
        $.ajax({
            url: "./biodata/uploadphoto",
            type: "post",
            data: {
                "image": response
            },
            success: function (data) {
                $('#modalUpload').modal('hide');
                $('#img-avatar').html(data);
            }
        })
        
        console.log(response)
    })
})
$('#pasphoto').on('change', function () {
    var reader = new FileReader();
    reader.onload = function (event) {
        image_crop.croppie('bind', {
            url: event.target.result
        }).then(function () {
            console.log("jQuery binda complete");
        })
    }
    reader.readAsDataURL(this.files[0]);
    $('#modalUpload').modal('show');
})
//