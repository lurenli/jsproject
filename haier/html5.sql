-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 09 月 13 日 14:46
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `html5`
--

-- --------------------------------------------------------

--
-- 表的结构 `haier2`
--

CREATE TABLE IF NOT EXISTS `haier2` (
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` varchar(200) CHARACTER SET utf8 NOT NULL,
  `url` varchar(200) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=65 ;

--
-- 转存表中的数据 `haier2`
--

INSERT INTO `haier2` (`sid`, `title`, `price`, `url`) VALUES
(1, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn22.ehaier.com/file/59a3b92758e116c813cc0c94.png'),
(2, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn22.ehaier.com/file/59a3b94458e116c813cc0c97.png'),
(3, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn22.ehaier.com/file/59a3b96c58e116c813cc0c9a.png'),
(4, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn22.ehaier.com/file/59a3b999fac0ebbd61bece10.png'),
(5, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn22.ehaier.com/file/59a3b9adfac0ebbd61bece13.png'),
(6, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn21.ehaier.com/file/59a3b9e9b7021e41193dae21.png'),
(7, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn22.ehaier.com/file/59a3ba2458e116c813cc0c9d.png'),
(8, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn21.ehaier.com/file/59a3bb02fac0ebbd61bece16.png'),
(9, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(10, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(11, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(12, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(13, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(14, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(15, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(16, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(17, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(18, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(19, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(20, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(21, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(22, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(23, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(24, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(25, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(26, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(27, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(28, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(29, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(30, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(31, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(32, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(33, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(34, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(35, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(36, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(37, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(38, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(39, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(40, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(41, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(42, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(43, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(44, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(45, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(46, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(47, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(48, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(49, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(50, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(51, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(52, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(53, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(54, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(55, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(56, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(57, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(58, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(59, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(60, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(61, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(62, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(63, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png'),
(64, '大风量烟机+烈焰好灶', '￥1399.00', 'http://cdn09.ehaier.com/v5/images/blank.png');

-- --------------------------------------------------------

--
-- 表的结构 `haierabout`
--

CREATE TABLE IF NOT EXISTS `haierabout` (
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 NOT NULL,
  `xh` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` varchar(100) CHARACTER SET utf8 NOT NULL,
  `riqi` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- 转存表中的数据 `haierabout`
--


-- --------------------------------------------------------

--
-- 表的结构 `haierdl`
--

CREATE TABLE IF NOT EXISTS `haierdl` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `haierdl`
--

INSERT INTO `haierdl` (`sid`, `name`, `password`) VALUES
(1, '13647011656', '123456A'),
(2, '15669040502', '123456a');

-- --------------------------------------------------------

--
-- 表的结构 `haierforyou`
--

CREATE TABLE IF NOT EXISTS `haierforyou` (
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `haierforyou`
--

INSERT INTO `haierforyou` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn21.ehaier.com/file/59b8eaccfac028c5dd49c15e.png', '海尔329升法式四门变频冰箱，风冷无霜，全空间保鲜；直开式多层抽屉，美味一目了然；搭载T·ABT全时巡航杀菌技术，杀菌率高达99.99%；第三代变频科技，享受健康生态环境。', '￥3799.000'),
(2, 'http://cdn22.ehaier.com/file/59b8845058e16f3a0cf7f9d6.png', '451升小厨房优选纤薄对开', '￥3099.00'),
(3, 'http://cdn21.ehaier.com/file/59b8eadefac028c5dd49c161.png', '覆膜高光面板，耐磨性好不褪色，不沾油烟不积灰；三门三温区，独立制冷不串味；中门007软冷冻技术，0解冻时间，0时差保鲜，0～-7℃软冷冻存储，肉食不用化冻即时切。', '￥1399.00'),
(4, 'http://cdn21.ehaier.com/file/59b8eab6fac028c5dd49c15b.png', '海尔欧陆系列470升十字对开冰箱，全空间保鲜，干湿分储原生态；双循环系统五区分储，风冷无霜；冷冻空间自由组合，90°自由开门；智控感温，第三代优质压缩机，变频静音，搭载T·ABT杀菌技术。', '￥4799.00'),
(5, 'http://cdn22.ehaier.com/file/59b8eb2dfac028c5dd49c164.png', '160升海尔两门直冷冰箱，38分贝静音；低温补偿功能，自动调节适合温度；双宽设计高效稳定；深冷速冻，锁住营养不流失。', '￥1099.00'),
(6, 'http://cdn21.ehaier.com/file/59b8eb8fb7029acece06fccd.png', '海尔干湿分储十字对开冰箱；干湿分储技术，果蔬水润保湿，干货不受潮，不变质；66.6cm超薄机身；双变频技术，节能省电；云智能物联，手机远程时时操控；T·ABT智能杀菌，杀菌率达到99.99%；', '￥4399.00'),
(7, 'http://cdn21.ehaier.com/file/59b8ebf6b7029acece06fcd0.png', '258升三门风冷冰箱，均匀制冷，；微风道技术，3D环绕立体风，食材保鲜更持久；T·ABT杀菌技术，杀菌率高达99.99%；急速冷冻，营养不流失；中门5℃~-18℃宽幅变温，轻松实现多种模式转变。', '￥1999.00'),
(8, 'http://cdn21.ehaier.com/file/59b8ec3a3e7ea0831a448b55.png', '全封闭扣胆，大冷冻，国家一级能效能耗，超低耗电，省电省心，断电100小时不化冻。', '￥799.00'),
(9, 'http://cdn21.ehaier.com/file/59b68d6958e16f3a0cf7f978.png', '268升大冷冻力双箱冷柜', '￥1499.00'),
(10, 'http://cdn21.ehaier.com/file/59b8ec7958e16f3a0cf7fa17.png', '3D逆循环 节能12% 33小时 断电保护', '￥1599.00');

-- --------------------------------------------------------

--
-- 表的结构 `haiershuo`
--

CREATE TABLE IF NOT EXISTS `haiershuo` (
  `sid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 NOT NULL,
  `xh` varchar(100) CHARACTER SET utf8 NOT NULL,
  `price` varchar(100) CHARACTER SET utf8 NOT NULL,
  `title` varchar(200) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `haiershuo`
--

INSERT INTO `haiershuo` (`sid`, `url`, `xh`, `price`, `title`) VALUES
(1, 'http://cdn22.ehaier.com/file/59b8a1e5fac028c5dd49c127.png', 'EG10014B39GU1', '￥2699.00', '洗衣机已收到，安装师傅第一时间过来安装好。香槟色机器高端大气上档次，10公斤大容量，满足一家7口人的需要，功能强大，分类明确，使用简单方便，机器运转平稳，噪音小，安静省电，物流速度快，客服态度好，及时解决问题，总而言之，非常满意这次购物。'),
(2, 'http://cdn21.ehaier.com/file/59b8a3e2fac028c5dd49c12a.png', 'CXW-200-E800C6T', '￥2899.00', '海尔电视就是好，清晰度高！赞一个'),
(3, 'http://cdn22.ehaier.com/file/59b6abd258e16f3a0cf7f981.png', 'BCD-591WDVLU1', '￥4199.00', '非常喜欢这款冰箱，尤其对外接冰水这个功能很新颖，冰箱很大没有发错，喜欢的可以入手。海尔是值得信誉度品牌。'),
(4, 'http://cdn21.ehaier.com/file/59b6ac2958e16f3a0cf7f98a.png', 'BC/BD-202HT', '￥1199.00', '非常满意！物流和售后非常到位！满分！');

-- --------------------------------------------------------

--
-- 表的结构 `hiaer1`
--

CREATE TABLE IF NOT EXISTS `hiaer1` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `url` varchar(200) NOT NULL,
  `price` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

--
-- 转存表中的数据 `hiaer1`
--

INSERT INTO `hiaer1` (`sid`, `title`, `url`, `price`) VALUES
(1, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b1644358e142c11349306e.png', '￥2299.00'),
(2, '1.5匹小超人智能空调', 'http://cdn21.ehaier.com/file/59b1646a58e142c113493071.png', '￥2149.00'),
(3, '统帅1.5匹变频挂机', 'http://cdn21.ehaier.com/file/59b164a7fac05ab03bf163ae.png', '￥2599.00'),
(4, '2匹智能帝樽空调', 'http://cdn21.ehaier.com/file/59b164f63e7e2e5cfb21f22b.png', '￥5199.00'),
(6, '3匹智能无氟变频柜式空调', 'http://cdn21.ehaier.com/file/59b16533b702582490c7faca.png', '￥7699.00'),
(7, '2匹小超人智能WiFi柜式空调', 'http://cdn22.ehaier.com/file/59b166a058e142c113493074.png', '￥4199.00'),
(8, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b27df03e7ea0831a448a55.png', '￥2299.00'),
(9, '1匹智能一键自清洁定频空调', 'http://cdn22.ehaier.com/file/59b1194ffac070184c8242a2.png', '￥2299.00'),
(10, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59afb00858e1ab9a5ebb7f03.png', '￥2299.00'),
(11, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b10ecb3e7eaba5c89f4d03.png', '￥2299.00'),
(12, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b25834fac05ab03bf163cc.png', '￥2299.00'),
(13, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59afafb23e7e14bd18834742.png', '￥2299.00'),
(14, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(15, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(16, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b1644358e142c11349306e.png', '￥2299.00'),
(17, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(18, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b1644358e142c11349306e.png', '￥2299.00'),
(19, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(20, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(21, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(22, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(23, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(24, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(25, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(26, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(27, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(28, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(29, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(30, '1匹智能一键自清洁定频空调', 'http://cdn21.ehaier.com/file/59b1644358e142c11349306e.png', '￥2299.00'),
(31, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(32, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(33, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(34, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(35, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00'),
(36, '1匹智能一键自清洁定频空调', 'http://cdn09.ehaier.com/v5/images/blank.png', '￥2299.00');
