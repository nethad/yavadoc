$(document).ready(function () {
  $("#status").hide();
  $("input#class-search").change(function() {
    $("#status").show();
    showAll();
    search($(this).val());
    $("#status").text("done.");
  });
});

function search(searchstring) {
  var regex = new RegExp(searchstring, "i");
  $("#list").find("li").each(function () {
      if (!$(this).find("a").text().match(regex)) {
	$(this).css({'display':'none'});
      }
  });
};

function showAll() {
  $("#list").find("li").each(function () {
    $(this).css({'display':'list-item'});
  });
};