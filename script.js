$(document).ready(function () {
  $("input#class-search").change(function() {
    $("#status").text("searching...");
    var searchterm = $(this).val();
    var setTimer = setTimeout(function() {
      showAll();
      var results = search(searchterm);
      $("#status").text("done. ("+results+" results)");
    }, 1);
  });
});

function search(searchstring) {
  var regex = new RegExp(searchstring, "i");
  var counter = 0;
  $("#list").find("li").each(function () {
      if (!$(this).find("a").text().match(regex)) {
	$(this).css({'display':'none'});
      } else {
	counter += 1;
      }
  });
  return counter;
};

function showAll() {
  $("#list").find("li").each(function () {
    $(this).css({'display':'list-item'});
  });
};