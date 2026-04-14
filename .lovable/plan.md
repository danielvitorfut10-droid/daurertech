
# Recreate Daurer Website in React

## Overview
Rebuild the Daurer agency website (daurer.com/criacao-de-sites/) as a React single-page application in Portuguese (BR), matching the original design and content.

## Brand & Design System
- **Primary color**: #005DFC (blue)
- **Dark background sections**: deep blue/navy gradients
- **Fonts**: Titillium Web (headings), Open Sans (body), Roboto (accents)
- **Style**: Modern, professional, with diagonal section dividers and glass-morphism effects
- **Logo**: Reference the Daurer logo from CDN

## Sections to Build (in order)

### 1. Sticky Header/Navbar
- Daurer logo (left)
- Navigation links: "o que fazemos", "clientes", "sobre nós", "nosso time", "blog", "Contato"
- "Contato" CTA button (right)
- Transparent on top, becomes solid blue on scroll
- Mobile hamburger menu

### 2. Hero Section
- Split layout: image left, text right
- Heading: "AGÊNCIA DE CRIAÇÃO DE SITES PROFISSIONAIS"
- Typewriter animation cycling: "EXPERIÊNCIA INTERNACIONAL", "PROJETOS COMPLEXOS", "PERFORMANCE", "Cibersegurança"
- Diagonal bottom divider (triangle asymmetrical shape)

### 3. Services / "O que fazemos" Section
- Service cards/icons showcasing web development capabilities
- Content extracted from the original HTML

### 4. Clients Section
- Client logos/portfolio showcase
- Slider/carousel of client work

### 5. About Us Section ("Sobre Nós")
- Company description, 10+ years experience, 1000+ companies served
- Two office locations (Alphaville/Barueri and São Paulo/Itaim Bibi)

### 6. Our Team Section ("Nosso Time")
- Team member cards with photos and roles

### 7. FAQ Accordion Section
- 13 FAQ items with expand/collapse functionality
- Questions about pricing, timelines, hosting, SEO, WordPress, etc.
- All content preserved in Portuguese

### 8. Contact Form Section
- Fields: name, email, phone, company
- Service interest selector (clickable tags)
- Budget range selector
- File upload button
- Submit button

### 9. Footer
- Three columns: DUNS registration + CNPJ, Logo + description + addresses, Institutional links
- Two office addresses with Google Maps links
- Links: Home, Criação de Sites, Consultoria SEO, Consultoria GA4, Blog, Política de Privacidade

### 10. Mobile Sticky CTA
- Fixed "Contato" button at bottom on mobile only

## Technical Approach
- Component-based architecture with separate files per section
- Smooth scroll navigation between sections
- Responsive design (desktop, tablet, mobile)
- CSS animations for typewriter effect and scroll reveals
- Accordion component for FAQ
- All images referenced from original CDN URLs initially (can be replaced later)
