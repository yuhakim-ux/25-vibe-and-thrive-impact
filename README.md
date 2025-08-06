# Salesforce Donor List Prototype with AI-Powered Features

An interactive prototype of a Salesforce donor management interface enhanced with AI-powered sorting, filtering, and engagement tools, specifically designed for non-profit fundraisers.

## 🎯 Project Overview

This prototype demonstrates a modern Salesforce Lightning experience that combines traditional donor management with cutting-edge AI capabilities to help non-profit organizations optimize their fundraising efforts.

### Key Features

- **📊 AI-Powered Donor Analytics**: Intelligent sorting by upgrade potential, churn risk, and likelihood to give again
- **🎯 Smart Filtering**: AI-driven filters for optimal ask ranges and donor preferences
- **🤖 Agentforce Integration**: Conversational AI assistant for fundraising guidance and automation
- **📧 Intelligent Email Drafting**: AI-generated personalized donor communications with refinement capabilities
- **📱 Responsive SLDS Design**: Pixel-perfect implementation following Salesforce Lightning Design System guidelines

## 🚀 Live Demo

The prototype includes:
- **100+ sample donors** with realistic fundraising data
- **Interactive AI assistant** with contextual recommendations
- **Dynamic data visualization** with real-time sorting and filtering
- **Email automation** with personalization and editing capabilities
- **Preview modes** with visual focus states and background blur effects

## 🛠 Technology Stack

- **Framework**: Lightning Web Components (LWC)
- **Design System**: Salesforce Lightning Design System (SLDS)
- **Build Tool**: Lightning Web Runtime (LWR)
- **Styling**: CSS with SLDS utility classes and custom styling hooks
- **Icons**: Custom SVG assets and SLDS icon library
- **Data**: Mock donor data with realistic fundraising metrics

## 🎨 Design Compliance

This prototype follows strict Salesforce design principles:

1. **Lightning Base Components First**: Prioritizes existing Lightning components before custom implementations
2. **SLDS Utility Classes**: Uses utility classes for layout and spacing
3. **Styling Hooks**: Implements custom styling through approved SLDS styling hooks
4. **Accessibility**: WCAG 2.1 compliant with proper ARIA attributes and keyboard navigation
5. **Responsive Design**: Mobile-first approach with breakpoint-aware layouts

## 📋 Feature Walkthrough

### AI-Powered Sorting & Filtering
- **Sort by Upgrade Potential**: Identifies top 30 donors with highest upgrade likelihood
- **Sort by Churn Risk**: Highlights donors requiring immediate attention
- **Filter by Ask Range**: AI-suggested optimal donation amounts
- **Contact Preference Filtering**: Segments donors by communication preferences

### Agentforce AI Assistant
- **Contextual Recommendations**: Provides tailored fundraising strategies
- **Event Planning**: Suggests exclusive events based on donor preferences
- **Email Automation**: Generates personalized communications
- **Real-time Chat**: Interactive conversation with typing animations

### Email Draft Management
- **Personalized Content**: AI-generated emails based on donor history and preferences
- **Refinement Tools**: One-click options for tone adjustment (formal/casual)
- **Custom Prompts**: Natural language refinement capabilities
- **Batch Operations**: Send individual or bulk email campaigns

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yuhakim-ux/salesforce-donor-list-prototype.git
   cd salesforce-donor-list-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run start

# Lint code
npm run lint
```

## 🧪 Interactive Demo Flow

1. **Start with Default View**: Browse 100+ donor records
2. **Try AI Sorting**: Click the AI assistant button → "Sort by Upgrade Potential"
3. **Explore Preview Mode**: Notice the blue border and background blur effects
4. **Use Ask Feature**: Click "Ask" button for follow-up AI actions
5. **Filter Further**: Try "Filter further to Prefers in-person" (8 donors)
6. **Open Agentforce**: Click "Invite All to Exclusive Event"
7. **Chat with AI**: Interact with the conversational assistant
8. **View Email Drafts**: Click "View Draft Emails" to see personalized communications
9. **Refine Content**: Use the edit icon to modify email tone and content

## 📁 Project Structure

```
src/
├── modules/
│   └── main/
│       ├── app/                 # Main application component
│       └── donorList/          # Core donor list component
│           ├── donorList.html  # Template with full UI
│           ├── donorList.js    # JavaScript logic and data
│           └── donorList.css   # Custom styling and overrides
├── assets/
│   ├── slds-plus.css          # Global SLDS overrides
│   └── *.svg                  # Custom icon assets
└── layouts/
    └── index.njk              # Base HTML layout
```

## 🎯 Key Components

- **Donor Data Table**: Lightning datatable with 8 columns of fundraising metrics
- **AI Assistant Float**: Contextual AI recommendations with popover interface
- **Preview Bar**: Dynamic notification bar with action buttons
- **Agentforce Panel**: Full-height chat interface with typing animations
- **Email Drafts Modal**: Comprehensive email management with editing capabilities

## 🔧 Customization

### Adding New Donors
Modify the `loadDonorData()` method in `donorList.js` to add or update donor records.

### Styling Modifications
Follow the SLDS hierarchy:
1. Use Lightning Base Components
2. Apply SLDS utility classes
3. Use styling hooks for custom properties
4. Avoid hard-coded values

### AI Features
AI responses and logic are currently simulated with realistic data. Integration points are clearly marked for future API connections.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a prototype project demonstrating Salesforce Lightning design patterns and AI integration concepts for non-profit fundraising use cases.

## 📄 License

This project is for demonstration purposes and follows Salesforce Lightning Design System guidelines.

---

**Built with ❤️ using Salesforce Lightning Web Components and Lightning Design System**