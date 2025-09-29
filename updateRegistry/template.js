const template = (variables, { tpl }) => {
  return tpl`
    ${variables.imports};

    export default ${variables.jsx}
  `;
};

module.exports = template;
