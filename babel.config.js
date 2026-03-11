module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
<<<<<<< HEAD
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
=======
>>>>>>> 767c0d32e72e916c941dddfacd274a8fbcc0ab29
  };
};
