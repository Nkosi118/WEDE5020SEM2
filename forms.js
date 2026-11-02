var PRODUCTS = [
  { id: "tomatoes",  name: "Fresh Tomatoes (1kg)",     dept: "produce",   price: 24.99, was: 32.99, special: true,  icon: "🍅", stock: ["Hatfield", "Sunnyside"] },
  { id: "bananas",   name: "Bananas (1kg)",            dept: "produce",   price: 19.99, was: 0,     special: false, icon: "🍌", stock: ["Hatfield", "Sunnyside"] },
  { id: "spinach",   name: "Spinach Bunch",            dept: "produce",   price: 14.99, was: 0,     special: false, icon: "🥬", stock: ["Hatfield"] },
  { id: "apples",    name: "Red Apples (1.5kg bag)",   dept: "produce",   price: 39.99, was: 49.99, special: true,  icon: "🍎", stock: ["Hatfield", "Sunnyside"] },
  { id: "white-bread", name: "White Loaf",             dept: "bakery",    price: 17.99, was: 0,     special: false, icon: "🍞", stock: ["Hatfield", "Sunnyside"] },
  { id: "rolls",     name: "Bread Rolls (6 pack)",     dept: "bakery",    price: 22.99, was: 0,     special: false, icon: "🥖", stock: ["Hatfield", "Sunnyside"] },
  { id: "croissants", name: "Butter Croissants (4)",   dept: "bakery",    price: 34.99, was: 42.99, special: true,  icon: "🥐", stock: ["Sunnyside"] },
  { id: "muffins",   name: "Blueberry Muffins (2)",    dept: "bakery",    price: 28.99, was: 0,     special: false, icon: "🧁", stock: [] },
  { id: "maize-meal", name: "Maize Meal (5kg)",        dept: "pantry",    price: 64.99, was: 0,     special: false, icon: "🌽", stock: ["Hatfield", "Sunnyside"] },
  { id: "rice",      name: "Long Grain Rice (2kg)",    dept: "pantry",    price: 49.99, was: 57.99, special: true,  icon: "🍚", stock: ["Hatfield", "Sunnyside"] },
  { id: "milk",      name: "Full Cream Milk (2L)",     dept: "pantry",    price: 36.99, was: 0,     special: false, icon: "🥛", stock: ["Hatfield", "Sunnyside"] },
  { id: "baked-beans", name: "Baked Beans (410g)",     dept: "pantry",    price: 15.99, was: 0,     special: false, icon: "🥫", stock: ["Hatfield"] },
  { id: "dish-liquid", name: "Dishwashing Liquid (750ml)", dept: "household", price: 27.99, was: 0, special: false, icon: "🧴", stock: ["Hatfield", "Sunnyside"] },
  { id: "toilet-paper", name: "Toilet Paper (9 roll)", dept: "household", price: 59.99, was: 69.99, special: true,  icon: "🧻", stock: ["Hatfield", "Sunnyside"] },
  { id: "washing-powder", name: "Washing Powder (2kg)", dept: "household", price: 74.99, was: 0,    special: false, icon: "🧼", stock: ["Sunnyside"] },
  { id: "bin-bags",  name: "Bin Bags (20 pack)",       dept: "household", price: 21.99, was: 0,     special: false, icon: "🛍️", stock: [] }
];

var DEPT_LABELS = { produce: "Fresh Produce", bakery: "Bakery", pantry: "Groceries & Pantry", household: "Household" };

function formatRand(n) { return "R" + n.toFixed(2); }

function findProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) { if (PRODUCTS[i].id === id) { return PRODUCTS[i]; } }
  return null;
}

function el(tag, className, text, attrs) {
  var node = document.createElement(tag);
  if (className) { node.className = className; }
  if (text !== undefined && text !== null) { node.textContent = text; }
  if (attrs) { Object.keys(attrs).forEach(function (k) { node.setAttribute(k, attrs[k]); }); }
  return node;
}

function buildProductCard(p) {
  var card = el("article", "card product-card reveal");
  card.appendChild(el("div", "product-icon", p.icon, { "role": "img", "aria-label": p.name }));
  var body = el("div", "card-body");
  body.appendChild(el("p", "product-dept", DEPT_LABELS[p.dept]));
  body.appendChild(el("h3", null, p.name));

  var priceRow = el("p", "product-price", formatRand(p.price));
  if (p.was) { priceRow.appendChild(el("span", "product-was", formatRand(p.was))); }
  body.appendChild(priceRow);

  var inStock = p.stock.length > 0;
  body.appendChild(el("p", "stock-badge " + (inStock ? "in-stock" : "out-of-stock"),
    inStock ? "In stock: " + p.stock.join(" & ") : "Out of stock - ask us to reserve"));

  var btn = el("button", "btn btn-outline btn-small", "View details", { "type": "button", "data-product": p.id });
  body.appendChild(btn);
  card.appendChild(body);
  return card;
}

document.addEventListener("DOMContentLoaded", function () {

  /*  1. Mobile navigation toggle */
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector(".primary-nav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal:not(.is-revealed)");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("is-revealed"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (i) { io.observe(i); });
  }
  initReveal();

  /*  3. Accordion  */
  document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      var expanded = trigger.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".accordion-trigger").forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
        document.getElementById(t.getAttribute("aria-controls")).hidden = true;
      });
      if (!expanded) { trigger.setAttribute("aria-expanded", "true"); panel.hidden = false; }
    });
  });

  /* 5. Dynamic specials on the homepage  */
  var specialsList = document.getElementById("specials-list");
  if (specialsList) {
    PRODUCTS.filter(function (p) { return p.special; }).slice(0, 4).forEach(function (p) {
      specialsList.appendChild(buildProductCard(p));
    });
    initReveal();
  }

  /* 4 + 6. Catalogue: */
  var grid = document.getElementById("product-grid");
  if (grid) {
    var state = { dept: "all", query: "", sort: "name", stockOnly: false };
    var searchInput = document.getElementById("product-search");
    var sortSelect = document.getElementById("product-sort");
    var stockCheck = document.getElementById("in-stock-only");
    var countLabel = document.getElementById("result-count");
    var tabs = document.querySelectorAll('[role="tab"]');

    function renderCatalogue() {
      var q = state.query.trim().toLowerCase();
      var results = PRODUCTS.filter(function (p) {
        var matchesDept = state.dept === "all" || p.dept === state.dept;
        var matchesText = q === "" || p.name.toLowerCase().indexOf(q) !== -1 || DEPT_LABELS[p.dept].toLowerCase().indexOf(q) !== -1;
        var matchesStock = !state.stockOnly || p.stock.length > 0;
        return matchesDept && matchesText && matchesStock;
      });

      results.sort(function (a, b) {
        if (state.sort === "price-asc") { return a.price - b.price; }
        if (state.sort === "price-desc") { return b.price - a.price; }
        return a.name.localeCompare(b.name);
      });

      grid.textContent = ""; 
      if (results.length === 0) {
        grid.appendChild(el("p", "no-results", "No products match your search. Try a different word or clear the filters."));
      } else {
        results.forEach(function (p) { grid.appendChild(buildProductCard(p)); });
      }
      countLabel.textContent = results.length + (results.length === 1 ? " product found" : " products found");
      initReveal();
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); t.tabIndex = -1; });
        tab.setAttribute("aria-selected", "true");
        tab.tabIndex = 0;
        state.dept = tab.getAttribute("data-dept");
        renderCatalogue();
      });
      
      tab.addEventListener("keydown", function (e) {
        var list = Array.prototype.slice.call(tabs);
        var i = list.indexOf(tab);
        if (e.key === "ArrowRight") { list[(i + 1) % list.length].focus(); list[(i + 1) % list.length].click(); }
        if (e.key === "ArrowLeft") { list[(i - 1 + list.length) % list.length].focus(); list[(i - 1 + list.length) % list.length].click(); }
      });
    });

    searchInput.addEventListener("input", function () { state.query = searchInput.value; renderCatalogue(); });
    sortSelect.addEventListener("change", function () { state.sort = sortSelect.value; renderCatalogue(); });
    stockCheck.addEventListener("change", function () { state.stockOnly = stockCheck.checked; renderCatalogue(); });
    renderCatalogue();
  }

  /* 7. Modal dialog */
  var lastFocus = null;
  function closeModal() {
    var m = document.querySelector(".modal-overlay");
    if (m) { m.remove(); document.body.classList.remove("no-scroll"); if (lastFocus) { lastFocus.focus(); } }
  }
  function openProductModal(p) {
    closeModal();
    lastFocus = document.activeElement;
    var overlay = el("div", "modal-overlay");
    var dialog = el("div", "modal", null, { "role": "dialog", "aria-modal": "true", "aria-labelledby": "modal-title" });
    var close = el("button", "modal-close", "×", { "type": "button", "aria-label": "Close dialog" });
    dialog.appendChild(close);
    dialog.appendChild(el("div", "product-icon product-icon-large", p.icon, { "role": "img", "aria-label": p.name }));
    dialog.appendChild(el("h2", null, p.name, { "id": "modal-title" }));
    dialog.appendChild(el("p", null, "Department: " + DEPT_LABELS[p.dept]));
    dialog.appendChild(el("p", "product-price", formatRand(p.price) + (p.was ? "  (was " + formatRand(p.was) + ", save " + formatRand(p.was - p.price) + ")" : "")));
    dialog.appendChild(el("p", null, p.stock.length ? "Available at: " + p.stock.join(" and ") + " branch." : "Currently out of stock at both branches."));
    var cta = el("a", "btn btn-primary", "Enquire about this product", { "href": "enquiry.html?product=" + encodeURIComponent(p.id) });
    dialog.appendChild(cta);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    document.body.classList.add("no-scroll");
    close.focus();

    close.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) { closeModal(); } });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeModal(); closeLightbox(); } });
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-product]");
    if (btn) { var p = findProduct(btn.getAttribute("data-product")); if (p) { openProductModal(p); } }
  });

  /* 8. Gallery lightbox */
  var galleryLinks = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var lightbox = null, lbIndex = 0;
  function showLightbox(i) {
    lbIndex = (i + galleryLinks.length) % galleryLinks.length;
    var link = galleryLinks[lbIndex];
    var img = lightbox.querySelector("img");
    img.src = link.getAttribute("href");
    img.alt = link.querySelector("img").alt;
    lightbox.querySelector("figcaption").textContent = link.getAttribute("data-caption") + " (" + (lbIndex + 1) + " of " + galleryLinks.length + ")";
  }
  function closeLightbox() {
    if (lightbox) { lightbox.remove(); lightbox = null; document.body.classList.remove("no-scroll"); }
  }
  galleryLinks.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 
      closeLightbox();
      lightbox = el("div", "lightbox", null, { "role": "dialog", "aria-modal": "true", "aria-label": "Image viewer" });
      var fig = el("figure", "lightbox-figure");
      fig.appendChild(el("img", null, null, { "alt": "" }));
      fig.appendChild(el("figcaption"));
      var closeBtn = el("button", "lightbox-btn lightbox-close", "×", { "type": "button", "aria-label": "Close image viewer" });
      var prevBtn = el("button", "lightbox-btn lightbox-prev", "‹", { "type": "button", "aria-label": "Previous image" });
      var nextBtn = el("button", "lightbox-btn lightbox-next", "›", { "type": "button", "aria-label": "Next image" });
      lightbox.appendChild(closeBtn); lightbox.appendChild(prevBtn); lightbox.appendChild(fig); lightbox.appendChild(nextBtn);
      document.body.appendChild(lightbox);
      document.body.classList.add("no-scroll");
      showLightbox(i);
      closeBtn.focus();
      closeBtn.addEventListener("click", closeLightbox);
      prevBtn.addEventListener("click", function () { showLightbox(lbIndex - 1); });
      nextBtn.addEventListener("click", function () { showLightbox(lbIndex + 1); });
      lightbox.addEventListener("click", function (ev) { if (ev.target === lightbox) { closeLightbox(); } });
    });
  });
  document.addEventListener("keydown", function (e) {
    if (!lightbox) { return; }
    if (e.key === "ArrowRight") { showLightbox(lbIndex + 1); }
    if (e.key === "ArrowLeft") { showLightbox(lbIndex - 1); }
  });

  /* 9. Leaflet interactive maps */
  if (document.getElementById("map-hatfield") && typeof L !== "undefined") {
    var branches = [
      { id: "map-hatfield",  name: "LSG Supermarket - Hatfield",  address: "12 Lynnwood Road, Hatfield", coords: [-25.7479, 28.2380] },
      { id: "map-sunnyside", name: "LSG Supermarket - Sunnyside", address: "45 Church Street, Sunnyside", coords: [-25.7519, 28.2072] }
    ];
    branches.forEach(function (b) {
      var map = L.map(b.id, { scrollWheelZoom: false }).setView(b.coords, 15);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);
      var popup = document.createElement("div");
      var strong = document.createElement("strong"); strong.textContent = b.name;
      var addr = document.createElement("div"); addr.textContent = b.address;
      var dir = document.createElement("a");
      dir.href = "https://www.google.com/maps/dir/?api=1&destination=" + b.coords[0] + "," + b.coords[1];
      dir.target = "_blank"; dir.rel = "noopener noreferrer"; dir.textContent = "Get directions";
      popup.appendChild(strong); popup.appendChild(addr); popup.appendChild(dir);
      L.marker(b.coords).addTo(map).bindPopup(popup).openPopup();
    });
  }

  /* ---- 10. Shared form helpers ---- */
  var RULES = {
    name:  function (v) { return /^\p{L}[\p{L} '\-]{1,59}$/u.test(v.trim()) ? "" : "Please enter your full name (letters only, at least 2 characters)."; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address, e.g. name@example.com."; },
    phone: function (v) { return v.trim() === "" || /^(\+27|0)[1-9][0-9]{8}$/.test(v.replace(/[\s\-()]/g, "")) ? "" : "Enter a valid South African number, e.g. 082 123 4567."; },
    phoneRequired: function (v) { return /^(\+27|0)[1-9][0-9]{8}$/.test(v.replace(/[\s\-()]/g, "")) ? "" : "Enter a valid South African number, e.g. 082 123 4567."; },
    select: function (v) { return v ? "" : "Please choose an option."; },
    message: function (v) { var n = v.trim().length; return n >= 10 && n <= 1000 ? "" : "Your message must be between 10 and 1000 characters (currently " + n + ")."; },
    quantity: function (v) { var n = Number(v); return Number.isInteger(n) && n >= 1 && n <= 5000 ? "" : "Enter a whole number between 1 and 5000."; }
  };

  function setFieldError(input, message) {
    var id = input.id + "-error";
    var box = document.getElementById(id);
    if (!box) {
      box = el("p", "field-error", "", { "id": id, "role": "alert" });
      input.parentNode.appendChild(box);
    }
    box.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    input.setAttribute("aria-describedby", id);
    input.classList.toggle("has-error", !!message);
  }

  /* Validates a map of {fieldId: ruleName}; returns true if all pass. Skips hidden fields. */
  function validateFields(map, form) {
    var firstBad = null;
    Object.keys(map).forEach(function (id) {
      var input = form.querySelector("#" + id);
      if (!input || input.closest("[hidden]")) { return; }
      var msg = RULES[map[id]](input.value);
      setFieldError(input, msg);
      if (msg && !firstBad) { firstBad = input; }
    });
    if (firstBad) { firstBad.focus(); }
    return !firstBad;
  }

  function liveValidate(map, form) {
    Object.keys(map).forEach(function (id) {
      var input = form.querySelector("#" + id);
      if (!input) { return; }
      input.addEventListener("blur", function () { setFieldError(input, RULES[map[id]](input.value)); });
      input.addEventListener("input", function () { if (input.classList.contains("has-error")) { setFieldError(input, RULES[map[id]](input.value)); } });
    });
  }

  /* ---- Enquiry form ---- */
  var enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    var formAction = enquiryForm.getAttribute("action") || "";
    var FORM_ENDPOINT = (/^https?:\/\//.test(formAction) && formAction.indexOf("YOUR_FORM_ID") === -1) ? formAction : "";
    var typeSelect = document.getElementById("enquiry-type");
    var productGroup = document.getElementById("product-group");
    var quantityGroup = document.getElementById("quantity-group");
    var productSelect = document.getElementById("product");
    var submitBtn = enquiryForm.querySelector("button[type='submit']");
    var responseBox = document.getElementById("enquiry-response");

    PRODUCTS.forEach(function (p) { productSelect.appendChild(el("option", null, p.name, { "value": p.id })); });

    var preset = new URLSearchParams(window.location.search).get("product");
    if (preset && findProduct(preset)) { typeSelect.value = "stock"; productSelect.value = preset; }

    function toggleConditionalFields() {
      var t = typeSelect.value;
      var needsProduct = t === "stock" || t === "bulk-order";
      productGroup.hidden = !needsProduct;
      quantityGroup.hidden = !needsProduct;
    }
    typeSelect.addEventListener("change", toggleConditionalFields);
    toggleConditionalFields();

    var enquiryRules = { "full-name": "name", "email": "email", "phone": "phone", "enquiry-type": "select", "product": "select", "quantity": "quantity", "message": "message" };
    liveValidate(enquiryRules, enquiryForm);

    /* Builds the on-page response related to cost / availability (rubric: Enquiry Process Response) */
    function buildResponse(data, ref) {
      var lines = [];
      var p = findProduct(data.product);
      if (data.type === "stock" && p) {
        lines.push(p.stock.length
          ? p.name + " is in stock at our " + p.stock.join(" and ") + " branch" + (p.stock.length > 1 ? "es" : "") + "."
          : p.name + " is out of stock right now. We have noted your interest and will tell you when it arrives.");
        lines.push("Shelf price: " + formatRand(p.price) + " each. " + data.quantity + " x " + formatRand(p.price) + " = " + formatRand(p.price * data.quantity) + ".");
      } else if (data.type === "bulk-order" && p) {
        var qty = Number(data.quantity);
        var rate = qty >= 100 ? 0.15 : qty >= 50 ? 0.10 : qty >= 10 ? 0.05 : 0;
        var subtotal = p.price * qty;
        var total = subtotal * (1 - rate);
        lines.push("Estimated cost for " + qty + " x " + p.name + ": " + formatRand(total) +
          (rate ? " (includes a " + (rate * 100) + "% bulk discount, saving " + formatRand(subtotal - total) + ")." : " (bulk discounts start at 10 units)."));
        lines.push("Our purchasing team will confirm final pricing and delivery within two working days.");
      } else if (data.type === "supplier") {
        lines.push("Thank you for your interest in supplying LSG Supermarket. Our purchasing team will contact you about product samples and terms.");
      } else if (data.type === "careers") {
        lines.push("Thank you for your interest in working with us. We will keep your details on file and contact you about current openings.");
      } else {
        lines.push("Thank you for your feedback. A team member will reply to " + data.email + " within two working days.");
      }
      return { ref: ref, lines: lines };
    }

    function showResponse(result, name) {
      responseBox.textContent = "";
      responseBox.appendChild(el("h3", null, "Thank you, " + name.split(" ")[0] + "!"));
      result.lines.forEach(function (l) { responseBox.appendChild(el("p", null, l)); });
      responseBox.appendChild(el("p", "form-note", "Your reference number is " + result.ref + "."));
      responseBox.classList.add("is-visible");
      responseBox.setAttribute("tabindex", "-1");
      responseBox.focus();
      responseBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validateFields(enquiryRules, enquiryForm)) { return; }

      var data = {
        name: document.getElementById("full-name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        type: typeSelect.value,
        product: productSelect.value,
        quantity: document.getElementById("quantity").value,
        message: document.getElementById("message").value.trim()
      };
      var ref = "LSG-" + Date.now().toString(36).toUpperCase();
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      var request = FORM_ENDPOINT
        ? fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) })
            .then(function (r) { if (!r.ok) { throw new Error("Server error"); } })
        : new Promise(function (resolve) { setTimeout(resolve, 800); });

      request.then(function () {
        showResponse(buildResponse(data, ref), data.name);
        enquiryForm.reset();
        toggleConditionalFields();
      }).catch(function () {
        responseBox.textContent = "Sorry, we could not send your enquiry. Please check your connection and try again, or phone us on 012 345 6789.";
        responseBox.classList.add("is-visible");
      }).then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Enquiry";
      });
    });
  }

  /* ---- 11. Contact form (compiled email) ---- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var RECIPIENT = "info@lsgsupermarket.co.za";
    var contactRules = { "c-name": "name", "c-email": "email", "c-phone": "phone", "c-type": "select", "c-message": "message" };
    liveValidate(contactRules, contactForm);
    var preview = document.getElementById("email-preview");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validateFields(contactRules, contactForm)) { return; }

      var name = document.getElementById("c-name").value.trim();
      var email = document.getElementById("c-email").value.trim();
      var phone = document.getElementById("c-phone").value.trim();
      var branchSel = document.getElementById("c-branch");
      var typeSel = document.getElementById("c-type");
      var message = document.getElementById("c-message").value.trim();

      var subject = "[" + typeSel.options[typeSel.selectedIndex].text + "] Message from " + name;
      var body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + (phone || "not provided") +
                 "\nBranch: " + branchSel.options[branchSel.selectedIndex].text +
                 "\nMessage type: " + typeSel.options[typeSel.selectedIndex].text + "\n\n" + message;

      preview.textContent = "";
      preview.appendChild(el("h3", null, "Your message is ready to send"));
      preview.appendChild(el("p", null, "Check the email below, then press the button to send it from your own email app."));
      var box = el("pre", "email-box");
      box.textContent = "To: " + RECIPIENT + "\nSubject: " + subject + "\n\n" + body;
      preview.appendChild(box);
      var link = el("a", "btn btn-primary", "Send email to LSG Supermarket");
      link.href = "mailto:" + RECIPIENT + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      preview.appendChild(link);
      preview.classList.add("is-visible");
      preview.setAttribute("tabindex", "-1");
      preview.focus();
      preview.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});