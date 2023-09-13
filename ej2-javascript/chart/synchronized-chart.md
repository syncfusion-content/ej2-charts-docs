---
layout: post
title: Synchronized Charts in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Synchronized Charts in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Synchronized Charts 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Synchronized Charts in ##Platform_Name## Chart control

## Tooltip synchronization

Synchronize the tooltips across the multiple charts using `showTooltip` and `hideTooltip` methods. When we hover over a data point in one chart, call the `showTooltip` method for the rest of the chart to display related information in other connected charts simultaneously.

In the `showTooltip` method, specify the following parameter programmatically to enable tooltips for a particular chart:

* `x` - Data point x-value or x-coordinate value.
* `y` - Data point y-value or y-coordinate value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs45/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs45/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs45" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs45/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs45/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs45" %}
{% endif %}

## Crosshair synchronization

Synchronize the crosshair across multiple charts using the `showCrosshair` and `hideCrosshair` methods. When hovering over one chart, call the `showCrosshair` method for the rest of the charts to align with data points in other linked charts, simplifying data comparison and analysis.

In the `showCrosshair` method, specify the following parameter programmatically to enable crosshairs for a particular chart:

* `x` - Specifies the x value of the point or x-coordinate.
* `y` - Specifies the y value of the point or y-coordinate.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs46/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs46/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs46" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs46/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs46/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs46" %}
{% endif %}

## Zooming synchronization

You can maintain consistent zoom levels across multiple charts using the [`zoomComplete`](../api/chart/iZoomCompleteEventArgs/) event. In the zoomComplete event, obtain the [`zoomFactor`](../api/chart/iZoomCompleteEventArgs/#currentzoomfactor) and [`zoomPosition`](../api/chart/iZoomCompleteEventArgs/#currentzoomposition) values of the particular chart and then apply the same values to the rest of the charts.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs47/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs47/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs47" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs47/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs47/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs47" %}
{% endif %}

## Selection synchronization

You can select the data across multiple charts using the [`selectionComplete`](../api/chart/iSelectionCompleteEventArgs/) event. In the selectionComplete event, obtain the selected values of the current chart and then apply the same values to the rest of the charts.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/user-interaction-cs48/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs48" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/user-interaction-cs48/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/user-interaction-cs48/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/user-interaction-cs48" %}
{% endif %}