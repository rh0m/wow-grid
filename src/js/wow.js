#=include '../node_modules/jquery/dist/jquery.min.js'

$(document).ready(function() {
    console.log("ready!");

    // Settings for the Wow Grid.
    var wow = {
        editor: '.ou-justedit-region',                  // Edit region class, tag, or id.
        editFocus: '.mce-content-body',                 // Focused region class, tag, or id.

        section: '.section',                            // Section class name
        row: '.row',                                    // Row class name
        column: '.column',                              // Column class name
        module: '.module',                              // Module class name

        sidebar: '.sidebar',                            // Sidebar class name.
        leftSide: '.left-sidebar',                      // Left sidebar class name
        rightSide: '.right-sidebar',                    // Right sidebar class name

        saveExit: '[aria-label="Save and Exit"]',       // Element for saving and exiting
        noSave: '[aria-label="Exit Without Saving"]'    // Element for exiting without saving
    };

    // Changes the Wow Grid settings.
    function wowSet() {

    }

    // Waits for the editor to load.
    function wowWait() {
        if($(wow.editor + wow.editFocus).length) {
            setTimeout(function() {
                wowEdit();
            }, 0);
        } else {
            setTimeout(function() {
                wowWait();
            }, 150);
        }
    } wowWait();

    // Loads up the editor.
    function wowEdit() {
        console.log("Now ready to edit");

        //-------------------------------
        // initializes the HTML strings
        #=include 'wow-editor/wow-menus.js'

        //-------------------------------
        // initialize Sortable ----------
        #=include '../node_modules/html5sortable/dist/html.sortable.min.js'

        //-------------------------------
        // initialize basic Wow Grid editor
        #=include 'wow-editor/wow-content.js'

        //-------------------------------
        // initializes the elements for the editor
        #=include 'wow-editor/wow-init.js'

        //-------------------------------
        // initializes the funcionaliity for exiting the editor
        #=include 'wow-editor/wow-exit.js'
    }
});
