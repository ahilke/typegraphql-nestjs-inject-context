import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { TypeGraphQLModule } from "typegraphql-nestjs";

import RecipeModule from "./recipe/module";

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      driver: ApolloDriver,
      emitSchemaFile: true,
      context: ({ req, res }) => {
        return { req, res };
      }
    }),
    RecipeModule,
  ],
})
export default class AppModule {}
