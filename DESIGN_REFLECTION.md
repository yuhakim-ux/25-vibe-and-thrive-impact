# Design Reflection: AI-Powered Salesforce Donor List Prototype

*A comprehensive guide to building interactive Salesforce Lightning prototypes with AI assistance*

---

## 🎯 Project Overview

We successfully built an interactive Salesforce donor management prototype enhanced with AI-powered features, demonstrating how modern design tools can accelerate complex UI development from concept to working code.

**Final Result**: Functional Lightning Web Component with 100+ donor records, AI-powered sorting/filtering, Agentforce integration, and intelligent email drafting capabilities.

**Live Demo Ready**: Instant `npm run dev` deployment

---

## 🚀 High-Level Approach & Step-by-Step Guide

### **Phase 0: Pre-Vibe Steps**
1. **Define the Vision**
   - Define the essence of what the prototype should accomplish
      - In our case, enabling users to quickly act on donor insights via AI-powered sorting and filtering in the Salesforce list view
   - Write a mini-PRD, outlining the prototype we want to build
  
2. **Map the High-Level Interaction Flow**
   - Brainstorming the userflow that shapes the prototype’s scope from entry point to completion
     (eg.)
      - User clicks AI sprinkle icon in list view header
      - Popover appears with AI suggestions (sort/filter)
      - Selecting an option triggers preview state with blue border + blurred background
      - User can refine list via Ask popover and chained actions
      - User exits preview to return to default list view

3. **Detail the Key Feature/Specs**
   - Break down each core interaction into clear visual and functional requirements
     (eg.)
      - Trigger: What user action starts it
      - State changes: What updates in the UI
      - Visuals: Reference exact Figma spacing, typography, and color tokens
      - Functionality: How sorting, filtering, and follow-up actions work

### **Phase 1: Foundation & Framework Setup**
1. **Environment Preparation**
   - Started with LWC-SLDS starter template
   - Configured Lightning Web Runtime (LWR) development environment
   - Established proper SLDS compliance hierarchy

2. **Established build rules for Cursor**
   - Prioritized Lightning Base Components over custom implementations
   - Followed SLDS utility classes → styling hooks → custom CSS hierarchy
   - Ensured WCAG 2.1 accessibility compliance throughout

### **Phase 2: Core UI Implementation**
3. **Data Architecture**
   - Created realistic donor data structure (100+ records)
   - Implemented dynamic data generation with fundraising metrics
   - Built responsive Lightning datatable with 8 columns

4. **Navigation & Layout**
   - Implemented full Salesforce Lightning header structure
   - Created responsive navigation with proper tab indicators
   - Applied consistent spacing and visual hierarchy

### **Phase 3: AI-Powered Features**
5. **Intelligent Sorting & Filtering**
   - Built AI assistant floating button with custom SVG integration
   - Implemented contextual popover with sorting options
   - Created preview mode with background blur effects

6. **Agentforce Integration**
   - Developed conversational chat interface
   - Added typing animations and realistic AI responses
   - Implemented contextual recommendations based on donor data

### **Phase 4: Advanced Interactions**
7. **Email Drafting System**
   - Created modal with personalized email templates
   - Built refinement tools with tone adjustment options
   - Implemented custom prompting capabilities

8. **Polish & Refinement**
   - Fine-tuned visual alignment and spacing
   - Resolved complex CSS layering issues
   - Fixed interaction edge cases and user experience flows

---

## 💬 Prompt Strategy & Breakdown

### **Effective Prompting Techniques**

**1. Context-Rich Initial Prompt**
```
You are building an interactive prototype of a Salesforce donor list page 
enhanced with AI-powered sorting and filtering tailored for non-profit 
fundraisers. Follow these rules for implementation:
1. Primary styling: Use Salesforce Lightning Design System (SLDS)
2. Framework priority: First, use Lightning Web Components (LWC)
3. Figma design is the primary visual reference
```

**2. Iterative Refinement Pattern**
- Start with broad requirements, then drill down to specifics
- Reference Figma designs consistently for visual accuracy
- Use precise measurements and spacing values (e.g., "16px padding")

**3. Technical Specificity**
- Specify exact SLDS components and utility classes
- Reference accessibility requirements explicitly
- Call out browser compatibility and responsive behavior

### **Prompt Categories That Worked Well**

- **Provide Context About**: User Requirements: "End users are [jobperformer: nonprofit fundraiser], who would use this tool to [JTBD]"
- **Timeline/Priority**: "This is for a demo tomorrow, focus on core functionality first"
- **Visual Alignment**: "Match the Figma design exactly with proper spacing"
- **Exact Requirements**: Instead of "make it look good" → "use 16px padding, #3B82F6 blue, and Roboto font"
- **Interaction Details**: "When X is clicked, Y should happen with Z visual feedback"
- **Iterative Development**: "Start with a simple version, then enhance it step by step"
- **Technical Implementation**: "Use Lightning Base Components first, then SLDS utilities"
- **Error Resolution**: "Fix the [specific issue] while maintaining [specific requirement]"
- **Success Criteria**: Instead of "optimize performance" → "reduce initial load time to under 2 seconds"

---

## 🎨 Design Strategy & Best Practices

### **SLDS Compliance Hierarchy**
1. **Lightning Base Components** (e.g., `lightning-datatable`, `lightning-button`)
2. **SLDS Utility Classes** (e.g., `slds-p-around_medium`, `slds-grid`)
3. **Global Styling Hooks** (e.g., `--slds-g-color-surface-1`)
4. **Custom CSS** (only as last resort)

### **Component Architecture**
- **Modular Design**: Break complex UIs into reusable components
- **Progressive Enhancement**: Start with basic functionality, add advanced features
- **State Management**: Use `@track` properties for reactive data binding
- **Event Handling**: Implement proper keyboard navigation and accessibility

### **Visual Fidelity Strategy**
- **Pixel-Perfect Implementation**: Match Figma designs exactly
- **Custom SVG Integration**: Use provided assets for brand consistency
- **Responsive Design**: Test at multiple breakpoints
- **Animation & Transitions**: Add subtle interactions for premium feel

---

## 🔧 Technical Implementation Insights

### **Lightning Web Components Best Practices**
- Always prefer existing Lightning Base Components
- Use proper event handling (`onclick`, `oninput`, `onkeydown`)
- Implement accessibility attributes (`aria-label`, `role`, `tabindex`)
- Follow Shadow DOM styling patterns

### **SLDS Integration Techniques**
- Use semantic styling hooks for theming
- Apply utility classes for layout and spacing
- Override styles only through approved methods
- Test with SLDS linter for compliance

### **Advanced Features Implementation**
- **Chat Interface**: Real-time typing animations with message history
- **Email Drafting**: Modal with editable templates and refinement tools
- **Preview States**: Background blur with selective focus areas

---

## 😅 Challenges & Troubleshooting

### **Common Issues Encountered**

**1. Development Server Stability**
- **Problem**: Port conflicts and server crashes
- **Solution**: Implemented robust restart procedures with port cleaning
- **Prevention**: Use process monitoring and graceful shutdown handling

**2. CSS Styling Conflicts**
- **Problem**: SLDS overrides not applying correctly
- **Solution**: Used `!important` strategically and targeted global stylesheets
- **Learning**: Shadow DOM requires specific CSS targeting techniques

**3. Form Input State Management**
- **Problem**: Textarea not clearing after message send
- **Solution**: Combined reactive property updates with direct DOM manipulation
- **Key Insight**: LWC two-way binding can have timing issues with textareas

**4. Complex Visual Effects**
- **Problem**: Background blur affecting wrong elements
- **Solution**: Careful z-index management and selective element targeting
- **Strategy**: Test visual effects in isolation before integration

### **Debugging Strategies**
- **Browser DevTools**: Essential for CSS debugging and performance analysis
- **LWC Inspector**: Helpful for component state and property inspection
- **Console Logging**: Strategic logging for interaction flow debugging
- **Hot Reload Testing**: Immediate feedback loop for rapid iteration

### **Performance Considerations**
- **Large Datasets**: Implemented efficient data filtering and sorting
- **DOM Manipulation**: Minimized direct DOM access, preferred reactive patterns
- **Asset Loading**: Optimized SVG integration and custom styling
- **Memory Management**: Proper cleanup of event listeners and timers

---

## 🔌 Figma MCP Integration

**1. Design Fidelity**
- Exact spacing and typography measurements
- Accurate color values and styling hooks
- Proper component hierarchy and structure

**2. Asset Integration**
- Seamless SVG extraction and optimization
- Automatic styling hook recommendations
- Component variant suggestions


### **Best Practices for MCP Usage**
- **Prepare Figma Files**: Ensure proper naming and organization
- **Use Design Tokens**: Leverage Figma variables for consistent styling
- **Document Interactions**: Annotate complex behaviors and states
- **Version Control**: Maintain design-code synchronization

---

## 🎓 Key Learnings & Recommendations

### **For Designers**
1. **Think in Components**: Design with Lightning Base Components in mind
2. **Document Interactions**: Specify hover states, focus behaviors, and error handling
3. **Consider Accessibility**: Design with screen readers and keyboard navigation
4. **Use Real Data**: Prototype with realistic content and edge cases

### **For Teams**
1. **Establish Patterns**: Create reusable component libraries
2. **Maintain Standards**: Regular SLDS compliance audits
3. **Share Knowledge**: Document troubleshooting solutions
4. **Iterate Quickly**: Use MCP for rapid prototyping and validation

---

## 🚀 Future Opportunities

### **Potential Enhancements**
1. **Backend Integration**: Connect to real Salesforce APIs
2. **Advanced AI Features**: Implement actual machine learning models
3. **Mobile Optimization**: Enhanced touch interactions and responsive design
4. **Performance Optimization**: Implement virtual scrolling for large datasets

### **Scalability Considerations**
- **Component Library**: Extract reusable components for other projects
- **Design System**: Extend SLDS with custom organizational patterns
- **Testing Framework**: Implement comprehensive unit and integration tests
- **Documentation**: Create interactive component documentation

---

*Document created: [Current Date]*  
*Project Repository: [25-vibe-and-thrive-impact](https://github.com/yuhakim-ux/25-vibe-and-thrive-impact)*  
*Live Demo: `npm run dev` → `http://localhost:3000`*
