---
title: Liquid Bio-Fertilizers
description:
---
<ul class="staff">
	{% for product in site.products %}
    {% if product.fertilizer %}
		<li>
      <!-- <div class="square-image"><img src="{% include relative-src.html src=product.image_path %}" alt="{{ product.name }}"/></div> -->
			<div class="name">
        <a href="{% include relative-src.html src=product.link %}
        " class="{{ class }}" {% if product.new_window %}target="_blank" rel="noopener noreferrer"{% endif %}>
          {{ product.name}}
        </a>
        </div>
			<div class="position">{{ product.shortdescription}}</div>
		</li>
    {% endif %}
	{% endfor %}
</ul>

## Bio-Fertilizers Kits

<ul class="staff">
	{% for product in site.products %}
    {% if product.fertilizerkits %}
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


### REPLACEMENT OF CHEMICAL FERTILIZERS BY BIOFERTILIZERS

Biofertilizers cannot replace chemical fertilizers immediately. Therefore, attempts
should not be made to drastically or totally replace chemical fertilizers with biofertilizers. Abrupt change from use of chemical fertilizers to biofertilzers will affect crop yield. In the long run and with repeated application of biofertizers along with well decomposed organic manure, it will be possible to reduce the dose of application of chemical fertilizers.

### BENEFITS OF BIOFERILIZERS

1. By using biofertilizers, one can decrease the use of chemical fertilizers by about 25 to 50%.
2. Biofertilizers are capable of increasing crop yield by about 10 to 25%.
3. Biofertilizers improve health of soil and bioactivity.
4. Biofetilizers are environment friendly and therefore help to protect environment from the effects  of harmful chemicals.
5. Biofertilizers inhabit the rhizosphere and during their multiplication and growth, secrete organic growth factors which are important for crop growth.

### ADVANTAGES OF LIQUID BIOINOCULANTS

1. Easy to handle and transport.
2. Readily miscible in water.
3. No requirement of additives.
4. Shelf life more than a year at normal temperature.
5. Highly purified concentrate.
6. Less contamination.
7. Less quantity requirement per acre when compared to powder type of biofertilizers / biopesticides / biofungicides.
8. Better efficacy than normal powder formulations or broth type liquid formulations.
