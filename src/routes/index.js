
const siteRouter = require("./site");
const blogRouter = require('./blog');
const scriptRouter = require('./script')

function route(app) {
  app.use("/", siteRouter);
  app.use("/blog", blogRouter);
  app.use("/script", scriptRouter)
}

module.exports = route;
