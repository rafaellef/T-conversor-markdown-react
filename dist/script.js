function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
# Título
## Subtítulo

- Item listado 1
- Item listado 2

**Negrito**

 [Link para Google](https://www.google.com/)
 
 > Citação!
 
 Inline \`<div></div>\`
 
 Block
 \`\`\`
 let a = 2;
 let b = 2;
 let c = a + b;
 \`\`\`
 
 ![FCC](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
 
`;


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { className: "text-center m-4" }, "Converter Markdown"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", null, "Digitar texto"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h5", null, "Veja o resultado"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded",
        dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));