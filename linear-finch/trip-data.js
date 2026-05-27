/* ============================================================
   TRIP DATA  —  NYC · Boston · Banff  (May 30 – Jun 22 2026)
   ============================================================ */

const TRIP = {
  title: 'NYC · Boston · Banff',
  dates: { start: '2026-05-30', end: '2026-06-22' },

  legs: [

    // ── DEPARTURE ──────────────────────────────────────────
    {
      id: 'taiwan-depart', name: 'Departure', city: 'Taiwan',
      color: '#64748B', groupSize: 0,
      days: [{
        date: '2026-05-30', weekday: 'sat',
        neighbourhood: 'Taiwan', isTravel: true,
        travelNote: 'Depart Taiwan ✈️ → New York',
        places: [], restaurants: []
      }]
    },

    // ── NYC LEG 1 ──────────────────────────────────────────
    {
      id: 'nyc1', name: 'NYC Leg 1', city: 'New York',
      color: '#3B82F6', groupSize: 3,
      days: [
        {
          date: '2026-05-31', weekday: 'sun',
          neighbourhood: 'Brooklyn', notes: null,
          places: [
            { id: 'brooklyn-flea', name: 'Brooklyn Flea', category: 'market',
              address: '80 Pearl St, DUMBO, Brooklyn', lat: 40.7031, lng: -73.9897,
              hours: { sat: '10:00–17:00', sun: '10:00–17:00' },
              fee: { adult: 0, note: 'Free entry' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Flea market & vintage clothing · open Sat & Sun only',
              mapsUrl: 'https://maps.google.com/?q=Brooklyn+Flea+DUMBO+New+York' },
            { id: 'brooklyn-museum', name: 'Brooklyn Museum', category: 'museum',
              address: '200 Eastern Pkwy, Brooklyn', lat: 40.6712, lng: -73.9636,
              hours: { wed: '11:00–18:00', thu: '11:00–18:00', fri: '11:00–18:00', sat: '11:00–18:00', sun: '11:00–18:00' },
              fee: { adult: 0, note: 'Pay what you wish (incl. $0)' }, freeWindow: null,
              discountNote: 'IDNYC Cultural Pass — verify at door', bookingNote: null,
              notes: 'Suggested donation; actual free entry',
              mapsUrl: 'https://maps.google.com/?q=Brooklyn+Museum+New+York' },
            { id: 'smorgasburg-prospect', name: 'Smorgasburg Prospect Park', category: 'market',
              address: 'Prospect Park, Brooklyn (SW corner, 16th St)', lat: 40.6602, lng: -73.9690,
              hours: { sun: '11:00–18:00' },
              fee: { adult: 0, note: 'Free entry (pay for food)' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Outdoor food market · Sundays only · great for lunch',
              mapsUrl: 'https://maps.google.com/?q=Smorgasburg+Prospect+Park+Brooklyn' },
            { id: 'brooklyn-botanic', name: 'Brooklyn Botanic Garden', category: 'park',
              address: '990 Washington Ave, Brooklyn', lat: 40.6694, lng: -73.9627,
              hours: { tue: '10:00–18:00', wed: '10:00–18:00', thu: '10:00–18:00', fri: '10:00–18:00', sat: '10:00–18:00', sun: '10:00–18:00' },
              fee: { adult: 18, note: '$18/person' }, freeWindow: null,
              discountNote: 'IDNYC — verify at door for discount', bookingNote: null,
              notes: 'Beautiful garden next to Prospect Park',
              mapsUrl: 'https://maps.google.com/?q=Brooklyn+Botanic+Garden' },
            { id: 'brooklyn-bridge', name: 'Brooklyn Bridge', category: 'walk',
              address: 'Brooklyn Bridge Pedestrian Entrance, Washington St & Front St', lat: 40.7026, lng: -73.9871,
              hours: { daily: 'Always open' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk from Brooklyn to Manhattan · best in the evening',
              mapsUrl: 'https://maps.google.com/?q=Brooklyn+Bridge+Pedestrian+walkway' }
          ],
          restaurants: [
            { name: 'Smorgasburg Prospect Park', priceRange: 2, signatureDish: 'Outdoor food market',
              notes: 'Lunch spot — dozens of vendors inside the market',
              mapsUrl: 'https://maps.google.com/?q=Smorgasburg+Prospect+Park+Brooklyn' }
          ]
        },
        {
          date: '2026-06-01', weekday: 'mon', neighbourhood: 'Manhattan', notes: null,
          places: [
            { id: 'central-park-72', name: 'Central Park (72nd St)', category: 'park',
              address: '72nd St & Central Park West, Manhattan', lat: 40.7756, lng: -73.9740,
              hours: { daily: '6:00–01:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Enter from 72nd St subway stop (B/C line)',
              mapsUrl: 'https://maps.google.com/?q=Central+Park+72nd+Street+New+York' },
            { id: 'chrysler-building', name: 'Chrysler Building Observation Deck', category: 'attraction',
              address: '405 Lexington Ave, Manhattan', lat: 40.7516, lng: -73.9755,
              hours: { daily: '8:00–18:00' }, fee: { adult: 0, note: 'Free in June' },
              freeWindow: null, discountNote: null,
              bookingNote: '⚠️ Book 1 month ahead via Eventbrite — limited slots',
              notes: 'Free entry in June · art deco interior is stunning',
              mapsUrl: 'https://maps.google.com/?q=Chrysler+Building+New+York' },
            { id: 'grand-central', name: 'Grand Central Terminal', category: 'attraction',
              address: '89 E 42nd St, Manhattan', lat: 40.7527, lng: -73.9772,
              hours: { daily: '5:30–02:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Iconic Beaux-Arts terminal · whisper gallery under the ramp',
              mapsUrl: 'https://maps.google.com/?q=Grand+Central+Terminal+New+York' },
            { id: 'ny-public-library', name: 'New York Public Library', category: 'attraction',
              address: '476 5th Ave (at 42nd St), Manhattan', lat: 40.7532, lng: -73.9822,
              hours: { mon: '10:00–18:00', tue: '10:00–18:00', wed: '10:00–18:00', thu: '10:00–20:00', fri: '10:00–18:00', sat: '10:00–18:00', sun: '13:00–17:00' },
              fee: { adult: 0, note: 'Free' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Rose Reading Room is breathtaking · worth the trip',
              mapsUrl: 'https://maps.google.com/?q=New+York+Public+Library+5th+Avenue' },
            { id: 'times-square', name: 'Times Square', category: 'attraction',
              address: 'Broadway & 7th Ave, 45th–47th St, Manhattan', lat: 40.7580, lng: -73.9855,
              hours: { daily: 'Always' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null, notes: null,
              mapsUrl: 'https://maps.google.com/?q=Times+Square+New+York' },
            { id: 'st-patricks', name: "St. Patrick's Cathedral", category: 'attraction',
              address: '5th Ave & 50th St, Manhattan', lat: 40.7584, lng: -73.9761,
              hours: { daily: '6:30–20:45' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Gothic cathedral · free entry',
              mapsUrl: "https://maps.google.com/?q=St+Patrick's+Cathedral+New+York" },
            { id: '5th-ave-lego', name: '5th Avenue + LEGO Store', category: 'store',
              address: '30 Rockefeller Plaza (LEGO), 5th Ave, Manhattan', lat: 40.7587, lng: -73.9783,
              hours: { daily: '9:00–21:00' }, fee: { adult: 0, note: 'Free entry' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'LEGO store at 30 Rock · lots of 5th Ave flagship stores nearby',
              mapsUrl: 'https://maps.google.com/?q=LEGO+Store+Rockefeller+Center+New+York' }
          ],
          restaurants: []
        },
        {
          date: '2026-06-02', weekday: 'tue', neighbourhood: 'Manhattan',
          notes: 'Relaxed start — go out after lunch. Note: buy pay-what-you-wish tickets at 10am if visiting early.',
          places: [
            { id: 'housing-works-yorkville', name: 'Housing Works Thrift Shop — Yorkville', category: 'store',
              address: '1730 2nd Ave, Manhattan', lat: 40.7751, lng: -73.9499,
              hours: { mon: '10:00–19:00', tue: '10:00–19:00', wed: '10:00–19:00', thu: '10:00–19:00', fri: '10:00–19:00', sat: '10:00–19:00', sun: '12:00–18:00' },
              fee: { adult: 0, note: 'Free entry' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Non-profit thrift · profits go to homeless services · great finds',
              mapsUrl: 'https://maps.google.com/?q=Housing+Works+Thrift+Shop+Yorkville+New+York' },
            { id: 'unique-boutique', name: 'Unique Boutique (Thrift)', category: 'store',
              address: 'Upper East Side, Manhattan', lat: 40.7680, lng: -73.9560,
              hours: { mon: '10:00–20:00', tue: '10:00–20:00', wed: '10:00–20:00', thu: '10:00–20:00', fri: '10:00–20:00', sat: '10:00–20:00', sun: '11:00–18:00' },
              fee: { adult: 0, note: 'Free entry' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Thrift store · Upper East Side',
              mapsUrl: 'https://maps.google.com/?q=Unique+Boutique+Upper+East+Side+New+York' },
            { id: 'guggenheim', name: 'Solomon R. Guggenheim Museum', category: 'museum',
              address: '1071 5th Ave (at 89th St), Manhattan', lat: 40.7830, lng: -73.9590,
              hours: { sun: '11:00–17:30', mon: '11:00–17:30', tue: '11:00–17:30', thu: '11:00–17:30', fri: '11:00–20:00', sat: '11:00–17:30' },
              fee: { adult: 16, note: '$16/person ($48 for 3) · verify price at door' }, freeWindow: null,
              discountNote: 'IDNYC Cultural Pass — verify at door', bookingNote: null,
              notes: 'Arrive around 16:00 · Frank Lloyd Wright spiral building · closed Wednesdays',
              mapsUrl: 'https://maps.google.com/?q=Guggenheim+Museum+New+York' },
            { id: 'central-park-meadow', name: 'Central Park', category: 'park',
              address: 'Central Park, Manhattan', lat: 40.7756, lng: -73.9740,
              hours: { daily: '6:00–01:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk through after Guggenheim · nearby entrance at 90th St',
              mapsUrl: 'https://maps.google.com/?q=Central+Park+New+York' }
          ],
          restaurants: []
        },
        {
          date: '2026-06-03', weekday: 'wed', neighbourhood: 'Manhattan · SOHO', notes: null,
          places: [
            { id: 'manhattan-bridge-walk', name: 'Manhattan Bridge Walk', category: 'walk',
              address: 'Manhattan Bridge, Canal St entrance, Manhattan', lat: 40.7071, lng: -73.9908,
              hours: { daily: 'Always open' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk across · great views of Brooklyn Bridge & skyline',
              mapsUrl: 'https://maps.google.com/?q=Manhattan+Bridge+pedestrian+walkway' },
            { id: 'washington-square-park', name: 'Washington Square Park', category: 'park',
              address: 'Washington Square Park, Greenwich Village, Manhattan', lat: 40.7308, lng: -74.0001,
              hours: { daily: '6:00–01:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'NYU campus · street performers · iconic arch',
              mapsUrl: 'https://maps.google.com/?q=Washington+Square+Park+New+York' },
            { id: 'little-italy-chinatown', name: 'Little Italy + Chinatown', category: 'attraction',
              address: 'Mulberry St & Canal St, Manhattan', lat: 40.7196, lng: -73.9975,
              hours: { daily: 'Daytime' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk through both neighbourhoods · NYU nearby',
              mapsUrl: 'https://maps.google.com/?q=Little+Italy+New+York' }
          ],
          restaurants: [
            { name: "Eileen's Special Cheesecake", priceRange: 1, signatureDish: 'New York cheesecake',
              notes: '17 Cleveland Pl · one of the best cheesecakes in NYC',
              mapsUrl: "https://maps.google.com/?q=Eileen's+Special+Cheesecake+New+York" },
            { name: 'Dominique Ansel Bakery', priceRange: 2, signatureDish: 'Cronut & DKA',
              notes: '189 Spring St, SOHO · inventor of the Cronut · arrive early',
              mapsUrl: 'https://maps.google.com/?q=Dominique+Ansel+Bakery+New+York' },
            { name: "Olive's", priceRange: 2, signatureDish: 'Sandwiches',
              notes: 'Famous for their sandwiches',
              mapsUrl: "https://maps.google.com/?q=Olive's+New+York" }
          ]
        }
      ]
    },

    // ── BOSTON ─────────────────────────────────────────────
    {
      id: 'boston', name: 'Boston', city: 'Boston',
      color: '#EF4444', groupSize: 3,
      days: [
        {
          date: '2026-06-04', weekday: 'thu',
          neighbourhood: 'Seaport · Beacon Hill · Cambridge',
          notes: 'Train: Penn Station 8:46 → South Station 13:11 · Check-in YOTEL 15:00',
          places: [
            { id: 'boston-train', name: 'Amtrak: NYC → Boston', category: 'transport',
              address: 'Penn Station → South Station', lat: 42.3519, lng: -71.0552,
              hours: { daily: 'Depart 8:46 · Arrive 13:11' }, fee: { adult: 0, note: 'Pre-purchased' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Northeast Regional / Acela · ~4.5 hours',
              mapsUrl: 'https://maps.google.com/?q=Boston+South+Station' },
            { id: 'yotel-boston', name: 'YOTEL Boston (Check-in)', category: 'attraction',
              address: '65 Seaport Blvd, Boston, MA 02210', lat: 42.3474, lng: -71.0448,
              hours: { daily: 'Check-in from 15:00' }, fee: { adult: 0, note: 'Pre-booked' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'In the Seaport District',
              mapsUrl: 'https://maps.google.com/?q=YOTEL+Boston+Seaport' },
            { id: 'beacon-hill-art-walk-1', name: 'Beacon Hill Art Walk', category: 'attraction',
              address: 'Charles St, Beacon Hill, Boston', lat: 42.3588, lng: -71.0655,
              hours: { sat: '12:00–18:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Galleries and artists open studios · check if open Thu',
              mapsUrl: 'https://maps.google.com/?q=Beacon+Hill+Boston' },
            { id: 'mit', name: 'MIT Campus', category: 'attraction',
              address: '77 Massachusetts Ave, Cambridge, MA', lat: 42.3601, lng: -71.0942,
              hours: { daily: 'Campus always open' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk the campus · Stata Center is wild architecture',
              mapsUrl: 'https://maps.google.com/?q=MIT+Cambridge+Massachusetts' }
          ],
          restaurants: [
            { name: 'Tatte Bakery & Cafe', priceRange: 2, signatureDish: 'Tahini cookies & shakshuka',
              notes: 'Multiple Boston locations · great brunch spot',
              mapsUrl: 'https://maps.google.com/?q=Tatte+Bakery+Boston' },
            { name: 'Lucy Ethiopian Cafe', priceRange: 1, signatureDish: 'Ethiopian injera platters',
              notes: 'Authentic Ethiopian food · great value',
              mapsUrl: 'https://maps.google.com/?q=Lucy+Ethiopian+Restaurant+Boston' },
            { name: 'The Daily Catch Waterfront', priceRange: 3, signatureDish: 'Fresh clam chowder & seafood',
              notes: 'Classic Boston seafood restaurant by the water',
              mapsUrl: 'https://maps.google.com/?q=The+Daily+Catch+Boston' }
          ]
        },
        {
          date: '2026-06-05', weekday: 'fri', neighbourhood: 'Downtown · Cambridge', notes: null,
          places: [
            { id: 'freedom-trail', name: 'Freedom Trail', category: 'walk',
              address: 'Boston Common (start), Tremont St, Boston', lat: 42.3554, lng: -71.0641,
              hours: { daily: 'Always open (self-guided)' }, fee: { adult: 0, note: 'Free (self-guided)' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: '4 km · 16 historic sites · red painted line on pavement · 2–3 hours',
              mapsUrl: 'https://maps.google.com/?q=Freedom+Trail+Boston+Common' },
            { id: 'harvard', name: 'Harvard University', category: 'attraction',
              address: 'Harvard Yard, Cambridge, MA', lat: 42.3770, lng: -71.1167,
              hours: { daily: 'Campus always open' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk Harvard Yard · free tours sometimes available from students',
              mapsUrl: 'https://maps.google.com/?q=Harvard+Yard+Cambridge' }
          ],
          restaurants: [
            { name: 'Quincy Market', priceRange: 2, signatureDish: 'Clam chowder & lobster roll',
              notes: 'Fri 10am–9pm · food hall inside Faneuil Hall Marketplace',
              mapsUrl: 'https://maps.google.com/?q=Quincy+Market+Boston' },
            { name: "Mike's Pastry", priceRange: 1, signatureDish: 'Cannoli & chimney cake',
              notes: '300 Hanover St, North End · best cannoli in Boston · cash preferred',
              mapsUrl: "https://maps.google.com/?q=Mike's+Pastry+Boston" },
            { name: 'Krolewskie Jadlo', priceRange: 2, signatureDish: 'Polish pierogi & kielbasa',
              notes: 'Authentic Polish food · hearty and filling',
              mapsUrl: 'https://maps.google.com/?q=Krolewskie+Jadlo+Boston' }
          ]
        },
        {
          date: '2026-06-06', weekday: 'sat', neighbourhood: 'Downtown · Seaport', notes: null,
          places: [
            { id: 'boston-pride', name: 'Boston Pride Parade', category: 'attraction',
              address: 'Copley Square → Boylston St, Boston', lat: 42.3490, lng: -71.0780,
              hours: { sat: 'Morning–Afternoon (check schedule)' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Annual Pride march through downtown Boston',
              mapsUrl: 'https://maps.google.com/?q=Copley+Square+Boston' },
            { id: 'beacon-hill-art-walk-2', name: 'Beacon Hill Art Walk', category: 'attraction',
              address: 'Charles St, Beacon Hill, Boston', lat: 42.3588, lng: -71.0655,
              hours: { sat: '12:00–18:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Open galleries · Sat 12–6pm',
              mapsUrl: 'https://maps.google.com/?q=Beacon+Hill+Boston' },
            { id: 'triumph-concert', name: 'Triumph Concert @ Leader Bank Pavilion', category: 'concert',
              address: '290 Northern Ave, Boston, MA (Leader Bank Pavilion)', lat: 42.3487, lng: -71.0478,
              hours: { sat: '🔴 Starts 20:00 — do not miss!' }, fee: { adult: 0, note: 'Pre-purchased' },
              freeWindow: null, discountNote: null,
              bookingNote: '⚠️ Hard start time — be there by 19:30',
              notes: 'Outdoor waterfront venue · gates open ~18:00',
              mapsUrl: 'https://maps.google.com/?q=Leader+Bank+Pavilion+Boston' }
          ],
          restaurants: [
            { name: 'Boston Public Market', priceRange: 1, signatureDish: 'Local produce & food stalls',
              notes: 'Sat 8am–8pm · great for lunch before the parade',
              mapsUrl: 'https://maps.google.com/?q=Boston+Public+Market' },
            { name: 'Union Oyster House', priceRange: 3, signatureDish: 'Clam chowder & oysters',
              notes: '⚠️ Need reservation · oldest restaurant in America · Presidents have dined here',
              mapsUrl: 'https://maps.google.com/?q=Union+Oyster+House+Boston' }
          ]
        }
      ]
    },

    // ── NYC LEG 1 cont. (Jun 7–10) ─────────────────────────
    {
      id: 'nyc1b', name: 'NYC Leg 1 cont.', city: 'New York',
      color: '#3B82F6', groupSize: 3,
      days: [
        {
          date: '2026-06-07', weekday: 'sun', neighbourhood: 'Manhattan · Midtown', notes: null,
          places: [
            { id: 'moma', name: 'MoMA — Museum of Modern Art', category: 'museum',
              address: '11 W 53rd St, Manhattan', lat: 40.7614, lng: -73.9776,
              hours: { sun: '10:30–17:30', mon: '10:30–17:30', tue: null, wed: '10:30–17:30', thu: '10:30–17:30', fri: '10:30–17:30', sat: '10:30–17:30' },
              fee: { adult: 30, note: '$30/person ($90 for 3)' }, freeWindow: null,
              discountNote: 'IDNYC Cultural Pass may reduce cost — verify at door', bookingNote: null,
              notes: 'Closed Tuesdays · world-class modern art collection · book timed entry online',
              mapsUrl: 'https://maps.google.com/?q=Museum+of+Modern+Art+New+York' },
            { id: 'times-square-2', name: 'Times Square', category: 'attraction',
              address: 'Broadway & 7th Ave, Manhattan', lat: 40.7580, lng: -73.9855,
              hours: { daily: 'Always' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null, notes: null,
              mapsUrl: 'https://maps.google.com/?q=Times+Square+New+York' }
          ],
          restaurants: [
            { name: 'Carnegie Diner & Cafe', priceRange: 2, signatureDish: 'Classic American diner food',
              notes: 'Midtown classic · big portions',
              mapsUrl: 'https://maps.google.com/?q=Carnegie+Diner+Cafe+New+York' }
          ]
        },
        {
          date: '2026-06-08', weekday: 'mon', neighbourhood: 'Manhattan · Flushing (Queens)', notes: null,
          places: [
            { id: 'argosy-bookstore', name: 'Argosy Book Store', category: 'store',
              address: '116 E 59th St, Manhattan', lat: 40.7556, lng: -73.9718,
              hours: { mon: '10:00–18:00', tue: '10:00–18:00', wed: '10:00–18:00', thu: '10:00–18:00', fri: '10:00–18:00', sat: '10:00–18:00' },
              fee: { adult: 0, note: 'Free entry' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Rare books, antique maps & prints · since 1925 · cash/check preferred',
              mapsUrl: 'https://maps.google.com/?q=Argosy+Book+Store+New+York' },
            { id: 'flushing-meadows', name: 'Flushing Meadows Corona Park', category: 'park',
              address: 'Flushing Meadows-Corona Park, Queens', lat: 40.7396, lng: -73.8452,
              hours: { daily: '6:00–21:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: "Unisphere globe · where the 1964 World's Fair was held · Subway: 7 to Mets-Willets Point",
              mapsUrl: 'https://maps.google.com/?q=Flushing+Meadows+Corona+Park+Queens' }
          ],
          restaurants: [
            { name: 'PopUp Bagels', priceRange: 1, signatureDish: 'NYC-style bagels',
              notes: 'Cult-favourite bagel spot · multiple locations',
              mapsUrl: 'https://maps.google.com/?q=PopUp+Bagels+New+York' }
          ]
        },
        {
          date: '2026-06-09', weekday: 'tue', neighbourhood: 'Lower Manhattan · Staten Island', notes: null,
          places: [
            { id: 'federal-hall', name: 'Federal Hall National Memorial', category: 'museum',
              address: '26 Wall St, Manhattan', lat: 40.7072, lng: -74.0099,
              hours: { mon: '9:00–17:00', tue: '9:00–17:00', wed: '9:00–17:00', thu: '9:00–17:00', fri: '9:00–17:00' },
              fee: { adult: 0, note: 'Free' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Where Washington was inaugurated as first US President · closed weekends',
              mapsUrl: 'https://maps.google.com/?q=Federal+Hall+Wall+Street+New+York' },
            { id: 'wall-street', name: 'Wall Street & NYSE', category: 'attraction',
              address: 'Wall St & Broad St, Manhattan', lat: 40.7069, lng: -74.0089,
              hours: { daily: 'Exterior always visible' }, fee: { adult: 0, note: 'Free (exterior)' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'NYSE building · Charging Bull statue nearby at Bowling Green',
              mapsUrl: 'https://maps.google.com/?q=New+York+Stock+Exchange+Wall+Street' },
            { id: 'battery-park', name: 'Battery Park', category: 'park',
              address: 'Battery Pl, Lower Manhattan', lat: 40.7033, lng: -74.0170,
              hours: { daily: '6:00–23:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Walk along waterfront · great views of the Harbour & Statue of Liberty',
              mapsUrl: 'https://maps.google.com/?q=Battery+Park+New+York' },
            { id: 'staten-island-ferry', name: 'Staten Island Ferry (Whitehall)', category: 'attraction',
              address: '4 Whitehall St, Lower Manhattan', lat: 40.7008, lng: -74.0133,
              hours: { daily: 'Runs 24/7, every 30 min' }, fee: { adult: 0, note: 'Free — both ways!' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Best free view of the Statue of Liberty & Manhattan skyline · 25-min ride each way',
              mapsUrl: 'https://maps.google.com/?q=Staten+Island+Ferry+Terminal+Whitehall' },
            { id: 'empire-outlets', name: 'Empire Outlets (Staten Island)', category: 'store',
              address: '55 Richmond Terrace, St. George, Staten Island', lat: 40.6434, lng: -74.0762,
              hours: { daily: '10:00–20:00' }, fee: { adult: 0, note: 'Free entry' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: "NYC's only outlet mall · 2 min walk from the ferry terminal",
              mapsUrl: 'https://maps.google.com/?q=Empire+Outlets+Staten+Island' }
          ],
          restaurants: []
        },
        { date: '2026-06-10', weekday: 'wed', neighbourhood: 'Brooklyn',
          notes: '🌿 Rest day — walk around the neighbourhood, recharge.',
          places: [], restaurants: [] }
      ]
    },

    // ── CANADA ─────────────────────────────────────────────
    {
      id: 'canada', name: 'Canada', city: 'Calgary / Banff',
      color: '#10B981', groupSize: 1,
      days: [
        { date: '2026-06-11', weekday: 'thu', neighbourhood: 'Canada', notes: 'Add activities as you plan', places: [], restaurants: [] },
        { date: '2026-06-12', weekday: 'fri', neighbourhood: 'Canada', notes: 'Add activities as you plan', places: [], restaurants: [] },
        { date: '2026-06-13', weekday: 'sat', neighbourhood: 'Canada', notes: 'Add activities as you plan', places: [], restaurants: [] },
        { date: '2026-06-14', weekday: 'sun', neighbourhood: 'Canada', notes: 'Add activities as you plan', places: [], restaurants: [] },
        { date: '2026-06-15', weekday: 'mon', neighbourhood: 'Canada', notes: 'Add activities as you plan', places: [], restaurants: [] },
        { date: '2026-06-16', weekday: 'tue', neighbourhood: 'Canada', notes: 'Add activities as you plan', places: [], restaurants: [] }
      ]
    },

    // ── NYC LEG 2 ───────────────────────────────────────────
    {
      id: 'nyc2', name: 'NYC Leg 2', city: 'New York',
      color: '#8B5CF6', groupSize: 3,
      days: [
        {
          date: '2026-06-17', weekday: 'wed', neighbourhood: 'Woodbury (day trip)',
          notes: 'Take coach bus from Port Authority Bus Terminal (short line bus or Woodbury shuttle)',
          places: [
            { id: 'woodbury-outlets', name: 'Woodbury Common Premium Outlets', category: 'store',
              address: '498 Red Apple Ct, Central Valley, NY 10917', lat: 41.3299, lng: -74.1251,
              hours: { daily: '10:00–21:00' }, fee: { adult: 0, note: 'Free entry' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: '220+ outlet stores · ~1hr from Port Authority by coach bus',
              mapsUrl: 'https://maps.google.com/?q=Woodbury+Common+Premium+Outlets+New+York' }
          ],
          restaurants: []
        },
        { date: '2026-06-18', weekday: 'thu', neighbourhood: 'New York',
          notes: '🗓 Free day — add activities or rest.', places: [], restaurants: [] },
        {
          date: '2026-06-19', weekday: 'fri',
          neighbourhood: 'Manhattan · West Village · Chelsea', notes: null,
          places: [
            { id: 'vessel-hudson-yards', name: 'Vessel & Hudson Yards', category: 'attraction',
              address: '20 Hudson Yards, Manhattan', lat: 40.7538, lng: -74.0023,
              hours: { daily: '10:00–22:00' }, fee: { adult: 0, note: 'Free (exterior / ground level)' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: "Don't go up — just photos from outside · surrounding plaza is free",
              mapsUrl: 'https://maps.google.com/?q=Vessel+Hudson+Yards+New+York' },
            { id: 'high-line', name: 'High Line', category: 'park',
              address: 'High Line, 14th St entrance, Manhattan', lat: 40.7413, lng: -74.0044,
              hours: { daily: '7:00–22:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Elevated park on former rail tracks · 2.3 km · great city views',
              mapsUrl: 'https://maps.google.com/?q=High+Line+New+York' },
            { id: 'chelsea-market', name: 'Chelsea Market', category: 'market',
              address: '75 9th Ave, Chelsea, Manhattan', lat: 40.7421, lng: -74.0059,
              hours: { mon: '7:00–21:00', tue: '7:00–21:00', wed: '7:00–21:00', thu: '7:00–21:00', fri: '7:00–21:00', sat: '7:00–21:00', sun: '8:00–20:00' },
              fee: { adult: 0, note: 'Free entry' }, freeWindow: null, discountNote: null, bookingNote: null,
              notes: "Food hall in old Nabisco factory · Lobster Place, Anthropologie, Amy's Bread",
              mapsUrl: 'https://maps.google.com/?q=Chelsea+Market+New+York' },
            { id: 'pier-57', name: 'Pier 57 Rooftop', category: 'attraction',
              address: 'Pier 57, 15th St & Hudson River Greenway, Manhattan', lat: 40.7454, lng: -74.0103,
              hours: { daily: '10:00–20:00' }, fee: { adult: 0, note: 'Free' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Rooftop park with Hudson River views · walk along Pier 46 too',
              mapsUrl: 'https://maps.google.com/?q=Pier+57+Rooftop+New+York' },
            { id: 'whitney-museum', name: 'Whitney Museum of American Art', category: 'museum',
              address: '99 Gansevoort St, Meatpacking, Manhattan', lat: 40.7396, lng: -74.0089,
              hours: { sun: '10:30–18:00', mon: '10:30–18:00', tue: null, wed: null, thu: '10:30–18:00', fri: '10:30–22:00', sat: '10:30–18:00' },
              fee: { adult: 25, note: '$25/person — but FREE today 17:00–22:00' },
              freeWindow: { day: 'fri', start: '17:00', end: '22:00', note: 'Pre-register required · book online in advance' },
              discountNote: 'IDNYC — verify at door', bookingNote: null,
              notes: 'Terrace has great views of the Hudson · closed Tue/Wed',
              mapsUrl: 'https://maps.google.com/?q=Whitney+Museum+New+York' },
            { id: 'morgan-library', name: 'The Morgan Library & Museum', category: 'museum',
              address: '225 Madison Ave (at 36th St), Manhattan', lat: 40.7494, lng: -73.9817,
              hours: { tue: '10:30–17:00', wed: '10:30–17:00', thu: '10:30–17:00', fri: '10:30–20:00', sat: '10:00–18:00', sun: '11:00–18:00' },
              fee: { adult: 23, note: '$23/person — but FREE today 17:00–20:00' },
              freeWindow: { day: 'fri', start: '17:00', end: '20:00', note: 'RSVP required · reserve 1 week ahead online' },
              discountNote: null, bookingNote: null,
              notes: "J.P. Morgan's stunning library · rare manuscripts & gems",
              mapsUrl: 'https://maps.google.com/?q=Morgan+Library+Museum+New+York' }
          ],
          restaurants: []
        },
        {
          date: '2026-06-20', weekday: 'sat', neighbourhood: 'Brooklyn · Manhattan', notes: null,
          places: [
            { id: 'smorgasburg-williamsburg', name: 'Smorgasburg Williamsburg', category: 'market',
              address: 'East River State Park, Kent Ave & N 7th St, Brooklyn', lat: 40.7192, lng: -73.9680,
              hours: { sat: '11:00–18:00' }, fee: { adult: 0, note: 'Free entry (pay for food)' },
              freeWindow: null, discountNote: null, bookingNote: null,
              notes: 'Saturdays only · waterfront with Manhattan skyline views · best food market in NYC',
              mapsUrl: 'https://maps.google.com/?q=Smorgasburg+Williamsburg+Brooklyn' },
            { id: 'met', name: 'The Metropolitan Museum of Art', category: 'museum',
              address: '1000 5th Ave (at 82nd St), Manhattan', lat: 40.7794, lng: -73.9632,
              hours: { mon: null, tue: null, wed: '10:00–17:00', thu: '10:00–17:00', fri: '10:00–21:00', sat: '10:00–21:00', sun: '10:00–17:00' },
              fee: { adult: 30, note: '$30/person ($90 for 3)' }, freeWindow: null,
              discountNote: 'IDNYC — verify at door · Library Cultural Pass may apply', bookingNote: null,
              notes: 'Largest art museum in the Americas · closed Mon & Tue · Fri & Sat open until 9pm',
              mapsUrl: 'https://maps.google.com/?q=Metropolitan+Museum+of+Art+New+York' }
          ],
          restaurants: []
        },
        { date: '2026-06-21', weekday: 'sun', neighbourhood: 'Brooklyn',
          notes: '🧳 Pack luggage · last day in NYC. Check out by 12:00.',
          places: [], restaurants: [] }
      ]
    },

    // ── RETURN ──────────────────────────────────────────────
    {
      id: 'taiwan-return', name: 'Return', city: 'Taiwan',
      color: '#64748B', groupSize: 0,
      days: [{
        date: '2026-06-22', weekday: 'mon',
        neighbourhood: 'Taiwan', isTravel: true,
        travelNote: 'Return to Taiwan ✈️ — safe travels!',
        places: [], restaurants: []
      }]
    }
  ]
};
