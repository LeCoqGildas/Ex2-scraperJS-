Ex2-scraperJS-
==============

This scraper are changed, I use WINDOWS!

I added a colorful console, 
* -> color green this take the current date.

* -> color red is loading, and BDD information (if the link is already in mongoDB etc)

* -> color yellow is page infomation

* -> color blue is pages scraped

You can see a litle description of the header pages who are getted (Yellow)
* -> page size

* -> language/server behind the web page (php ? apache ? nginx ? using X-Powered-By)

* -> was compression active ? (Content-Encoding: gzip ?)

* -> the Content-Type

EVERY scrapped pages goes into a database (MongoDB)
I setup mongoDB in C:/ for setup this you can see:
//http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
//http://www.atinux.fr/2011/10/15/tutoriel-sur-mongoose-mongodb-avec-node-js/
(you can see more information in scraper.js)

I also verificate if the links are no duplicates in the BDD

I have a module queue for tack all links

For the HUD, i can't setup node-gui... i dont know why ><
