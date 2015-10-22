# 4commerce:blaze-as-react

This [meteorjs](https://www.meteor.com) package allows you to use Blaze templates as and inside React components.

<br/>
### Installation

You can add this package to your meteor app like any other package from atmosphere

````
$ meteor add 4commerce:blaze-as-react
````

<br/>

### Usage

This package registers the function `Template.AsReactComponent()` and the property `React.BlazeView`.

<br/>
##### Sample template

foo.html:

````
<template name="foo">
  <div>
    <p>Hello world!: {{bar}}
  </div>
</template>
````

<br/>
##### use React.BlazeView

about.jsx:

````
var pageAbout = React.createClass({
  render() {
    return (
      <div>
        <React.BlazeView template="foo" bar="Send from React ..." />
      </div>
    );
  }
});
````

<br/>
##### use Template.AsReactComponent()

about.jsx:

````
var Foo = Template.AsReactComponent('foo');

var pageAbout = React.createClass({
  render() {
    return (
      <div>
        <Foo bar="Send from React ..." />
      </div>
    );
  }
});
````

<br/>
You may decide which method fits your needs best.

<br/>
> Attention: If you use `Template.AsReactComponent` don't name your var starting with lowercase character like `foo` or `myFoo` etc. In that case React will not use that variable as a component.
> 
> var foo = Template.AsReactComponent('foo');
> ...
> &lt;foo bar="Send from React ..." />
> 
> does not work!

<br/>

### Package dependencies

When you add this package, follwing dependencies will load:

1. underscore
2. templating
3. react-runtime

<br/>

### Related links

1. Meteor Forum: [Smoothly feature up your Blaze Apps with React Components](https://forums.meteor.com/t/smoothly-feature-up-your-blaze-apps-with-react-components/11960)
2. Read the docs: [React in Meteor](https://react-in-meteor.readthedocs.org/en/latest/)
3. Meteor on github: [React packages](https://github.com/meteor/react-packages/tree/devel/packages) 

<br/>

### Issues & help

In case of support or error please report your issue request. The issue tracker is available at: https://github.com/4commerce-technologies-AG/meteor-package-blaze-as-react/issues

<br/>

### Author & Credits

Author: [Tom Freudenberg, 4commerce technologies AG](http://about.me/tom.freudenberg)

Copyright (c) 2015 [Tom Freudenberg](http://www.4commerce.de/), [4commerce technologies AG](http://www.4commerce.de/), released under the MIT license

I found a number of ressources on the internet doing something similar but not completely. So I took all here together in this new package. Thanks to all unlisted authors for their inspiration.

