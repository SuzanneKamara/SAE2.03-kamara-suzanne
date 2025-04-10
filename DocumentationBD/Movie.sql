-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 07 avr. 2025 à 14:41
-- Version du serveur : 10.11.11-MariaDB-0+deb12u1
-- Version de PHP : 8.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `kamara4`
--

-- --------------------------------------------------------

--
-- Structure de la table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `min_age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Movie`
--

INSERT INTO `Movie` (`id`, `name`, `year`, `length`, `description`, `director`, `id_category`, `image`, `trailer`, `min_age`) VALUES
(7, 'Interstellar', 2014, 169, 'Un groupe d\'explorateurs voyage à travers un trou de ver pour sauver l\'humanité.', 'Christopher Nolan', 4, 'interstellar.jpg', 'https://www.youtube.com/embed/VaOijhK3CRU?si=76Ke4uw4LYjuLuQ6', 12),
(12, 'La Liste de Schindler', 1993, 195, 'Un industriel allemand sauve des milliers de Juifs pendant l\'Holocauste.', 'Steven Spielberg', 3, 'schindler.webp', 'https://www.youtube.com/embed/ONWtyxzl-GE?si=xC3ASGGPy5Ib-aPn', 16),
(17, 'Your Name', 2016, 107, 'Deux adolescents échangent leurs corps de manière mystérieuse.', 'Makoto Shinkai', 5, 'your_name.jpg', 'https://www.youtube.com/embed/AROOK45LXXg?si=aUQyGk2VMCb_ToUL', 10),
(27, 'Le Bon, la Brute et le Truand', 1966, 161, 'Trois hommes se lancent à la recherche d\'un trésor caché.', 'Sergio Leone', 8, 'bon_brute_truand.jpg', 'https://www.youtube.com/embed/WA1hCZFOPqs?si=TwNZAoM4oj4KpGja', 12),
(35, 'Chungking Express', 1994, 103, 'Two melancholic Hong Kong policemen fall in love: one with a mysterious underworld figure, the other with a beautiful and ethereal server at a late-night restaurant.', 'Wong Kar-Wai', 3, 'chungking_express.jpg', 'https://www.youtube.com/embed/P9Mxf_6pVA0?rel=0&wmode=transparent', 0),
(36, 'Shrek', 2001, 90, 'The greatest fairy tale never told. It ain’t easy bein’ green – especially if you’re a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot – a wisecracking donkey.', 'Andrew Adamson, Vicky Jenson', 8, 'shrek.jpg', 'https://www.youtube.com/embed/CwXOrWvPBPk', 0),
(37, 'Nosferatu', 1922, 95, 'A symphony of horror. The mysterious Count Orlok summons Thomas Hutter to his remote Transylvanian castle in the mountains. The eerie Orlok seeks to buy a house near Hutter and his wife, Ellen. After Orlok reveals his vampire nature, Hutter struggles to escape the castle, knowing that Ellen is in grave danger. Meanwhile Orlok’s servant, Knock, prepares for his master to arrive at his new home.', 'F. W. Murnau', 7, 'nosferatu.jpg', 'https://www.youtube.com/embed/npxhdRMYHy0?rel=0&wmode=transparent', 0),
(38, 'Donnie Darko ', 2001, 114, '28 days, 6 hours, 42 minutes, 12 seconds… that is when the world will end. After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.', 'Richard Kelly', 4, 'donnie_darko.jpg', 'https://www.youtube.com/embed/71RaE7JYTUU?rel=0&wmode=transparent', 0),
(40, 'Phantom of the paradise', 1974, 92, 'Winslow Leach, jeune compositeur inconnu, tente désespérément de faire connaître l\'opéra qu\'il a composé. Swan, producteur et patron du label Death Records, est à la recherche de nouveaux talents pour l\'inauguration du Paradise, le palais du rock qu\'il veut lancer. Il vole la partition de Leach, et le fait enfermer pour trafic de drogue. Brisé, défiguré, ayant perdu sa voix, le malheureux compositeur parvient à s\'évader. Il revient hanter le Paradise...', 'Brian de Palma', 3, 'phantom_paradise.jpg', 'https://www.youtube.com/embed/T9yof8cwli4?si=Id-r-EeOWxGbmpd4', 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `Category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
