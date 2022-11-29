var table = $('#table-alumni').DataTable({
    "processing": true, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.

    // Load data for the table's content from an Ajax source
    "ajax": {
        "url": "./informasi/ajax_list",
        "type": "POST",
        "data": function (data) {
            data.kategori = $('#kategori').val();
        }
    },

})
$('#kategori').change(function(){
    table.ajax.reload(null,false)
})