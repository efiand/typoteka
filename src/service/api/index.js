'use strict';

const {Router} = require(`express`);
const articles = require(`./articles`);
const categories = require(`./categories`);
const search = require(`./search`);
const users = require(`./users`);
const sequelize = require(`../lib/sequelize`);
const defineModels = require(`../models`);
const {
  ArticlesService,
  CommentsService,
  CategoriesService,
  SearchService,
  UsersService
} = require(`../data-services`);

const app = new Router();

defineModels(sequelize);

articles(app, new ArticlesService(sequelize), new CommentsService(sequelize));
categories(app, new CategoriesService(sequelize));
search(app, new SearchService(sequelize));
users(app, new UsersService(sequelize));

module.exports = app;
