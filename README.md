[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/arsnebula/nebula-icon-button)

[![Build Status](https://saucelabs.com/browser-matrix/arsnebula.svg)](https://saucelabs.com/beta/builds/5fd27e14cfdc48cbb7bd59563f18e7d6)

# \<nebula-icon-button\>

A web component to display an icon or icon toggle button.

* Transitions between two icons when pressed
* Supports standard and toggle modes
* Styled to be used on a light or dark background
* Easily themed using CSS custom variables, mixins or style properties
* Supports [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/) authoring practices for **a11y**

## Installation

```sh
$ bower install -S arsnebula/nebula-icon-button
```

## Usage

Import the package elements:

```html
<link rel="import" href="/bower_components/nebula-icon-button/nebula-icon-button.html"> 
```

The following demonstrates the common set of properties and event handlers:

```html
<nebula-icon-button
  size="1rem"
  color="inherit"
  icon="bookmark-outline"
  pressed-icon="bookmark"
  toggle="[[toggle]]"
  pressed="{{pressed}}"
  on-tap="onButtonTap">
</nebula-icon-button>
```

*For more information on element properties and methods see the element API documentation.*

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Change Log

See [CHANGELOG](/CHANGELOG.md)

## License

See [LICENSE](/LICENSE.md)