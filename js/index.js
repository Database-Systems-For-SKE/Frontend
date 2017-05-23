/**
 * Created by methawee on 5/10/2017 AD.
 */

$(document).ready(function() {
    $("#team a").click(function(event) {
        var id  = event.currentTarget.attributes.id.value;
        Cookies.set('RoomTypeID', id);
        window.location.href = "registration.html"
    });
    console.log(Cookies.get('RoomTypeID'));
});