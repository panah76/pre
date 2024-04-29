$("#print-container .show_sizes").on("click","a",function (event) {
    event.preventDefault();
    let filterValue = $(this).attr("data-filter");
    let selected = $(".sizes-container").find('span'+filterValue);
    let allselected = $(".sizes-container").find('span.label-detail> span,span.label> span');
    allselected.css('display','none')
    selected.css("display","inline")
    $("#print-container .show_sizes").find(".active").removeClass("active");
    $(this).addClass("active");
    console.log(filterValue)

})



$("#print-container .show_prices").on("click","a",function (event) {
    event.preventDefault();
    let filterValue = $(this).attr("data-filter");
    let selected = $(".sizes-container").find('span'+filterValue);
    let allselected = $(".sizes-container").find('span.price-print> span');
    allselected.css('display','none')
    selected.css("display","inline")
    $("#print-container .show_prices").find(".active").removeClass("active");
    $(this).addClass("active");
    console.log(filterValue)

})



