(function($){
  $(function(){

  	$("#univalle-gram-btn-control-panel").on("click", function() {
  		if(!$("#univalle-gram-main-control-panel").is(":hidden")) {
  			$("#univalle-gram-main-control-panel").hide();
  			$("#univalle-gram-secondary-control-panel").show();
  			/*let initialColumn = $(".univalle-gram-initial-column");
  			initialColumn.removeAttr("class");
  			initialColumn.attr("class", "univalle-gram-initial-column col s2 m2 l2 xl2");
  			$(".univalle-gram-extra-column").show();*/
  		} else {
  			$("#univalle-gram-main-control-panel").show();
  			$("#univalle-gram-secondary-control-panel").hide();
  			/*let initialColumn = $(".univalle-gram-initial-column"); 
  			initialColumn.removeAttr("class");
  			initialColumn.attr("class", "univalle-gram-initial-column col s3 m3 l3 xl3");
  			$(".univalle-gram-extra-column").hide();*/  			
  		}
  	});
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
     $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space
