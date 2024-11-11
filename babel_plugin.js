module.exports = function prefixConsoleLog({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        if (
          t.isMemberExpression(path.node.callee) &&
          path.node.callee.object.name === "console" &&
          path.node.callee.property.name === "log"
        ) {
          path.node.arguments.unshift(t.stringLiteral("[INFO]:"));
        }
      },
    },
  };
};
