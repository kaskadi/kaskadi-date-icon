![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-date-icon)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-date-icon?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/kaskadi-date-icon/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/build-on-firefox?label=firefox&logo=firefox-browser)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/build-on-chrome?label=chrome&logo=google-chrome&logoColor=white)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-date-icon?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-date-icon?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-date-icon?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Usage instructions

In another element:
```js
// using the latest version
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-date-icon/kaskadi-date-icon.js'
// using a specific version
import 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-date-icon/release/v1.0.0/kaskadi-date-icon.js'
```

In the browser:
```html
<!-- using the latest version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-date-icon/kaskadi-date-icon.js"></script>
<!-- using a specific version -->
<script type="module" src="https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-date-icon/release/v1.0.0/kaskadi-date-icon.js"></script>
```

# Custom element documentation

## kaskadi-date-icon

An element to display a date as a calendar icon.

This also supports styling via custom CSS properties.

This element inherits properties from a base class `KaskadiElement`. To see which properties are available, please refer to [`KaskadiElement` documentation].


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| \[date\] | `string` | `'current date'` | date that should be displayed by the element. Supports the same date format as the one you would use when instanciating a new date via the [Date API] |

**Example**  
```html
<kaskadi-date-icon date="1975-04-07" style="--icon-size: 16px;"></kaskadi-date-icon>
```
<!-- LINKS -->

[`KaskadiElement` documentation]:https://github.com/kaskadi/kaskadi-element
[Date API]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

## Custom styles

No custom CSS properties found in this element.
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->
