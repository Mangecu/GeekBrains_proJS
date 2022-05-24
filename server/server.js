/**
 * Импортируем внешний модуль express
 * */
const express = require('express');

/**
 * Импортируем модуль File System
 * */
const fs = require('fs');

/**
 * app = это объект, с помощью которого можно обрабатывать запросы на сервер, то есть реагировать на запросы http таких, как get, post и т.п.
 * */
const app = express();

/**
 * Для обработки запросов к корзине импортируем локальный метод cartRouter. В данном случае cart - это локальный модуль
 * */
const cart = require('./cartRouter');

/**
 * Т.е дя общения с сервером используем json
 * */
app.use(express.json());

/**
 * Объясняем серверу, что нужно отдавать статичные файлы, лежащие в определённой папке при получении запроса на главную страницу.
 * За это отвечает метод express.static(), который в качестве параметра принимает путь к папке со статичными файлами
 * В данном случае это текущая папка т.е. 'public'
 * */
app.use('/', express.static('public'));

