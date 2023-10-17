-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: panoldb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

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
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `idcurso` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idcurso`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'6°2°'),(2,'2°4°');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `herramientas`
--

DROP TABLE IF EXISTS `herramientas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `herramientas` (
  `idherramientas` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`idherramientas`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `herramientas`
--

LOCK TABLES `herramientas` WRITE;
/*!40000 ALTER TABLE `herramientas` DISABLE KEYS */;
INSERT INTO `herramientas` VALUES (1,'Arco de sierra',13),(2,'Sierra junior',18),(3,'Mini alicate frontal tenaza',2),(4,'Mini alicate frontal ',1),(5,'Mini pinza',2),(6,'Mini pinza de punta curva',5),(7,'Mini pinza pato',1),(8,'Mini pinza punta',2),(9,'Mini punta seger interior',1),(10,'Pinza seger curva interior',1),(11,'Pinza seger curva exterior',1),(12,'Pinza seger interior',1),(13,'Pinza seger exterior',1),(14,'Pinza de punta',5),(15,'Pinza pato',3),(16,'Tenazas',4),(17,'Escuadras iman',6),(18,'Compas exterior',4),(19,'Compas interior',4),(20,'Compas de punta',5),(21,'Pinza Pico loro',1),(22,'Llave de caño de 1\"\"',1),(23,'Llave de caño de 2\"\"',1),(24,'Llave de caño de 1,5\"\"',1),(25,'Llave de caño 3,5\"\"',1),(26,'Serrucho de costilla',11),(27,'Alicate de 18\"\"',1),(28,'Mini arco pota hoja de sierra',1),(29,'Juego barreno perforador de mano (5 piezas)',1),(30,'Pinza para fragua',1),(31,'Pinzas',19),(32,'Alicates',17),(33,'Llave combinada N°6',2),(34,'Llave combinada N°7',1),(35,'Llave combinada N°8',4),(36,'Llave combinada N°9',3),(37,'Llave  conbinada N°10',6),(38,'Llave combinada N°11',5),(39,'Llave combinada N°12',6),(40,'Llave combinada N°13',4),(41,'Llave combinada N°14',6),(42,'Llave combinada N°15',2),(43,'Llave combinada N°16',3),(44,'Llave combinada N°17',3),(45,'Llave combinada N°18',3),(46,'Llave combinada N°19',6),(47,'Llave combinada N°20',4),(48,'Llave combinada N°21',6),(49,'Llave combinada N°22',4),(50,'Llave combinada N°23',3),(51,'Llave combinada N°24',3),(52,'Llave combinada N°25',3),(53,'Llave combinada 1/4',2),(54,'Llave combinada 5/16',4),(55,'Llave combinada 3/8',2),(56,'Llave combinada 7/16',3),(57,'Llave combinada 1/2',5),(58,'Llave combinada 9/16',1),(59,'Llave combinada 5/8',2),(60,'Llave combinada 11/16',3),(61,'Llave combinada 3/4',1),(62,'Llave combinada 13/16',1),(63,'Llave combinada 7/8',1),(64,'Llave combinada 15/16',1),(65,'Llave combinada 1\"\"',1),(66,'Llave combinada N°26',1),(67,'Llave combinada N°27',2),(68,'Llave combinada N°28',1),(69,'Llave combinada N°29',1),(70,'Llave combinada 1 1/16',1),(71,'Llave combinada N°30',1),(72,'Llave combinada 1 1/4',1),(73,'Llave combinada N°32',1),(74,'Llave estriada 6/7',2),(75,'Llave estriada 14/15',1),(76,'Llave estriada 16/17',1),(77,'Llave estriada curva 16/17',1),(78,'Llave estriada curva 18/19',1),(79,'Llave estraida curva 5/8-9/16',1),(80,'Llave T 1/4',1),(81,'Llave T 3/8',1),(82,'Llave T 5/16',1),(83,'Llave T 10 MM',1),(84,'Llave T 1/2',1),(85,'Llave T fija sacabujias 13mm',1),(86,'Llave T fija sacabujias 21mm',1),(87,'Cepillo de acero',4),(88,'Prensas',7),(89,'Martillo saca clavos',7),(90,'Martillo bolita',10),(91,'Martillo de pena',2),(92,'Martillo de carpintero',8),(93,'Reglas metalicas',28),(94,'Escuadras ',17),(95,'Falsas escuadras',4),(96,'Mini lima redonda',4),(97,'Mini lima cuadrada',1),(98,'Mini lima media caña',5),(99,'Mini lima triangular',1),(100,'Lima redonda',4),(101,'Lima media caña',10),(102,'Lima triangular',7),(103,'Lima cuadrada',10),(104,'Lima plana',12),(105,'Escofinas',28),(106,'Mazo',1),(107,'Martillo de goma ',2),(108,'Escuadras de hierro',5),(109,'Cortafierro plano',8),(110,'Puntas ',4),(111,'Mini cortafierro',3),(112,'Puntos ',16),(113,'Puntas de trazar',11),(114,'Manivela para remachadora ',8),(115,'Manivelas',30),(116,'Mandriles',21),(117,'Pinceles',20),(118,'Brocha',5),(119,'Cepillos',1),(120,'Barretas',2),(121,'Buscapolo',4);
/*!40000 ALTER TABLE `herramientas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestamos`
--

DROP TABLE IF EXISTS `prestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestamos` (
  `idprestamos` int(11) NOT NULL AUTO_INCREMENT,
  `fkprofesor` int(11) NOT NULL,
  `fkcurso` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`idprestamos`),
  KEY `fkcurso` (`fkcurso`),
  KEY `fkprofesor` (`fkprofesor`),
  CONSTRAINT `fkcurso` FOREIGN KEY (`fkcurso`) REFERENCES `curso` (`idcurso`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fkprofesor` FOREIGN KEY (`fkprofesor`) REFERENCES `profesores` (`idprofesores`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamos`
--

LOCK TABLES `prestamos` WRITE;
/*!40000 ALTER TABLE `prestamos` DISABLE KEYS */;
/*!40000 ALTER TABLE `prestamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesores`
--

DROP TABLE IF EXISTS `profesores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesores` (
  `idprofesores` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_apellido` varchar(45) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `domicilio` varchar(45) NOT NULL,
  `documento` varchar(45) NOT NULL,
  PRIMARY KEY (`idprofesores`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesores`
--

LOCK TABLES `profesores` WRITE;
/*!40000 ALTER TABLE `profesores` DISABLE KEYS */;
INSERT INTO `profesores` VALUES (1,'marcela','232323','Colon 3294','45320492'),(2,'Echechurri','453212','Laprida 3454','45234678');
/*!40000 ALTER TABLE `profesores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 18:16:44
