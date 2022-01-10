
const siteRouter = require("./site");
const blogRouter = require('./blog');
const scriptRouter = require('./script')
const aboutRouter = require('./about')

function route(app) {
  app.use("/", siteRouter);
  app.use("/blog", blogRouter);
  app.use("/script", scriptRouter);
  app.use('/about', aboutRouter)
}

module.exports = route;
