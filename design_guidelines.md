# AudioTag Design Guidelines

## Design Approach

**Selected Approach:** Hybrid - Spotify/SoundCloud aesthetic for audio-centric design + Material Design patterns for dual-sided user flows

**Justification:** AudioTag is a media-rich platform requiring visual appeal for artist showcasing while maintaining functional clarity for producer workflows. Drawing inspiration from music streaming platforms ensures familiar, engaging audio interactions.

---

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- **Brand Pink:** 333 72% 54% (D43D89) - Primary CTAs, active states, artist-focused elements
- **Vibrant Pink:** 329 84% 61% (E94397) - Accent highlights, hover states
- **Coral Orange:** 9 87% 70% (F48171) - Secondary actions, warm accents
- **Sunshine Yellow:** 43 100% 64% (FFBE4A) - Premium features, shop items, attention markers

**Supporting Colors:**
- **Sage Green:** 103 30% 63% (97B688) - Success states, positive metrics
- **Ocean Cyan:** 188 65% 48% (2FADC6) - Links, producer-focused elements
- **Bright Cyan:** 187 51% 53% (42B4CB) - Secondary producer actions

**Dark Mode Foundation:**
- Background: 240 10% 8%
- Surface: 240 8% 12%
- Elevated Surface: 240 6% 16%
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

### B. Typography

**Font Families:**
- **Primary:** Inter (400, 500, 600, 700) - UI elements, body text
- **Display:** Clash Display or similar geometric sans - Large headings, artist names
- **Mono:** JetBrains Mono - Stats, technical data

**Scale:**
- Hero/Display: 3xl-5xl, bold weight
- Artist Names: 2xl-3xl, semibold
- Section Headers: xl-2xl, semibold
- Body: base-lg, regular/medium
- Metadata: sm-base, medium
- Micro: xs, regular

### C. Layout System

**Spacing Units:** Tailwind units of 2, 3, 4, 6, 8, 12, 16 (p-2, m-4, gap-6, etc.)

**Mobile-First Grid:**
- Mobile: Single column, full-width cards with 4-6 unit padding
- Profile layouts: Centered content, max-width constraints
- Lists: Vertical stacking with 3-4 unit gaps
- Bottom navigation: Fixed, 16 unit height with icon + label

**Audio Player Integration:**
- Sticky audio bar following damngoodvoices.com reference
- Waveform visualization in brand pink gradient
- Playback controls with cyan accents
- Demo switcher integrated into player UI

### D. Component Library

**Navigation:**
- Bottom Tab Bar: 5-6 icons (Me/Them/Stats/Edit/Label/Search) with labels, active state in brand pink
- Top Header: Minimal, artist/producer name centered, actions on right

**Audio Components:**
- Demo Cards: Waveform preview, title, duration, play button with pink gradient
- Audio Player: Full-width sticky bar, progress slider, time stamps, demo switcher
- Demo Management: Drag-to-reorder interface, up to 6 demos, "Add New" card with dashed border

**Profile Elements:**
- Avatar: Large circular (96-128px), pink gradient border when active/featured
- Bio Section: Max 250 chars, expandable with "read more" in cyan
- Social Icons: Horizontal row, cyan color, 24px size
- QR Code: Centered card, white background, pink accent border, share button below

**Stats & Metrics:**
- Stat Cards: Icon + number + label, sage green for positive growth
- Recent Viewers: Avatar list, timestamp, tap to view profile
- Graph Visualizations: Line charts in brand pink, cyan grid lines

**Shop/Monetization:**
- Product Cards: Yellow accent border, title + price, remaining quantity indicator
- Purchase Buttons: Gradient pink-to-coral, white text, rounded-full
- Package Display: Stacked cards with featured glow effect

**Lists & Groups:**
- List Cards: Cover images grid (if artists have photos), count badge in cyan
- Artist Grid: 2-column on mobile, avatar + name + preview demo
- Search Bar: Rounded, dark surface, cyan focus ring

**Notifications:**
- Feed Items: Avatar + message + timestamp, unread indicator in yellow
- Action Notifications: Inline CTAs for "View Profile" or "Listen to Demo"

**Map View:**
- Fullscreen toggle in top-right
- Markers in brand pink, cluster in coral
- Artist preview card on marker tap

### E. Interactions

**Micro-interactions:**
- Audio Play: Ripple effect in pink emanating from play button
- Follower Add/Remove: Slide animation with haptic feedback
- Demo Upload: Progress bar in cyan-to-pink gradient
- List Creation: Bottom sheet slide-up with backdrop blur

**Transitions:**
- Screen Navigation: Slide horizontal (150ms ease-out)
- Modal/Sheet: Slide up (200ms ease-out) with fade backdrop
- Drawer: Slide from edge (180ms ease-in-out)

**Audio-Specific:**
- Waveform: Animated bars sync to playback
- Progress Slider: Scrub with preview tooltip
- Demo Switch: Crossfade between tracks (300ms)

---

## User Type Differentiation

**Artist (User A) Visual Cues:**
- Pink-dominant color scheme
- Focus on media presentation and stats
- QR code and share prominence
- Monetization cards with yellow accents

**Producer (User B) Visual Cues:**
- Cyan-dominant for CTAs and links
- List-based layouts for connections
- Notification center prominence
- Search and filter emphasis

---

## Images & Media

**Profile Imagery:**
- Artist Avatar: Professional headshots, circular crop
- Background: Optional subtle gradient overlay (pink-to-coral 10% opacity)

**Demo Visuals:**
- Waveform Thumbnails: Generated from audio, pink gradient fill
- Placeholder: Abstract audio wave pattern when no waveform available

**Map Implementation:**
- Location pins with artist avatar thumbnails
- Cluster groups showing count in coral circles

**QR Code:**
- High contrast black/white code
- Pink brand frame/border
- Logo watermark in corner

---

## Key Screen Specifications

**Artist Profile:**
- Top: Avatar (128px) + name (3xl) + social icons row
- Mid: Bio expandable card, audio demo list (vertical stack)
- Bottom: QR code card, share button (cyan), bottom nav

**Stats Dashboard:**
- Metrics row: Followers, Plays, Views (centered, icon above number)
- Recent Viewers: Scrollable horizontal list with timestamps
- Graph: 7-day play history, pink line chart

**Shop:**
- Hero: "Boost Your Visibility" heading (2xl)
- Product cards: Boost Profile, Feature Me, Nudges packages
- Each card: Yellow border, price prominent, quantity badge

**Producer Dashboard:**
- Search bar at top (sticky)
- Artist grid: 2-column, compact cards
- Filter chips: Horizontal scroll, cyan active state
- Quick actions: Floating action button (pink) for new list

This design creates a vibrant, music-industry aesthetic that celebrates audio content while providing clear functionality for both artists showcasing their work and producers discovering talent.