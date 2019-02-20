$(document).ready(function () {

    $("#addButton").click(function () {
        $("#list").append("<li><b>" + $("#field1").val() + "  : </b>     " + $("#field2").val() + " <button href='' id='removeButton' class='btn btn-danger btn-sm'>Remove</button></li>")
   });

    $("#list").sortable({
        axis: "y"
    }).disableSelection();
});

$(document).on("click", "#removeButton", function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
});