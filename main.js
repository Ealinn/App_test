$(function () {
  $(".supply-form__input").focus(function() {
    $(".supply-form__append").addClass("focus");
  });
  $(".supply-form__input").focusout(function () {
    $(".supply-form__append").removeClass("focus");
  });
  // Bootstrap Calendar
  $("#dateselect").datepicker({
    format: "mm/dd/yyyy",
    autoclose: true,
  });
});
