/*!--网站头部LOGO,search,导购开始--*/
$(function(){
	var $focus = $("#TopMain .Top_con .Top_c_search #search");
	var $textcon = $("#TopMain .Top_con .txtcon");
	var $colse = $("#TopMain .Top_img .imgm");
		$focus.focus(function(){
			if($(this).val()=="")
			{
				$(this).siblings("label").hide();
				$textcon.slideDown(500);
			}
		})
		$focus.blur(function(){
			if($(this).val()=="")
			{
				$(this).siblings("label").show();
				$textcon.slideUp(300);
			}
		})
		$colse.click(function(){
			$(this).parent().slideUp(500);
		});
})
/*!--网站头部LOGO,search,导购结束--*/
/*!--网站头部Logonav or吸附导航开始--*/
$(function(){
	var $nav = $("#Logonav ul.Logo_con_n li.Logo_con_t");
	var $hide = $("#Logonav ul.Logo_con_n li.Logo_con_first .menu");
	var $show = $("#Logonav ul.Logo_con_n li.last");
	var $gd = $("#Logonav");
		$nav.hover(function(){
			var $left = $(this).position().left;//获得li与左边的距离
			var $width = $(this).width();//获得li的宽度
			$show.stop( true ).fadeIn(10).animate({left:$left+"px",width:$width},500);
		},function(){
			$show.stop( true ).animate({left:190+"px",width:100+"px"},500).hide(10);
		});
	$(window).scroll(function(){
		var $_h = $(this).scrollTop()
		var $d_h = $("#TopMain").height();
			$_h>=$d_h?$gd.addClass("gd"):$gd.removeClass("gd");
	});
	$(window).scroll(function(){
		var $_hide = $(this).scrollTop()
		if($_hide>200)
		{
			$hide.fadeOut();
		}
		else
		{
			$hide.fadeIn();
		}
	});
});

/*!--网站头部Logonav or吸附导航结束--*/
/*!--morenav更多内容开始--*/
$(function(){
	var $hover = $("li.Logo_con_first .menu ol.m_con li");
		$hover.hover(function(){
			$(this).addClass("hover");
			var $top = $(this).position().top;
			var $hig = $(this).find(".morenav").height()/3;
			if($top>$hig)
			{	
				$(this).find(".morenav").css("top",-$hig);
					if($(this).index()==5)
					{
						$(this).find(".morenav").css("top",-($hig*3-70));
					}
					else if($(this).index()==4)
					{
						$(this).find(".morenav").css("top",-($hig*3-70));
					}
			}
		},function(){
			$(this).removeClass("hover");
		});
});
/*!--morenav更多内容结束--*/
/*!-首页轮播banner开始--*/
$(function(){
	var $add = $("#part1 .part1_main .flash .btn_nav span");
	var $move = $("#part1 .part1_main .flash .scroll img");
	var $right = $("#part1 .part1_main .news span.btn_right");
	var $left = $("#part1 .part1_main .news span.btn_left");
	var $hide = $("#part1 .part1_main .news a");
	var index = 0;
	var qianz = 0;
	var time = 0;
		$add.mousemove(function(){
			index = $(this).index();
				scrollplay();
			qianz=index;
		});
		$right.click(function(){
			index++;
			if(index>5)
			{
				index=0;
				qianz=5;
			}
			scrollplay();
			qianz=index;
		});
		$left.click(function(){
			index--;
			if(index<0)
			{
				index=5;
				qianz=0;
			}
			scrollplay();
			qianz=index;
		});
		function scrollplay()
		{
				if(index==0 && qianz==5){autoleft();}else if(index==5 && qianz==0){autoright();}else if(index>qianz)
				{autoleft();}else if(index<qianz){autoright();}
				$add.eq(index).addClass("f_nav_l").siblings().removeClass("f_nav_l");
		}
		function autoright()
		{
				$move.eq(qianz).animate({"left":"820px"},500);
				$move.eq(index).css("left","-820px").animate({"left":"0"},500);
		}
		function autoleft()
		{
			$move.eq(qianz).animate({"left":"-820px"},500);
			$move.eq(index).css("left","820px").animate({"left":"0"},500);
		}
	autoplay();
	function autoplay()
	{
		time = setInterval(function(){
			index++;
			if(index>5)
			{
				index=0;
				qianz=5;
			}
			scrollplay();
			qianz=index;
		},3000);
	}
	$move.hover(function(){clearInterval(time);},function(){autoplay();})
	$right.hover(function(){clearInterval(time);},function(){autoplay();})
	$left.hover(function(){clearInterval(time);},function(){autoplay();})
	$add.hover(function(){clearInterval(time);},function(){autoplay();})
})
/*!--首页轮播banner结束--*/
/*IE678浏览器判断*/
var oBody = document.getElementById("Logonav")
var isIE = !!window.ActiveXObject;var isIE6 = isIE && !window.XMLHttpRequest;var isIE8 = isIE && !!document.documentMode && (document.documentMode == 8);var isIE7 = isIE && !isIE6 && !isIE8;
if(isIE)
{
	oBody.style.zIndex= "90";
}
/*IE678浏览器判断*/
/*倒计时开始*/
autolist();
function autolist()
{
	var $time = $("#part2 .p_con ul.p_c_list li p.p_c_l_con_2 span");
	var endTime = new Date();
	var nowTime = new Date();
		endTime.setFullYear(2016);
		endTime.setMonth(5);//月
		endTime.setDate(4);//天
		endTime.setHours(0);
		endTime.setMinutes(0);
		endTime.setSeconds(0);
		//alert(endTime.getTime());
		var i = (endTime.getTime() - nowTime.getTime())/1000;
		var day = Math.floor(i/86400);//天
			i = i%86400;
		var hours = Math.floor(i/3600);
			i = i%3600;
		var minute = Math.floor(i/60);
			i = i%60;
		$time.eq(0).html(autotime(hours,2));
		$time.eq(1).html(autotime(minute,2));
		$time.eq(2).html(autotime(i,2));
}
setInterval(autolist,1000);
function autotime(itime,n)
{
	var str = ""+itime;
	while(str.length<n)
	{
		str = "0"+str;
	}
	return str;
}
/*倒计时结束*/
/*part3内容开始*/
$(function(){
	var $btn = $("#part3 .part_titl span.p_t_com_r");
	var $show = $("#part3 .part_con_m .con_r_l");
	var key = 0;
	var time = 0;
		$btn.click(function(){
			autoplayimg();
		});
	function autoplayimg()
		{
			if(key==0)
			{
				key=1;
			}
			else
			{
				key=0;
			}
		$show.eq(key).fadeIn().siblings(".con_r_l").fadeOut();
		}
	setInterval(autoplayimg,20000)
});
/*part3内容结束*/
/*part4内容开始*/
$(function(){
	var $btn = $("#part4 .p_title_con ul li");
	var $div = $("#part4 .p_infocon .p_infocon_right .p_infocon_centent");
	var index = 0;
		$btn.not(".left_img").hover(function(){
			index = $(this).index()
			$(this).addClass("hover").siblings("li").removeClass("hover");
			$div.stop( true ).eq(index).fadeIn().siblings().fadeOut();
		});
});
$(function(){
	var $right = $("#part4 .p_infocon .p_infocon_left .btncon_nav span.right_nav");
	var $left = $("#part4 .p_infocon .p_infocon_left .btncon_nav span.left_nav");
	var $img = $("#part4 .p_infocon .p_infocon_left .p_infocon_img li.imgcon");
	var $txt = $("#part4 .p_infocon .p_infocon_left .btncon_nav p.conmain");
	var index = $(this).index()+1;
	var time = 0;
	function sel_part(r_move,l_move)
		{
			r_move.click(function(){
				index++;
				if(index>3)index%=4;
				auto();
			});
			l_move.click(function(){
				index--;
				if(index<0)index=3;
				auto();
			});
		}
		sel_part($right,$left)
		function autoplay(){
			time = setInterval(function(){
				index++;
				if(index>3)index%=4;
				auto();
			},6000);
		};
		autoplay();
		function auto()
		{
			$img.eq(index).fadeIn().siblings("li").fadeOut();
			$txt.eq(index).fadeIn().siblings("p").fadeOut();
		}
	$img.hover(function(){clearInterval(time)},function(){autoplay();})
	$right.hover(function(){clearInterval(time)},function(){autoplay();})
	$left.hover(function(){clearInterval(time)},function(){autoplay();})
	$txt.hover(function(){clearInterval(time)},function(){autoplay();})
});	
/*part4内容结束*/
/*part5内容开始*/
/*part5_left开始*/
$(function(){
	var $right = $("#part5 .part5_left .p_l_info span.p_l_info_right");
	var $left = $("#part5 .part5_left .p_l_info span.p_l_info_left");
	var $show = $("#part5 .part5_left .p_l_info .p_l_in_con");
	var index = $(this).index()+1;
	var time = 0;
	function automove(right,left){
		right.click(function(){
		index++;
		if(index>2)index%=3;
		$show.animate({left:-(index*190)+"px"},500);
		});
		left.click(function(){
		index--;
		if(index<0)index=2;
		$show.animate({left:-(index*190)+"px"},500);
		});
	}
	automove($right,$left)
	function autoplay(){
		time = setInterval(function(){
			index++;
			if(index>2)index%=3;
			$show.animate({left:-(index*190)+"px"},500);
		},6000);
	}
	autoplay();
	$show.hover(function(){clearInterval(time)},function(){ autoplay()})
})
/*part5_left结束*/
/*part5内容结束*/
/*!--part6内容开始--*/
$(function(){
	var $obj_1 = $("#part6 .comflash .bottom_nav li");
	var $obj_2 = $("#part7 .comflash .bottom_nav li");
	var $animate_1 = $("#part6 .comflash .com_banner .com_img");
	var $animate_2 = $("#part7 .comflash .com_banner .com_img");
	var $right_1 = $("#part6 .com_banner img.btn_right");
	var $right_2 = $("#part7 .com_banner img.btn_right");
	var $left_1 = $("#part6 .com_banner img.btn_left");
	var $left_2 = $("#part7 .com_banner img.btn_left");
	function comflash(obj_1,animate,right,left)
	{
		var index = 0;
		var time = 0;
		obj_1.hover(function(){
			index = $(this).index();
			autoplay();
		});
		right.click(function(){
			index++;
			if(index>obj_1.length-1)
			{
				index=0;
			}
			autoplay();
		});
		left.click(function(){
			index--;
			if(index<0)
			{
				index=obj_1.length-1;
			}
			autoplay();
		});
		function autoplay()
		{
			obj_1.eq(index).addClass("hover").siblings().removeClass("hover");
			animate.stop( true ).animate({"left":-(index*400)+"px"},400);
		}
		obj_1.hover(function(){clearInterval(time);},function(){autoimg();});
		right.hover(function(){clearInterval(time);},function(){autoimg();});
		left.hover(function(){clearInterval(time);},function(){autoimg();});
		animate.hover(function(){clearInterval(time);},function(){autoimg();});
		function autoimg()
		{
			time = setInterval(function(){
				index++;
				if(index>obj_1.length-1)
				{
					index=0;
				}
				autoplay()
			},3000);
		}
		autoimg();
	}
	comflash($obj_1,$animate_1,$right_1,$left_1)
	comflash($obj_2,$animate_2,$right_2,$left_2)	
});

/*!--part6和part7内容结束--*/
/*!--part8内容开始--*/
$(function(){
	var $hover = $("#part8 .p_con_l .p_con_l_firet ul li");
	var $show = $("#part8 .p_con_l .p_con_l_content .p_con_l_main");
	var $left = $("#part8 .p_con_l .p_con_l_content img.prev_left");
	var $right = $("#part8 .p_con_l .p_con_l_content img.prev_right");
	var index = 0;
	var time = 0;
		$hover.hover(function(){
			index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$show.stop(true).eq(index).fadeIn(300).siblings().fadeOut(300);
		});
		function autoclick(right,left)
			{
			right.click(function(){
				index++;
				if(index>$hover.length-1)
					index%=$hover.length;
				autoimg();
			});
			left.click(function(){
				index--;
				if(index<0)
					index=$hover.length-1;
				autoimg();
			});
		function autoimg()
			{
				$hover.eq(index).addClass("active").siblings().removeClass("active");
				$show.stop(true).eq(index).fadeIn(300).siblings().fadeOut(300);
			}
		function autoplay()
			{
				time = setInterval(function(){
					index++;
					if(index>$hover.length-1)
					index%=$hover.length;
					autoimg();
				},3000);	
			}
		autoplay();
		$hover.hover(function(){clearInterval(time)},function(){autoplay();});
		$show.hover(function(){clearInterval(time)},function(){autoplay();});
		}
	autoclick($right,$left)
});
/*!--part8内容结束--*/
/*内页放大镜样式 webmagn开始 */
$(function()
{	
	var $show = $("#webmagn .webmagn_con .simg .shade");
	var $move = $("#webmagn .webmagn_con .simg .move,.bimg");
	var $motion = $("#webmagn .webmagn_con .simg  .move");
	var $border = $("#webmagn .webmagn_con .btn img");
	var $magnimg = $("#webmagn .webmagn_con .bimg img,.simg img");
		$show.hover(function()
		{
			$move.show();
		},function()
		{
			$move.hide();
		});
		$border.hover(function()
		{
		$(this).addClass("active").siblings().removeClass("active");
		var $src = $(this).attr("dataScr");
		$magnimg.attr("src",$src)
		});
		$show.mousemove(function(e)
		{
			var x = e.clientX;
			var y=e.clientY+$(window).scrollTop(); //鼠标与浏览器窗口上面距离
			
			var l = $(this).offset().left;
			var t = $(this).offset().top;
			
			var w = $move.width()/2;
			var h = $move.height()/2;

			var left = x - l - w;
			var top = y - t - h;
			var bigH = $show.height()-h*2-2;
			var bigW = $show.width()-w*2-2;
			if(left<0)
			{
				left=0;
			}else if(left>bigW)
			{
				left=bigW;
			}
			if(top<0)
			{
				top=0;
			}else if(top>bigH)
			{
				top=bigH;
			}
			$motion.css({"left":left,"top":top},500);
			//获取滑块滑动的最大宽度和最大高度的比例
			var wbl = left/bigW;
			var hbl = top/bigH;
			var bigleft = ($(".webmagn_con .bimg img").width()-$(".bimg").width())*wbl;
			var bigtop =  ($(".webmagn_con .bimg img").height()-$(".bimg").height())*hbl;
			$(".webmagn_con .bimg img").css({"left":-bigleft,"top":-bigtop},300);
				/*		
				var wbl = left/bigW;
				var Hbl = top/bigH;
				var bigleft = ($(".bimg img").width()-$(".bimg").width())*wbl;
				var bigtop =  ($(".bimg img").height()-$(".bimg").height())*Hbl;
				$(".bimg img").css({"left":-bigleft,"top":-bigtop});//动态给大图赋值。*/
		})
});
/*内页放大镜样式 webmagn结束 */
/*!--ProductInfo开始--*/
$(function(){
	var $add = $("#ProductInfo ul.info_nav li");
	var $show = $("#ProductInfo .info_content .info_content_con");
	var index = 0;
		$add.hover(function(){
			index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$show.eq(index).fadeIn().siblings().fadeOut();
		});
});
/*!--ProductInfo结束--*/
/*!--LoginAndRegister登录注册页面开始--*/
$(function(){
	var $show = $("#LoginAndRegister .Login_nav ul li");
	var $slideDown = $("#LoginAndRegister .Login_content .com");
	var $user = $("input#user");
	var $user_color = $("label#l_user");
	var $email = $("input#email");
	var $email_color = $("label#1_email");
	var $pwd = $("input#pwd");
	var $pwd_color = $("label#1_pwd");
	var $qr_pwd = $("input#qr_pwd");
	var $1_qr_pwd = $("label#1_qr_pwd");
	var $click = $("input.btn_blue");
	var index = 0;
		$show.click(function(){
			index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$slideDown.eq(index).fadeIn().siblings().fadeOut();
		});
		$user.keyup(function(){
			var txt = $user.val();
			//var len = txt.length;
			if(txt=="")
			{	
				$user_color.css("color","red");
			}
			else
			{	
				$user_color.css("color","#666");
			}
			//当用户名不符合要求时
				/**用户名规则：
				1、字母、数字、下划线组成，字母开头，4-16位。
				2、 re = /^[0-9a-zA-Z]\w{3,15}$/;
				**/
			var re=/^[a-zA-Z]\w{3,15}$/;
			var bool = re.test(txt);
				if(!bool)
				{
					$user_color.css("color","red");
					return;
				}
		});
		$email.keyup(function(){
			var txt = $(this).val();
			console.log(txt);
			if(txt=="")	
			{
				$email_color.css("color","red");	
			}
			else
			{
				$email_color.css("color","#666");	
			}
			/** 邮箱验证规则：
			 1、姑且把邮箱地址分成“第一部分@第二部分”这样  905wlm   @   qq.com
			 2、第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
			 3、第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
			 4、而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位字母，如cn,com,net，
			 现在域名有的也会大于4位
			myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
			 **/

		 var re=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
		 var bool = re.test(txt);
		 if(!bool)
			{
				$email_color.css("color","red");	
				return;
			}
		});
		$pwd.keyup(function(){
			var txt = $(this).val();
			if(txt=="")
			{
				$pwd_color.css("color","red");	
			}
			else
			{
				$pwd_color.css("color","#666");	
			}
		var re=/^[0-9a-zA-Z]\w{3,15}$/;
		var bool=re.test(txt);
		if(!bool)
			{
				$pwd_color.css("color","red");	
				return;
			}
		});
		$qr_pwd.blur(function(){
			var txt2 = $(this).val();
			var txt = $pwd.val();
			if(txt2!==txt)
			{
				$1_qr_pwd.css("color","red");
				return;
			}
		})
		$click.click(function(){
			alert("成功");
		})
});	
/*!--LoginAndRegister登录注册页面结束--*/
/*!--Login开始--*/
$(function(){

 $("#user").focus(function(){
  
	var txt2 =  $(this).val();
	if(txt2=="用户名/邮箱/已验证手机")
	 {
		$(this).val("");
	}
  });
  $("#user").blur(function(){
	var txt = $(this).val();
	if(txt=="")
	{
		$(this).val("用户名/邮箱/已验证手机");
	}
  });
});
/*!--Login结束--*/
/*register页面开始*/
$(function(){
	var $user = $("p.icon input#user");
	var $user_color = $("#register .Lg_Main .Login p.icon font.con_0");
	var $pwd = $("p.edit input#pwd");
	var $qr_pwd = $("p.icon input#qr_pwd");
	var $qr_pwd_color = $("#register .Lg_Main .Login p.icon font.con_1");
	var $addstyle = $(".Lg_Main .Login p.edit span.color");
	var $email = $("p.icon input#email");
	var $email_color = $("#register .Lg_Main .Login p.icon font.con_2");
		$user.keyup(function(){
			var txt = $(this).val();
			if(txt=="")
			{
				$user_color.css("color","red");
			}
			else
			{
				$user_color.css("color","#ddd");
			}
			var re=/^[a-zA-Z]\w{3,15}$/;
			var bool = re.test(txt);
				if(!bool)
				{
					$user_color.css("color","red");
				}
		});	
		$pwd.keyup(function()
		{
			var txt = $(this).val();
			var leng = txt.length;
			var re=/^[0-9a-zA-Z]\w{3,15}$/;		
			checkWord($pwd);
		});
		function Primary()
			{
				$addstyle.find("font#co1").removeClass("red");
				$addstyle.find("font#co2").removeClass("blue");
				$addstyle.find("font#co3").removeClass("yellow");
			}
		function Weak()
			{
				$addstyle.find("font#co1").addClass("red");
				$addstyle.find("font#co2").removeClass("blue");
				$addstyle.find("font#co3").removeClass("yellow");
			}
		function Medius()
			{
				$addstyle.find("font#co1").addClass("red");
				$addstyle.find("font#co2").addClass("blue");
				$addstyle.find("font#co3").removeClass("yellow");
			}
		function Strong()
			{
				$addstyle.find("font#co1").addClass("red");
				$addstyle.find("font#co2").addClass("blue");
				$addstyle.find("font#co3").addClass("yellow");
			}
		function checkWord(obj_input)
			{
				var txtcon = $.trim(obj_input.val());
				var len = txtcon.length;
				var maths = /\d/.test(txtcon);//测试是不是数字。
				var smalls = /[a-z]/.test(txtcon)
				var bigs = /[A-Z]/.test(txtcon);
				var corps = /\W/.test(txtcon);
				var num = maths + smalls + bigs + corps;
				if(len<1)
				{
					Primary();
				}else if (len<6)
				{
					Weak();
				}else if (len>6 && len<8)
				{
					if(num==1){Weak();};
					if(num==2){Medius();};
				}else if (len>8)
				{
					if(num==1){Weak();};
					if(num==2){Medius();};
					if(num==3){Strong();};
				}
			}
		$qr_pwd.blur(function(){
			var text2 = $(this).val();
			var txt = $pwd.val();
			if(text2!=txt)
			{
				$qr_pwd_color.css("color","red");
			}
			else
			{
				$qr_pwd_color.css("color","#ddd");
			}
			
		});
		$email.focus(function(){
			var txt = $(this).val("");
			if(txt=="请输入密码")
			{
				$email_color.css("color","red");
				$(this).val("")
			}else
			{
				$email_color.css("color","#ddd");
			}
			var re=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
			var bool = re.test(txt);
			if(!bool)
			{
				$email_color.css("color","red");
				return;
			}
		});
		$email.blur(function(){
			var txt2 = $(this).val();
			if(txt2=="")
			{
				$(this).val("请输入密码")
			}
		});
});
/*register页面结束*/