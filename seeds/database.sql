CREATE DATABASE ecom_react;
USE ecom_react;
CREATE table products(
id INT AUTO_INCREMENT,
image VARCHAR(800),
title VARCHAR(225),
price VARCHAR(100),
description VARCHAR(500),
PRIMARY KEY(id)
);
INSERT INTO products (image, title, price, description)
VALUES 
('./../public/images/AllNatural.jpeg', 'All Natural','$15.00','This set offers a cozy nude color perfect for all year round! These Nude press-on nails are great for making your hands look gorgeous.'),

('./../public/images/Baecation.jpeg', 'Baecation', '$24.99', 'This set is so beautiful and versatile. Perfect for dates, work, weekend trips, & guaranteed to make a fashion statement.'),

('./../public/images/Barbie.jpeg', 'Barbie', '$24.99', "The pink and matte finish looks just like a real manicure. With this full set, you'll have a unique style that's just you!"),

('./../public/images/Chanel.jpeg', 'Chanel', '$24.99', 'This set is 100% hand-painted and made to order. Feel a little rich with our new Chanel nails. These nails are simple yet chic!'),

('./../public/images/Deja-vu.jpeg', 'Deja-vu', '$15.00', 'These press-on nails add instant length and style, with a white abstract design and glossy finish, a show-stopper.'),

('/../public/images/Espresso.jpeg', 'Espresso', '$24.99', 'This set offers a cozy dark brown color perfect for all year round! These nails are great for making your hands look gorgeous.'),

('./../public/images/Extavagant.jpeg', 'Extravegant', '$15.00', 'These stunning press on nails are for those that love to express their personality with nail design and color.'),

('./../public/images/Miami.jpeg', 'Miami', '$15.00', 'This set gives serious Miami vibes, this is a must-have set this season featuring everything from bling to marble!'),

('./../public/images/November.jpeg', 'November', '$24.99', "Bold and Conservative all at one time. The quality of these nails is top-notch! Try these out, you won't be disappointed."),

('./../public/images/Cliche.jpeg', 'Cliche', '$24.99', 'If you define yourself as a Bling Queen, you just found your new favorite set! Perfect for any outfit or occasion.'),

('./../public/images/ShadesOfNude.jpeg', 'The Nudes', '$24.99', "If you're a Nude lover this set is the perfect set for you! Enjoy shades of nudes to match any outfit or special occasion."),

('./../public/images/WildLime.jpeg', 'Wild Lime', '$15.00', 'Give Vacation vibes with our new set Wild Lime. The perfect mix of yellow and green with a beautiful glossy finish.');


SELECT * FROM products