@echo on
echo "Build"
call npm run build
echo "Commit Build"
call git commit -a -m "Build"
echo "Push"
call git push
echo "Done"