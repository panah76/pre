
// $( function() {
//
//
//     let darkframe = $("#frame_option_dark")
//     darkframe.hidden = true
//
//
// } );
//
// let darkFrames = $('.dark-frame');
// let whiteFrame = $('.white-frame');
// let woodFrame = $('.wood-frame');
//
// function enabledark(){
//
//     darkFrames.attr('hidden',true);
//     lightFrame.attr('hidden',false);
//     darkFrames.attr('hidden',true);
//
// }
//
// function refresh (){
//     darkFrames.attr('hidden',list[1])
//
// }
// $('#tabs-1').on('click',enabledark)

$("#isotope-filters").on("click", "div", function() {
   const filterValue = $(this).attr("data-filter");
   $("#isotope-container").isotope({ filter: filterValue });
   $("#isotope-filters").find(".active").removeClass("active");
   $(this).addClass("active");
});

$(window).on('load', function() {
   $("#isotope-container").isotope({ filter: '.black' });
});

