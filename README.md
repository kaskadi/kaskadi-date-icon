![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-date-icon)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-date-icon?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/kaskadi-date-icon/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/build-on-firefox?label=firefox&logo=Mozilla%20Firefox&logoColor=white)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/build-on-chrome?label=chrome&logo=Google%20Chrome&logoColor=white)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/kaskadi-date-icon/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-date-icon?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-date-icon?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-date-icon?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/kaskadi-date-icon?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/kaskadi-date-icon/?mode=list&logo=LGTM)

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


| Param | Type | Description |
| --- | --- | --- |
| date | `string` | date that should be displayed by the element. Supports the same date format as the one you would use when instanciating a new date via the [Date API] |
| lang | `string` | element's language |
| style | `string` | regular inline style. See the live example for illustration. Supports the following custom CSS properties: `--icon-size`, `--background-color`, `--outline-color`, `--head-color`, `--day-color`, `--month-color` and `--name-color` |

**Example**  
```html
<kaskadi-date-icon date="1975-04-07" lang="en" style="--icon-size: 16px;"></kaskadi-date-icon>
```
<!-- LINKS -->

[Date API]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->
