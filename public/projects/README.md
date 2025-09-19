# Project Images Guide

## Folder Organization

### `/screenshots/` - Application Screenshots
- Real application interfaces
- Live product demonstrations
- User interface captures
- Mobile responsive views

### `/mockups/` - Design Files
- Wireframes and prototypes
- Design concepts
- Before/after comparisons
- Architecture diagrams

## Image Requirements

### Technical Specifications
- **Dimensions**: 800x600px recommended (4:3 aspect ratio)
- **File Size**: Under 500KB for optimal performance
- **Format**: JPG (photos) or PNG (graphics/transparency)
- **Quality**: High resolution but web-optimized

### Naming Convention
Use project key as filename prefix:
- `ecommerce-main.jpg` - Main project screenshot
- `mobile-app-mockup.png` - Design mockup
- `dashboard-analytics.jpg` - Specific feature view

## How to Add Project Images

1. **Place Image**: Add to appropriate subfolder
2. **Update Config**: Edit `src/config/index.ts`
   ```typescript
   {
     title: "Your Project",
     image: "/projects/screenshots/your-project.jpg",
     // ... other data
   }
   ```

## Examples

### With Screenshot
```typescript
{
  title: "E-Commerce Dashboard",
  image: "/projects/screenshots/ecommerce-dashboard.jpg",
  description: "Modern admin dashboard...",
  // ...
}
```

### With Mockup
```typescript
{
  title: "Mobile Banking App",
  image: "/projects/mockups/banking-app-design.png",
  description: "UI/UX design for mobile banking...",
  // ...
}
```

### Without Image (Emoji Fallback)
```typescript
{
  title: "API Service",
  // No image property - will show smart emoji
  description: "RESTful API backend...",
  // ...
}
```

The system automatically detects missing images and shows relevant emojis instead.