var tabW=768,spW=414,activeClass="is-active";$(function(){var s=$(".js-header-hidden__header"),t=$(".js-header-hidden__content"),e=t.offset().top,a=e-s.height()/2,o=$(window).width();$(window).scroll(function(){if(o>spW){var t=$(window).scrollTop();a<t?s.fadeOut(300):s.fadeIn(300)}}),$('a[href^="#"]').click(function(){var s=$(this).attr("href"),t=$("#"==s||""==s?"html":s),e=t.offset().top;return $("body,html").animate({scrollTop:e},400,"swing"),!1});var i=!1,n=$(".js-to-top");n.css("bottom","-100px"),$(window).scroll(function(){$(this).scrollTop()>150?0==i&&(i=!0,n.stop().animate({bottom:"20px"},400)):i&&(i=!1,n.stop().animate({bottom:"-100px"},400))}),$(".to-top").click(function(){return $("body,html").animate({scrollTop:0},500),!1});var l=$(".js-loading-layer__layer"),c=$(".js-loading-layer__content"),d=$(".js-loading-layer__icon"),r=$(".js-loading-layer__step01"),h=$(".js-loading-layer__step02");setTimeout(function(){d.addClass("icon-level-warning")},3e3),setTimeout(function(){d.removeClass("icon-level-warning").addClass("icon-level-danger")},1e4);var f=$(window).height();c.css("opacity","0"),h.css("display","none"),l.height(f).css("display","block"),$(window).on("load",function(){setTimeout(function(){r.fadeOut(600)},0),setTimeout(function(){h.addClass(activeClass).fadeIn(800)},800),setTimeout(function(){l.stop().animate({width:"0",opacity:0},{duration:"slow",easing:"swing",complete:function(){$(this).remove()}})},1700),c.css("opacity","1")});var v=$(".js-header-toggle"),w=$(".js-header-toggle-target");$(".content-container");769>=$(window).width()&&w.hide(),v.on("click",function(){$(this).hasClass(activeClass)?($(this).removeClass(activeClass),w.fadeOut(300)):($(this).addClass(activeClass),w.addClass(activeClass).fadeIn(300))}),$(window).resize(function(){769<=$(window).width()?(v.removeClass(activeClass),w.removeClass(activeClass).css({display:"block"})):(v.removeClass(activeClass),w.hide())})});