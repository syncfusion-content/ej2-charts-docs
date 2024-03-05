---
layout: post
title: Es5 getting started with ##Platform_Name## Circular Chart 3D control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Circular Chart 3D control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Circular Chart 3D control

This section explains you the steps required to create a simple Circular Chart 3D and demonstrate the basic usage of the Circular Chart 3D control.

## Dependencies

Below is the list of minimum dependencies required to use the Circular Chart 3D.

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-svg-base
```

## Setup for local environment

Refer the following steps for setup your local environment.

**Step 1:** Create a root folder **myapp** for your application.

**Step 2:** Create **myapp/resources** folder to store local scripts and styles files.

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing Essential JS 2 Circular Chart 3D control.

## Adding Syncfusion resources

The Essential JS 2 Circular Chart 3D control can be initialized by using either of the following ways.

* Using local script.
* Using CDN link for script.

### Using local script

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the chart and its dependencies scripts and style file into the **resources/scripts** and **resources/styles** folder.

Refer the below code to find location Circular Chart 3D script and style file.

**Syntax:**

> Dependency script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**

> Dependency script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-base/dist/global/ej2-base.min.js`
>
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-charts/dist/global/ej2-charts.min.js`
>

After copying the files, then you can refer the Circular Chart 3D scripts into the `index.html` file.The below html code example shows the minimal dependency of chart.

```

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Circular Chart 3D</title>

            <!-- Essential JS 2 Circular Chart 3D dependent scripts -->
            <script src="resources/scripts/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/scripts/ej2-svg-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Circular Chart 3D global script -->
            <script src="resources/scripts/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN link for script

Using CDN link, you can directly refer the chart control's script into the `index.html`.

Refer the chart's CDN links as below

**Syntax:**

> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js`](http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js)

The below html code example shows the minimal dependency of chart.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Circular Chart 3D</title>
            <!-- Essential JS 2 Chart's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

## Adding Circular Chart 3D control

Now, you can start adding Circular Chart 3D control in the application. For getting started, add a **div** element for Circular Chart 3D control in **index.html**. Then refer the **index.js** file into the **index.html** file.

In this document context we are going to use **ej2.min.js** which includes all the Essential JS 2 components and its dependent scripts.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Circular Chart 3D</title>
            <!-- Essential JS 2 all script -->
            <script src="http://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for Circular Chart 3D  -->
             <div id="element"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following Circular Chart 3D code in the **index.js**.

```javascript

var circularchart = new ej.charts.CircularChart3D();
circularchart.appendTo('#element');

```

**Pie Series**

By default, the pie series will be rendered when assigning the JSON data to the series using the `dataSource` property. Map the field names in the JSON data to the `xName` and `yName` properties of the series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/getting-started/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/getting-started/js/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/getting-started" %}