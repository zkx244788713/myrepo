//首页
$(function(){
	//上边那个广告
	var blanktimer=""
	blank()
	function blank(){
	 	 blanktimer=setInterval(function(){
			blankblock();
		},1500)
	}
	function blankblock(){
		$("._blank").css("display","block");
	}
	function blanknone(){
		clearInterval(blanktimer)
		$("._blank").css("display","none");
	}
	$(".btn_blank").click(function(){
		blanknone()
	});
	
	//轮播
	var iCurIndex=0;
	move(iCurIndex);
	var timer="";
	
	for(var i=0;i<$(".banner_btn li").length;i++){
		$(".banner_btn li")[i].index=i;
		//console.log(i);
		//console.log($(".banner_btn li")[i]);
		$(".banner_btn li").mouseenter(function(){
			iCurIndex = this.index;
			move(iCurIndex);
		})
	};
	
	
	
	function go(){
		timer=setInterval(function(){
			moveright();
		},2500);	
	}go();
	
	
	$(".banner_leftbtn").click(function(){
			iCurIndex--;
			move(iCurIndex);
	});
	$(".banner_rightbtn").click(function(){
			moveright();
	})
	function moveright(){
		iCurIndex++;
		if(iCurIndex==5){
					iCurIndex=0;
						}
		if(iCurIndex < 0) {
				iCurIndex = 4;
		}
		move(iCurIndex);
	}
	
	
    function move(i){
		$(".banner_btn li").eq(i).css("background","#ff3344").siblings().css("background","#d9d9d9")
		$(".banner_li a").eq(i).fadeIn(1000).siblings().fadeOut(1000);
    }
    $(".banner_li").hover(
    	function(){
    		clearInterval(timer);
    	},function(){
    		go();
    	}
    );	
    $(".banner_btn_lr").hover(
    	function(){
    		clearInterval(timer);
    	},function(){
    		go();
    	}
    );	
     //特卖切换
     var salebtn=1;
    $(".sale_btn").click(function(){
    	salebtn++;
    	if (salebtn%2==0) {
    		$(".sale_main_pic1").fadeTo(200,0).css("display","none");
    		$(".sale_main_pic2").fadeTo(200,1).css("display","block");	
    		return;
    	}
    	else {
    		
    		$(".sale_main_pic1").fadeTo(200,1).css("display","block");
    		$(".sale_main_pic2").fadeTo(200,0).css("display","none");
    		return;
    	}
    	
    })
  //banner的选项卡  
    $(".lis li").hover(
    	function(){
    		$(this).children().show()
    	},function(){
    		$(".banner_main_link").hide()
    	
    	}
    );
    //新品上新风琴特效
    $(".new_main li").hover(function(){
    	$(this).css("width","400px").siblings().css("width","200px");
    	//console.log($(this).siblings().find("a"))
    	//console.log($(this).siblings().children().last())
    	$(this).children().first().css({width:"400px",height:"880px"});
    	$(this).children().last().show();
    	$(this).siblings().find("a").css({width:"200px",height:"440px"});
    	$(this).siblings().find($(".new_main_pictit")).hide();
    },function(){
    	
    });
    //奢侈品
    $(".luxury_btn span").hover(function(){
    	$(this).addClass("luxury_btn_bg").siblings().removeClass();
    	for(var i=0;i<$(".luxury_btn span").length;i++){
    		if(this==$(".luxury_btn span")[i]){
    			$(".luxury_main").eq(i).css("display","block")
    		}else{
    			$(".luxury_main").eq(i).css("display","none")
    		}
    	}
    })
   

    
})


