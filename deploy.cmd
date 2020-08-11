@echo off
echo ^<--- Build ---^>
call npm run build
echo ^<--- Commit Build ---^>
if "%~1"=="" (call git commit -a -m "Build") else (call git commit -a -m "%~1")
echo ^<--- Push ---^>
call git push
echo ^<--- Done ---^>