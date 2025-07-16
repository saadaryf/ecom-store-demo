# Al Imran Electronics – E-commerce Store Demo

A modern, responsive e-commerce website demo built with **Next.js 14 (App Router)** for Al Imran Electronics. This demo showcases a professional electronics and home appliances store with a clean, user-friendly interface.

## 🚀 Features

### Core Functionality
- **Home Page** with hero banner and featured products
- **Product Listing** with filtering and sorting options
- **Product Detail Pages** with comprehensive product information
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with smooth animations and transitions

### Pages & Components
- ✅ Home page with featured products
- ✅ Products listing with filters
- ✅ Individual product detail pages
- ✅ About page with company information
- ✅ Contact page with form
- ✅ Header with navigation and cart
- ✅ Footer with company links
- ✅ Mobile-responsive navigation

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Static JSON** data (no backend required)
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with Next.js best practices

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data:** Static JSON files
- **Deployment:** Ready for Vercel/Netlify

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd al-imran-ecom-store-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── products/          # Products listing
│   ├── product/[slug]/    # Product detail pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── data/                  # Static data
│   └── products.json      # Product data
└── types/                 # TypeScript types
    └── product.ts         # Product interface
```

## 🎨 Design Features

### Color Scheme
- **Primary:** Blue (#2563eb)
- **Secondary:** Gray tones
- **Accent:** Green for success states
- **Background:** Light gray (#f9fafb)

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700
- **Responsive:** Scales appropriately on all devices

### Components
- **Cards:** Product cards with hover effects
- **Buttons:** Consistent styling with hover states
- **Forms:** Clean, accessible form design
- **Navigation:** Mobile-first responsive navigation

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 320px - 767px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## 🔧 Customization

### Adding Products
Edit `src/data/products.json` to add or modify products:

```json
{
  "id": 7,
  "name": "Product Name",
  "slug": "product-slug",
  "price": 299.99,
  "originalPrice": 399.99,
  "category": "Category",
  "brand": "Brand",
  "rating": 4.5,
  "reviews": 100,
  "image": "/images/product.jpg",
  "images": ["/images/product.jpg"],
  "description": "Product description",
  "features": ["Feature 1", "Feature 2"],
  "specifications": {
    "Spec 1": "Value 1",
    "Spec 2": "Value 2"
  },
  "inStock": true,
  "stockCount": 10
}
```

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize colors in `tailwind.config.js`

### Content
- Update company information in components
- Modify contact details in Footer and Contact page
- Change hero content on the home page

## 🎯 Demo Features

### For Client Presentation
- **Professional Design:** Clean, modern interface
- **Product Showcase:** Comprehensive product displays
- **User Experience:** Intuitive navigation and interactions
- **Mobile Ready:** Perfect on all devices
- **Performance:** Fast loading and smooth interactions

### Interactive Elements
- Product filtering and sorting
- Add to cart functionality (UI only)
- Contact form with validation
- Responsive navigation
- Product image galleries

## 📞 Support

For questions or support regarding this demo:
- **Email:** info@alimran.com
- **Phone:** +1 (555) 123-4567

## 📄 License

This project is created as a demo for Al Imran Electronics. All rights reserved.

---

**Built with ❤️ using Next.js 14 and Tailwind CSS**
