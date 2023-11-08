/**
 * Created by socia on 11/1/2023.
 */
$(document).ready(function () {

    function init_container() {
        var container=$('<div />',{
            class: "dashed-grid",
        }).appendTo('body');
        container.on('dblclick',function () {
            init_shift($(this));
        })
    }
    function init_shift(parinte) {
        var step=15;
        var lungime=step*8;
        var stanga = 25;
        var turno = $('<div \>',{
            class:'selector'
        });
        $('<span \>',{class: 'inizio'}).appendTo(turno);
        $('<span \>',{class: 'center'}).appendTo(turno);
        $('<span \>',{class: 'fine'}).appendTo(turno);
        turno.width(lungime);
        turno.height(step);
        lungime = lungime/(4*step);
        turno.draggable({
                axis: "x",
                grid: [ step,step],
                containment: "parent",
                drag: function( event, ui ) {


                    $(this).find('.inizio').text(parseFloat(ui.position.left/(4*step)));
                    $(this).find('.fine').text(parseFloat((ui.position.left)/(4*step) + lungime));
                },
                create: function( event, ui ) {
                    $(this).find('.center').text(lungime);
                }
            });
            turno.resizable({
                handles: "w,e",
                grid: [ step],
                maxWidth: 12*4*step,
                minWidth: step,
                containment: "parent",
                resize: function (event, ui) {
                    $(this).find('.inizio').text(parseFloat(ui.position.left/(4*step)));
                    lungime = parseFloat(ui.size.width/(4*step));
                    $(this).find('.fine').text(parseFloat((ui.position.left)/(4*step) + lungime));
                    $(this).find('.center').text(lungime);
                },

            });
        turno.appendTo(parinte);
    }
    $('#btn').on( "click", function() {
        init_container();
    } );

    // var step=15;
    // var lungime=step*8;
    // var stanga = 25;
    // $('.selector').width(lungime);
    // $('.selector').height(step);
    // lungime = lungime/(4*step);
    //
    // $( ".selector" ).draggable({
    //     axis: "x,y",
    //     grid: [ step,step],
    //     containment: "parent",
    //     drag: function( event, ui ) {
    //
    //
    //         $('.inizio').text(parseFloat(ui.position.left/(4*step)));
    //         $('.fine').text(parseFloat((ui.position.left)/(4*step) + lungime));
    //     },
    //     create: function( event, ui ) {
    //         $('.center').text(lungime);
    //     }
    // });
    // $( ".selector" ).resizable({
    //     handles: "w,e",
    //     grid: [ step],
    //     maxWidth: 12*4*step,
    //     minWidth: step,
    //     containment: "parent",
    //     resize: function (event, ui) {
    //         $('.inizio').text(parseFloat(ui.position.left/(4*step)));
    //         lungime = parseFloat(ui.size.width/(4*step));
    //         $('.fine').text(parseFloat((ui.position.left)/(4*step) + lungime));
    //         $('.center').text(lungime);
    //     },
    //     create: function( event, ui ) {
    //         ui.position.left=stanga;
    //         lungime = ui.size.width/(4*step);
    //     }
    //
    // });
});
