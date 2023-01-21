---
title:  Liquid Bio-Composing
description:
---

<ul class="staff">
	{% for product in site.products %}
    {% if product.composting %}
		<li>
      <!-- <div class="square-image"><img src="{% include relative-src.html src=product.image_path %}" alt="{{ product.name }}"/></div> -->
      <div class="name">
        <a href="{% include relative-src.html src=product.link %}
        " class="{{ class }}" {% if product.new_window %}target="_blank" rel="noopener noreferrer" {% endif %}>
          {{ product.name}}
        </a>
        </div>
			<div class="position">{{ product.shortdescription}}</div>
		</li>
    {% endif %}
	{% endfor %}
</ul>

### ADVANTAGES OF LIQUID BIOINOCULANTS

1. Easy to handle and transport.
2. Readily miscible in water.
3. No requirement of additives.
4. Shelf life more than a year at normal temperature.
5. Highly purified concentrate.
6. Less contamination.
7. Less quantity requirement per acre when compared to powder type of biofertilizers / biopesticides / biofungicides.
8. Better efficacy than normal powder formulations or broth type liquid formulations.
