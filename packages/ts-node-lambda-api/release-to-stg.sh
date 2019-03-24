echo 'Releasing to Staging'

echo 'Cleaning'
npm run clean
echo 'Building'
npm run build:prod

echo 'Getting minimum files for packaging'
mkdir temp && cp -a ./dist/* ./temp 
cp package.json ./temp
cp serverless/* ./temp

cd temp
echo 'Installing only production dependencies'
npm install --only=prod
rm package.json package-lock.json

serverless deploy -g
echo 'Package generated successfully'
cd ..;
rm -rf temp