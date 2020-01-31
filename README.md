![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-date-icon)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-date-icon?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/kaskadi-date-icon/example/index.html)

**GitHub Actions workflows status**

<!--Uncomment if you're in a branch which is not master or release/*
![](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/testing?label=test)-->
<!-- This badge should only be used for master and release/* branches. Otherwise use the one above -->
![](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-date-icon/publish?label=build)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-date-icon?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-date-icon?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-date-icon?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-date-icon)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/kaskadi-date-icon)](https://lgtm.com/projects/g/kaskadi/kaskadi-date-icon/?mode=list)


# kaskadi-date-icon

an icon to display date information.

![image](https://user-images.githubusercontent.com/10807348/72425594-65ba2780-3788-11ea-8c5e-d94af7111c77.png)

# import

```
import 'https://cdn.klimapartner.net/modules/@kaskadi/date-icon.js'
```

# usage

```
<kaskadi-date-icon></kaskadi-date-icon>
```

## attributes

| name | description | example | result |
| --- | --- | --- | --- |
| date | sets a date, syntax: `year-month-day`. you can pass whatever `Date()` returns | `date="1995-12-17"` | ![image](https://user-images.githubusercontent.com/10807348/72427362-e169a380-378b-11ea-9fc9-74baec61cc6b.png) |

## properties

| name | description | example | result |
| ---- | --- | --- | --- |
| --icon-size | the size of the icon | `--icon-size: 64px` | ![image](https://user-images.githubusercontent.com/10807348/72427581-54731a00-378c-11ea-84f5-dfea7da0059d.png) |
| --outline-color | color of the outline. (`--day-color and` `--name-color` default to `--outline-color` when not explicitely set) | `--outline-color: grey;` | ![image](https://user-images.githubusercontent.com/10807348/72427959-11fe0d00-378d-11ea-95aa-a4219b596e21.png) |
| --head-color | color of the month header | `--head-color: crimson` | ![image](https://user-images.githubusercontent.com/10807348/72428053-3823ad00-378d-11ea-9091-fea62df21250.png) |
| --day-color | the day color | `--day-color: crimson` | ![image](https://user-images.githubusercontent.com/10807348/72428194-7f11a280-378d-11ea-8d74-15ee4d13f75c.png) |
| --name-color | color of the weekday name | `--name-color: crimson` | ![image](https://user-images.githubusercontent.com/10807348/72428621-62c23580-378e-11ea-8f1e-2c68fec35456.png) |
| --month-color | color of the month and year | `--month-color: crimson` | ![image](https://user-images.githubusercontent.com/10807348/72428738-98671e80-378e-11ea-8849-0e35dca2d378.png) |
| --background-color | color of the month and year | `--background-color: beige` | ![image](https://user-images.githubusercontent.com/10807348/72429120-7c17b180-378f-11ea-827a-dffbb281571d.png) |


[see the example](https://cdn.klimapartner.net/modules/@kaskadi/date-icon/example/index.html)
