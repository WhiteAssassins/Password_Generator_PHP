

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
        var strength = evaluatePasswordStrength(password);
        displayPasswordStrength(strength);
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


function evaluatePasswordStrength(password) {
    // Establece las reglas de evaluación de fortaleza de contraseña
    var minLength = 8; // Longitud mínima requerida
    var hasUppercase = /[A-Z]/.test(password); // Presencia de mayúsculas
    var hasLowercase = /[a-z]/.test(password); // Presencia de minúsculas
    var hasNumbers = /\d/.test(password); // Presencia de números
    var hasSpecialChars = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password); // Presencia de caracteres especiales

    // Si la longitud de la contraseña supera los 15 caracteres, agregar un punto adicional
    if (password.length > 15) {
        return 'Muy Fuerte';
    }

    // Calcula la puntuación de la contraseña basada en las reglas
    var score = 0;

    if (password.length >= minLength) {
        score++;
    }

    if (hasUppercase) {
        score++;
    }

    if (hasLowercase) {
        score++;
    }

    if (hasNumbers) {
        score++;
    }

    if (hasSpecialChars) {
        score++;
    }

    // Devuelve una etiqueta que indique la fortaleza de la contraseña
    if (score === 1) {
        return 'Débil';
    } else if (score === 2) {
        return 'Moderada';
    } else if (score >= 3) {
        return 'Fuerte';
    } else {
        return 'Muy Débil';
    }
}


function displayPasswordStrength(strength) {
    var strengthMeter = $('#strengthMeter');
    var meterClasses = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500']; // Colores del medidor para diferentes niveles de fortaleza

    var meterWidth = 0;
    var meterClass = '';

    if (strength === 'Débil') {
        meterWidth = 25;
        meterClass = meterClasses[0];
    } else if (strength === 'Moderada') {
        meterWidth = 50;
        meterClass = meterClasses[1];
    } else if (strength === 'Fuerte') {
        meterWidth = 75;
        meterClass = meterClasses[2];
    }else if (strength === 'Muy Fuerte') {
        meterWidth = 100;
        meterClass = meterClasses[3];
    }  else if (strength === 'Muy Débil') {
        meterWidth = 10; // Puedes ajustar este valor para "Muy Débil"
        meterClass = meterClasses[0];
    }

    strengthMeter.removeClass(meterClasses.join(' ')).addClass(meterClass);
    strengthMeter.animate({ width: meterWidth + '%' }, 500);
}
