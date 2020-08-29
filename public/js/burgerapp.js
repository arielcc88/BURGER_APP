$(document).ready(function(){
    //initializing tooltips
    $('[data-toggle="tooltip"]').tooltip();

    $(".add-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        const queueBurger = {
          brgname: $("#brg-name").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: queueBurger
        }).then(
          function() {
            console.log("new burger queued");
            // Reload the page to get the updated list of burgers
            location.reload();
          }
        );
    });

    //updating devour state
    $(".list-group-item-action").on("click", function () {
        // Send the POST request.
        $.ajax("/api/burger/" + $(this).attr("data-id"), {
            type: "PUT",
          }).then(
            function() {
              console.log("burger devoured");
              // Reload the page to get the updated list of burgers
              location.reload();
            }
          );
    });
});