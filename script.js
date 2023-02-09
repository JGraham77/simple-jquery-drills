const $txtSubmit = $(`#txtSubmit`);

const $btnSubmit = $(`#btnSubmit`);


//Select input with jQuery, on click add alert
$btnSubmit.click(function () {
    alert($txtSubmit.val());
});

$txtSubmit.keyup(() => {
    if ($txtSubmit.val() !== '') {
        // Allows the button to be used
        $btnSubmit.attr('disabled', false);
    }
});