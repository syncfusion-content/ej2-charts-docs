---
layout: post
title: Print and Export in ##Platform_Name## Circular Chart 3D control | Syncfusion
description: Learn here all about Print and Export in Syncfusion ##Platform_Name## Circular Chart 3D control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Print and Export
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in ##Platform_Name## Circular Chart 3D control

## Print

The rendered Circular Chart 3D can be printed directly from the browser by calling the public method `print`. The ID of the Circular Chart 3D div element must be passed as the input parameter to that method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/print/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/print/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/print" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/print/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/print/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/print" %}
{% endif %}

## Export

The rendered Circular Chart 3D can be exported to `JPEG`, `PNG`, or `SVG` format using the `export` method. We can export the Circular Chart 3D as a `PDF` format using the `pdfExport` method. The input parameters for this method are `type` for the format and `fileName` for the result.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/export/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/export/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/export" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/export/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/export/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/export" %}
{% endif %}
