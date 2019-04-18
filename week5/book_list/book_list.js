$(document).ready(function() {
    //applies on click to category/h2 tags
    // note: $(this) applies to wrapper rather then object.
    $("#categories h2").click(
        function() {
        $(this).toggleClass("minus");
        //note : == forces type conversion, === only validates value
            //logically i think this is backwards, works, no idea why 
            if ($(this).attr("class") === "minus") {
                $(this).next().show();
            }
            else {
                $(this).next().hide();
            }

            $("#image").attr("src", "");
        }
    );

    // note: any object clicked on with tag 'a' in id list
    $("#web_images a, #java_images a, #net_images a").each(function() {

        var image = $(this).attr("href");
        // on click
        $(this).click(function(imageSwitch) {
            //set clicked image to id 'image'
            $("#image").attr("src", image);

            // note: stops link clink, just shows image
            imageSwitch.preventDefault();
        });
    });
});