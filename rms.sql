-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20230219.a2e2ef9501
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2023 at 07:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rms`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `table_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `table_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, NULL, 3, '2023-06-09 23:21:56', '2023-06-09 23:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `cart_details`
--

CREATE TABLE `cart_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `qty` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart_details`
--

INSERT INTO `cart_details` (`id`, `cart_id`, `product_id`, `qty`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 7.00, '2023-06-09 23:21:56', '2023-06-09 23:21:56'),
(2, 1, 2, 5.00, '2023-06-09 23:21:56', '2023-06-09 23:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `catogories`
--

CREATE TABLE `catogories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `catogories`
--

INSERT INTO `catogories` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Drinks', 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(2, 'food', 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_boys`
--

CREATE TABLE `delivery_boys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` double(8,2) NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_free` tinyint(1) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_boys`
--

INSERT INTO `delivery_boys` (`id`, `user_id`, `address`, `salary`, `phone`, `photo`, `is_free`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 3, 'Dharan', 20000.00, '9848008689', 'bisheshwor.jpgDeliveryBoy.jpg', 1, 1, '2023-05-16 11:39:56', '2023-05-16 11:39:56'),
(2, 4, 'Dharan', 20000.00, '9848008689', 'bisheshwor.jpgDeliveryBoy.jpg', 1, 1, '2023-05-16 11:40:27', '2023-05-16 11:40:27');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_24_130254_create_catogories_table', 1),
(6, '2023_02_25_105535_create_products_table', 1),
(7, '2023_02_26_103323_create_tables_table', 1),
(8, '2023_02_26_143807_create_carts_table', 1),
(9, '2023_02_27_025726_create_orders_table', 1),
(10, '2023_02_27_030444_create_order_details_table', 1),
(11, '2023_05_11_135523_create_cart_details_table', 1),
(12, '2023_05_14_025356_create_payments_table', 1),
(13, '2023_05_14_050459_create_delivery_boys_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('serve','delivered') COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `table_id` bigint(20) UNSIGNED DEFAULT NULL,
  `served` tinyint(1) NOT NULL DEFAULT 0,
  `delivered` tinyint(1) NOT NULL DEFAULT 0,
  `delivery_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_status` enum('arrived','ready','delivered') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'arrived',
  `is_ready` tinyint(1) NOT NULL DEFAULT 0,
  `assigned_delivery_boy_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `type`, `user_id`, `table_id`, `served`, `delivered`, `delivery_address`, `order_status`, `is_ready`, `assigned_delivery_boy_id`, `created_at`, `updated_at`) VALUES
(3, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 2, '2023-05-16 11:43:37', '2023-05-16 11:43:37'),
(4, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 2, '2023-05-16 11:45:35', '2023-05-16 11:45:35'),
(5, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 1, '2023-05-16 11:46:15', '2023-05-16 11:46:15'),
(6, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 1, '2023-05-16 11:46:21', '2023-05-16 11:46:21'),
(7, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 1, '2023-05-16 11:47:45', '2023-05-16 11:47:45'),
(8, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 1, '2023-05-16 11:47:52', '2023-05-16 11:47:52'),
(9, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 1, '2023-05-16 11:51:31', '2023-05-16 11:51:31'),
(10, 'delivered', 2, NULL, 0, 0, 'Baneshwor', 'arrived', 0, 2, '2023-05-16 11:56:06', '2023-05-16 11:56:06');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `qty` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `qty`, `created_at`, `updated_at`) VALUES
(7, 3, 3, 9.00, '2023-05-16 11:43:37', '2023-05-16 11:43:37'),
(8, 3, 1, 3.00, '2023-05-16 11:43:37', '2023-05-16 11:43:37'),
(9, 3, 2, 10.00, '2023-05-16 11:43:37', '2023-05-16 11:43:37'),
(10, 4, 3, 9.00, '2023-05-16 11:45:35', '2023-05-16 11:45:35'),
(11, 4, 1, 3.00, '2023-05-16 11:45:35', '2023-05-16 11:45:35'),
(12, 4, 2, 10.00, '2023-05-16 11:45:35', '2023-05-16 11:45:35'),
(13, 5, 3, 9.00, '2023-05-16 11:46:15', '2023-05-16 11:46:15'),
(14, 5, 1, 3.00, '2023-05-16 11:46:15', '2023-05-16 11:46:15'),
(15, 5, 2, 10.00, '2023-05-16 11:46:15', '2023-05-16 11:46:15'),
(16, 6, 3, 9.00, '2023-05-16 11:46:21', '2023-05-16 11:46:21'),
(17, 6, 1, 3.00, '2023-05-16 11:46:21', '2023-05-16 11:46:21'),
(18, 6, 2, 10.00, '2023-05-16 11:46:21', '2023-05-16 11:46:21'),
(19, 7, 3, 9.00, '2023-05-16 11:47:45', '2023-05-16 11:47:45'),
(20, 7, 1, 3.00, '2023-05-16 11:47:45', '2023-05-16 11:47:45'),
(21, 7, 2, 10.00, '2023-05-16 11:47:45', '2023-05-16 11:47:45'),
(22, 8, 3, 9.00, '2023-05-16 11:47:52', '2023-05-16 11:47:52'),
(23, 8, 1, 3.00, '2023-05-16 11:47:52', '2023-05-16 11:47:52'),
(24, 8, 2, 10.00, '2023-05-16 11:47:52', '2023-05-16 11:47:52'),
(25, 9, 3, 9.00, '2023-05-16 11:51:31', '2023-05-16 11:51:31'),
(26, 9, 1, 3.00, '2023-05-16 11:51:31', '2023-05-16 11:51:31'),
(27, 9, 2, 10.00, '2023-05-16 11:51:31', '2023-05-16 11:51:31'),
(28, 10, 3, 9.00, '2023-05-16 11:56:06', '2023-05-16 11:56:06'),
(29, 10, 1, 3.00, '2023-05-16 11:56:06', '2023-05-16 11:56:06'),
(30, 10, 2, 10.00, '2023-05-16 11:56:06', '2023-05-16 11:56:06');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `payment_type` enum('cash_on_delivery','khalti','esewa') COLLATE utf8mb4_unicode_ci NOT NULL,
  `advance_amount` double(8,2) DEFAULT NULL,
  `total_amount` double(8,2) NOT NULL,
  `is_received` tinyint(1) NOT NULL DEFAULT 0,
  `payment_verified` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `payment_type`, `advance_amount`, `total_amount`, `is_received`, `payment_verified`, `created_at`, `updated_at`) VALUES
(1, 3, 'esewa', NULL, 2640.00, 0, 'null', '2023-05-16 11:43:37', '2023-05-16 11:43:37'),
(2, 4, 'esewa', NULL, 2640.00, 0, 'null', '2023-05-16 11:45:35', '2023-05-16 11:45:35'),
(3, 5, 'esewa', 200.00, 2640.00, 0, 'null', '2023-05-16 11:46:15', '2023-05-16 11:46:15'),
(4, 6, 'esewa', 200.00, 2640.00, 0, 'null', '2023-05-16 11:46:21', '2023-05-16 11:46:21'),
(5, 7, 'esewa', 200.00, 2640.00, 0, 'null', '2023-05-16 11:47:45', '2023-05-16 11:47:45'),
(6, 8, 'esewa', 200.00, 2640.00, 0, 'null', '2023-05-16 11:47:52', '2023-05-16 11:47:52'),
(7, 9, 'esewa', 200.00, 2640.00, 0, 'null', '2023-05-16 11:51:31', '2023-05-16 11:51:31'),
(8, 10, 'esewa', 200.00, 2640.00, 0, 'null', '2023-05-16 11:56:06', '2023-05-16 11:56:06');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sale_price` double(8,2) NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `catogory_id` bigint(20) UNSIGNED NOT NULL,
  `today` tinyint(1) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `sale_price`, `photo`, `catogory_id`, `today`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Momo', 120.00, 'drinks.jpgproduct.jpg', 1, 1, 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(2, 'Noodle', 120.00, 'drinks.jpgproduct.jpg', 1, 1, 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(3, 'Chicken', 120.00, 'drinks.jpgproduct.jpg', 1, 1, 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(4, 'Laphing', 65.00, 'gallery-img-05.jpgproduct.jpg', 1, 1, 1, '2023-06-29 09:02:02', '2023-06-29 09:02:02');

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qrcode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `name`, `qrcode`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Table_1', 'Table_3.svg', 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(2, 'Table_2', 'Table_3.svg', 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(3, 'Table_3', 'Table_3.svg', 1, '2023-05-16 11:25:48', '2023-05-16 11:25:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('delivery','admin','user','kitchen') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Bisheshwor', 'admin@rms.com', NULL, '$2y$10$75R2OfwnJuSsDpAS.z6gwupiJWALeKOO9otVYmQ59Fl3iB4z.GITa', NULL, 'admin', '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(2, 'Bibash', 'user@rms.com', NULL, '$2y$10$N6LFgCwNPQNL8TVbYCCO9O2tN6qB3BpHzGc14fq4CUm1Xy09mYKG2', NULL, 'user', '2023-05-16 11:25:48', '2023-05-16 11:25:48'),
(3, 'Ram', 'ram@delivery.com', NULL, '$2y$10$RL7s/.Yum4NoDUDCaVr83OA/XEQZiPodcksyz0kaHmB5Lvnqhk7ZK', NULL, 'delivery', '2023-05-16 11:39:56', '2023-05-16 11:39:56'),
(4, 'Rajesh', 'raj@delivery.com', NULL, '$2y$10$oEnBB9ZQ1qeAom8SZut6Q.qOBukYXugDN08.O1P9Q3EULLRp3YmT6', NULL, 'delivery', '2023-05-16 11:40:27', '2023-05-16 11:40:27'),
(5, 'Bisheshwor Khdka', 'bkrazz2058@gmail.com', NULL, '$2y$10$4FLwNzchQPzVVC62cygRVOrgAYoPZDWMmK5vV3U3H0TCVDqJKI/2G', NULL, 'delivery', '2023-06-10 07:24:16', '2023-06-10 07:24:16'),
(6, 'Bibash khadka', 'bibash@rms.com', NULL, '$2y$10$BPiFW68U1oAF.ImOcsYR8O..aCHogBtj3oCihJDsEZjw6BF3xpcpy', NULL, 'delivery', '2023-06-10 08:06:56', '2023-06-10 08:06:56'),
(7, 'Bibash khadka', 'bk@rms.com', NULL, '$2y$10$xlPqjs8s4OW7kEAdvERGXeQlxpmdgnGuIsJErBM64BH9dlIa849/G', NULL, 'delivery', '2023-06-10 08:08:28', '2023-06-10 08:08:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_table_id_foreign` (`table_id`),
  ADD KEY `carts_user_id_foreign` (`user_id`);

--
-- Indexes for table `cart_details`
--
ALTER TABLE `cart_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_details_cart_id_foreign` (`cart_id`),
  ADD KEY `cart_details_product_id_foreign` (`product_id`);

--
-- Indexes for table `catogories`
--
ALTER TABLE `catogories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_boys`
--
ALTER TABLE `delivery_boys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `delivery_boys_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_table_id_foreign` (`table_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_details_order_id_foreign` (`order_id`),
  ADD KEY `order_details_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_order_id_foreign` (`order_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_catogory_id_foreign` (`catogory_id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_details`
--
ALTER TABLE `cart_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `catogories`
--
ALTER TABLE `catogories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `delivery_boys`
--
ALTER TABLE `delivery_boys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_table_id_foreign` FOREIGN KEY (`table_id`) REFERENCES `tables` (`id`),
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `cart_details`
--
ALTER TABLE `cart_details`
  ADD CONSTRAINT `cart_details_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `cart_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `delivery_boys`
--
ALTER TABLE `delivery_boys`
  ADD CONSTRAINT `delivery_boys_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_table_id_foreign` FOREIGN KEY (`table_id`) REFERENCES `tables` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_catogory_id_foreign` FOREIGN KEY (`catogory_id`) REFERENCES `catogories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
