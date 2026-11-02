# LSG Supermarket Website

## Student Information
- **Full Name:** Ivirn Nkosi
- **Student Number:** ST10513138
- **Group:** 3
- **Module:** Web Development (WEDE5020)

## Project Overview
 

LSG Supermarket is a family-run neighbourhood grocer with two branches in
Pretoria (Hatfield, opened 2015, and Sunnyside, opened 2021). The store
sells fresh produce, an in-store bakery range, groceries and pantry
staples, and household essentials. Until now, LSG Supermarket's only
online presence has been a Facebook page used to post weekly specials.

Mission: To provide affordable, qualify groceries with friendly, convenient service.
Vision: To provide the most trusted and convenient neighbourhood supermarket in the greater PTA area.
Target: Local households and families in Gauteng doing a weekly shop, and busy professionals who value convenience and value for money.

## Website Goals and Objectives
- Establish a professional online presence that builds customer trust.
- Promote weekly specials and in-store promotions to a wider audience.
- Provide clear, accessible information on trading hours, branch
  locations, and services.
- Give customers a structured way to enquire about stock, bulk orders,
  supplier partnerships, and careers

Key Performance Indicators (KPIs): monthly website visits, enquiry form submissions, and time spent on the promotions page. 

## What changed in the proposal for part 3
| Proposal section | Part 1 / 2 | Part 3 update |
|---|---|---|
| Technical requirements | HTML, CSS, JavaScript on shared hosting with a custom domain | Still HTML, CSS, JavaScript, now with the Leaflet library (OpenStreetMap). Hosted free on **GitHub Pages** instead of shared hosting |
| Features | Static pages and a basic enquiry form | Searchable product catalogue, dynamic specials, accordion FAQ, tabs, modal, gallery lightbox, interactive maps, validated forms with an instant response |
| Budget | Domain R350/yr, hosting R900, maintenance R500/yr | Hosting is now R0 (GitHub Pages). Domain and maintenance costs are unchanged |
| Timeline | Part 3: testing and final submission, week 11 | Part 3 delivered: functionality, SEO, forms, deployment |

## Proposed Website Features and Functionality 
Homepage: hero banner, weekly specials highlight, and quick navigation.  

About Us: store history, mission, and team introduction.  

Products/Services: categorized grocery departments and offerings.  

Enquiry page: form for feedback, supplier, or partnership enquiries.  

Contact page: store locations, maps, hours, and contact form. 

 

## Sitemap
Homepage (index.html)
├── About Us (about.html)
├── Products (services.html)
├── Enquiry (enquiries.html)
└── Contact (contact.html)

## part 3
| Page | Purpose | Part 3 features |
|---|---|---|
| `index.html` | Home | Dynamic weekly specials, product detail modal, scroll animations, structured data |
| `about.html` | About Us | Gallery with lightbox, accordion FAQ |
| `products.html` | Products | Department tabs, live search, in-stock filter, price sort, modal |
| `enquiry.html` | Enquiry | Conditional fields, JavaScript validation, AJAX submit, cost/availability response |
| `contact.html` | Contact | Leaflet interactive maps for both branches, validated form that compiles an email |
| `robots.txt`, `sitemap.xml` | SEO | Crawler instructions and site map |

## Timeline and Milestones
Part 1 Proposal, research, HTML structure Week 2. | Part 2 Styling and interactivity Week 5 CSS styling will be applied to the existing structure | Part 3 Testing and final submission Week 11. 

## Part 1:
1. This contains research of 2 business proposals.
2. The first proposal is about NK Funeral Cover; the second proposal covers Lesego (LSG) Supermarket this business proposals are well known as small retail business

## File and Folder Structure
lesego(lsg)supermaket/
├── index.html
├── about.html
├── services.html
├── enquiries.html
├── contact.html
├── css_assets/
│   └── style.css
├── js_assets/
│   └── script.js
├── _images/
│   └── Lesego.png
└── private/


## Changelog
### Part 1[14-08-2026]
Created the five-page site structure
  (`index.html`, `about.html`, `services.html`, `enquiries.html`,
  `contact.html`) with semantic HTML, organisation-specific content, a
  working navigation menu, an external stylesheet, and a base script for
  the mobile navigation toggle and enquiry form confirmation message.
  Added the `Lesego.png` storefront illustration as the site's logo and
  as a feature image on the About page.

  ## Part 3 development
| Date | Change | Files |
|---|---|---|
Rewrote `script.js` into modules and added shared product data used by the home page, catalogue and enquiry form | `js/script.js` |
Added accordion FAQ and a lightbox photo gallery to the About page | `about.html`, `js/script.js`, `css/style.css` |
Added department tabs, live search, in-stock filter, sort and product modal to the Products page | `products.html`, `js/script.js`, `css/style.css` |
Added dynamic weekly specials to the home page | `index.html`, `js/script.js` |
Replaced Google Maps iframes with Leaflet interactive maps | `contact.html`, `js/script.js`, `css/style.css` |
Rebuilt the enquiry form with conditional fields, validation, AJAX submit and a cost/availability response | `enquiry.html`, `js/script.js` |
Rebuilt the contact form with validation and a compiled email | `contact.html`, `js/script.js` |
Added scroll and hover animations with reduced-motion support | `css/style.css`, `js/script.js` |
SEO: titles, descriptions, keywords, canonical, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml` | all pages |
Performance and security: deferred scripts, CSP, referrer policy, safe OM building | all pages |
Accessibility: skip link, ARIA roles and labels, visible focus states | all pages, `css/style.css` |
  
## Referencing
- https://www.youtube.com/watch?v=2vH9JgvRd2c
- https://www.scribbr.co.uk/referencing/harvard-website-reference/
- https://libguides.scu.edu.au/harvard/websites
- https://owlmedia.co.za/(Accessed:6August2026)
- Unsplash, 2026. Supermarket and grocery photography, used under the [Unsplash License](https://unsplash.com/license) (free to use, no attribution required). (Accessed:5September2026)
- Leaflet (2023) *Leaflet: an open-source JavaScript library for interactive maps*, v1.9.4. Available at: https://leafletjs.com 
- OpenStreetMap contributors (2026) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright.
- MDN Web Docs (2026) *IntersectionObserver*, *Fetch API* and *ARIA: tab role*. Available at: https://developer.mozilla.org 
- W3C (2026) *ARIA Authoring Practices Guide: Accordion and Dialog patterns*. Available at: https://www.w3.org/WAI/ARIA/apg/.
- Schema.org (2026) *GroceryStore*. Available at: https://schema.org/GroceryStore.
- Google (2026) *Search Central: robots.txt and sitemaps*. Available at: https://developers.google.com/search.
- Owl Media (2026) Available at: https://owlmedia.co.za/.
- Scribbr (2026) *Harvard website reference*. Available at: https://www.scribbr.co.uk/referencing/harvard-website-reference/.
