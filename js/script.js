$(function(){
	$(".f_table> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
	});
	$(".f_table> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.top').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.top').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

$(function(){
	$("#board li").click(function(){
		$(this).children("div").slideDown();
		$(this).siblings().children("div").slideUp();
	});
});




