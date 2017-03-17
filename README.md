[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/arsnebula/nebula-icon-button)
[![Gitter chat](https://badges.gitter.im/org.png)](https://gitter.im/arsnebula/webcomponents)

# \<nebula-icon-button\>

A customizable icon or icon toggle button.

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
  on-tap="_onTap">
  My Icon Button
</nebula-icon-button>
```

or a toggle button:

```html
<nebula-icon-button
  icon="icons:bookmark-border"
  active-icon="icons:bookmark"
  pressed="{{pressed}}"
  on-change="_onChange"
  toggle>
  My Icon Toggle Button
</nebula-icon-button>
```

> The element icon properties support [nebula-icons] and expect a key to an icon in a published iconset. For more information see the **nebula-icons** documentation.

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