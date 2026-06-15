// Rules-based Itinerary Generator Engine

/**
 * Generates a full itinerary based on user preferences.
 * @param {string} destKey - Key of the destination in DESTINATIONS object
 * @param {number} days - Number of days (1-10)
 * @param {string} style - Travel style (solo, family, couple, friends, adventure, spiritual, leisure, culture)
 * @param {string} budgetTier - Budget tier (budget, mid, luxury)
 * @param {Array<string>} interests - List of selected interests
 * @returns {Object} Full itinerary plan
 */
function generateItinerary(destKey, days, style, budgetTier, interests) {
  const dest = DESTINATIONS[destKey.toLowerCase()];
  if (!dest) return null;

  // 1. Prioritize attractions based on selected interests
  // Score each attraction: +2 if its type is in interests, +1 if it matches travel style theme
  const scoredAttractions = dest.attractions.map(attr => {
    let score = 0;
    if (interests.includes(attr.type)) score += 3;
    
    // Style alignments
    if (style === 'spiritual' && attr.type === 'spiritual') score += 2;
    if (style === 'adventure' && attr.type === 'adventure') score += 2;
    if (style === 'culture' && attr.type === 'heritage') score += 2;
    if (style === 'leisure' && attr.type === 'leisure') score += 2;
    if (style === 'nature' && attr.type === 'nature') score += 2;

    return { ...attr, score };
  });

  // Sort by score descending, then by original order
  scoredAttractions.sort((a, b) => b.score - a.score);

  // 2. Distribute attractions across days
  // Pacing determines how many primary attractions we show per day
  // Solo/Adventure: high pacing (up to 3 attractions per day)
  // Family/Couple/Leisure: slow pacing (1-2 attractions per day)
  let attractionsPerDay = 2;
  if (style === 'solo' || style === 'adventure') {
    attractionsPerDay = 3;
  } else if (style === 'family' || style === 'leisure') {
    attractionsPerDay = 1.5; // Average 1 to 2
  }

  const timeline = [];
  let attractionIndex = 0;

  // Generic/Filler Activities based on travel style and interests
  const fillerActivities = {
    morning: [
      { name: "Morning Sunrise Stroll", description: "Take a walk to a nearby viewpoint to watch the sunrise over the local landscape, enjoying the fresh air and tranquility.", type: "nature", duration: 1.5, entryFee: { budget: 0, mid: 0, luxury: 0 } },
      { name: "Traditional Breakfast Hunt", description: "Explore local food lanes and sample the signature morning delicacies (check our Local Cuisine section!).", type: "food", duration: 1.5, entryFee: { budget: 100, mid: 200, luxury: 500 } },
      { name: "Yoga & Mindfulness Session", description: "Find a quiet garden or spot near the water for some relaxing stretching and meditation to start your day.", type: "spiritual", duration: 1.2, entryFee: { budget: 0, mid: 150, luxury: 800 } }
    ],
    afternoon: [
      { name: "Cafe Hopping & Local Culture", description: "Relax at a popular local boutique cafe, write in your travel journal, or chat with fellow travelers.", type: "leisure", duration: 2, entryFee: { budget: 150, mid: 400, luxury: 1000 } },
      { name: "Photography Exploration Walk", description: "Wander through the lanes capturing the local architecture, street vendors, and vibrant daily scenes.", type: "leisure", duration: 2, entryFee: { budget: 0, mid: 0, luxury: 0 } },
      { name: "Craft & Souvenir Shopping", description: "Visit a government-run cottage industry center or artisan marketplace to support local craftsmen.", type: "shopping", duration: 2, entryFee: { budget: 0, mid: 0, luxury: 0 } }
    ],
    evening: [
      { name: "Sunset Viewpoint Hangout", description: "Find a scenic spot recommended by locals to watch the golden hour paint the sky in warm hues.", type: "nature", duration: 1.5, entryFee: { budget: 0, mid: 0, luxury: 0 } },
      { name: "Street Food Crawl", description: "Follow the appetizing aromas and taste local savory snacks and hot sweet treats.", type: "food", duration: 2, entryFee: { budget: 150, mid: 300, luxury: 800 } },
      { name: "Leisure Garden Relaxing", description: "Sit back in a well-maintained public park or garden, letting the evening breeze cool you down.", type: "leisure", duration: 1.5, entryFee: { budget: 20, mid: 20, luxury: 20 } }
    ],
    night: [
      { name: "Lakeside/Riverfront Dinner", description: "Dine at a highly recommended local restaurant, savoring traditional recipes with views of lit-up monuments.", type: "food", duration: 2, entryFee: { budget: 300, mid: 800, luxury: 2500 } },
      { name: "Cultural Music or Dance Performance", description: "Attend a local auditorium showing traditional regional dances, puppet shows, or classical music recital.", type: "culture", duration: 2, entryFee: { budget: 100, mid: 250, luxury: 800 } },
      { name: "Stargazing and Quiet Reflections", description: "Head out onto your terrace or a quiet open spot to view the stars and reflect on your travel experiences.", type: "nature", duration: 1.5, entryFee: { budget: 0, mid: 0, luxury: 0 } }
    ]
  };

  // Build the day-by-day itinerary
  for (let d = 1; d <= days; d++) {
    const dayActivities = [];
    const maxDayAttractions = Math.ceil(attractionsPerDay);
    let attractionsCount = 0;

    // We structure the day as: Morning, Afternoon, Evening, Night
    const timeslots = ['morning', 'afternoon', 'evening', 'night'];
    const timeLabels = {
      morning: '08:30 AM - 11:30 AM',
      afternoon: '01:00 PM - 03:30 PM',
      evening: '04:30 PM - 07:00 PM',
      night: '08:00 PM - 10:00 PM'
    };

    // Day theme
    let dayTheme = "Exploration & Discovery";
    if (d === 1) dayTheme = "Introduction & Local Flavors";
    else if (d === days && days > 1) dayTheme = "Final Highlights & Farewell";
    else if (d % 2 === 0) dayTheme = "Heritage & Hidden Gems";
    else dayTheme = "Scenic Landscapes & Adventure";

    for (const slot of timeslots) {
      // Check if we should insert a primary attraction
      let activity = null;

      // Find a primary attraction suited for this time of day (or fallback to any available)
      if (attractionIndex < scoredAttractions.length && attractionsCount < maxDayAttractions) {
        // Try to find one matching this slot
        let targetIndex = scoredAttractions.findIndex((a, idx) => idx >= attractionIndex && a.timeToVisit === slot);
        if (targetIndex === -1) {
          // Fallback to first available primary attraction
          targetIndex = attractionIndex;
        }

        if (targetIndex !== -1 && targetIndex >= attractionIndex) {
          // Swap it to current index to preserve order for remaining
          const temp = scoredAttractions[attractionIndex];
          scoredAttractions[attractionIndex] = scoredAttractions[targetIndex];
          scoredAttractions[targetIndex] = temp;

          const baseAttr = scoredAttractions[attractionIndex];
          activity = {
            name: baseAttr.name,
            description: baseAttr.description,
            type: baseAttr.type,
            lat: baseAttr.lat,
            lng: baseAttr.lng,
            duration: baseAttr.duration,
            entryFee: baseAttr.entryFee[budgetTier],
            isPrimary: true
          };
          attractionIndex++;
          attractionsCount++;
        }
      }

      // If no primary attraction fits or is available, use a themed filler activity
      if (!activity) {
        // Find a filler matching interests/style
        const fillPool = fillerActivities[slot];
        // Score fillers based on interests
        let bestFiller = fillPool[0];
        let bestScore = -1;
        for (const f of fillPool) {
          let score = 0;
          if (interests.includes(f.type)) score += 3;
          if (style === 'spiritual' && f.type === 'spiritual') score += 2;
          if (style === 'adventure' && f.type === 'adventure') score += 2;
          if (style === 'food' && f.type === 'food') score += 2;
          
          if (score > bestScore) {
            bestScore = score;
            bestFiller = f;
          }
        }

        // Deep copy the filler and randomise slightly for longer itineraries
        activity = {
          name: bestFiller.name,
          description: bestFiller.description,
          type: bestFiller.type,
          duration: bestFiller.duration,
          entryFee: bestFiller.entryFee[budgetTier],
          isPrimary: false
        };

        // Add context for specific destinations to fillers
        if (activity.type === 'food') {
          const randomCuisine = dest.cuisine[Math.floor(Math.random() * dest.cuisine.length)];
          activity.description += ` Specifically look out for the famous local delicacy: **${randomCuisine.name}** (${randomCuisine.desc}).`;
        }
      }

      activity.time = timeLabels[slot];
      activity.slot = slot;
      dayActivities.push(activity);
    }

    timeline.push({
      dayNumber: d,
      dayTheme: dayTheme,
      activities: dayActivities
    });
  }

  // 3. Compute base budgets
  const estimates = dest.budgetEstimates[budgetTier];
  const accommodationTotal = estimates.accommodation * days;
  const transportTotal = estimates.transport * days;
  const diningTotal = estimates.dining * days;
  const miscTotal = estimates.misc * days;

  // Calculate attraction total from timeline
  let attractionsTotal = 0;
  timeline.forEach(day => {
    day.activities.forEach(act => {
      attractionsTotal += act.entryFee || 0;
    });
  });

  const grandTotal = accommodationTotal + transportTotal + diningTotal + attractionsTotal + miscTotal;

  // Packing overrides based on travel style
  const stylePacking = {
    adventure: ["Action camera / GoPro", "Quick-dry towels", "Trekking poles", "Waterproof watch"],
    spiritual: ["Shawl or shoulder wrap", "Easy to remove slip-on shoes", "Socks for hot temple stone floors"],
    photography: ["Camera lenses", "Extra memory cards & batteries", "Lens cleaning kit", "Tripod (where permitted)"],
    solo: ["Personal safety whistle", "Mini notebook / journal", "Compact power bank", "Backup cash stash"]
  };

  let finalPacking = [...dest.packing];
  if (stylePacking[style]) {
    finalPacking = [...finalPacking, ...stylePacking[style]];
  }

  return {
    destinationKey: destKey,
    destinationName: dest.name,
    tagline: dest.tagline,
    description: dest.description,
    state: dest.state,
    region: dest.region,
    bestSeason: dest.bestSeason,
    lat: dest.lat,
    lng: dest.lng,
    timeline: timeline,
    packing: finalPacking,
    cuisine: dest.cuisine,
    tips: dest.tips,
    budgetTier: budgetTier,
    baseBudgets: {
      accommodation: accommodationTotal,
      transport: transportTotal,
      dining: diningTotal,
      attractions: attractionsTotal,
      misc: miscTotal,
      total: grandTotal
    },
    days: days,
    style: style
  };
}
