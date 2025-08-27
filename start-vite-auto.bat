@echo off
setlocal enabledelayedexpansion

REM Default port
set PORT=5173
set MAX_PORT=5199
set FOUND=0

REM Check for available port
:find_port
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :!PORT!') do (
    set /a PORT+=1
    if !PORT! gtr %MAX_PORT% (
        echo No available port found between 5173 and %MAX_PORT%.
        exit /b 1
    )
    goto find_port
)

REM Start Vite dev server on available port
start cmd /k "npm run dev -- --port !PORT!"

REM Wait for server to start (adjust delay if needed)
timeout /t 3 >nul

REM Open browser to the correct port
start "" http://localhost:!PORT!/

endlocal
