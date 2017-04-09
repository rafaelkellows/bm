$(function(){ 
	(function() {
		var bmaxima = {
	        init: function() {
	        	this.menu();
	            this.setHeader();
	            this.rszWindow();
	            this.carrossel();
	            this.simulator();
	            this.contentsBreadCrumb();
	            this.setMinusBreadCrumb();
	        },
	        setHeader : function(elem){
		        var offset = 180;
		        var duration = 500;
		        jQuery(window).scroll(function() {
					if( $(window).width() > 1024 ){
						if (jQuery(this).scrollTop() > offset) {
							$('body main header').addClass('minus');
						} else {
							$('body main header').removeClass('minus');
						}
					}
				});
	        },
	        rszWindow : function () {
				$(window).resize(function() {
					//To Responsive Main Menu
					if ($(window).width() < 1024){
						$('body main header').removeClass('minus'); 
					}
					//To Responsive BreadCrumb
					bmaxima.setMinusBreadCrumb();
				});
	        },
	        carrossel: function() {
				var owl = $("section.carrossel > div"); 
				if(!owl.length) return;
				owl.owlCarousel({
					autoplay:false,
					smartSpeed: 600,
				    loop:true,
				    margin:0,
				    nav:false,
				    responsive:{
				        0:{
				            items:1
				        },
				        600:{
				            items:1
				        },
				        1000:{
				            items:1
				        }
				    }
				})
				if(!owl.length) return -1;
				owl.owlCarousel({
					slideSpeed : 1500,
					paginationSpeed : 1000,
					singleItem:true,
					autoPlay:4000
				}); 
	        },
	        simulator: function () {
	        	var line_width = 417, _e, _l, _d; //440 timeline width minus 23px bullter with
	        	var estimated = ['100.000','200.000','300.000','400.000','500.000','600.000','700.000','800.000','900.000','1.000.000'];
	        	var loan = ['50.000','100.000','150.000','200.000','250.000','300.000','350.000','400.000','450.000','500.000','550.000','600.000','650.000','700.000','750.000','800.000','850.000','900.000','950.000','1.000.000'];
	        	var deadline = ['3','6','9','12','15','18','21','24','27','30','33','36'];
	            var set_total = function(){
	            	$("body main section.content._simulator .container div.total .currency").html(parseInt(_l/_d).toFixed(2));
	            }
	            $("body main section.content._simulator .container div.estimated .timeline i").draggable({
	            	axis: "x", containment: "body main section.content._simulator .container div.estimated .timeline", scroll: false,
	            	drag: function( event, ui ) {
					    $(this).closest('div').find('.currency').html( estimated[parseInt(ui.position.left / (line_width/estimated.length) )] );
					    _e = estimated[parseInt(ui.position.left / (line_width/estimated.length) )]
					    set_total();
					}
	            });
	            $("body main section.content._simulator .container div.loan .timeline i").draggable({
	            	axis: "x", containment: "body main section.content._simulator .container div.loan .timeline", scroll: false,
	            	drag: function( event, ui ) {
					    $(this).closest('div').find('.currency').html( loan[parseInt(ui.position.left / (line_width/loan.length) )] );
					    _l = loan[parseInt(ui.position.left / (line_width/loan.length) )]
					    set_total();
					}
	            });
	            $("body main section.content._simulator .container div.deadline .timeline i").draggable({
	            	axis: "x", containment: "body main section.content._simulator .container div.deadline .timeline", scroll: false,
	            	drag: function( event, ui ) {
					    $(this).closest('div').find('.month').html( deadline[parseInt(ui.position.left / (line_width/deadline.length) )] );
					    _d = deadline[parseInt(ui.position.left / (line_width/deadline.length) )]
					    set_total();
					}
	            });
	            _e = estimated[0],_l = loan[0],_d = deadline[0];
	        },
	        anchorPage : function(){
	        	var _hash = location.hash;
	        	return _hash;
	        },
	        menu: function() {
        		var nav = $('header .main-navg');
        		//Mobile Menu Event
	        	nav.find('> a').click(function(e){
	        		_nav = $(this).next('nav');
	        		if( _nav.is(":visible") ){
	        			$(this).removeClass('active').next('nav').hide();
	        		}else{
	        			$(this).addClass('active').next('nav').show();
	        		}
	        		//if( )
	        		
	        	});
	        	nav.find('nav a').click(function(e){
	        		//e.preventDefault();
	        		location.reload();
	        	});
	        	if( $('body').attr('class') != undefined ){
	        		if(!$("body[class^='page-']").length) return;
	        		var _currpage = $('body').attr('class').substring(5);
	        		$('body main header .main-navg li a').removeClass('active');
	        		$('body main header .main-navg li a.'+_currpage).addClass('active');
	        	}
	        	
	        },
	        setMinusBreadCrumb : function () {
				//To Responsive BreadCrumb
				if( $(window).width() < 768 ){
					$('body main article .nav-contents').addClass('minus');
				} else {
					$('body main article .nav-contents').removeClass('minus');
				}
			},
	        contentsBreadCrumb: function () {
	        	
	        	var cnt = $('.contents');
				var nav = $('.nav-contents');
	        	if(!cnt.length) return;
	        	if(!cnt.find("div[class^='cnt-']").length) return;
				if(!bmaxima.anchorPage().length) {
		        	$('.contents').find('>div').eq(0).show();
		        	nav.find('li').eq(0).addClass('active');
				}else{
					var _idlink = String(bmaxima.anchorPage().substring(1));
		        	cnt.find(".cnt-"+_idlink).show();
		        	nav.find('li a.'+_idlink).parent().addClass('active');
		        	if( $(window).width() > 768 ){
		        		jQuery('html, body').animate({scrollTop: nav.find('li a.'+_idlink).offset().top  - 170}, 250);
		        	}else{
		        		setTimeout(function(){
		        			jQuery('html, body').animate({scrollTop: 0}, 10);
		        		},100);
		        	}
				}
	        	if(!nav.length) return;
	        	nav.find('a').click(function(e){
	        		if( $(window).width() < 768 ){
	        			if( $(this).parent().attr('class') != undefined ){
	        				if( $(this).parent().attr('class').indexOf('active') > -1 ){
		        				e.preventDefault();
		        				$(this).closest('.nav-contents').removeClass('minus');
		        				return;
	        				}
	        			}
		        		location.reload();
	        		}else{
		        		location.reload();
	        		}
	        	});
	        },
	        scrollTo : function(elem){
				jQuery('html, body').animate({scrollTop: 0}, duration);
				return false;
	        }
	    }
		bmaxima.init();
	})();
});