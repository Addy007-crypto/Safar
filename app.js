// Safar Application Controller

// Global App State
let currentItinerary = null;
let leafletMap = null;
let mapMarkers = [];
let routePolyline = null;
let activeDay = 1;

// Dom Elements
const form = document.getElementById('itinerary-form');
const wizardSection = document.getElementById('wizard-section');
const dashboardSection = document.getElementById('itinerary-dashboard');

const destHeaderInfo = document.getElementById('dest-header-info');
const dayPillsContainer = document.getElementById('day-pills-container');
const currentDayLabel = document.getElementById('current-day-label');
const currentDayTheme = document.getElementById('current-day-theme');
const timelineEventsContainer = document.getElementById('timeline-events-container');

// Budget elements
const sliderAccommodation = document.getElementById('slider-accommodation');
const sliderTransport = document.getElementById('slider-transport');
const sliderDining = document.getElementById('slider-dining');
const sliderAttractions = document.getElementById('slider-attractions');
const sliderMisc = document.getElementById('slider-misc');

const valAccommodation = document.getElementById('val-accommodation');
const valTransport = document.getElementById('val-transport');
const valDining = document.getElementById('val-dining');
const valAttractions = document.getElementById('val-attractions');
const valMisc = document.getElementById('val-misc');

const budgetDaysCount = document.getElementById('budget-days-count');
const budgetGrandTotal = document.getElementById('budget-grand-total');
const budgetTierBadge = document.getElementById('budget-tier-badge');

// Packing elements
const packingProgressBar = document.getElementById('packing-progress-bar');
const packingChecklistContainer = document.getElementById('packing-checklist-items');

// Local Guide elements
const guideCuisineList = document.getElementById('guide-cuisine-list');
const guideTipsList = document.getElementById('guide-tips-list');

// Action buttons
const editPlanBtn = document.getElementById('edit-plan-btn');
const shareBtn = document.getElementById('share-btn');
const printBtn = document.getElementById('print-btn');

// Toast notification
const toastContainer = document.getElementById('toast-container');
const toastMessage = document.getElementById('toast-message');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  checkUrlParameters();
});

// Event Listeners Registration
function setupEventListeners() {
  // Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit();
  });

  // Budget slider event listeners
  [sliderAccommodation, sliderTransport, sliderDining, sliderMisc].forEach(slider => {
    slider.addEventListener('input', () => {
      updateBudgetDisplay();
    });
  });

  // Action buttons
  editPlanBtn.addEventListener('click', () => {
    dashboardSection.classList.add('hidden');
    wizardSection.classList.remove('hidden');
    wizardSection.scrollIntoView({ behavior: 'smooth' });
  });

  shareBtn.addEventListener('click', () => {
    generateShareLink();
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });
}

// Form Submission Handler
function handleFormSubmit() {
  const destVal = document.getElementById('destination').value;
  const daysVal = parseInt(document.getElementById('duration-days').value);
  const styleVal = document.querySelector('input[name="travel-style"]:checked').value;
  const budgetVal = document.querySelector('input[name="budget-tier"]:checked').value;
  
  // Extract interests
  const interests = [];
  const interestCheckboxes = [
    'int-heritage', 'int-nature', 'int-spiritual', 'int-adventure', 
    'int-leisure', 'int-shopping', 'int-food'
  ];
  interestCheckboxes.forEach(id => {
    const cb = document.getElementById(id);
    if (cb && cb.checked) {
      interests.push(cb.value);
    }
  });

  // Run generator
  const itinerary = generateItinerary(destVal, daysVal, styleVal, budgetVal, interests);
  
  if (itinerary) {
    currentItinerary = itinerary;
    activeDay = 1;
    renderItineraryDashboard();
    
    // Switch views
    wizardSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    dashboardSection.scrollIntoView({ behavior: 'smooth' });
    
    showToast("Itinerary created successfully!");
  } else {
    showToast("Failed to compile itinerary. Please try again.");
  }
}

// Display Toast Notifications
function showToast(message) {
  toastMessage.textContent = message;
  toastContainer.classList.add('show');
  setTimeout(() => {
    toastContainer.classList.remove('show');
  }, 3500);
}

// Render the Entire Generated Itinerary
function renderItineraryDashboard() {
  // 1. Destination Info
  destHeaderInfo.innerHTML = `
    <span class="dest-badge"><i class="fa-solid fa-location-dot"></i> ${currentItinerary.region} India • ${currentItinerary.state}</span>
    <h2>Explore ${currentItinerary.destinationName}</h2>
    <p class="dest-tagline">"${currentItinerary.tagline}"</p>
    <p class="dest-summary">${currentItinerary.description}</p>
    <div class="dest-meta-grid">
      <div class="meta-item">
        <span class="meta-item-label">Best Season</span>
        <span class="meta-item-val">${currentItinerary.bestSeason}</span>
      </div>
      <div class="meta-item">
        <span class="meta-item-label">Travel Style</span>
        <span class="meta-item-val" style="text-transform: capitalize;">${currentItinerary.style}</span>
      </div>
      <div class="meta-item">
        <span class="meta-item-label">Duration</span>
        <span class="meta-item-val">${currentItinerary.days} Days</span>
      </div>
    </div>
  `;

  // 2. Day Selector Pills
  dayPillsContainer.innerHTML = '';
  for (let d = 1; d <= currentItinerary.days; d++) {
    const pill = document.createElement('button');
    pill.className = `day-pill ${d === 1 ? 'active' : ''}`;
    pill.innerHTML = `Day ${d}`;
    pill.addEventListener('click', () => {
      switchDay(d);
    });
    dayPillsContainer.appendChild(pill);
  }

  // 3. Setup Budget Sliders
  budgetTierBadge.textContent = currentItinerary.budgetTier;
  budgetDaysCount.textContent = `${currentItinerary.days} Days`;
  
  // Define slider bounds dynamically based on budget tier and day count
  const budgetScalers = {
    budget: { accommodation: [500, 5000], transport: [200, 3000], dining: [200, 1500], misc: [100, 1000] },
    mid: { accommodation: [1500, 15000], transport: [500, 10000], dining: [500, 5000], misc: [300, 4000] },
    luxury: { accommodation: [8000, 50000], transport: [2000, 25000], dining: [1500, 15000], misc: [1000, 15000] }
  };

  const scale = budgetScalers[currentItinerary.budgetTier];
  const days = currentItinerary.days;

  setupSliderRange(sliderAccommodation, scale.accommodation[0] * days, scale.accommodation[1] * days, currentItinerary.baseBudgets.accommodation);
  setupSliderRange(sliderTransport, scale.transport[0] * days, scale.transport[1] * days, currentItinerary.baseBudgets.transport);
  setupSliderRange(sliderDining, scale.dining[0] * days, scale.dining[1] * days, currentItinerary.baseBudgets.dining);
  setupSliderRange(sliderMisc, scale.misc[0] * days, scale.misc[1] * days, currentItinerary.baseBudgets.misc);
  
  // Sights fee is fixed
  setupSliderRange(sliderAttractions, currentItinerary.baseBudgets.attractions, currentItinerary.baseBudgets.attractions, currentItinerary.baseBudgets.attractions);

  updateBudgetDisplay();

  // 4. Packing List
  renderPackingList();

  // 5. Local Cuisines
  guideCuisineList.innerHTML = currentItinerary.cuisine.map(item => `
    <div class="cuisine-item">
      <span class="cuisine-name">${item.name}</span>
      <span class="cuisine-desc">${item.desc}</span>
    </div>
  `).join('');

  // 6. Local Tips
  guideTipsList.innerHTML = currentItinerary.tips.map(tip => `
    <div class="tip-item">
      <i class="fa-solid fa-lightbulb"></i>
      <span>${tip}</span>
    </div>
  `).join('');

  // 7. Render active day (Day 1)
  renderActiveDay();

  // 8. Initialize/Update Map
  initMap();
}

function setupSliderRange(slider, min, max, value) {
  slider.min = min;
  slider.max = max;
  slider.value = value;
}

// Calculate and Display Updated Budgets
function updateBudgetDisplay() {
  const accommodationVal = parseInt(sliderAccommodation.value);
  const transportVal = parseInt(sliderTransport.value);
  const diningVal = parseInt(sliderDining.value);
  const attractionsVal = parseInt(sliderAttractions.value);
  const miscVal = parseInt(sliderMisc.value);

  valAccommodation.textContent = `₹${accommodationVal.toLocaleString('en-IN')}`;
  valTransport.textContent = `₹${transportVal.toLocaleString('en-IN')}`;
  valDining.textContent = `₹${diningVal.toLocaleString('en-IN')}`;
  valAttractions.textContent = `₹${attractionsVal.toLocaleString('en-IN')}`;
  valMisc.textContent = `₹${miscVal.toLocaleString('en-IN')}`;

  const grandTotal = accommodationVal + transportVal + diningVal + attractionsVal + miscVal;
  budgetGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// Render Packing List with LocalStorage Persistence
function renderPackingList() {
  const storageKey = `safar_packing_${currentItinerary.destinationKey}`;
  let savedStates = {};
  
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) savedStates = JSON.parse(saved);
  } catch(e) {
    console.error("Error reading from localStorage", e);
  }

  packingChecklistContainer.innerHTML = '';
  
  currentItinerary.packing.forEach((item, index) => {
    const isChecked = savedStates[index] || false;
    
    const div = document.createElement('label');
    div.className = 'packing-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;
    checkbox.addEventListener('change', () => {
      savedStates[index] = checkbox.checked;
      try {
        localStorage.setItem(storageKey, JSON.stringify(savedStates));
      } catch(e) {}
      updatePackingProgress();
    });

    const span = document.createElement('span');
    span.className = 'packing-text';
    span.textContent = item;

    div.appendChild(checkbox);
    div.appendChild(span);
    packingChecklistContainer.appendChild(div);
  });

  updatePackingProgress();
}

function updatePackingProgress() {
  const checkboxes = packingChecklistContainer.querySelectorAll('input[type="checkbox"]');
  const total = checkboxes.length;
  let checked = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) checked++;
  });

  packingProgressBar.textContent = `${checked} / ${total} Packed`;
}

// Switch Active Day in Itinerary
function switchDay(dayNum) {
  activeDay = dayNum;
  
  // Toggle Day Pill Active Class
  const pills = dayPillsContainer.querySelectorAll('.day-pill');
  pills.forEach((pill, idx) => {
    if (idx + 1 === dayNum) {
      pill.classList.add('active');
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      pill.classList.remove('active');
    }
  });

  // Render Day Specific timeline events
  renderActiveDay();

  // Plot new path on map
  plotMapRoutes();

  // Update map route indicator
  document.getElementById('map-route-indicator').textContent = `Day ${dayNum} Route`;
}

// Render Timeline Events for activeDay
function renderActiveDay() {
  const dayData = currentItinerary.timeline.find(d => d.dayNumber === activeDay);
  if (!dayData) return;

  currentDayLabel.textContent = `Day ${activeDay} Schedule`;
  currentDayTheme.textContent = dayData.dayTheme;

  timelineEventsContainer.innerHTML = '';

  dayData.activities.forEach((act, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item animate-fade-in';
    item.style.animationDelay = `${index * 0.1}s`;

    let dotIcon = 'fa-shoe-prints';
    if (act.slot === 'morning') dotIcon = 'fa-sun';
    else if (act.slot === 'afternoon') dotIcon = 'fa-utensils';
    else if (act.slot === 'evening') dotIcon = 'fa-mountain-sun';
    else if (act.slot === 'night') dotIcon = 'fa-moon';

    const entryFeeText = act.entryFee > 0 ? `₹${act.entryFee}` : 'Free Entry';

    item.innerHTML = `
      <div class="timeline-dot">
        <i class="fa-solid ${dotIcon}"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-time">${act.time}</div>
        <div class="timeline-title-row">
          <h4>${act.name}</h4>
          <span class="activity-badge">${act.type}</span>
        </div>
        <div class="timeline-description">${act.description}</div>
        <div class="timeline-footer">
          <span><i class="fa-solid fa-hourglass"></i> Duration: ${act.duration} hrs</span>
          <span><i class="fa-solid fa-ticket"></i> Entry Fee: ${entryFeeText}</span>
          ${act.isPrimary ? `<span style="color: var(--accent-emerald)"><i class="fa-solid fa-circle-check" style="color: var(--accent-emerald)"></i> Primary Attraction</span>` : ''}
        </div>
      </div>
    `;

    timelineEventsContainer.appendChild(item);
  });
}

// Initialize Leaflet Map
function initMap() {
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }

  // Create Map instance
  leafletMap = L.map('map', {
    scrollWheelZoom: false
  }).setView([currentItinerary.lat, currentItinerary.lng], 12);

  // Add OpenStreetMap tile layer (dark theme adjustments done via CSS filter in styles.css)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(leafletMap);

  plotMapRoutes();
}

// Plot Markers and Connective Polylines for Active Day
function plotMapRoutes() {
  if (!leafletMap) return;

  // Clear existing markers and lines
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];
  if (routePolyline) {
    leafletMap.removeLayer(routePolyline);
    routePolyline = null;
  }

  const dayData = currentItinerary.timeline.find(d => d.dayNumber === activeDay);
  if (!dayData) return;

  const latLngs = [];
  
  // Custom Leaflet Div Icon
  const createCustomMarkerIcon = (number, slot) => {
    let colorClass = 'style="background: var(--accent-gold); color: #060913;"';
    if (slot === 'morning') colorClass = 'style="background: #F59E0B; color: #060913;"';
    else if (slot === 'afternoon') colorClass = 'style="background: #EA580C; color: #fff;"';
    else if (slot === 'evening') colorClass = 'style="background: #E11D48; color: #fff;"';
    else if (slot === 'night') colorClass = 'style="background: #0D9488; color: #fff;"';

    return L.divIcon({
      className: 'custom-map-marker',
      html: `<div ${colorClass} style="width: 28px; height: 28px; border-radius: 50%; border: 2px solid #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; box-shadow: 0 2px 8px rgba(0,0,0,0.5);">${number}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });
  };

  let markerIndex = 1;
  dayData.activities.forEach(act => {
    // Primary activities contain geographical coordinates
    // If an activity is a filler (e.g. food hunt) and coordinates are not set, fallback to destination core coords
    const lat = act.lat || currentItinerary.lat + (Math.random() - 0.5) * 0.02;
    const lng = act.lng || currentItinerary.lng + (Math.random() - 0.5) * 0.02;

    const marker = L.marker([lat, lng], {
      icon: createCustomMarkerIcon(markerIndex, act.slot)
    }).addTo(leafletMap);

    const popupContent = `
      <b>${act.name}</b><br>
      <span style="font-size:0.8rem; color:#94A3B8;">${act.time}</span><br>
      <span style="font-size:0.85rem;">${act.type.toUpperCase()} • ${act.duration} hrs</span>
    `;
    marker.bindPopup(popupContent);
    mapMarkers.push(marker);
    latLngs.push([lat, lng]);

    markerIndex++;
  });

  // Draw connecting path line
  if (latLngs.length > 1) {
    routePolyline = L.polyline(latLngs, {
      color: 'var(--accent-gold)',
      weight: 3,
      opacity: 0.8,
      dashArray: '6, 6'
    }).addTo(leafletMap);
  }

  // Adjust zoom bounds to fit all markers nicely
  if (mapMarkers.length > 0) {
    const group = new L.featureGroup(mapMarkers);
    leafletMap.fitBounds(group.getBounds().pad(0.15));
  }
}

// Generate Shareable link representing choices
function generateShareLink() {
  const destVal = document.getElementById('destination').value;
  const daysVal = document.getElementById('duration-days').value;
  const styleVal = document.querySelector('input[name="travel-style"]:checked').value;
  const budgetVal = document.querySelector('input[name="budget-tier"]:checked').value;
  
  // Extract interests
  const interests = [];
  const interestCheckboxes = [
    'int-heritage', 'int-nature', 'int-spiritual', 'int-adventure', 
    'int-leisure', 'int-shopping', 'int-food'
  ];
  interestCheckboxes.forEach(id => {
    const cb = document.getElementById(id);
    if (cb && cb.checked) {
      interests.push(cb.value);
    }
  });

  const url = new URL(window.location.href);
  url.searchParams.set('dest', destVal);
  url.searchParams.set('days', daysVal);
  url.searchParams.set('style', styleVal);
  url.searchParams.set('budget', budgetVal);
  url.searchParams.set('interests', interests.join(','));

  // Copy to clipboard
  navigator.clipboard.writeText(url.toString())
    .then(() => {
      showToast("Shareable link copied to clipboard!");
    })
    .catch(err => {
      console.error('Could not copy link: ', err);
      showToast("Failed to copy link. Please manually copy the URL.");
    });
}

// Check URL query arguments to autoload itineraries
function checkUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const dest = params.get('dest');
  const days = params.get('days');
  const style = params.get('style');
  const budget = params.get('budget');
  const interestsStr = params.get('interests');

  if (dest && days && style && budget) {
    // Populate form
    document.getElementById('destination').value = dest;
    document.getElementById('duration-days').value = days;
    
    // Style check
    const styleEl = document.querySelector(`input[name="travel-style"][value="${style}"]`);
    if (styleEl) styleEl.checked = true;

    // Budget check
    const budgetEl = document.querySelector(`input[name="budget-tier"][value="${budget}"]`);
    if (budgetEl) budgetEl.checked = true;

    // Interests check
    const interestCheckboxes = [
      'int-heritage', 'int-nature', 'int-spiritual', 'int-adventure', 
      'int-leisure', 'int-shopping', 'int-food'
    ];
    interestCheckboxes.forEach(id => {
      const cb = document.getElementById(id);
      if (cb) cb.checked = false; // reset default
    });

    if (interestsStr) {
      const interests = interestsStr.split(',');
      interests.forEach(val => {
        const matchingCheckbox = Array.from(document.querySelectorAll('.interest-item input')).find(cb => cb.value === val);
        if (matchingCheckbox) {
          matchingCheckbox.checked = true;
        }
      });
    }

    // Auto submit to generate
    handleFormSubmit();
  }
}

// Global Guide Switch Tabs binding
window.switchGuideTab = function(tab) {
  const btnCuisine = document.getElementById('tab-btn-cuisine');
  const btnTips = document.getElementById('tab-btn-tips');
  const panelCuisine = document.getElementById('panel-cuisine');
  const panelTips = document.getElementById('panel-tips');

  if (tab === 'cuisine') {
    btnCuisine.classList.add('active');
    btnTips.classList.remove('active');
    panelCuisine.classList.add('active');
    panelTips.classList.remove('active');
  } else {
    btnCuisine.classList.remove('active');
    btnTips.classList.add('active');
    panelCuisine.classList.remove('active');
    panelTips.classList.add('active');
  }
};
