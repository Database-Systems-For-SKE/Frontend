/**
 * Created by methawee on 4/13/2017 AD.
 */

$(document).ready(function () {
    $('.input-daterange').datepicker({
        format: "dd/mm/yyyy",
        toggleActive: true
    });
}),


$(document).ready(function(){
    var $datepicker1 =  $( "#checkin" );
    var $datepicker2 =  $( "#checkout" );
    $datepicker1.datepicker();
    $datepicker2.datepicker({
        onClose: function() {
            var fromDate = $datepicker1.datepicker('getDate');
            var toDate = $datepicker2.datepicker('getDate');
            var diff = new Date(toDate - fromDate);
            var days = (diff)/1000/60/60/24;
            alert(days);
           $(document.body).append(days);
        }
    });
});

