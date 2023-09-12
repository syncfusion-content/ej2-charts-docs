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

## Synchronized charts

This sample showcases the synchronization of multiple charts, with crosshair, tooltip, and zooming functionalities synchronized across the charts. Hover over or zoom in on one chart to observe the corresponding impact on the other charts as well.

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