jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

$(document).ready(function () {
  $("input#class-search").change(function() {
    var term = $(this).val();
    //$("#status").text(term);
    var list = $("#list");
    if (term) {
      $matches = list.find('a:Contains(' + term + ')').parent();
      $('li', list).not($matches).css({'display':'none'});
      $matches.css({'display':'list-item'});
    } else {
      list.find("li").css({'display':'list-item'});
    }
  });
  
  $("a").click(function() {
    showPage($(this).attr('href'));
    return false;
  });
});

function showPage(url) {
  $("#content").attr('src', url);
}