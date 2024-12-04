import documentationController from "./controllers/documentation";
import documentationRoutes from "./routes/custom-documentation";

export default async (plugin) => {
  // Controllers
  plugin.controllers.documentation = {
    ...plugin.controllers.documentation,
    ...documentationController,
  };
  // Routes
  plugin.routes = [...plugin.routes, ...documentationRoutes.routes];
  return plugin;
};
