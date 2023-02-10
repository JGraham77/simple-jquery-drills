const $txtSubmit = $(`#txtSubmit`);

const $btnSubmit = $(`#btnSubmit`);


//Select input with jQuery, on click add alert
$btnSubmit.click(function () {
    alert($txtSubmit.val());
});

// Enables $btnSubmit when there is any text in $txtSubmit
$txtSubmit.keyup(() => {
    if ($txtSubmit.val() !== '') {
        // Allows the button to be used
        $btnSubmit.attr('disabled', false);
    }
});

// Create div and append to body
const $div = $(`<div class='container'></div>`);
$div.appendTo('body');

// $btnSubmit.click(() => {
//     $div.append(`<h2>${$txtSubmit.val()}</h2>`);
//     $txtSubmit.val('');
// });

// // Get random color
// const vals = "0123456789ABCDEF";
// let colorString = "#";
// for (let i = 0; i < 6; i++) {
//     const char = vals[Math.floor(Math.random() * vals.length)];
//     colorString += char
// };


// // Mouseover h2 to change color
// $('h2').mouseover(function () {
//     const thisColorString = colorString();
//     $('h2').css({
//         'background-color': thisColorString,
//         'border-radius': '0.25rem'
//     });
// });

const $ul = $(`<ul></ul>`);
$ul.appendTo('body');

$btnSubmit.click(() => {
    $ul.append(`<li>${$txtSubmit.val()}</li>`)

    const vals = "0123456789ABCDEF";
    let colorString = "#";
    for (let i = 0; i < 6; i++) {
        let char = vals[Math.floor(Math.random() * vals.length)];
        colorString += char
    };

    $('li').click(function () {
        $('li').css('color', colorString);
    });

    $('li').dblclick(function () {
        $(event.target).remove();
    });
});