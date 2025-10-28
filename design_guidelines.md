# Design Guidelines: Handicrafts Shopping Cart Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Etsy's artisan marketplace aesthetic combined with Shopify's clean product presentation and boutique e-commerce patterns. This approach emphasizes visual storytelling, product photography, and authentic craftsmanship presentation.

## Core Design Principles

1. **Artisan Authenticity**: Showcase handmade quality through generous product imagery and organic layouts
2. **Visual Hierarchy**: Guide users from discovery to purchase with clear, intentional design flow
3. **Breathing Room**: Allow products to shine with ample whitespace and uncluttered interfaces
4. **Trust & Warmth**: Create welcoming, human-centered experience that reflects handcrafted values

## Typography System

**Font Stack**:
- Primary: 'Cormorant Garamond' (serif) - Headers, product titles, elegant touchpoints
- Secondary: 'Inter' (sans-serif) - Body text, navigation, UI elements
- Accent: 'Playfair Display' (serif) - Hero headlines, special callouts

**Type Scale**:
- Hero Headline: text-6xl md:text-7xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-semibold
- Product Titles: text-2xl, font-medium
- Subheadings: text-xl, font-normal
- Body Text: text-base, leading-relaxed
- Small Text: text-sm
- Captions: text-xs

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Micro spacing: p-2, m-4 (small gaps, tight padding)
- Standard spacing: p-6, m-8 (component internal spacing)
- Section spacing: py-16 md:py-20 (vertical rhythm between sections)
- Generous spacing: py-20 md:py-32 (hero sections, major breaks)

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Product grids: max-w-6xl
- Content areas: max-w-4xl
- Checkout/Cart: max-w-3xl

**Grid System**:
- Mobile: grid-cols-1
- Tablet: grid-cols-2 md:grid-cols-3
- Desktop: grid-cols-3 lg:grid-cols-4 (product grids)

## Component Library

### Home Page Structure

**Hero Section** (90vh):
- Full-width background image showcasing featured handicraft
- Overlay gradient for text readability
- Centered content: headline + tagline + primary CTA
- Secondary CTA for "Browse Collection"
- Trust indicator strip below hero (e.g., "Handmade • Sustainable • Direct from Artisans")

**Featured Products Section**:
- 3-column grid on desktop, 2-column tablet, 1-column mobile
- Product cards with 4:5 aspect ratio images
- Hover effect: subtle scale (scale-105)
- "Add to Cart" button appears on hover

**Story/Values Section**:
- 2-column layout: Image left, content right (alternating pattern)
- Artisan story, craftsmanship details, sustainability message
- Pull quotes in accent font

**Category Showcase**:
- Masonry grid layout displaying product categories
- Category cards with overlay text
- 4 categories minimum

**Newsletter/CTA Section**:
- Centered layout with email capture
- Social proof counter ("Join 5,000+ craft lovers")

### Product Gallery/Catalog Page

**Filter Sidebar** (desktop) / Drawer (mobile):
- Sticky position on desktop
- Collapsible categories
- Price range slider
- Material filters with checkboxes
- "Clear All" button

**Product Grid**:
- 4-column desktop, 3-column tablet, 2-column mobile
- Product cards with consistent structure:
  - Image (square aspect ratio)
  - Product name (truncate at 2 lines)
  - Price (prominent)
  - Quick "Add to Cart" icon button
  - Wishlist heart icon (top-right overlay on image)

**Sort & View Options**:
- Horizontal bar above grid
- Sort dropdown (Price, Newest, Popular)
- Grid/List view toggle
- Results count

### Shopping Cart

**Cart Items List**:
- Table layout on desktop, stacked cards on mobile
- Each item: thumbnail, name, price, quantity selector, remove button
- Quantity controls: minus/plus buttons with number input
- Subtotal per item

**Cart Summary Sidebar**:
- Sticky on desktop, bottom sheet on mobile
- Subtotal, shipping estimate, tax
- Promo code input field
- Total (emphasized with larger font)
- "Proceed to Checkout" primary button
- "Continue Shopping" secondary link

**Empty Cart State**:
- Centered illustration/icon
- Helpful message
- "Browse Products" CTA button

### Contact Page

**Two-Column Layout**:
- Left column (60%): Contact form
  - Name, email, subject, message fields
  - Submit button (full-width on mobile)
- Right column (40%): Business information
  - Address with map icon
  - Phone with phone icon
  - Email with envelope icon
  - Business hours
  - Social media links

**Contact Form Fields**:
- Floating labels or top labels
- Full-width inputs with consistent height (h-12 for text inputs)
- Textarea for message (h-32)
- Focus states with subtle border treatment

## Navigation

**Header** (sticky):
- Logo left
- Primary nav center: Home, Shop, About, Contact
- Right utilities: Search icon, Cart icon with badge count, Account icon
- Mobile: Hamburger menu with slide-out drawer

**Footer** (3-4 column grid):
- Column 1: Brand logo, tagline, newsletter signup
- Column 2: Quick links (Shop, About, Contact, FAQ)
- Column 3: Customer service (Shipping, Returns, Privacy)
- Column 4: Social media links
- Bottom bar: Copyright, payment icons

## Product Cards

**Standard Product Card**:
- Container with subtle border or shadow on hover
- Image area with 1:1 aspect ratio
- Padding p-4 around content
- Product name (font-medium, 2-line truncate)
- Price (font-semibold, larger size)
- "Add to Cart" button (hidden, shows on hover on desktop)
- Quick view icon (top-right on image)

## Icons

**Library**: Heroicons (via CDN)
- Shopping cart, heart, search, user icons
- Social media icons
- Filter, grid/list view icons
- Plus/minus for quantity controls

## Animations

**Minimal & Purposeful**:
- Product card hover: transform scale-105, transition duration-300
- Button hover: slight opacity change
- Page transitions: fade-in on load
- Add to cart: Brief scale animation on cart icon badge
- No scroll-triggered animations, no auto-playing carousels

## Images Section

**Hero Image**:
- Full-width, 90vh height
- High-quality photograph of artisan workspace or featured product in use
- Natural lighting, warm tones
- Subject: hands crafting, or lifestyle shot with handicraft in context

**Product Images**:
- Square format (1:1 ratio), minimum 800x800px
- Clean white or neutral background for catalog
- Lifestyle context shots for featured products
- Multiple angles for product detail pages

**Category Images**:
- Rectangular format (4:3 ratio)
- Show representative products or crafting process
- Overlay-friendly composition (darker areas for text)

**Story Section Images**:
- Horizontal format (16:9 or 3:2)
- Artisan portraits, workshop scenes, material close-ups
- Authentic, documentary-style photography

**Icon Illustrations**:
- Use simple line icons from Heroicons
- Consistent stroke width throughout

This design creates a warm, trustworthy shopping experience that honors handcrafted goods while providing modern e-commerce functionality. The generous use of imagery, thoughtful typography, and clean layouts allow products to take center stage while guiding users smoothly from discovery to purchase.