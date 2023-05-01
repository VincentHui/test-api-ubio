import { Router, Get, PathParam, BodyParam, Post } from "@ubio/framework";

interface GroupResponse {
  id: string; // echoed from path parameter
  group: string; // echoed from path parameter
  createdAt: number; // first registered heartbeat
  updatedAt: number; // last registered heartbeat
  meta: object;
}

export class StatusRouter extends Router {
  @Post({
    path: "/{group}/{id}",
    responses: {
      200: {
        schema: {
          type: "object",
          properties: {
            version: { type: "string" },
          },
        },
      },
    },
  })
  async status(
    @PathParam("id", { schema: { type: "string" } })
    id: string,
    @PathParam("group", { schema: { type: "string" } })
    group: string,
    @BodyParam("meta", {
      schema: {
        type: "object",
      },
    })
    meta: object
  ): Promise<GroupResponse> {
    return {
      id: id,
      group: group,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      meta: {},
      //   meta: meta,
    };
  }
}
