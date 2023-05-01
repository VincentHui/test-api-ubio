import { Application } from "@ubio/framework";
import { MongoDb } from "@ubio/framework/modules/mongodb";
import { dep } from "mesh-ioc";
import { StatusRouter } from "./routes/StatusRouter.js";

export class App extends Application {
  // Note: application can inject global-scoped components
  //   @dep() mongodb!: MongoDb;
  override createHttpRequestScope() {
    const mesh = super.createHttpRequestScope();
    mesh.service(StatusRouter);
    return mesh;
  }
  override createGlobalScope() {
    const mesh = super.createGlobalScope();
    // mesh.service(MongoDb);
    // mesh.service(MyService);
    // mesh.service(MyRepository);
    return mesh;
  }

  // override createHttpRequestScope() {
  //     const mesh = super.createHttpRequestScope();
  //     mesh.service(MyRouter);
  //     return mesh;
  // }

  override async beforeStart() {
    // await this.mongodb.client.connect();
    // Add other code to execute on application startup
    await this.httpServer.startServer();
  }

  override async afterStop() {
    await this.httpServer.stopServer();
    // Add other finalization code
    // this.mongodb.client.close();
  }
}
