$(".content").hide();
$("#content1").show();

$("#tab1").click(function(){
     $("#tab1").addClass("active");
     $("#tab2").removeClass("active");
     $("#tab3").removeClass("active");

     $("#content1").show();
     $("#content2").hide();
     $("#content3").hide();
});

$("#tab2").click(function(){
    $("#tab1").removeClass("active");
    $("#tab2").addClass("active");
    $("#tab3").removeClass("active");

    $("#content1").hide();
    $("#content2").show();
    $("#content3").hide();
});

$("#tab3").click(function(){
    $("#tab1").removeClass("active");
    $("#tab2").removeClass("active");
    $("#tab3").addClass("active");

    $("#content1").hide();
    $("#content2").hide();
    $("#content3").show();
});