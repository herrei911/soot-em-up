@echo off
SET mypath=%~dp0
IF "%mypath:~-1%"=="\" SET "mypath=%mypath:~0,-1%"

call build-release.bat

echo Running release

start "" "%mypath%\release\index.htm"