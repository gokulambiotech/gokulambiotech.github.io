---
title: Liquid Bio-Pesticides
description:
---

<ul class="staff">
	{% for product in site.products %}
    {% if product.pesticide %}
		<li>
      <!-- <div class="square-image"><img src="{% include relative-src.html src=product.image_path %}" alt="{{ product.name }}"/></div> -->
			<div class="name">
        <a href="{% include relative-src.html src=product.link %} " class="{{ class }}">
					{% if product.highlight %}
						<mark>New:</mark>
					{% endif %}
					{{ product.name}}
        </a>
        </div>
			<div class="position">{{ product.shortdescription}}</div>
		</li>
    {% endif %}
	{% endfor %}
</ul>

### CARRIER-BASED FORMULATION OF BIOPESTICIDES:
In addition to liquid technology based biopesticides, the following tradional talc based biopesticides are also available in 1 and 5 Kgs Packages:

#### The following Products are Registered with Central Insecticide Board
- Krishi – Trichoderma : For control of soil-borne fungal pathogens
- Krishi – Pseudomonas : For control of foliar diseases
- Krishi – Pacilomyces : For control of nematodes in soil         

#### The following Products have 1 year minimum shelf-life
- Krishi – Bio-A-Cnose : For anthracnose control in pomegranate & other fruit crops
- Krishi – Wilt Management Formula (WMF) : For wilt management in pomegranate & other crops
- Krishi – Phyllo Sanitizer : Useful for bio-sanitization of above ground parts of plants
- Krishi – Rhizo Sanitizer : Useful for bio-sanitization of rhizosphere
- Krishi – Grubguard : For control of soil grubs

### Precautions for use and Storage of Biopesticides and Fungicides
Spraying of chemical fungicides and antibiotics should be avoided seven days before and after application of biopesticides and fungicides. Bottle containing bioinoculants should be stored in a cool and dry place away from direct sunlight.
