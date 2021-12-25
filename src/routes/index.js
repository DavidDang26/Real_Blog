
const siteRouter = require("./site");
const blogRouter = require('./blog')

function route(app) {
  app.use("/", siteRouter);
  app.use("/blog", blogRouter)
}

module.exports = route;
