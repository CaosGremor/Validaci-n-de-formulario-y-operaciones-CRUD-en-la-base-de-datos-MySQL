-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2023 a las 01:17:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratorio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario`
--

CREATE TABLE `formulario` (
  `ID` int(50) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellido1` varchar(55) NOT NULL,
  `Apellido2` varchar(55) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Login` varchar(60) NOT NULL,
  `Password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `formulario`
--

INSERT INTO `formulario` (`ID`, `Nombre`, `Apellido1`, `Apellido2`, `Email`, `Login`, `Password`) VALUES
(1, 'Pamu', 'Garcia', 'Lema', 'pamugl@gmail.com', 'pamugl12', '$2y$10$F5Sx024Ng7.MA076b1fvDuyeyicC7DSX6m07Ykqo2qQ1ChAsEjAYG'),
(2, 'Julio', 'Verne', 'Sanchez', 'julitovs1997@gmail.com', 'Julio1997', '$2y$10$wrpBm.Lx.npltgZAIws3SOqvECGY0rJm2T2tv/DENX1X7/oIJGJWC'),
(3, 'Marta', 'Saz', 'Rodriguez', 'martitasaz@hotmail.com', 'MartitaSR', '$2y$10$iJCSt/UH9N0Lmafy/5SOWeV.8clNOZofllsnTbBSHMMGAogxvRWJi'),
(4, 'Elisabelth', 'Perez', 'Lujan', 'eliperez@gmail.com', 'eliluj23', '$2y$10$JfxZjMoEzNyj5SHYhUQrBu2YhpSpEcL6FHPj7isTogie8C7grb5qC'),
(5, 'César', 'Pantoja', 'Calle', 'cesitar30@gmail.com', 'Cesar50', '$2y$10$cT7QNsj1ziZaNOIHNIVnVudjnP1/hhtjJgFgG2PO0iHG8zPyZDhPm'),
(6, 'MAR', 'LUCAS', 'CEBRIAN', 'marlu23@gmail.com', 'MarLu23', '$2y$10$rdDJaPNN7yp60IxPVl9miO0syp6cNyskTY.4FeREB4AaiwT7T.cY2'),
(7, 'Aron', 'Mesa', 'Reyes', 'Aron1998@gmail.com', 'Aron98', '$2y$10$dZxYYpTLMGgEYdX37mWIMuY6tGMflb6wZ2I0MtyiE8nlkm/Pm8Eby');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `formulario`
--
ALTER TABLE `formulario`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `formulario`
--
ALTER TABLE `formulario`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
