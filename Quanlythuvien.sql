-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: quanlibansach
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Tạo CSDL (nếu chưa có)
CREATE DATABASE IF NOT EXISTS quanlibansach;
USE quanlibansach;

-- Bảng category
DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(256) NOT NULL
);

INSERT INTO category (id, name) VALUES
(1,'Tiểu thuyết'),
(2,'Lãng mạn'),
(3,'Văn học'),
(4,'Hành động'),
(5,'Khoa học viễn tưởng'),
(6,'Giáo dục'),
(7,'Kỹ năng sống'),
(10,'Tâm lý học'),
(11,'Lịch sử'),
(12,'Kinh tế'),
(13,'Chính trị'),
(14,'Non-fiction'),
(15,'Fiction'),
(16,'Hình sự'),
(17,'Triết học'),
(19,'Kỳ ảo');

-- Bảng book
DROP TABLE IF EXISTS book;
CREATE TABLE book (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(256) NOT NULL,
  author VARCHAR(256) NOT NULL,
  publisher VARCHAR(256) NOT NULL,
  publishDate DATE NOT NULL,
  isbn VARCHAR(256) NOT NULL,
  quantity INT NOT NULL,
  categoryId INT,
  isAvailable TINYINT NOT NULL DEFAULT 1,
  image VARCHAR(255),
  FOREIGN KEY (categoryId) REFERENCES category(id)
);

INSERT INTO book (id, title, author, publisher, publishDate, isbn, quantity, categoryId, isAvailable, image) VALUES
(1,'Chí Phèo','Nam Cao','Nhà xuất bản Văn học','1941-08-15','9780743273565',3,1,1,'image-1734867268026-9126329.jpg'),
(2,'Sapiens: A Brief History of Humankind','Yuval Noah Harari','Harper','2014-02-04','9780062316097',3,11,1,'image-1734888228446-378892753.jpg'),
(6,'Nỗi Buồn Chiến Tranh','Bảo Ninh','Nhà xuất bản Hội Nhà văn','1991-04-01','9780132350884',6,1,1,'image-1734885907945-987987264.jpg'),
(20,'The Fault in Our Stars','F. Scott Fitzgerald','Dutton Books','2012-01-10','9780743273565',5,2,1,'image-1734886222823-719833894.jpg'),
(21,'Dế Mèn Phiêu Lưu Ký','F. Scott Fitzgerald','Nhà xuất bản Kim Đồng','1941-10-20','9780743273565',55,3,1,'image-1734886335847-235746202.jpg'),
(22,'Sông Côn Mùa Lũ','Nguyễn Mạnh Tuấn','Nhà xuất bản Hội Nhà văn','2007-08-01','9780743273565',6,3,1,'image-1734886612499-303974722.jpg'),
(23,'The Hunger Games','Suzanne Collins','Scholastic Press','2008-09-14','9780743273565',7,4,1,'image-1734886681870-689441414.jpg'),
(24,'The Bourne Identity','Robert Ludlum','Richard Marek Publishers','1980-06-01','9780743273565',16,4,1,'image-1734886751782-305490475.jpg'),
(25,'Dune','Frank Herbert','Chilton Books','1965-08-01','9780743273565',19,5,1,'image-1734886838114-874905840.jpeg'),
(26,'Neuromancer','William Gibson','Ace Books','1984-07-01','9780743273565',23,5,1,'image-1734886965016-361522055.jpg'),
(27,'The 4-Hour Workweek','Tim Ferriss','Crown Publishing Group','2007-04-24','9780743273565',24,7,1,'image-1734887147592-849252743.jpg'),
(28,'Tâm Lý Học Tội Phạm tập 1','Đoàn Minh Phượng','Nhà xuất bản Chính trị Quốc gia','2017-06-15','9780743273565',67,10,1,'image-1734887368950-69310138.webp'),
(29,'Quiet: The Power of Introverts','Susan Cain','Crown Publishing Group','2012-01-24','9780743273565',33,10,1,'image-1734888303920-425155369.jpg');

-- Bảng user
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(256) NOT NULL,
  address VARCHAR(256) NOT NULL,
  dob DATETIME NOT NULL,
  role VARCHAR(256) NOT NULL DEFAULT 'user',
  email VARCHAR(256) NOT NULL UNIQUE,
  password VARCHAR(256) NOT NULL,
  isAtive TINYINT NOT NULL DEFAULT 1
);

INSERT INTO user (id, fullName, address, dob, role, email, password, isAtive) VALUES
(1,'Đoàn Bảo Long','admin','2001-12-04 00:00:00','admin','doanbaolong1010@gmail.com','$2b$10$TiWCXcHMKAdcT5S.gbstmelgp3VsugctKq32Vow1bYOTd70BkFQ5q',1),
(2,'Võ Đặng Thanh Trọng','Thành phố Hồ Chí Minh','2004-01-01 00:00:00','admin','vodangthanhtrong@gmail.com','$2b$10$70f9M.emNXoEmdlkrLbTrO/PR0IVXxCySal/otAfgjc07x4JC9iWi',1),
(3,'Ngô Thị Thanh Ngân','Thành phố Hồ Chí Minh','2004-01-01 00:00:00','admin','ngothithanhngan@gmail.com','$2b$10$HsHJV1MPEjGdGrgpYZOCBuigBRiu3tvtdpgTNAk1dTO2xEU7vG4vy',1);

-- Bảng loan
DROP TABLE IF EXISTS loan;
CREATE TABLE loan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  bookId INT NOT NULL,
  loanDate DATE NOT NULL,
  returnDate DATE,
  isReturned TINYINT NOT NULL DEFAULT 0,
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (bookId) REFERENCES book(id)
);

INSERT INTO loan (id, userId, bookId, loanDate, returnDate, isReturned) VALUES
(2,1,2,'2024-12-01','2024-12-17',0),
(7,1,6,'2024-12-22','2025-01-04',0);

-- Bảng penalty
DROP TABLE IF EXISTS penalty;
CREATE TABLE penalty (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  loanId INT NOT NULL,
  amount DECIMAL(5,2) NOT NULL,
  penaltyDate DATE NOT NULL,
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (loanId) REFERENCES loan(id)
);

INSERT INTO penalty (id, userId, loanId, amount, penaltyDate) VALUES
(2,1,2,15.50,'2024-12-01');

-- Bảng reservation
DROP TABLE IF EXISTS reservation;
CREATE TABLE reservation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  bookId INT NOT NULL,
  reservationDate DATE NOT NULL,
  expectedReturnDate DATE,
  isFulfilled TINYINT NOT NULL DEFAULT 0,
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (bookId) REFERENCES book(id)
);

INSERT INTO reservation (id, userId, bookId, reservationDate, expectedReturnDate, isFulfilled) VALUES
(1,1,1,'2024-12-01','2024-12-15',0);

-- Bảng contact
DROP TABLE IF EXISTS contact;
CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cardId VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  service VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

-- Bảng migrations
DROP TABLE IF EXISTS migrations;
CREATE TABLE migrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  timestamp BIGINT NOT NULL,
  name VARCHAR(255) NOT NULL
);

INSERT INTO migrations (id, timestamp, name) VALUES
(1,1733295434705,'Init1733295434705'),
(2,1734363470930,'ChangeBookField1734363470930'),
(3,1734500000633,'AddFieldToUser1734500000633'),
(4,1734848976213,'AddContact1734848976213');
