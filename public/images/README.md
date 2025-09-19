# Image Organization Guide

## Folder Structure

```
public/
├── images/
│   ├── profile/          # Profile photos (hero section)
│   └── README.md         # This guide
├── projects/
│   ├── screenshots/      # Project screenshots
│   ├── mockups/          # Design mockups
│   └── README.md         # Project images guide
└── [other assets]
```

## Usage Guidelines

### Profile Images (`public/images/profile/`)
- Place your profile photo here
- Recommended: `profile.jpg` or `profile.png`
- Size: 400x400px minimum (square aspect ratio)
- Format: JPG or PNG

### Project Images (`public/projects/`)
- **Screenshots**: Actual application screenshots
- **Mockups**: Design files, wireframes, prototypes
- Naming convention: Use project key as prefix
  - Example: `ecommerce-dashboard.jpg`, `mobile-app-mockup.png`

## How to Add Images to Your Config

### Profile Image
```typescript
export const siteConfig = {
  personal: {
    profileImage: "/images/profile/profile.jpg", // Add this line
    // ... other config
  }
}
```

### Project Images
```typescript
export const siteContent = {
  projects: [
    {
      title: "E-Commerce Dashboard",
      image: "/projects/screenshots/ecommerce-dashboard.jpg", // Add this line
      // ... other project data
    }
  ]
}
```

## Image Optimization Tips

1. **File Size**: Keep under 500KB for web performance
2. **Dimensions**: 
   - Profile: 400x400px (1:1 ratio)
   - Projects: 800x600px (4:3 ratio) recommended
3. **Format**: Use JPG for photos, PNG for graphics with transparency
4. **Naming**: Use lowercase, hyphens instead of spaces

## Next Steps

1. Add your images to the appropriate folders
2. Update `src/config/index.ts` with image paths
3. The website will automatically display your images