---
layout: post
title: Value bar in ##Platform_Name## Bullet chart control | Syncfusion
description: Learn here all about Value bar in Syncfusion ##Platform_Name## Bullet chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Value bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Value bar in ##Platform_Name## Bullet chart control

To display the primary data or the current value of the data being measured known as the **Feature Measure** that should be encoded as a bar. This is called as the **Actual Bar** or the **Feature Bar** in the Bullet Chart, and to display the actual bar the [`valueField`](../api/bullet-chart/#valuefield) should be mapped to the appropriate field from the data source.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/featurebar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/featurebar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs1" %}
{% endif %}

## Types of actual bar

The shape of the actual bar can be customized using the [`type`](../api/bullet-chart/#type) property of the Bullet Chart. The actual bar contains `Rect` and `Dot` shapes. By default, the actual bar shape is Rect.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/featurebar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/featurebar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs2" %}
{% endif %}

## Actual bar customization

### Border customization

Using the [`valueBorder`](../api/bullet-chart/#valueborder) property of the bullet chart, you can customize the border [`color`](../api/bullet-chart/border/#color) and [`width`](../api/bullet-chart/border/#width) of the actual bar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/featurebar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/featurebar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs3" %}
{% endif %}

### Fill color and height customization

Customize the fill color and height of the actual bar using the [`valueFill`](../api/bullet-chart/#valuefill) and [`valueHeight`](../api/bullet-chart/#valueheight) properties of the bullet chart. Also, you can bind the color for the actual bar from [`dataSource`](../api/bullet-chart/#datasource) for the bullet chart using [`valueFill`](../api/bullet-chart/#valuefill) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/bullet-chart/featurebar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/bullet-chart/featurebar-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/bullet-chart/featurebar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/featurebar-cs4" %}
{% endif %}