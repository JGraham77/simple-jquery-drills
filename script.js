//Select input with jQuery, on click add alert
$(`#btnSubmit`).click(function () {
    alert($(`#txtSubmit`).val());
});