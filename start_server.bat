@echo off
REM Simple local server for the luxury restaurant site
REM Ensure Python is installed and in PATH.
cd /d "%~dp0"
python -m http.server 8000
pause
