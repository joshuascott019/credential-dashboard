@echo off
title Credential Dashboard
cd /d "%~dp0"

if not exist node_modules (
    echo Installing dependencies...
    npm install
    echo.
)

echo Credential Dashboard starting...
echo Press Ctrl+C to stop.
echo.

start /b powershell -WindowStyle Hidden -Command "Start-Sleep 1; Start-Process 'http://localhost:3000'"
node server.js
