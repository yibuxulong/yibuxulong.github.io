<h2 id="publications" class="publications-title">Selected Publications</h2>

<div class="publication-toolbar">
  <div class="theme-switcher" aria-label="Research theme switcher">
    <button type="button" class="theme-chip is-active" data-research-theme="all" aria-pressed="true">All</button>
    <button type="button" class="theme-chip" data-research-theme="multimodal" aria-pressed="false">Multimodal Learning</button>
    <button type="button" class="theme-chip" data-research-theme="robust" aria-pressed="false">Robust Representation</button>
    <button type="button" class="theme-chip" data-research-theme="hci" aria-pressed="false">Human-Computer Interaction</button>
  </div>

  <p class="theme-hint">Choose a lens to show only the papers that match it.</p>
</div>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li data-research-themes="{{ link.themes | join: ' ' }}">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
      {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="paper-theme-row">
        {% for theme in link.themes %}
          {% if theme == "multimodal" %}<span class="paper-theme paper-theme-multimodal">Multimodal</span>{% endif %}
          {% if theme == "robust" %}<span class="paper-theme paper-theme-robust">Robust</span>{% endif %}
          {% if theme == "hci" %}<span class="paper-theme paper-theme-hci">HCI</span>{% endif %}
        {% endfor %}
      </div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
      {% if link.summary %}
      <details class="pub-summary">
        <summary>What we do</summary>
        <blockquote class="summary">{{ link.summary }}</blockquote>
      </details>
      {% endif %}
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0 bibtex-btn" role="button" style="font-size:12px;" data-bibtex-url="{{ link.bibtex }}">BibTex</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>

<div id="bibtex-modal" class="bibtex-modal" hidden>
  <div class="bibtex-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="bibtex-modal-title">
    <div class="bibtex-modal-header">
      <span id="bibtex-modal-title">BibTeX</span>
      <button type="button" class="bibtex-modal-close" aria-label="Close">&times;</button>
    </div>
    <pre id="bibtex-modal-content" class="bibtex-modal-content"></pre>
    <div class="bibtex-modal-footer">
      <button type="button" id="bibtex-copy-btn" class="bibtex-copy-btn">
        <i class="fas fa-copy" aria-hidden="true"></i> Copy
      </button>
    </div>
  </div>
</div>
<script src="{{ '/assets/js/bibtex-modal.js' | relative_url }}"></script>

