$(function(){$(document).ready(function(){$(".site-slide").on('click',function(){if($(this).hasClass("current")){var href=$(this).data("href");OpenInNewTab(href);}});$('#preview-coverflow').coverflow({index:1,density:1.5,innerOffset:70,innerScale:0.9,enableWheel:false,animateStep:function(event,cover,offset,isVisible,isMiddle,sin,cos){if(isVisible){if(isMiddle){$(cover).css({'filter':'none','-webkit-filter':'none'});}else{var brightness=1+Math.abs(sin),contrast=1-Math.abs(sin),filter='contrast('+contrast+') brightness('+brightness+')';$(cover).css({'filter':filter,'-webkit-filter':filter});}}}});$("button#btn-menu").on('click',function(){if($("ul#m-menu-list").is(":visible")){$("ul#m-menu-list").slideUp("fast");}else{$("ul#m-menu-list").slideDown("fast");}});});});function OpenInNewTab(url){var win=window.open(url,'_blank');win.focus();}