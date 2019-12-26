$(function(){

	//$("#profile").animate({opacity:'1'}, 800);
	$("#profile").animate({
		width: "100%",
		height: "100%",
	}, 800 );

	$("div.menu").animate({opacity:'1'}, 800);

	var global = {open:false,currentpage:""};

	/*
	$('.menu img').hover(
		function() {
	    	$(this).css({"cursor":"pointer"});
	    	$(this).parent("p").css({"padding-left":"20px"});
	    	$(this).next().fadeIn("fast").css("display","table-cell");
		}, 
		function() {
		    $(this).css({"cursor":"auto"});
	    	$(this).parent("p").css({"padding-left":"0px"});
	    	$(this).next().fadeOut("fast").css("display","table-cell");;
		}
	);	
	*/

	$('.menu img').hover(
		function() {
			$('#' + $(this).attr('data-role')).css("opacity",1);
		}, 
		function() {
			$('#' + $(this).attr('data-role')).css("opacity",0);
		}
	);	

	function draw(){
		setTimeout(draw_top,0)
		setTimeout(draw_right,500)
		setTimeout(draw_bottom,1000)
		setTimeout(draw_left,1500)
	}

	function draw_top(){
		$("#top").animate({width:'100%'}, 500);
	}
	function draw_right(){
		$("#right").animate({height:'100%'}, 500);
	}
	function draw_bottom(){
		$("#bottom").animate({width:'100%'}, 500);
	}
	function draw_left(){
		$("#left").animate({height:'100%'}, 500);
	}

	$("#navbar-cancel").on("click",function(){	
		closePage();
	})

	function closePage(){
		selector = "#" + global.currentpage
		$(selector).removeClass("page-notransition");
		$(selector).addClass("page-transition");
		global.open = false;
		global.currentpage = "";
		$("#top").animate({width:'0%'}, 800);
		$("#right").animate({height:'0%'}, 800);
		$("#bottom").animate({width:'0%'}, 800);
		$("#left").animate({height:'0%'}, 800);

		$("#about_page").css("opacity",0);
		$("#work_page").css("opacity",0);
		$("#contact_page").css("opacity",0);
	}
		

	$('.menu img').on("click", function(){
		var section = $(this).attr('data-id');
		if (!global.open) {
			pageHandler(section);
			draw();
		} else {
			if (global.currentpage==section){
				closePage();
			} else {
				pageHandler(section);
			}
		}
	});	

	function pageHandler(section){
		switch (section) {	
			case "about_page":
				$("#about_page").show();
				if (!global.open){
					$("#about_page").addClass("page-transition")
					$("#about_page").removeClass("page-notransition")
				} else {
					$("#about_page").removeClass("page-transition")
					$("#about_page").addClass("page-notransition")
				}
				$("#about_page").css("opacity",1);

				$("#work_page").hide();
				$("#work_page").css("opacity",0);

				$("#contact_page").hide();
				$("#contact_page").css("opacity",0);
			
				break;
			case "work_page":
				$("#work_page").show();
				if (!global.open){
					$("#work_page").addClass("page-transition")
					$("#work_page").removeClass("page-notransition")
				} else {
					$("#work_page").removeClass("page-transition")
					$("#work_page").addClass("page-notransition")
				}
				$("#work_page").css("opacity",1);

				$("#about_page").hide();
				$("#about_page").css("opacity",0);

				$("#contact_page").hide();
				$("#contact_page").css("opacity",0);
			

				break;
			case "contact_page":
				$("#contact_page").show();
				if (!global.open){
					$("#contact_page").addClass("page-transition")
					$("#contact_page").removeClass("page-notransition")
				} else {
					$("#contact_page").removeClass("page-transition")
					$("#contact_page").addClass("page-notransition")
				}
				$("#contact_page").css("opacity",1);

				$("#work_page").hide();
				$("#work_page").css("opacity",0);

				$("#about_page").hide();
				$("#about_page").css("opacity",0);
				break;
			default:
				console.log("to do");
		}

		global.currentpage=section;
		global.open=true;
	}
});