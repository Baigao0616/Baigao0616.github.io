$(document).ready(function(){
  $("img").hide();

  $("#b1").click(function () {
    $("#p1").fadeIn(1000);
  });
  $("#p1").click(function () {
    $("#p1").fadeOut(800);
    $("img").hide();
  });


  $("#b2").click(function () {
    $("#p2").fadeIn(1000);
  });
  $("#p2").click(function () {
    $("#p2").fadeOut(800);
    $("img").hide();
  });


  $("#b3").click(function () {
    $("#p3").fadeIn(1000);
  });
  $("#p3").click(function () {
    $("#p3").fadeOut(800);
    $("img").hide();
  });


    $("#b4").click(function () {
    $("#p4").fadeIn(1000);
  });
  $("#p4").click(function () {
    $("#p4").fadeOut(800);
    $("img").hide();
  });


  $("#b5").click(function () {
    $("#p5").fadeIn(1000);
  });
  $("#p5").click(function () {
    $("#p5").fadeOut(800);
    $("img").hide();
  });


  $("#b6").click(function () {
    $("#p6").fadeIn(1000);
  });
  $("#p6").click(function () {
    $("#p6").fadeOut(800);
    $("img").hide();
  });

  $("#b7").click(function () {
    $("#p7").fadeIn(1000);
  });
  $("#p7").click(function () {
    $("#p7").fadeOut(800);
    $("img").hide();
  });

  $("#b8").click(function () {
    $("#p8").fadeIn(1000);
  });
  $("#p8").click(function () {
    $("#p8").fadeOut(800);
    $("img").hide();
  });

  $("#b9").click(function () {
    $("#p9").fadeIn(1000);
  });
  $("#p9").click(function () {
    $("#p9").fadeOut(800);
    $("img").hide();
  });

  $("#b10").click(function () {
    $("#p10").fadeIn(1000);
  });
  $("#p10").click(function () {
    $("#p10").fadeOut(800);
    $("img").hide();
  });

  $(".f1").click(function () {
    $("span:first()").hide(10);
    $(".m-tb").hide(10);
    $(".g-index").fadeIn(10);
  });
  $(".f2").click(function () {
    $("span:first()").fadeIn(10);
    $(".g-index").hide();
    $(".m-tb").hide(10);
  });
  $(".f3").click(function () {
    getId();
    $(".m-tb").fadeIn(10);
    $("span:first()").hide(10);
    $(".g-index").hide();
  });
  $(".t-del").click(function () {
    var self=$(this);
    self.parent().parent().remove();
    getId();
  });
  $(".add").click(function (){
    $("tr:last()").after("<tr class=\"relative\">\n" +
            "            <td class=\"t-id\"></td>\n" +
            "            <td>2</td>\n" +
            "            <td>3</td>\n" +
            "            <td>4</td>\n" +
            "            <td>4</td>\n" +
            "            <td>5</td>\n" +
            "            <td>\n" +
            "                <button class=\"t-del\" name=\"deleteEvent\">删除</button>\n" +
            "            </td>\n" +
            "        </tr>");
    getId();
    $(".t-del").click(function () {
    var self=$(this);
    self.parent().parent().remove();
    getId();
  });
  });
});
function getId(){
  var id=1;
    $("tr").each(function(){
        var self=$(this);
        self.children(":first").html(id++);
  });

  

