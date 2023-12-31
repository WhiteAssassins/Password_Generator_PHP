<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="stylesheet" href="styles.css">
    <title>Generador de Contraseñas</title>
</head>
<body class="bg-cover bg-center bg-fixed" style="background-image: url('night.avif');">
   


<!-- Modal oculto -->
<div id="myModal" class="fixed inset-0 z-50 hidden overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div class="modal-content py-4 text-left px-6">
            <!-- Contenido del modal -->
            <div class="flex justify-between items-center pb-3">
                <p class="text-2xl font-bold">Historial de Cambios</p>
                <button id="closeModalBtn" class="text-2xl font-bold">&times;</button>
            </div>
            <ul id="modalContent">
                <!-- Contenido del historial de cambios -->
              
            </ul>
        </div>
    </div>
</div>









<div class="h-screen flex justify-center items-center bg-opacity-80">
        <div class="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg animate__animated animate__fadeIn">
            
        <h1 class="text-2xl font-semibold mb-4">Generador de Contraseñas Aleatorias</h1>
            <div class="mb-4">
                <label for="passwordLength" class="block font-medium mb-2">Longitud de la Contraseña:</label>
                <input id="passwordLength" type="number" class="w-16 p-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200" min="1" value="12">
            </div>
            <div class="mb-4">
    <label class="block font-medium mb-2">Tipo de Caracteres:</label>
    <input type="checkbox" id="includeUppercase" name="characterType" class="mr-2" checked>
    <label for="includeUppercase" class="mr-4">Mayúsculas</label>
    <input type="checkbox" id="includeLowercase" name="characterType" class="mr-2" checked>
    <label for="includeLowercase" class="mr-4">Minúsculas</label>
    <input type="checkbox" id="includeNumbers" name="characterType" class="mr-2" checked>
    <label for="includeNumbers" class="mr-4">Números</label>
    <input type="checkbox" id="includeSpecialChars" name="characterType" class="mr-2" checked>
    <label for="includeSpecialChars">Caracteres Especiales</label>
</div>


            <div class="flex items-center space-x-2">
                <button id="generateBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Generar Contraseña</button>
                
                <div class="mode-switcher">
                    <label class="switch">
                        <input id="modeSwitch" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <span class="ml-2">Modo Oscuro</span>
                </div>
                
            </div>
            <div id="password" class="text-lg mt-4"></div>
            <div class="mb-2">
    <label class="block font-medium mb-2">Fortaleza de la Contraseña:</label>
    <div class="password-strength-meter">
        <div id="strengthMeter" class="h-2 rounded"></div>
    </div>
<!-- Botón para abrir el modal de historial de cambios -->
<!-- Botón flotante en la esquina inferior derecha -->
<div class="fixed bottom-4 right-4">
    <button id="openHistoryBtn" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        Historial de Cambios
    </button>
</div>


        </div>
         
    </div>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    
</body>
</html>

