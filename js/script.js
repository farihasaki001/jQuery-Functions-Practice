
 function myContent(){
 document.getElementById('text').innerHTML="Hello";
 }


$(document).ready(function(){
	$(".aaa").click(function(){
  alert("The paragraph was clicked.");
});

	$('#11').click(function(){
		$('h1').show(1000);
	});

  $('#12').click(function(){
		$('h1').hide(2000);
	});

   $("p").click(function(){
    $(".pp").hide(100).show(1000);   
  });
    $("p").click(function(){
    $(".ppp").hide(100).show(1000);
    
  });
     $("p").click(function(){
    $(".pppp").hide(100).show(1000);
    
  });

  $("tr:odd").css("background-color", "pink");

   $("#flip").click(function(){
    $("#panel").slideUp("slow");
  });

   $("#flipp").click(function(){
    $("#panelp").slideToggle("slow");
  });
   
   $(".cc").click(function(){
   	 var div = $("div");  
    div.animate({left: '50%'}, "slow");
    div.animate("slow");
  });
    $(".bb").click(function(){
    $("#p1").css("color", "pink").slideUp(2000).slideDown(2000);
  });
 
});


$(document).ready(function(){
  $(".dd").click(function(){
    alert("Value: " + $("#test").val());
  });

  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });
 
  $("#btn11").click(function(){
    $("#test11").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
     });


  $("#btn21").click(function(){
    $("#test21").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });

  $("#qq").click(function(){
    $(".new").prepend("<b>Prepended text</b>. ");
  });
  $("#qqq").click(function(){
    $("ol").prepend("<li>Prepended item</li>");
  });
  $( ".lii" )
  .odd()
    .hide()
  .end()
  .even()
    .hover(function() {
      $( this )
        .toggleClass( "active" )
        .next()
          .stop( true, true )
          .slideToggle();
    });

    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


    $( "#draggable" ).draggable();


	 
});


