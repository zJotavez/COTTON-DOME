<?php
/**
 * Diagnostic Page
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>Cotton Dome Diagnósticos</h1>";
echo "<p>PHP Version: " . phpversion() . "</p>";

include_once __DIR__ . '/api/config.php';

$passwordToTest = '#CD2026lda';
$hashGenerated = password_hash($passwordToTest, PASSWORD_DEFAULT);
$verifySelf = password_verify($passwordToTest, $hashGenerated);
$verifyConfig = password_verify($passwordToTest, ADMIN_PASSWORD_HASH);

echo "<h2>Depuração de Autenticação</h2>";
echo "<p>ADMIN_USERNAME: " . ADMIN_USERNAME . "</p>";
echo "<p>ADMIN_PASSWORD_HASH: " . ADMIN_PASSWORD_HASH . "</p>";
echo "<p>Verificar contra si mesmo: " . ($verifySelf ? 'SIM (Sucesso)' : 'NÃO (Falha)') . "</p>";
echo "<p>Verificar contra o Hash do Config: " . ($verifyConfig ? 'SIM (Sucesso)' : 'NÃO (Falha)') . "</p>";
