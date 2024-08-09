const config = {
  overwrite: true,
  schema: "https://countries.trevorblades.com/graphql",
  documents: "src/!(generated)/**/*.{ts,tsx,graphql,gql}",

  extensions: {
    /**
     * @type {import('@graphql-codegen/plugin-helpers').Types.Config}
     */
    codegen: {
      generates: {
        "src/generated/graphql.tsx": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
          ],
          config: {
            withHooks: true,
          },
          hooks: {
            afterOneFileWrite: ["eslint --ext .tsx --fix"],
          },
        },
      },
      endpoints: {
        default: {
          url: "https://countries.trevorblades.com/graphql",
        },
      },
    },
  },
};

export default config;
