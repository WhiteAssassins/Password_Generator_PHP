

$(document).ready(function () {
    $('#generateBtn').click(function () {
        var length = $('#passwordLength').val();
        var selectedTypes = $("input[name='characterType']:checked");

        var charset = '';
        selectedTypes.each(function () {
            var type = $(this).attr('id');
            charset += characterSets[type];
        });

        var password = generatePassword(length, charset);
        $('#password').text(password).addClass('animate__animated animate__fadeIn');
        setTimeout(function () {
            $('#password').removeClass('animate__animated animate__fadeIn');
        }, 1000);
    });

    $('#modeSwitch').click(function () {
        $('div').toggleClass('bg-gray-700 '); // Cambia entre los colores de fondo claro y oscuro
        $('div').toggleClass('text-white text-black'); // Cambia entre los colores de texto claro y oscuro
    });
});

var characterSets = {
    includeUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    includeLowercase: 'abcdefghijklmnopqrstuvwxyz',
    includeNumbers: '0123456789',
    includeSpecialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
};

function generatePassword(length, charset) {
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}
