// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {


  $(".submarine").on("click", function (){
      var inputData = ($("input").val());
    $.ajax({
               type: "POST",
               url: "/shoes",
               data: { "shoe": { "material": inputData } },
               success: function(data) {
                 console.log(data)

                 var show_link = "<a href= '/shoes/" + data.id + "'>Show</a>";
                 var edit_link = "<a href= '/shoes/" + data.id + "'>Edit</a>";
                 var delete_link = "<a href= '/shoes/" + data.id + "'>Destroy</a>";


                 $("tbody").append(data.material + " " + show_link + edit_link + delete_link);
               }
    })
  })
});

// "<h1>" + data.material + "</h1>"
                  //  console.log(data)

              //  data: {"Submarine rack": {"material": "panther"} },

// $( "#target" ).click(function() {
//   alert( "Handler for .click() called." );
// });
