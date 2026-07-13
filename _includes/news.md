<div class="news-section">

<h2 id="news">News</h2>

<ul class="news-list">
{% for item in site.data.news limit:10 %}
<li>
  <strong>[{{ item.date | date: "%b" }}. {{ item.date | date: "%Y" }}]</strong> {{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}
</li>
{% endfor %}
</ul>

{% if site.data.news.size > 10 %}
<details class="news-expand">
  <summary>Show more news ({{ site.data.news.size | minus: 10 }})</summary>
  <ul class="news-list news-list-more">
  {% for item in site.data.news offset:10 %}
  <li>
    <strong>[{{ item.date | date: "%b" }}. {{ item.date | date: "%Y" }}]</strong> {{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}
  </li>
  {% endfor %}
  </ul>
</details>
{% endif %}

</div>
