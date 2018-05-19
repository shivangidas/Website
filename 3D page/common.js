$(document).ready(function(){
  $('.show-front').click(function(){    
    $("#cube").removeClass (function (index, className) {
    return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
});
    $('#cube').addClass('show-front');
  });
   $('.show-back').click(function(){    
    $("#cube").removeClass (function (index, className) {
    return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
});
    $('#cube').addClass('show-back');
  });
  $('.show-right').click(function(){    
    $("#cube").removeClass (function (index, className) {
    return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
});
    $('#cube').addClass('show-right');
  });
  
  $('.show-left').click(function(){    
    $("#cube").removeClass (function (index, className) {
    return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
});
    $('#cube').addClass('show-left');
  });
  $('.show-top').click(function(){    
    $("#cube").removeClass (function (index, className) {
    return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
});
    $('#cube').addClass('show-top');
  });
  $('.show-bottom').click(function(){    
    $("#cube").removeClass (function (index, className) {
    return (className.match (/(^|\s)show-\S+/g) || []).join(' ');
});
    $('#cube').addClass('show-bottom');
  });
});
