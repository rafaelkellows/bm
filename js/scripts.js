$(function(){ 
	(function() {
		var bmaxima = {
	        init: function() {
	            this.toTop();
	            this.rszWindow();
	            this.carrossel();
	            this.simulator();
	            this.contentsBreadCrumb();
	        },
	        menu: function() {
        		var _opnd, _c;
	        	$('').click(function(){
	        	
	        	}).hover(
	        		function(){	        			
	        		},
	        		function(){
	        		}
	        	);
	        },
	        toTop : function(elem){
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
		        jQuery(elem).click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
		        })
	        },
	        rszWindow : function () {
				$(window).resize(function() {
					if ($(window).width() < 1024){
						$('body main header').removeClass('minus'); 
					}
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
	        contentsBreadCrumb: function () {
	        	
	        	var cnt = $('.contents');
				var nav = $('.nav-contents, .main-navg');
	        	if(!cnt.length) return;
	        	if(!cnt.find("div[class^='cnt-']").length) return;
				if(!bmaxima.anchorPage().length) {
		        	$('.contents').find('>div').eq(0).show();
		        	nav.find('li').first().find('a').addClass('active');
				}else{
					var _idlink = String(bmaxima.anchorPage().substring(1));
		        	cnt.find(".cnt-"+_idlink).show();
		        	nav.find('li a.'+_idlink).parent().addClass('active');
				}
	        	if(!nav.length) return;
	        	nav.find('a').click(function(){
	        		location.reload();
	        	});
	        }
	    }
		bmaxima.init();
	})();
});