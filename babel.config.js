module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx"
          ],

          root: "./src",
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@connected": "./src/connected",
            "@constants": "./src/constants",
            "@typings": "./src/typings",
            "@example-actions": "./src/redux/features/example/actions.ts",
            "@post-actions": "./src/redux/features/post/actions.ts",
            "@token-actions": "./src/redux/features/token/actions.ts"
          }
        }
      ]
    ]
  };
};
