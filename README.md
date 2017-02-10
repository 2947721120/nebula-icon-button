[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/arsnebula/nebula-icon-button)

[![Build Status](https://saucelabs.com/browser-matrix/arsnebula.svg)](https://saucelabs.com/beta/builds/f2ff4cc50e044094b700f697a6951f41)

# \<nebula-icon-button\>

A web component to display an icon or icon toggle button.

* Allows toggling between two configurable icons
* Supports standard and toggle modes
* Easily customized using CSS custom variables, mixins or style properties
* Looks great on light or dark backgrounds
* Supports [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/#button) authoring practices for **a11y**

## Installation

```sh
$ bower install -S arsnebula/nebula-icon-button
```

## Usage

Import the package elements:

```html
<link rel="import" href="/bower_components/nebula-icon-button/nebula-icon-button.html"> 
```

Add and configure the element as a standard command button.

```html
<nebula-icon-button
  icon="icons:bookmark"
  active-color="darkred"
  on-tap="_onTap">
  My Icon Button
</nebula-icon-button>
```

or a toggle button:

```html
<nebula-icon-button
  icon="icons:bookmark-border"
  active-icon="icons:bookmark"
  active-color="white"
  active-background-color="black"
  pressed="{{pressed}}"
  on-change="_onChange"
  toggle>
  My Icon Toggle Button
</nebula-icon-button>
```

> Icon properties expect the `id` for any icon in an iconset database defined using [iron-iconset](https://www.webcomponents.org/element/PolymerElements/iron-iconset) or [iron-iconset-svg](https://www.webcomponents.org/element/PolymerElements/iron-iconset-svg).

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