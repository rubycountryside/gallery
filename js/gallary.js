
$scroller = $(".scroller"); 	//画廊
$scrItems = $(".scrItems");  //每个图片
$movScroller = $(".movScroller");

$(window).load(function() {	
	var ttlWidth = 400;
	
	$scrItems.each(function(){
		var $this=$(this);
		ttlWidth += $this.outerWidth();
		$movScroller.css("width",ttlWidth);
	});

	var bodyWidth = $(document.body).width();
	$scroller.mousemove(function(e){
		var coOffset = e.clientX / bodyWidth;  //偏移系数
        console.log(coOffset);
		$nextPicPos = ( ttlWidth - bodyWidth ) * coOffset;
		$movScroller.stop().animate({left: -$nextPicPos}, 1200,"easeOutCirc");
	});


	

	var mousex = 0, mousey = 0;
    var divLeft, divTop;
    $('#bgImg').mousedown(function(e)
    {
        var offset = $(this).offset();
        divLeft = parseInt(offset.left,10);
        divTop = parseInt(offset.top,10);
        mousey = e.pageY;
        mousex = e.pageX;
        $(this).bind('mousemove',dragElement);
    });

    function dragElement(event)
    {
        var left = divLeft + (event.pageX - mousex);
        var top = divTop + (event.pageY - mousey);
        $(this).css(
        {
            'top' :  top + 'px',
            'left' : left + 'px',
            'position' : 'absolute'
        });
        return false;
    }

    $(document).mouseup(function()
    {
        $('#bgImg').unbind('mousemove');
    });



    //照片缩放
    $valRange = $("#rangeImg");
    $photo = $("#bgImg");
    $phtWidth = $photo.width();
    $phtHeight = $photo.height();
    $valRange.mousemove(function(e){
        var ratio = this.value / 100;
        console.log(ratio);
        $photo.css("width", $phtWidth * ratio);
        $photo.css("height", $phtHeight * ratio);
    });
});

function changeBg(addr){
	var bgImg = $("#bgImg");
	bgImg.attr("src",addr);
}

function dragImg(){

}