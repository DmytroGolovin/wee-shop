import { Application } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import notFound from "./middlewares/not-found.ts";
import logger from "./middlewares/logger.ts";
import productsRouter from "./routes/products.routes.ts";

//Basic configurations
const app = new Application();
const port = 3000;

//Middleware to log requested routes
app.use(logger.logger);
app.use(logger.responseTime);

//Allow CORS
app.use(
  oakCors({
    origin: "*"
  }),
);

//Controllers
app.use(productsRouter.routes());
app.use(productsRouter.allowedMethods());

// 404 page
app.use(notFound);

//Server status
app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`${yellow("Listening on:")} ${green(url)}`);
  });
  
  await app.listen({ port });