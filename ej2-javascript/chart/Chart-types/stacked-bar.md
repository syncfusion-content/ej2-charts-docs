---
layout: post
title: Stacked bar in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Stacked bar in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stacked bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Stacked bar in ##Platform_Name## Chart control

## 100% Stacked Bar

To render a [100% stacked bar](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/100-stacked-bar-chart) series, use series [`type`](../../api/chart/seriesModel/#type-string) as `StackingBar100` and inject `StackingBarSeries` module using `Chart.Inject(StackingBarSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs147/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs147/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs147" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs147/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs147/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs147" %}
{% endif %}

## Series customization

The following properties can be used to customize the `100% stacked column` series.

* [fill](../../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../../api/chart/seriesModel/#fill).
* [dashArray](../../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](../../api/chart/borderModel/#properties) – Specifies the [color](../../api/chart/borderModel/#color) and [width](../../api/chart/borderModel/#width) of series border.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs148/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs148/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs148" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs148/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs148/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs148" %}
{% endif %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
