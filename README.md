Ex2-scraperJS-
==============
LE COQ GILDAS, LP SIL

Use WINDOWS!
------------

For run the scraper:
FIRST run mongoDB (please install this in C:/mongodb):
  	-  C:\mongodb\bin\mongod.exe --dbpath C:\mongodb\data
  or 
  	- run serveurMongoDB.bat
NEXT run in ScraperWebKIt/
  	- nw.exe app.nw

The api can scrap urls, and look a litle descrition of this.

The BDD not accept double urls, it's name is scraper, if you would lick to see the links in the bdd you can try:
  go to 
  	- cd C:/mongodb/bin
  	- run mongo.exe
  in the console, try:
      	- use scraper
  if you ould lick to see all links try:
	- db.urls.find()
  or if you would lick to remove this try:
	- db.urls.remove()
	

In a first time y develop this in console, a added colors...
but in the webKit console, the colors are not interpreted
