tinymce.init({
    selector: "textarea",
    theme: "modern",
    plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor importcss colorpicker textpattern codesample"
    ],
    external_plugins: {
        //"moxiemanager": "/moxiemanager-php/plugin.js"
    },
    content_css: "css/development.css",
    add_unload_trigger: false,

    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons table codesample",

    image_advtab: true,
    image_caption: true,

    style_formats: [{
            title: 'Bold text',
            format: 'h1'
        },
        {
            title: 'Red text',
            inline: 'span',
            styles: {
                color: '#ff0000'
            }
        },
        {
            title: 'Red header',
            block: 'h1',
            styles: {
                color: '#ff0000'
            }
        },
        {
            title: 'Example 1',
            inline: 'span',
            classes: 'example1'
        },
        {
            title: 'Example 2',
            inline: 'span',
            classes: 'example2'
        },
        {
            title: 'Table styles'
        },
        {
            title: 'Table row 1',
            selector: 'tr',
            classes: 'tablerow1'
        }
    ],

    template_replace_values: {
        username: "Jack Black"
    },

    template_preview_replace_values: {
        username: "Preview user name"
    },

    link_class_list: [{
            title: 'Example 1',
            value: 'example1'
        },
        {
            title: 'Example 2',
            value: 'example2'
        }
    ],

    image_class_list: [{
            title: 'Example 1',
            value: 'example1'
        },
        {
            title: 'Example 2',
            value: 'example2'
        }
    ],

    templates: [{
            title: 'Some title 1',
            description: 'Some desc 1',
            content: '<strong class="red">My content: {$username}</strong>'
        },
        {
            title: 'Some title 2',
            description: 'Some desc 2',
            url: 'development.html'
        }
    ],

    setup: function (ed) {
        ed.on('change', function () {
            tinymce.triggerSave();
        });
    },

    spellchecker_callback: function (method, data, success) {
        if (method == "spellcheck") {
            var words = data.match(this.getWordCharPattern());
            var suggestions = {};

            for (var i = 0; i < words.length; i++) {
                suggestions[words[i]] = ["First", "second"];
            }

            success({
                words: suggestions,
                dictionary: true
            });
        }

        if (method == "addToDictionary") {
            success();
        }
    }
});
tinymce.editors[$(".editable").attr('id')].execCommand('mceRemoveControl', false, $(".editable"));
tinymce.editors["editor"].execCommand('mceRemoveControl', false, $("#editor"));

if (!window.console) {
    window.console = {
        log: function () {
            tinymce.$('<div></div>').text(tinymce.grep(arguments).join(' ')).appendTo(document.body);
        }
    };
}
//