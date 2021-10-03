show databases;
CREATE DATABASE IF NOT EXISTS spaceApp;

use spaceApp;


CREATE TABLE  details(
                                ActivityId VARCHAR(55) PRIMARY KEY,
                                Name VARCHAR(100),
                                lblDes VARCHAR (255),
                                Date VARCHAR (20),
                                Time VARCHAR (20)


);
SHOW TABLES ;
DESCRIBE details;

