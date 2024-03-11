---
layout: post
title: Empty points in ##Platform_Name## Circular Chart 3D control | Syncfusion
description: Learn here all about Empty points in Syncfusion ##Platform_Name## Circular Chart 3D control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Empty points 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Empty points in ##Platform_Name## Circular Chart 3D control

The data points those uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and not plotted in the Circular Chart 3D. You can customize those points, using the `emptyPointSettings` property in series. The default mode of the empty point is `Gap`. Other supported modes are `Average` and `Zero`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-points" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-points" %}
{% endif %}

## Customization

Specific color for an empty point can be set by using the `fill` property in `emptyPointSettings` and the border for an empty point can be set by using the `border` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-point-custom" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-point-custom" %}
{% endif %}