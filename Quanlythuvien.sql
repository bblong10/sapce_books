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

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(256) NOT NULL,
  `author` varchar(256) NOT NULL,
  `publisher` varchar(256) NOT NULL,
  `publishDate` date NOT NULL,
  `isbn` varchar(256) NOT NULL,
  `quantity` int NOT NULL,
  `categoryId` int DEFAULT NULL,
  `isAvailable` tinyint NOT NULL DEFAULT '1',
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_efaa1a4d8550ba5f4378803edb2` (`categoryId`),
  CONSTRAINT `FK_efaa1a4d8550ba5f4378803edb2` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'Chí Phèo','Nam Cao','Nhà xuất bản Văn học','1941-08-15','9780743273565',3,1,1,'image-1734867268026-9126329.jpg'),(2,'Sapiens: A Brief History of Humankind','Yuval Noah Harari','Harper','2014-02-04','9780062316097',3,11,1,'image-1734888228446-378892753.jpg'),(6,'Nỗi Buồn Chiến Tranh','Bảo Ninh','Nhà xuất bản Hội Nhà văn','1991-04-01','9780132350884',6,1,1,'image-1734885907945-987987264.jpg'),(20,'The Fault in Our Stars','F. Scott Fitzgerald','Dutton Books','2012-01-10','9780743273565',5,2,1,'image-1734886222823-719833894.jpg'),(21,'Dế Mèn Phiêu Lưu Ký','F. Scott Fitzgerald','Nhà xuất bản Kim Đồng','1941-10-20','9780743273565',55,3,1,'image-1734886335847-235746202.jpg'),(22,'Sông Côn Mùa Lũ','Nguyễn Mạnh Tuấn','Nhà xuất bản Hội Nhà văn','2007-08-01','9780743273565',6,3,1,'image-1734886612499-303974722.jpg'),(23,'The Hunger Games','Suzanne Collins','Scholastic Press','2008-09-14','9780743273565',7,4,1,'image-1734886681870-689441414.jpg'),(24,'The Bourne Identity','Robert Ludlum','Richard Marek Publishers','1980-06-01','9780743273565',16,4,1,'image-1734886751782-305490475.jpg'),(25,'Dune','Frank Herbert','Chilton Books','1965-08-01','9780743273565',19,5,1,'image-1734886838114-874905840.jpeg'),(26,'Neuromancer','William Gibson','Ace Books','1984-07-01','9780743273565',23,5,1,'image-1734886965016-361522055.jpg'),(27,'The 4-Hour Workweek','Tim Ferriss','Crown Publishing Group','2007-04-24','9780743273565',24,7,1,'image-1734887147592-849252743.jpg'),(28,' Tâm Lý Học Tội Phạm tập 1','Đoàn Minh Phượng','Nhà xuất bản Chính trị Quốc gia','2017-06-15','9780743273565',67,10,1,'image-1734887368950-69310138.webp'),(29,'Quiet: The Power of Introverts in a World That Can\'t Stop Talking','Susan Cain','Crown Publishing Group','2012-01-24','9780743273565',33,10,1,'image-1734888303920-425155369.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Tiểu thuyết'),(2,'Lãng mạn'),(3,'Văn học'),(4,'Hành động'),(5,'Khoa học viễn tưởng'),(6,'Giáo dục'),(7,'Kỹ năng sống'),(10,'Tâm lý học'),(11,'Lịch sử'),(12,'Kinh tế'),(13,'Chính trị'),(14,'Non-fiction'),(15,'Fiction'),(16,'Hình sự'),(17,'Triết học'),(19,'Kỳ ảo');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cardId` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `bookId` int NOT NULL,
  `loanDate` date NOT NULL,
  `returnDate` date DEFAULT NULL,
  `isReturned` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_ef7a63b4c4f0edd90e389edb103` (`userId`),
  KEY `FK_1465982ea6993042a656754f4cc` (`bookId`),
  CONSTRAINT `FK_1465982ea6993042a656754f4cc` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`),
  CONSTRAINT `FK_ef7a63b4c4f0edd90e389edb103` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan`
--

LOCK TABLES `loan` WRITE;
/*!40000 ALTER TABLE `loan` DISABLE KEYS */;
INSERT INTO `loan` VALUES (2,1,2,'2024-12-01','2024-12-17',0),(7,1,6,'2024-12-22','2025-01-04',0);
/*!40000 ALTER TABLE `loan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1733295434705,'Init1733295434705'),(2,1734363470930,'ChangeBookField1734363470930'),(3,1734500000633,'AddFieldToUser1734500000633'),(4,1734848976213,'AddContact1734848976213');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penalty`
--

DROP TABLE IF EXISTS `penalty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `penalty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `loanId` int NOT NULL,
  `amount` decimal(5,2) NOT NULL,
  `penaltyDate` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_01be8af94044eed4d9667a6a386` (`userId`),
  KEY `FK_4e111140c2a6756a9a791dae05d` (`loanId`),
  CONSTRAINT `FK_01be8af94044eed4d9667a6a386` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_4e111140c2a6756a9a791dae05d` FOREIGN KEY (`loanId`) REFERENCES `loan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penalty`
--

LOCK TABLES `penalty` WRITE;
/*!40000 ALTER TABLE `penalty` DISABLE KEYS */;
INSERT INTO `penalty` VALUES (2,1,2,15.50,'2024-12-01');
/*!40000 ALTER TABLE `penalty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `bookId` int NOT NULL,
  `reservationDate` date NOT NULL,
  `expectedReturnDate` date DEFAULT NULL,
  `isFulfilled` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_529dceb01ef681127fef04d755d` (`userId`),
  KEY `FK_c82001439df87b04c529f301f6e` (`bookId`),
  CONSTRAINT `FK_529dceb01ef681127fef04d755d` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_c82001439df87b04c529f301f6e` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (1,1,1,'2024-12-01','2024-12-15',0);
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(256) NOT NULL,
  `address` varchar(256) NOT NULL,
  `dob` datetime NOT NULL,
  `role` varchar(256) NOT NULL DEFAULT 'user',
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `isAtive` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Lê Tấn Lộc','admin','2001-12-04 00:00:00','admin','letanloc@gmail.com','$2b$10$TiWCXcHMKAdcT5S.gbstmelgp3VsugctKq32Vow1bYOTd70BkFQ5q',1),(2,'Võ Đặng Thanh Trọng','Thành phố Hồ Chí Minh','2004-01-01 00:00:00','admin','vodangthanhtrong@gmail.com','$2b$10$70f9M.emNXoEmdlkrLbTrO/PR0IVXxCySal/otAfgjc07x4JC9iWi',1),(3,'Ngô Thị Thanh Ngân','Thành phố Hồ Chí Minh','2004-01-01 00:00:00','admin','ngothithanhngan@gmail.com','$2b$10$HsHJV1MPEjGdGrgpYZOCBuigBRiu3tvtdpgTNAk1dTO2xEU7vG4vy',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-23  1:23:30
