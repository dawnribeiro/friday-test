dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t violet-dawn-image ./bin/release/netcoreapp2.2/publish

docker tag violet-dawn-image registry.heroku.com/violet-dawn/web

docker push registry.heroku.com/violet-dawn/web

heroku container:release web -a violet-dawn

# sudo chmod 755 deploy.sh
# ./deploy.sh