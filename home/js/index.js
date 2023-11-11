/**
 * Created by socia on 11/1/2023.
 */
$(document).ready(function () {

    function init_container() {
        var row = $('<div \>',{
            class: 'row-lineare'
        }).appendTo('body');
        var utils = $('<div \>',{
            class: 'div-utils-leneare'
        }).appendTo(row);

        var container=$('<div />',{
            class: "dashed-grid"
        }).appendTo(row);
        $('<span \>',{class: 'inizio',text:"inizio"}).appendTo(utils);
        $('<span \>',{class: 'center',text:"center"}).appendTo(utils);
        $('<span \>',{class: 'fine',text:"fine"}).appendTo(utils);
        container.on('dblclick',function () {
            if ($(this).children().length == 0){
                init_shift($(this));
            }
            else {
                alert("este deja un turno");
            }

        })
    }
    function init_shift(parinte) {
        var step=10;
        var lungime=step*8;
        var turno = $('<div \>',{
            class:'selector'
        });

        turno.width(lungime);
        turno.height(step);
        lungime = lungime/(4*step);
        turno.draggable({
                axis: "x",
                grid: [ step],
                containment: "parent",
                drag: function( event, ui ) {
                    var utils = $(this).parent().siblings()[0];
                    $(utils).find('.inizio').text(parseFloat(ui.position.left/(4*step)));
                    $(utils).find('.fine').text(parseFloat((ui.position.left)/(4*step) + lungime));
                },
                create: function( event, ui ) {
                    var utils = $(this).parent().siblings()[0];
                    $(utils).find('.center').text(lungime);
                }
            });
            turno.resizable({
                handles: "w,e",
                grid: [ step],
                maxWidth: 12*4*step,
                minWidth: step,
                containment: "parent",
                resize: function (event, ui) {
                    var utils = $(this).parent().siblings()[0];
                    $(utils).find('.inizio').text(parseFloat(ui.position.left/(4*step)));
                    lungime = parseFloat(ui.size.width/(4*step));
                    $(utils).find('.fine').text(parseFloat((ui.position.left)/(4*step) + lungime));
                    $(utils).find('.center').text(lungime);
                }

            });
        turno.appendTo(parinte);
    }
    $('#btn').on( "click", function() {
        init_container();
    } );
    for(var i=0;i<10;i++){
        init_container();
    }

});
