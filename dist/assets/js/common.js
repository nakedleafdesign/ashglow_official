var tabW=768,spW=414,activeClass="is-active";$(function(){var t=$(".js-header-hidden__header"),s=$(".js-header-hidden__content"),o=s.offset().top,a=o-t.height()/2,e=$(window).width(),i=300;$(window).scroll(function(){if(e>spW){var s=$(window).scrollTop();a<s?t.fadeOut(i):t.fadeIn(i)}}),$('a[href^="#"]').click(function(){var t=400,s=$(this).attr("href"),o=$("#"==s||""==s?"html":s),a=o.offset().top;return $("body,html").animate({scrollTop:a},t,"swing"),!1});var l=!1,n=$(".js-to-top");n.css("bottom","-100px"),$(window).scroll(function(){$(this).scrollTop()>150?0==l&&(l=!0,n.stop().animate({bottom:"20px"},400)):l&&(l=!1,n.stop().animate({bottom:"-100px"},400))}),$(".to-top").click(function(){return $("body,html").animate({scrollTop:0},500),!1});var r=$(".js-header-toggle"),c=$(".js-header-toggle-target"),d=300,h=$(".content-container"),p=$(window).width(),w=769;w>=p&&c.hide(),r.on("click",function(){if($(this).hasClass(activeClass)){$(this).removeClass(activeClass),c.fadeOut(d);var t=$(window).scrollTop();h.attr({style:""}),$("html, body").prop({scrollTop:t})}else{$(this).addClass(activeClass),c.addClass(activeClass).fadeIn(d);var t=$(window).scrollTop();h.css({position:"fixed",width:"100%",top:-1*t})}}),$(window).resize(function(){var t=$(window).width(),s=769;s<=t?(r.removeClass(activeClass),c.removeClass(activeClass).css({display:"block"})):(r.removeClass(activeClass),c.hide())})});