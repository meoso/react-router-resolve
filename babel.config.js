module.exports = {
    include: ["node_modules", "src", "test"],
    presets: [[
        '@babel/preset-env',
        {
            targets: {
                node: 'current'
            }
        }
    ], "@babel/preset-react"],
    plugins: ["@babel/plugin-proposal-object-rest-spread"]
};
