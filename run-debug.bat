@echo off
SET mypath=%~dp0
IF "%mypath:~-1%"=="\" SET "mypath=%mypath:~0,-1%"

call build-debug.bat

echo Running debug

start "" "%mypath%\debug\index.htm"