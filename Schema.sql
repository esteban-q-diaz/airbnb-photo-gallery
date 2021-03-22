CREATE DATABASE IF NOT EXISTS airbnb;

USE airbnb;

-- drop existing data if it is there.
DROP TABLE IF EXISTS details;

CREATE TABLE details (
  itemNum int NOT NULL AUTO_INCREMENT,
  productId int NOT NULL,
  title varchar(150),
  location varchar(150),
  ratingAverage decimal(4, 2),
  reviews int,
  status varchar(150),
  PRIMARY KEY (itemNum)
);
