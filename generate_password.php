<?php
function generatePassword($length = 12) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    return substr(str_shuffle($chars), 0, $length);
}

$length = isset($_GET['length']) ? (int)$_GET['length'] : 12;
$password = generatePassword($length);
echo $password;
?>
