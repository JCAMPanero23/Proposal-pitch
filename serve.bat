@echo off
REM Canvas From The Sky — local preview server.
REM Double-click this file (or run from any shell) to serve the pitch
REM deck on http://localhost:8765. Stop with Ctrl+C.
REM
REM Requires Node.js on PATH (Node 18+).

setlocal

REM %~dp0 resolves to this file's directory, so the script runs from
REM any working directory without needing an explicit cd.
set "SCRIPT=%~dp0tools\serve.cjs"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo   Node.js was not found on your PATH.
  echo   Install it from https://nodejs.org/ and try again.
  echo.
  pause
  exit /b 1
)

if not exist "%SCRIPT%" (
  echo.
  echo   Cannot find tools\serve.cjs next to this batch file.
  echo   Make sure serve.bat lives in the project root.
  echo.
  pause
  exit /b 1
)

node "%SCRIPT%"

REM If the server stops because of an error, keep the window open so the
REM message stays visible.
if errorlevel 1 pause

endlocal
