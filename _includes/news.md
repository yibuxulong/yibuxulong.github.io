<div class="news-section">

<h2 id="news">News</h2>

{% if site.data.news.size > 10 %}
<input type="checkbox" id="news-expand-toggle" class="news-expand-toggle" aria-hidden="true">
{% endif %}

<ul class="news-list">
{% for item in site.data.news %}
<li{% if forloop.index > 10 %} class="news-extra"{% endif %}>
  <strong>[{{ item.date | date: "%b" }}. {{ item.date | date: "%Y" }}]</strong> {{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}
</li>
{% endfor %}
</ul>

{% if site.data.news.size > 10 %}
<label for="news-expand-toggle" class="news-toggle news-show-more">Show more news ({{ site.data.news.size | minus: 10 }})</label>
<label for="news-expand-toggle" class="news-toggle news-show-less">Show less</label>
{% endif %}

</div>
