
$(function(){
	//Open freshaz
  	$("#profile").addClass("loaded");
  	var flags = {prev:"", open:false};

	//==================== ICON ANIMATIONS ====================
	$('.icon-container img').hover(
		function() {
	    	$(this).css({"cursor":"pointer", "left":"30px","padding-left":"-30px"});
	    	$("#desc-container").css("display","block");
	    	id = '#' + $(this).attr('data-id');
	    	$(id).animate({ 
	    		color: "#444444" 
	    	}, 250);
		}, 
		function() {
		    $(this).css({"cursor":"auto", "left":"0px","padding-left":"20px"});	
		    $("#desc-container").css("display","none");
		    id = '#' + $(this).attr('data-id');
			$(id).animate({ 
				color: "white" 
			}, 250);
		}
	);	

	//==================== MENU BINDINGS ====================

	/*
	window.addEventListener('click', function(e){   
  		if (document.getElementById('clickbox').contains(e.target)){
   			// Clicked in box
  		} else{
   		 // Clicked outside the box
  		}
	});
	*/

	function draw(option){
		$("#typed").hide();
		if (!(flags.open)){
			$("#profile").addClass("shrinker");
			$("#profile").removeClass("loaded");
			setTimeout(draw_top,0)
			setTimeout(draw_right,500)
			setTimeout(draw_bottom,1000)
			setTimeout(draw_left,1500)
			setTimeout(filler,2000)

			flags.open = true;
			flags.prev=$(option).attr('data-id');
			pageHandler(flags.prev);
		} else {
			if (flags.prev == $(option).attr('data-id')){
				$('#content_wrapper').stop().animate({
         			backgroundColor: "transparent"
        		}, 150 );
				$("#profile").addClass("loaded");
				
				$("#top").animate({width:'0%'}, 800);
				$("#right").animate({height:'0%'}, 800);
				$("#bottom").animate({width:'0%'}, 800);
				$("#left").animate({height:'0%'}, 800);

				$("div.main").animate({opacity:'0'}, 800);

				flags.open = false;

				$("#typed").text('Hi, I\'m Vishaal').fadeIn("slow");

			} else {
				flags.prev = $(option).attr('data-id')
				//build page
				pageHandler($(option).attr('data-id'));

			}
		}
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
	function filler(){
		$('#content_wrapper').animate({
          		backgroundColor: "#FCF6E3"
        	}, 1000 );
		$('div.main').animate({
          		opacity:1
        	}, 2000 );
	}

	
	function pageHandler(page){
		var html;
		//$("#typed").hide();
		switch (page) {
			case ("about_me"):
				$("#about_page").fadeIn().css("display","block");
				$("#work_page").fadeOut().css("display","none");
				$("#contact_page").fadeOut().css("display","none");

				$("#typed").text('About Me').fadeIn("slow");
				break;
			case ("my_work"):
				$("#about_page").fadeOut().css("display","none");
				$("#work_page").fadeIn().css("display","block");
				$("#contact_page").fadeOut().css("display","none");

				$("#typed").text('My Work').fadeIn("slow");
				break;
			case ("contact_more"):
				$("#about_page").fadeOut().css("display","none");
				$("#work_page").fadeOut().css("display","none");
				$("#contact_page").fadeIn().css("display","block");

				$("#typed").text('Contact +').fadeIn("slow");
				break;
		}
		//return html;
	}

	$("div.navbar span.cancel").on("click",function(){
		$('#content_wrapper').stop().animate({
         	backgroundColor: "transparent"
        }, 150 );
		$("#profile").addClass("loaded");
		$("#top").animate({width:'0%'}, 800);
		$("#right").animate({height:'0%'}, 800);
		$("#bottom").animate({width:'0%'}, 800);
		$("#left").animate({height:'0%'}, 800);
		$("div.main").animate({opacity:'0'}, 800);

		flags.prev="";
		flags.open=false;
		$("#typed").hide();
		$("#typed").text('Hi, I\'m Vishaal').fadeIn("slow");
	})

	$('.icon-container img').on("click", function(){
		var section = $(this).attr('data-id')
		
		switch (section) {	
			case "about_me":
				console.log(1)
				draw(this);
				break;
			case "my_work":
				console.log(2)
				draw(this);
				break;
			case "contact_more":
				console.log(3)
				draw(this);
				break;
			default:
				console.log("to do");
		}
	});	

	//==================== CANVAS ANIMATIONS ====================

	
});

	

