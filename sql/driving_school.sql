/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : driving_school

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-08-03 15:12:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for booking
-- ----------------------------
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `examitem` varchar(255) DEFAULT NULL,
  `examTime` bigint(20) DEFAULT NULL,
  `placeExamItem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of booking
-- ----------------------------
INSERT INTO `booking` VALUES ('1', '科目四', '1502003160', '场地三');

-- ----------------------------
-- Table structure for booking_item
-- ----------------------------
DROP TABLE IF EXISTS `booking_item`;
CREATE TABLE `booking_item` (
  `id` int(11) NOT NULL,
  `item` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of booking_item
-- ----------------------------
INSERT INTO `booking_item` VALUES ('1', '科目一');
INSERT INTO `booking_item` VALUES ('2', '科目二');
INSERT INTO `booking_item` VALUES ('3', '科目三');
INSERT INTO `booking_item` VALUES ('4', '科目四');
INSERT INTO `booking_item` VALUES ('5', '科目五');
INSERT INTO `booking_item` VALUES ('6', '科目六');

-- ----------------------------
-- Table structure for cartype
-- ----------------------------
DROP TABLE IF EXISTS `cartype`;
CREATE TABLE `cartype` (
  `item` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cartype
-- ----------------------------
INSERT INTO `cartype` VALUES ('A1');
INSERT INTO `cartype` VALUES ('A2');
INSERT INTO `cartype` VALUES ('B1');
INSERT INTO `cartype` VALUES ('B2');
INSERT INTO `cartype` VALUES ('C1');
INSERT INTO `cartype` VALUES ('C2');

-- ----------------------------
-- Table structure for persondata
-- ----------------------------
DROP TABLE IF EXISTS `persondata`;
CREATE TABLE `persondata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gender` int(11) NOT NULL,
  `idnum` varchar(255) NOT NULL,
  `school` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persondata
-- ----------------------------
INSERT INTO `persondata` VALUES ('1', '琼恩.雪诺', '1', '4410101989010100000', '广东驾校', 'A2', '13417008888');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `item` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('广东驾校');
INSERT INTO `school` VALUES ('北京驾校');
INSERT INTO `school` VALUES ('上海驾校');
INSERT INTO `school` VALUES ('浙江驾校');
INSERT INTO `school` VALUES ('甘肃驾校');
INSERT INTO `school` VALUES ('深圳驾校');

-- ----------------------------
-- Table structure for train_place
-- ----------------------------
DROP TABLE IF EXISTS `train_place`;
CREATE TABLE `train_place` (
  `item` varchar(255) DEFAULT NULL,
  `disabled` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of train_place
-- ----------------------------
INSERT INTO `train_place` VALUES ('场地一', '');
INSERT INTO `train_place` VALUES ('场地二', '');
INSERT INTO `train_place` VALUES ('场地三', '');
INSERT INTO `train_place` VALUES ('场地四(不可预约)', 'true');
INSERT INTO `train_place` VALUES ('场地五', '');

-- ----------------------------
-- Table structure for train_placeitem
-- ----------------------------
DROP TABLE IF EXISTS `train_placeitem`;
CREATE TABLE `train_placeitem` (
  `id` int(11) DEFAULT NULL,
  `placeExamItem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of train_placeitem
-- ----------------------------
INSERT INTO `train_placeitem` VALUES ('1', '选择场地');
