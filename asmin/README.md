# Asmaul Husna - 99 Beautiful Divine Names of Allah

A modern, fully functional restoration of the archived Asmaul Husna website with interactive card-based display of the 99 Divine Names of Allah.

## Overview

This project restores the Asmaul Husna educational website (originally at asmaulhusna.in, archived December 20, 2019) as a standalone, working HTML application without dependencies on external archive services.

## Features

- **Interactive Cards**: Hover over names to see invocations and details
- **99 Divine Names**: Complete list with English translations, Arabic text, and meanings
- **Toggle Options**: Show/hide descriptions, benefits, and Malayalam translations
- **Navigation**: Jump to any name by entering its ID (1-99)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Sticky Header**: Navigation stays visible while scrolling
- **Beautiful UI**: Clean, modern design with original aesthetic elements

## Project Structure

```
asmin/
├── index.html              # Main page
├── README.md              # This file
├── assets/
│   ├── css/
│   │   └── style.css      # Styling (444 lines)
│   ├── images/
│   │   ├── Basmalah.png   # Islamic greeting
│   │   ├── bg.gif         # Background pattern
│   │   ├── in.jpg         # Background image
│   │   └── sahibusaif_photo.png  # Founder photo
│   └── js/
│       ├── jquery.min.js  # jQuery library (v1.7.2)
│       ├── names-data.js  # 99 divine names data (102 lines)
│       └── app.js         # Main application logic (165 lines)
└── web/                   # Original archived content (backup)
```

## How to Use

### Opening the Page
Simply open `index.html` in any modern web browser:
```bash
open index.html
# or
firefox index.html
```

### Navigating Divine Names
1. **Scroll** through all 99 names
2. **Hover** over any name to see the invocation ("Ya [Name] Ya ALLAH")
3. **Jump to specific name** - Enter 1-99 in the "Goto" field when scrolled down

### Toggle Information
When scrolled past the banner, use the options bar:
- **Title** - Toggle name display
- **Description** - Toggle detailed descriptions
- **Malayalam** - Toggle Malayalam translations
- **Benefits** - Toggle spiritual benefits information

### Start Recitation
Click the "START RECITATION" button to scroll to the first Divine Name and begin.

## Restoration Details

### What Was Restored
- **99 Divine Names** extracted from archived pages with:
  - English translations
  - Arabic text
  - English meanings
  - Abjad numerical values (where available)
  - Malayalam translations (preserved from original)

### Technical Changes
- Removed Wayback Machine scripts and infrastructure code
- Modernized HTML5 structure while preserving original styling
- Updated relative paths from `/web/` archive structure to `/assets/`
- Implemented modern JavaScript using jQuery for interaction
- Created responsive CSS for all screen sizes
- Replaced broken PHP endpoints with client-side logic

### Original Assets Preserved
- Images from the 2019 archive
- jQuery library (v1.7.2) from original site
- Core visual design and color scheme

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Original Website Information

- **Website**: asmaulhusna.in
- **Archive Date**: December 20, 2019
- **Archive Timestamp**: 20191220073601
- **Dedication**: Hz. Sahibul Sayf Sheykh Abdul Kerim QS
- **Purpose**: Educational reference for Islamic Divine Names (Asmaul Husna)

## Sources

- Original site content from Internet Archive Wayback Machine
- Qur'anic translations and Islamic references from original pages
- Divine Names and meanings from traditional Islamic sources

## Deployment

This is a static HTML/CSS/JavaScript application. To deploy:

1. **GitHub Pages**: Push to repository and enable Pages in settings
2. **Web Server**: Copy contents to web server directory
3. **Local**: Open `index.html` directly in browser

## Future Enhancements

Potential improvements for further development:
- Add audio recitation of names
- PDF export functionality
- Database integration for user preferences
- Multi-language support
- Mobile app versions

## License

This restoration preserves the original website content for educational purposes. The original website was dedicated to Islamic education and the knowledge of Divine Names.

## Credits

- **Original Website**: asmaulhusna.in team
- **Archive Source**: Internet Archive Wayback Machine
- **Restoration**: Modern restoration of archived content

---

**Note**: This is a restoration of archived content for educational purposes. All information about the 99 Divine Names of Allah comes from traditional Islamic sources and the original website.
