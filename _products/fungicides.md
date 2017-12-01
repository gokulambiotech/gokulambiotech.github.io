---
title: KRISHI - Biofungicides
description:
---
<ul class="staff">
	{% for product in site.products %}
    {% if product.fungicide %}
		<li>
      <!-- <div class="square-image"><img src="{% include relative-src.html src=product.image_path %}" alt="{{ product.name }}"/></div> -->
			<div class="name">
        <a href="{% include relative-src.html src=product.link %}
        " class="{{ class }}" {% if product.new_window %}target="_blank"{% endif %}>
          {{ product.name}}
        </a>
        </div>
			<div class="position">{{ product.shortdescription}}</div>
		</li>
    {% endif %}
	{% endfor %}
</ul>

### Precautions for use and Storage of Biopesticides and Fungicides
Spraying of chemical fungicides and antibiotics should be avoided seven days before and after application of biopesticides and fungicides. Bottle containing bioinoculants should be stored in a cool and dry place away from direct sunlight.
