$(document).ready(function() {
   // $("<img />").attr(
   //   "src",
   //   "https://d29mtkonxnc5fw.cloudfront.net/site_assets/black-frame-face17.jpg"
   // );
});


$("#AMK").on({
   mouseenter: function() {
      $(this).css("transform", "rotateY(-60deg)");
   },
   mouseleave: function() {
      $(this).css("transform", "rotateY(0deg)");
   },
});

//$("#AMK").css("transform", "rotateY(0deg) rotateZ(0deg) rotateX(180deg)");

const b_width = getUrlParameter("width") || 20;
const b_height = getUrlParameter("height") || 20;

//each mm is 2pixels
const scale = 1;

//{{{1 assets
const assets = [
   {
      name: "A515",
      picture: "black",
      alt: "",
      wide: 30,
      deep: 15,
      pm: 3.17 * 7,
   },
   {
      name: "A513",
      picture: "black",
      alt: "",
      wide: 30,
      deep: 15,
      pm: 3.17 * 7,
   },
   {
      name: "A529",
      picture: "black",
      alt: "",
      wide: 40,
      deep: 30,
      pm: 8.56 * 7,
   },
   {
      name: "A526",
      picture: "black",
      alt: "",
      wide: 40,
      deep: 30,
      pm: 8.56 * 7,
   },
   {
      name: "A524",
      picture: "black",
      alt: "",
      wide: 22,
      deep: 22,
      pm: 3.50 * 7,
   },
   {
      name: "A521",
      picture: "black",
      alt: "",
      wide: 22,
      deep: 22,
      pm: 3.50 * 7,
   },
   {
      name: "A514",
      picture: "white",
      alt: "",
      wide: 30,
      deep: 15,
      pm: 3.17 * 7,
   },
   {
      name: "A512",
      picture: "white",
      alt: "",
      wide: 30,
      deep: 15,
      pm: 3.17 * 7,
   },
   {
      name: "A528",
      picture: "white",
      alt: "",
      wide: 40,
      deep: 30,
      pm: 8.56 * 7,
   },
   {
      name: "A525",
      picture: "white",
      alt: "",
      wide: 40,
      deep: 30,
      pm: 8.56 * 7,
   },
   {
      name: "A523",
      picture: "white",
      alt: "",
      wide: 22,
      deep: 22,
      pm: 3.5 * 7,
   },
   {
      name: "A520",
      picture: "white",
      alt: "",
      wide: 22,
      deep: 22,
      pm: 3.5 * 7,
   },
   {
      name: "AL2650",
      picture: "wood",
      alt: "",
      wide: 37,
      deep: 20,
      pm: 5.00 * 7,
   },
   {
      name: "AL2496",
      picture: "wood",
      alt: "",
      wide: 25,
      deep: 22,
      pm: 3.17 * 7,
   },
   {
      name: "AL3028",
      picture: "wood",
      alt: "",
      wide: 22,
      deep: 22,
      pm: 4.00 * 7,
   },
   {
      name: "AL2956",
      picture: "wood",
      alt: "",
      wide: 22,
      deep: 22,
      pm: 4.00 * 7,
   },
].map(i => ({
   ...i,
   side: `./assets/img/New Patterns/${i.name}-pattern.png`,
   face: `./assets/img/New Moulding/${i.name}.png`,
   deep: i.deep * scale,
   wide: i.wide * scale,
}))
// }}}1

let selected_frame = 0;
//IF check kone cm bva mm ya harchy ro va scale ro ava koni ba un
const frame_width = b_width * scale;
const frame_height = b_height * scale;


const box = "";

//{{{1 define sides
const f_front = $(".front.three_dimensional_frame")
const f_right = $(".right.three_d_face");
const f_back = $(".back.three_d_face");
const f_left = $(".left.three_d_face");
const f_top = $(".top.three_d_face");
const f_bottom = $(".bottom.three_d_face");

const f_box_container = $(".three_d_box_container");
const f_overlay_gradiant = $(".overlay_gradient");
const f_artwork_layers = $(".artwork_layers");

const f_artwork_layer = $(".artwork_layer");
const f_artwork_layer_2 = $(".artwork_layer_2");
const f_front_mount = $(".front_mount");
const f_back_frame_shadows = $(".back_frame_shadows");

const f_right_inner = $(".right_inner")
const f_left_inner = $(".left_inner")


//}}}1

//{{1 frame init
f_back_frame_shadows.css({
   width: `${frame_width}px`,
   height: `${frame_height}px`,
   transition: 'all 1s ease 0s',
})
f_front_mount.css({
   width: `${frame_width}px`,
   height: `${frame_height}px`,
   transition: 'all 1s ease 0s',
});
f_artwork_layer.css({
   width: '100%',
   transition: 'all 1s ease 0s',
   height: '100%',
})
f_artwork_layer_2.css({
   width: `${frame_width}px`,
   transition: 'all 1s ease 0s',
   height: `${frame_height}px`,
})
f_artwork_layers.css({
   width: `${frame_width}px`,
   transition: 'all 1s ease 0s',
   height: `${frame_height}px`,
})
f_overlay_gradiant.css({
   opacity: 1,
   transition: 'all 1s ease 0s',
})
f_front.css({
   width: `${frame_width}px`,
   transition: 'all 1s ease 0s',
   height: `${frame_height}px`,
});
f_back.css({
   height: `${frame_height}px`,
   transition: 'all 1s ease 0s',
   width: `${frame_width}px`,
});
f_bottom.css({
   transition: 'all 1s ease 0s',
   background: `url('${assets[selected_frame].side} ')  repeat-y`,
   'background-size': 'contain',
   'transform-origin': "top",
   height: `${frame_width}px`,
});
f_top.css({
   transition: 'all 1s ease 0s',
   'background-size': 'contain',
   height: `${frame_width}px`,
   background: `url('${assets[selected_frame].side} ')  repeat-y`,
});
f_box_container.css({
   width: `${frame_width}px`,
   height: `${frame_height}px`,
   transition: 'all 1s ease 0s',
})

f_right.css({
   height: `${frame_height}px`,
   'background-size': 'contain',
   transition: 'all 1s ease 0s',
});
f_left.css({
   height: `${frame_height}px`,
   'background-size': 'contain',
   transition: 'all 1s ease 0s',
});
f_left_inner.css({
   transition: 'all 1s ease 0s',
});
f_right_inner.css({
   transition: 'all 1s ease 0s',
});
//}}}1

populateFrames();

updateScreen();

//{{{1 slider
const slider = document.getElementById('slider');

noUiSlider.create(slider, {
   start: [10,],
   step: 57 / 9,
   range: {
      'min': 0,
      'max': 30
   }
}).on('update', function(values) {
   const thing = $(".artwork_layer_2");
   const valstr = `calc(100% - ${parseInt(values[0])}% )`
   thing.css({
      'width': valstr,
      'height': valstr,
   })
});
//}}}1

//{{{1 changeBkg
function turnBlack() {
   $('.artwork_layers').css('background', 'rgb(0,0,0)');
   $('#whitestuff').removeClass("active_mat_color_swatch")
   $('#blackstuff').addClass("active_mat_color_swatch")
}

function turnWhite() {
   $('.artwork_layers').css('background', 'rgb(255,255,255)');
   $('#whitestuff').addClass("active_mat_color_swatch")
   $('#blackstuff').removeClass("active_mat_color_swatch")
}
//}}}1

//{{{1 getUrlParameter
function getUrlParameter(sParam) {
   const sPageURL = window.location.search.substring(1)
   const sURLVariables = sPageURL.split('&')
   let sParameterName
   let i;
   for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam)
         return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
   }
   return false;
}
//}}}1

//{{{1 populateFrames
function populateFrames() {
   assets.forEach((asset, idx) => {
      const text =
         `
         <div id = "frame_style_option_${idx}" class= "categories-radio-button image ${asset.picture} " >
            <input type="radio" name="frame_style" data-text="${asset.name}" value="344"/>
            <label>
               <div class="categories-radio-button-icon">
                  <img src="assets/img/frame/${asset.name}.png" class="img-fluid rounded">
                  <div class="radio-active-icon"></div>
               </div>
            </label>
         </div>
         `

      $('#isotope-container').append(text)
   })

   const mylist = assets.map((_, idx) => `#frame_style_option_${idx}`);
   mylist.forEach((i, idx) => {
      const selector = $(i)
      selector.click(function() {

         mylist.forEach(dis => {
            a = $(dis).find('.radio-active-icon')
            a.css('background-image', 'url("")');
            a.css('background-color', '#f8f6f8 ');
         });
         a = selector.find('.radio-active-icon')
         a.css('background-image', 'url("/assets/img/item/Ticksymbol.png")');
         a.css('background-color', '#999999 ');

         selected_frame = idx;
         updateScreen();
      })

   })
}
//}}}1

//{{{1 updateScreen
function updateScreen() {
   f_back_frame_shadows.css({
      left: `-${assets[selected_frame].wide}px`,
      top: `-${assets[selected_frame].wide}px`,
   });

   f_back.css({
      'border-image-source': `url('${assets[selected_frame].face}') `,
      'border-image-slice': `${frame_width / assets[selected_frame].wide}`,
      'border-width': `${assets[selected_frame].wide}px`,
      'border-image-width': `${assets[selected_frame].wide}px`,
      transform: `rotateY(0deg) translateZ(-${assets[selected_frame].deep / 2}px) translateY(0px) translateX(0px)`,
   })
   f_overlay_gradiant.css({
      transform: `rotateY(0deg) translateZ(${assets[selected_frame].deep / 2 + 1}px) translateY(0px) translateX(0px)`,
   })
   f_front.css({
      'border-image-source': `url('${assets[selected_frame].face}')`,
      'border-image-slice': `${frame_width / assets[selected_frame].wide}`,
      'border-width': `${assets[selected_frame].wide}px`,
      'border-image-width': `${assets[selected_frame].wide}px`,
      transform: `rotateY(0deg) translateZ(${assets[selected_frame].deep / 2}px) translateY(0px) translateX(0px)`,
   });
   f_bottom.css({
      background: `url(' ${assets[selected_frame].side}')  repeat-y`,
      width: `${assets[selected_frame].deep}px`,
      left: `-${assets[selected_frame].deep / 2}px`,
      top: `${frame_height}px`,
      transform: `translateZ(${0}px) translateY(${0 / 2}px) translateX(${0 / 2}px) rotateY(90deg) rotateX(90deg) `,
   })
   f_top.css({
      background: `url(' ${assets[selected_frame].side}')  repeat-y`,
      transform: `translateZ(${0}px) translateY(-${frame_width / 2}px) translateX(0px) rotateY(90deg) rotateX(90deg) `,
      width: `${assets[selected_frame].deep}`,
      top: `${0}px`,
      left: `${frame_width / 2 - assets[selected_frame].deep / 2}px`
   })
   f_artwork_layers.css({
      transform: `rotateY(0deg) translateZ(${assets[selected_frame].deep / 4}px) translateY(0px) translateX(0px)`,
      width: `${frame_width - assets[selected_frame].wide * 2}px`,
      height: `${frame_height - assets[selected_frame].wide * 2}px`,
   })
   f_right_inner.css({
      height: `${frame_height - assets[selected_frame].wide * 2}px`,
      background: `url('${assets[selected_frame].side}')  repeat-y`,
      transform: `translateZ(0px) translateY(0px) translateX(-${assets[selected_frame].deep / 2}px) rotateY(90deg) `,
      left: `${frame_width - assets[selected_frame].wide + 1}px`,
      width: `${assets[selected_frame].deep}`,
   })
   f_left_inner.css({
      height: `${frame_height - assets[selected_frame].wide * 2}px`,
      background: `url('${assets[selected_frame].side}')  repeat-y`,
      left: `${assets[selected_frame].wide - 1}px`,
      width: `${assets[selected_frame].deep}`,
      transform: `translateZ(0px) translateY(0px) translateX(-${assets[selected_frame].deep / 2}px) rotateY(90deg) `,
   })
   f_right.css({
      background: `url('${assets[selected_frame].side}')  repeat-y`,
      left: `${frame_width}px`,
      width: `${assets[selected_frame].deep}`,
      transform: `translateZ(0px) translateY(0px) translateX(-${assets[selected_frame].deep / 2}px) rotateY(90deg) `,
   })
   f_left.css({
      left: '0px',
      width: `${assets[selected_frame].deep}`,
      background: `url('${assets[selected_frame].side}')  repeat-y`,
      transform: `translateZ(-0px) translateY(0px) translateX(-${assets[selected_frame].deep / 2}px) rotateY(90deg) `,
   })

}
//}}}1

