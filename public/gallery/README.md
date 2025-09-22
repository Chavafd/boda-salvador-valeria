# 📷 Gallery Photos Instructions

## How to Add Your Wedding Photos

### Step 1: Add Your Photos Here
Place your photos in this folder (`public/gallery/`)

### Step 2: Recommended Photo Names
Name your photos simply, for example:
- `photo1.jpg`
- `photo2.jpg` 
- `photo3.jpg`
- etc.

Or use descriptive names:
- `primera-cita.jpg`
- `propuesta.jpg`
- `viaje-playa.jpg`

### Step 3: Update the Gallery Component
1. Open the file: `components/Gallery.tsx`
2. Find the `galleryImages` array (around line 21)
3. Update it with your photo filenames:

```javascript
const galleryImages = [
  { id: 1, src: '/gallery/photo1.jpg', alt: 'Nuestra primera cita' },
  { id: 2, src: '/gallery/photo2.jpg', alt: 'Viaje a la playa' },
  // Add more photos here...
]
```

### Photo Recommendations
- **Format**: JPG or PNG
- **Size**: 800-1200px width recommended
- **Quality**: Optimize for web (under 500KB per image)
- **Aspect Ratio**: Any ratio works, but 3:2 or 4:3 look best

### Example Photo Types
- Engagement photos
- Dating memories
- Travel photos together  
- Family moments
- Proposal photos
- Pre-wedding photoshoot

## Need Help?
If you need to resize or optimize your photos, use:
- Online tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Or any photo editing software

---
Enjoy creating your beautiful wedding gallery! 💕
