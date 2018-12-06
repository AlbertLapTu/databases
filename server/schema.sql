USE chat;

CREATE TABLE messages (
  username varchar(255) NOT NULL PRIMARY KEY,
  id int NOT NULL,
  roomname varchar(255) NOT NULL,
  text varchar(255)
  FOREIGN KEY (username) REFERENCES username(name),
  FOREIGN KEY (roomname) REFERENCES roomname(roomname),
  FOREIGN KEY (text) REFERENCES text(text)
);

CREATE TABLE username (
  name varchar(255) NOT NULL PRIMARY KEY,
  id int NOT NULL-- CREATE DATABASE chat;
);

CREATE TABLE roomname (
  roomname varchar(255) NOT NULL PRIMARY KEY,
  id int NOT NULL
);

CREATE TABLE text (
  text varchar(255) NOT NULL PRIMARY KEY,
  id INT NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

