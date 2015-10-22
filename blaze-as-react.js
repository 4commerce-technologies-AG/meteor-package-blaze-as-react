// Test that we do not overwrite some existing properties
if (Template.AsReactComponent) {
  throw new Meteor.Error("4commerce:blaze-as-react", "Sorry, but you have already defined a method named Template.AsReactComponent!");
}

// Define as function to create a React component out of
// a Blaze template. Use the result of the method call
// later on inside you React components
//
// e.g.:
//
// var Foo = Template.AsReactComponent('foo');
//
// <Foo data="bar" />
//
Template.AsReactComponent = function (template) {
  // create and return a new React component
  return React.createClass({

    // Leave full control to Blaze once component is in use
    shouldComponentUpdate: function() {
      return false;
    },

    // append props to templates data
    componentWillReceiveProps: function(props) {
      _.extend(this.blazeView.dataVar.curValue, props);
      // signal tracker
      this.blazeView.dataVar.dep.changed();
    },

    // insert this component to DOM
    componentDidMount: function() {
      var componentNode = React.findDOMNode(this);
      // get name of template from method call or template property
      template = template || this.props.template;
      // check for existing template
      if (template && Template[template]) {
        // save successfull rendered view
        this.setState({ blazeView: Blaze.renderWithData(Template[template], this.props, componentNode) });
      } else {
        // drop an error
        throw new Meteor.Error("Template.ToReact", "Template " + template + "is missing.");
      }
    },

    // check to remove view from Blaze if was created
    componentWillUnmount: function() {
      if (this.state.blazeView) {
        Blaze.remove(this.state.blazeView);
        // unset state
        this.setState({ blazeView: undefined });
      }
    },

    // simple render this component
    render: function() {
      return React.createElement("div", null);
    }
  });
}



// Test that we do not overwrite some existing properties
if (React.BlazeView) {
  throw new Meteor.Error("4commerce:blaze-as-react", "Sorry, but you have already defined a method named React.BlazeView!");
}

// Define as property to global React object to
// simple allow inserting of Blaze templates
// inside React compnonets
//
// e.g.:
//
// <React.BlazeView template="foo" data="bar" />
//
React.BlazeView = Template.AsReactComponent();
