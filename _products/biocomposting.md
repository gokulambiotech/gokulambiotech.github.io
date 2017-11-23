---
title: Gokulam Biotech Fertilizers
description: Check out more details.
---
<h2> Liquid Bio-Composing.</h2>

<ul class="staff">
	{% for product in site.products %}
    {% if product.composting %}
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
