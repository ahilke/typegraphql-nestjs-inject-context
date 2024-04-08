# Reproduction of Injecting Context with `@nestjs/graphql` and `typegraphql-nestjs`

This repository shows a working example of `@Inject(CONTEXT)` with `@nestjs/graphql` and an equivalent broken example in `typegraphql-nestjs`.

## @nestjs/graphql

Based on <https://github.com/nestjs/nest/tree/master/sample/23-graphql-code-first>.

To reproduce:

```bash
cd nestjs-graphql
npm ci
npm run start
```

In a new shell:

```bash
curl --location 'localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"query GetRecipes {\n  # returning request scoped recipes list from `RecipeService`\n  # which is empty for every request (`recipes: Recipe[] = []`)\n  recipes {\n    title\n    description\n  }\n}","variables":{}}'
```

Result: The first shell prints the headers of the request.

For the relevant code, see `nestjs-graphql/src/recipes/recipes.service.ts`.

## typegraphql-nestjs

Based on <https://github.com/MichalLytek/typegraphql-nestjs/tree/master/examples/3-request-scoped>.

To reproduce:

```bash
cd typegraphql-nestjs
npm ci
npm run start
```

In a new shell:

```bash
curl --location 'localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{"query":"query GetRecipes {\n  # returning request scoped recipes list from `RecipeService`\n  # which is empty for every request (`recipes: Recipe[] = []`)\n  recipes {\n    title\n    description\n  }\n}","variables":{}}'
```

Result: The first shell prints `undefined`

For the relevant code, see `typegraphql-nestjs/src/recipe/service.ts`.
