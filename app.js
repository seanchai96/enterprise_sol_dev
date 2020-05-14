function request() {
    $.get('includes/config.json', 
      function (data, textStatus, jqXHR) {  
          alert(data);
    });
}
