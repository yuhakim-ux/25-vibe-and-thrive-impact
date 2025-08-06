import { LightningElement, track } from 'lwc';

const COLUMNS = [
    {
        label: 'Donor Name',
        fieldName: 'donorName',
        type: 'text',
        sortable: true,
        cellAttributes: { class: 'slds-text-color_default' }
    },
    {
        label: 'Donor Type',
        fieldName: 'donorType',
        type: 'text',
        sortable: true
    },
    {
        label: 'Last Gift Date',
        fieldName: 'lastGiftDate',
        type: 'date',
        sortable: true,
        typeAttributes: {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }
    },
    {
        label: 'Next Ask Amount',
        fieldName: 'nextAskAmount',
        type: 'currency',
        sortable: true,
        typeAttributes: { currencyCode: 'USD' }
    },
    {
        label: 'Engagement Score',
        fieldName: 'engagementScore',
        type: 'number',
        sortable: true
    },
    {
        label: 'Lifetime Giving',
        fieldName: 'lifetimeGiving',
        type: 'currency',
        sortable: true,
        typeAttributes: { currencyCode: 'USD' }
    },
    {
        label: 'Primary Contact',
        fieldName: 'primaryContact',
        type: 'text',
        sortable: true
    }
];

export default class DonorList extends LightningElement {
    @track donorData = [];
    @track originalDonorData = [];
    @track sortedBy = 'donorName';
    @track sortedDirection = 'asc';
    @track isPopoverOpen = false;
    @track showPreviewBar = false;
    @track isAskPopoverOpen = false;
    @track isFiltered = false;
    @track filterType = '';
    @track isAgentforcePanelOpen = false;
    @track chatMessages = [];
    @track chatInputValue = '';
    @track isEmailDraftsModalOpen = false;
    @track emailDrafts = [];
    @track isRefinementPopoverOpen = false;
    @track currentRefinementDraftId = '';
    @track refinementPrompt = '';
    columns = COLUMNS;

    get containerClass() {
        return `donor-list-container ${this.showPreviewBar ? 'preview-mode' : ''}`;
    }

    get isChatInputEmpty() {
        return !this.chatInputValue || this.chatInputValue.trim().length === 0;
    }

    get showRefinementPopover() {
        return this.isRefinementPopoverOpen && this.currentRefinementDraftId;
    }

    connectedCallback() {
        this.loadDonorData();
    }

    loadDonorData() {
        // Sample donor data for the prototype
        const data = [
            {
                id: '1',
                donorName: 'The Charitable Foundation',
                donorType: 'Family Foundation',
                lastGiftDate: new Date('2024-03-15'),
                nextAskAmount: 75000,
                engagementScore: 88,
                lifetimeGiving: 450000,
                primaryContact: 'Eleanor Vance',
                preferredContactMethod: 'Email'
            },
            {
                id: '2',
                donorName: 'John & Jane Smith Family',
                donorType: 'Individual',
                lastGiftDate: new Date('2024-02-20'),
                nextAskAmount: 5000,
                engagementScore: 72,
                lifetimeGiving: 25000,
                primaryContact: 'John Smith',
                preferredContactMethod: 'In-person'
            },
            {
                id: '3',
                donorName: 'Innovate Corp.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2024-01-10'),
                nextAskAmount: 150000,
                engagementScore: 95,
                lifetimeGiving: 1200000,
                primaryContact: 'Marcus Holloway',
                preferredContactMethod: 'Phone'
            },
            {
                id: '4',
                donorName: 'Hopewell Trust',
                donorType: 'Trust',
                lastGiftDate: new Date('2023-12-05'),
                nextAskAmount: 60000,
                engagementScore: 65,
                lifetimeGiving: 275000,
                primaryContact: 'Susan Richards',
                preferredContactMethod: 'In-person'
            },
            {
                id: '5',
                donorName: 'Community Grocers Inc.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2024-03-01'),
                nextAskAmount: 25000,
                engagementScore: 81,
                lifetimeGiving: 150000,
                primaryContact: 'David Chen',
                preferredContactMethod: 'Email'
            },
            {
                id: '6',
                donorName: 'The Giving Tree Fund',
                donorType: 'Foundation',
                lastGiftDate: new Date('2023-11-18'),
                nextAskAmount: 100000,
                engagementScore: 92,
                lifetimeGiving: 850000,
                primaryContact: 'Olivia Martinez',
                preferredContactMethod: 'In-person'
            },
            {
                id: '7',
                donorName: 'Dr. Evelyn Reed',
                donorType: 'Individual',
                lastGiftDate: new Date('2024-02-05'),
                nextAskAmount: 10000,
                engagementScore: 78,
                lifetimeGiving: 85000,
                primaryContact: 'Evelyn Reed',
                preferredContactMethod: 'Phone'
            },
            {
                id: '8',
                donorName: 'Bright Futures Org',
                donorType: 'Non-Profit Partner',
                lastGiftDate: new Date('2023-10-22'),
                nextAskAmount: 35000,
                engagementScore: 60,
                lifetimeGiving: 120000,
                primaryContact: 'Liam Gallagher',
                preferredContactMethod: 'In-person'
            },
            {
                id: '9',
                donorName: 'The Harrison Estate',
                donorType: 'Trust',
                lastGiftDate: new Date('2023-09-15'),
                nextAskAmount: 250000,
                engagementScore: 98,
                lifetimeGiving: 2500000,
                primaryContact: 'Arthur Pendelton',
                preferredContactMethod: 'Email'
            },
            {
                id: '10',
                donorName: 'Global Solutions Ltd.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2024-01-28'),
                nextAskAmount: 125000,
                engagementScore: 85,
                lifetimeGiving: 950000,
                primaryContact: 'Fatima Rossi',
                preferredContactMethod: 'In-person'
            },
            {
                id: '11',
                donorName: 'Michael and Sarah Davis',
                donorType: 'Individual',
                lastGiftDate: new Date('2023-11-30'),
                nextAskAmount: 7500,
                engagementScore: 68,
                lifetimeGiving: 45000,
                primaryContact: 'Sarah Davis',
                preferredContactMethod: 'Phone'
            },
            {
                id: '12',
                donorName: 'Evergreen Foundation',
                donorType: 'Foundation',
                lastGiftDate: new Date('2023-08-11'),
                nextAskAmount: 200000,
                engagementScore: 96,
                lifetimeGiving: 1800000,
                primaryContact: 'Benjamin Carter',
                preferredContactMethod: 'In-person'
            },
            {
                id: '13',
                donorName: 'Local Heroes United',
                donorType: 'Non-Profit Partner',
                lastGiftDate: new Date('2024-02-14'),
                nextAskAmount: 15000,
                engagementScore: 75,
                lifetimeGiving: 60000,
                primaryContact: 'Chloe Kim',
                preferredContactMethod: 'Email'
            },
            {
                id: '14',
                donorName: 'The Peterson Family',
                donorType: 'Individual',
                lastGiftDate: new Date('2023-07-25'),
                nextAskAmount: 20000,
                engagementScore: 82,
                lifetimeGiving: 110000,
                primaryContact: 'James Peterson',
                preferredContactMethod: 'In-person'
            },
            {
                id: '15',
                donorName: 'Starlight Corporation',
                donorType: 'Corporation',
                lastGiftDate: new Date('2023-10-02'),
                nextAskAmount: 90000,
                engagementScore: 79,
                lifetimeGiving: 600000,
                primaryContact: 'Isabelle Moreau',
                preferredContactMethod: 'Phone'
            },
            {
                id: '16',
                donorName: 'The Renaissance Fund',
                donorType: 'Foundation',
                lastGiftDate: new Date('2024-03-10'),
                nextAskAmount: 300000,
                engagementScore: 99,
                lifetimeGiving: 3200000,
                primaryContact: 'Leonardo Vasari',
                preferredContactMethod: 'In-person'
            },
            {
                id: '17',
                donorName: 'Williams & Co.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2023-06-19'),
                nextAskAmount: 50000,
                engagementScore: 70,
                lifetimeGiving: 220000,
                primaryContact: 'Henry Williams',
                preferredContactMethod: 'Email'
            },
            {
                id: '18',
                donorName: 'Oceanic Preservation Society',
                donorType: 'Non-Profit Partner',
                lastGiftDate: new Date('2024-01-05'),
                nextAskAmount: 45000,
                engagementScore: 84,
                lifetimeGiving: 180000,
                primaryContact: 'Naomi Tanaka',
                preferredContactMethod: 'In-person'
            },
            {
                id: '19',
                donorName: 'The Griffin Trust',
                donorType: 'Trust',
                lastGiftDate: new Date('2023-05-12'),
                nextAskAmount: 175000,
                engagementScore: 91,
                lifetimeGiving: 1500000,
                primaryContact: 'Gideon Graves',
                preferredContactMethod: 'Email'
            }
        ];
        
        // Add additional donors to reach 100+ total
        for (let i = 20; i <= 105; i++) {
            const donorTypes = ['Individual', 'Corporation', 'Foundation', 'Trust', 'Family Foundation'];
            const contactMethods = ['Email', 'Phone', 'In-person', 'Mail'];
            const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn', 'Sage', 'River'];
            const lastNames = ['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee'];
            const orgNames = ['Tech Solutions', 'Global Partners', 'Community Trust', 'Innovation Fund', 'Future Foundation', 'Heritage Group', 'Pioneer Corp', 'Visionary Trust', 'Unity Foundation', 'Progress Partners'];
            
            const donorType = donorTypes[i % donorTypes.length];
            const isIndividual = donorType === 'Individual';
            const firstName = firstNames[i % firstNames.length];
            const lastName = lastNames[i % lastNames.length];
            const orgName = orgNames[i % orgNames.length];
            
            // For the first 30 additional donors (IDs 20-49), make some prefer in-person
            // This ensures we have enough in-person donors in the top upgrade potential group
            let contactMethod;
            if (i >= 20 && i <= 27) { // 8 donors with in-person preference for top upgrade potential
                contactMethod = 'In-person';
            } else {
                contactMethod = contactMethods[i % contactMethods.length];
            }
            
            data.push({
                id: i.toString(),
                donorName: isIndividual ? `${firstName} ${lastName}` : `${orgName} ${donorType}`,
                donorType: donorType,
                lastGiftDate: new Date(2023, (i % 12), (i % 28) + 1),
                nextAskAmount: Math.floor(Math.random() * 200000) + 5000,
                engagementScore: Math.floor(Math.random() * 40) + 60,
                lifetimeGiving: Math.floor(Math.random() * 500000) + 10000,
                primaryContact: isIndividual ? `${firstName} ${lastName}` : `${firstName} ${lastName}`,
                preferredContactMethod: contactMethod
            });
        }
        
        // Store original data and set current data
        this.originalDonorData = [...data];
        this.donorData = [...data];
    }

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        console.log('Selected rows:', selectedRows);
    }

    handleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.donorData];

        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.donorData = cloneData;
        this.sortedDirection = sortDirection;
        this.sortedBy = sortedBy;
    }

    sortBy(field, reverse) {
        const key = function (x) {
            return x[field];
        };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }

    handleAIAssistantClick() {
        this.isPopoverOpen = !this.isPopoverOpen;
    }

    handleAIAssistantKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleAIAssistantClick();
        }
    }

    handleAIPredictiveSort(event) {
        const sortType = event.target.dataset.sortType;
        console.log(`Placeholder: Sorting by "${sortType}"`);
        
        // Special handling for Upgrade Potential
        if (sortType === 'upgradePotential') {
            // Assign random upgradePotential score to each donor
            const donorsWithScore = this.originalDonorData.map(donor => ({
                ...donor,
                upgradePotential: Math.random()
            }));
            // Sort descending and take top 30
            const sorted = donorsWithScore.sort((a, b) => b.upgradePotential - a.upgradePotential).slice(0, 30);
            this.donorData = sorted;
            this.sortedBy = 'upgradePotential';
            this.sortedDirection = 'desc';
            this.showPreviewBar = true;
        } else {
            this.addPlaceholderData(sortType);
            this.handleSort({ detail: { fieldName: sortType, sortDirection: 'desc' } });
        }
        
        this.isPopoverOpen = false;
    }

    handleAIFilter() {
        console.log('Placeholder: Filtering by "Optimal Ask Range"');
        this.loadDonorData(); // Reset data first
        this.donorData = this.donorData.filter(donor => donor.lifetimeGiving > 100000 && donor.engagementScore > 80);
        this.isPopoverOpen = false;
    }

    addPlaceholderData(sortType) {
        if (this.donorData.length > 0 && !this.donorData[0].hasOwnProperty(sortType)) {
            this.donorData = this.donorData.map(donor => ({
                ...donor,
                [sortType]: Math.random()
            }));
        }
    }

    handlePreviewClose() {
        // Reset to original state
        this.showPreviewBar = false;
        this.donorData = [...this.originalDonorData];
        this.sortedBy = 'donorName';
        this.sortedDirection = 'asc';
        this.isFiltered = false;
        this.filterType = '';
        this.isAskPopoverOpen = false;
    }

    handlePreviewAsk() {
        this.isAskPopoverOpen = !this.isAskPopoverOpen;
    }

    handleAskPopoverClose() {
        this.isAskPopoverOpen = false;
    }

    handleFilterInPerson() {
        // Filter donors to only show those who prefer in-person contact
        const filteredDonors = this.donorData.filter(donor => 
            donor.preferredContactMethod === 'In-person'
        );
        
        this.donorData = filteredDonors;
        this.isFiltered = true;
        this.filterType = 'in-person';
        this.isAskPopoverOpen = false;
        
        console.log('Filtered to in-person preferred donors:', filteredDonors.length, 'donors');
    }

    handleInviteToEvent() {
        console.log('Invite All to Exclusive Event action triggered');
        this.isAskPopoverOpen = false;
        this.openAgentforcePanel();
    }

    handleAssignToMGO() {
        console.log('Assign to Major Gift Officer action triggered');
        this.isAskPopoverOpen = false;
        // Placeholder for MGO assignment functionality
    }

    handlePreviewSave() {
        console.log('Save action triggered for upgrade potential sort');
        // Placeholder for save functionality
    }

    // Agentforce Panel Methods
    openAgentforcePanel() {
        this.isAgentforcePanelOpen = true;
        this.chatMessages = [];
        
        // Add initial typing message
        const typingMessage = {
            id: 'typing-1',
            content: '',
            isAI: true,
            isTyping: true,
            cssClass: 'chat-message ai-message'
        };
        
        this.chatMessages = [...this.chatMessages, typingMessage];
        
        // Simulate typing delay and show the actual message
        setTimeout(() => {
            this.showAIMessage();
        }, 2000); // 2 second typing animation
    }

    showAIMessage() {
        const aiMessage = {
            id: 'ai-message-1',
            content: `I found a few upcoming Exclusive Events that the 8 donors might be interested in, based on their current locations and preference for in-person experiences.<br/><br/>Would you like me to draft email invitations for them accordingly?<br/><br/>1. <a href="#">[Gala Night for Community Impact]</a> — October 12, 2024 – San Francisco, CA<br/>2. <a href="#">[Innovators' Roundtable: Shaping the Future]</a> — October 25, 2024 – Palo Alto, CA<br/>3. <a href="#">[Private Art Exhibit & Reception]</a> — November 3, 2024 – New York, NY<br/>4. <a href="#">[Sustainable Futures Summit]</a> — November 7, 2024 – Seattle, WA`,
            isAI: true,
            isTyping: false,
            buttonLabel: 'View More Events',
            cssClass: 'chat-message ai-message'
        };
        
        // Remove typing message and add actual message
        this.chatMessages = [aiMessage];
    }

    handleAgentforceClose() {
        this.isAgentforcePanelOpen = false;
        this.chatMessages = [];
        this.chatInputValue = '';
    }

    handleChatInputChange(event) {
        this.chatInputValue = event.target.value;
    }

    handleChatInputKeydown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.handleSendMessage();
        }
    }

    handleSendMessage() {
        if (this.isChatInputEmpty) {
            return;
        }

        const userMessage = {
            id: `user-message-${Date.now()}`,
            content: this.chatInputValue,
            isAI: false,
            isTyping: false,
            cssClass: 'chat-message user-message'
        };

        this.chatMessages = [...this.chatMessages, userMessage];
        
        // Check if user said "Sounds good." and respond accordingly
        if (this.chatInputValue.toLowerCase().trim() === 'sounds good.' || 
            this.chatInputValue.toLowerCase().trim() === 'sounds good') {
            this.handleSoundsGoodResponse();
        }

        this.chatInputValue = '';
    }

    handleSoundsGoodResponse() {
        // Add typing indicator
        const typingMessage = {
            id: `typing-${Date.now()}`,
            content: '',
            isAI: true,
            isTyping: true,
            cssClass: 'chat-message ai-message'
        };
        
        this.chatMessages = [...this.chatMessages, typingMessage];
        
        // Show response after typing delay
        setTimeout(() => {
            const aiResponse = {
                id: `ai-response-${Date.now()}`,
                content: `Great! I've drafted personalized emails for all 8 donors, including their names and recent interests based on their past activities.<br/><br/>Is there anything else I can help with?`,
                isAI: true,
                isTyping: false,
                buttonLabel: 'View Draft Emails',
                cssClass: 'chat-message ai-message'
            };
            
            // Remove typing message and add response
            const messagesWithoutTyping = this.chatMessages.filter(msg => !msg.isTyping);
            this.chatMessages = [...messagesWithoutTyping, aiResponse];
        }, 1500);
    }

    // Email Drafts Modal Methods
    handleViewDraftEmails(event) {
        const buttonType = event.target.dataset.buttonType;
        
        if (buttonType === 'View Draft Emails') {
            this.generateEmailDrafts();
            this.isEmailDraftsModalOpen = true;
        } else {
            // Handle other button types (like "View More Events")
            console.log('Button clicked:', buttonType);
        }
    }

    handleEmailDraftsModalClose() {
        this.isEmailDraftsModalOpen = false;
        this.emailDrafts = [];
    }

    generateEmailDrafts() {
        // Get the 8 in-person donors from current filtered data
        const inPersonDonors = this.donorData.filter(donor => 
            donor.preferredContactMethod === 'In-person'
        ).slice(0, 8);

        this.emailDrafts = inPersonDonors.map((donor, index) => {
            const events = [
                {
                    name: 'Gala Night for Community Impact',
                    date: 'October 12, 2024',
                    location: 'San Francisco, CA'
                },
                {
                    name: 'Innovators\' Roundtable: Shaping the Future',
                    date: 'October 25, 2024',
                    location: 'Palo Alto, CA'
                },
                {
                    name: 'Private Art Exhibit & Reception',
                    date: 'November 3, 2024',
                    location: 'New York, NY'
                },
                {
                    name: 'Sustainable Futures Summit',
                    date: 'November 7, 2024',
                    location: 'Seattle, WA'
                }
            ];

            // Select primary event based on donor location/preference
            const primaryEvent = events[index % events.length];
            const secondaryEvent = events[(index + 1) % events.length];

            return {
                id: donor.id,
                donorName: donor.donorName,
                donorType: donor.donorType,
                lifetimeGiving: donor.lifetimeGiving,
                lastGiftDate: donor.lastGiftDate,
                engagementScore: donor.engagementScore,
                subject: `Exclusive Invitation: ${primaryEvent.name}`,
                emailBody: this.generatePersonalizedEmailBody(donor, primaryEvent, secondaryEvent),
                aiExplanation: this.generateAIExplanation(donor, primaryEvent),
                primaryEvent: primaryEvent,
                secondaryEvent: secondaryEvent,
                isEdited: false
            };
        });
    }

    generatePersonalizedEmailBody(donor, primaryEvent, secondaryEvent) {
        const greeting = donor.donorType === 'Individual' ? 
            `Dear ${donor.donorName}` : 
            `Dear ${donor.primaryContact}`;
        
        const giftHistory = donor.lifetimeGiving > 500000 ? 'major supporter' : 'valued partner';
        const engagementLevel = donor.engagementScore > 85 ? 'deeply engaged' : 'committed';

        return `${greeting},

As one of our ${giftHistory} and a ${engagementLevel} member of our community, I wanted to personally invite you to an exclusive event that I believe will be of great interest to you.

${primaryEvent.name}
${primaryEvent.date} | ${primaryEvent.location}

This intimate gathering brings together thought leaders, innovators, and changemakers like yourself to discuss the future of our shared mission. Given your preference for in-person experiences and your track record of meaningful engagement, I believe this event would provide valuable networking opportunities and insights aligned with your interests.

We have limited seating for this exclusive event, and I would be honored to reserve a spot for you. If the date doesn't work, we also have ${secondaryEvent.name} on ${secondaryEvent.date} in ${secondaryEvent.location}.

Would you be available to join us? I'd be happy to discuss the details personally at your convenience.

With gratitude,
[Your Name]
Development Director

P.S. Light refreshments and networking reception will follow the main presentation.`;
    }

    generateAIExplanation(donor, primaryEvent) {
        const explanations = [];
        
        if (donor.preferredContactMethod === 'In-person') {
            explanations.push('• **In-person preference**: Highlighted exclusive, intimate nature of the event since this donor prefers face-to-face interactions.');
        }
        
        if (donor.lifetimeGiving > 500000) {
            explanations.push('• **Major donor recognition**: Addressed as "major supporter" due to lifetime giving of $' + donor.lifetimeGiving.toLocaleString() + '.');
        } else {
            explanations.push('• **Valued partner tone**: Used "valued partner" language appropriate for their $' + donor.lifetimeGiving.toLocaleString() + ' giving history.');
        }
        
        if (donor.engagementScore > 85) {
            explanations.push('• **High engagement**: Described as "deeply engaged" reflecting their ' + donor.engagementScore + ' engagement score.');
        } else {
            explanations.push('• **Committed supporter**: Acknowledged as "committed" member based on their ' + donor.engagementScore + ' engagement score.');
        }
        
        explanations.push('• **Event selection**: Chose ' + primaryEvent.name + ' in ' + primaryEvent.location + ' based on geographic proximity and donor profile.');
        
        explanations.push('• **Personal touch**: Included personal signature and phone call offer to maintain relationship warmth.');
        
        return explanations.join('\n');
    }

    handleEmailEdit(event) {
        const draftId = event.target.dataset.draftId;
        const newContent = event.target.value;
        
        this.emailDrafts = this.emailDrafts.map(draft => {
            if (draft.id === draftId) {
                return { ...draft, emailBody: newContent, isEdited: true };
            }
            return draft;
        });
    }

    handleSendEmail(event) {
        const draftId = event.target.dataset.draftId;
        const draft = this.emailDrafts.find(d => d.id === draftId);
        
        if (draft) {
            // Simulate sending email
            console.log('Sending email to:', draft.donorName);
            console.log('Subject:', draft.subject);
            console.log('Body:', draft.emailBody);
            
            // Show success message (in a real app, this would be a toast)
            alert(`Email sent successfully to ${draft.donorName}!`);
        }
    }

    handleSendAllEmails() {
        // Simulate sending all emails
        this.emailDrafts.forEach(draft => {
            console.log('Sending email to:', draft.donorName);
            console.log('Subject:', draft.subject);
            console.log('Body:', draft.emailBody);
        });
        
        // Show success message
        alert(`All ${this.emailDrafts.length} emails sent successfully!`);
        
        // Close modal
        this.handleEmailDraftsModalClose();
    }

    // Email Refinement Methods
    handleOpenRefinement(event) {
        const draftId = event.target.dataset.draftId;
        this.currentRefinementDraftId = draftId;
        this.isRefinementPopoverOpen = true;
        this.refinementPrompt = '';
        
        // Add the draft ID to each email draft for conditional rendering
        this.emailDrafts = this.emailDrafts.map(draft => ({
            ...draft,
            showPopover: draft.id === draftId
        }));
    }

    handleCloseRefinement() {
        this.isRefinementPopoverOpen = false;
        this.currentRefinementDraftId = '';
        this.refinementPrompt = '';
        
        // Clear the showPopover flag from all drafts
        this.emailDrafts = this.emailDrafts.map(draft => ({
            ...draft,
            showPopover: false
        }));
    }

    handleRefinementPromptChange(event) {
        this.refinementPrompt = event.target.value;
    }

    handlePromptKeyDown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (this.refinementPrompt.trim()) {
                this.handleCustomRefinement();
            }
        }
    }

    handleRefinementOption(event) {
        const option = event.target.dataset.option;
        const draftId = this.currentRefinementDraftId;
        
        this.refineEmail(draftId, option);
        this.handleCloseRefinement();
    }

    handleCustomRefinement() {
        if (this.refinementPrompt.trim()) {
            const draftId = this.currentRefinementDraftId;
            this.refineEmail(draftId, 'custom', this.refinementPrompt);
            this.handleCloseRefinement();
        }
    }

    refineEmail(draftId, option, customPrompt = '') {
        this.emailDrafts = this.emailDrafts.map(draft => {
            if (draft.id === draftId) {
                let refinedBody = draft.emailBody;
                
                switch (option) {
                    case 'rephrase':
                        refinedBody = this.rephraseEmail(draft.emailBody);
                        break;
                    case 'shorten':
                        refinedBody = this.shortenEmail(draft.emailBody);
                        break;
                    case 'elaborate':
                        refinedBody = this.elaborateEmail(draft.emailBody);
                        break;
                    case 'formal':
                        refinedBody = this.makeFormalEmail(draft.emailBody);
                        break;
                    case 'casual':
                        refinedBody = this.makeCasualEmail(draft.emailBody);
                        break;
                    case 'bulletize':
                        refinedBody = this.bulletizeEmail(draft.emailBody);
                        break;
                    case 'custom':
                        refinedBody = this.customRefineEmail(draft.emailBody, customPrompt);
                        break;
                }
                
                return { ...draft, emailBody: refinedBody, isEdited: true };
            }
            return draft;
        });
    }

    rephraseEmail(originalBody) {
        // Simulate AI rephrasing
        return originalBody.replace(/I wanted to personally invite you/g, 'I would be delighted to extend an invitation to you')
                          .replace(/This intimate gathering/g, 'This exclusive assembly')
                          .replace(/Would you be available/g, 'I hope you might consider joining us');
    }

    shortenEmail(originalBody) {
        // Simulate AI shortening
        const lines = originalBody.split('\n').filter(line => line.trim() !== '');
        const shortened = lines.slice(0, Math.ceil(lines.length * 0.7)); // Keep 70% of lines
        return shortened.join('\n');
    }

    elaborateEmail(originalBody) {
        // Simulate AI elaboration
        return originalBody.replace(/This intimate gathering brings together thought leaders/g, 
            'This carefully curated intimate gathering brings together distinguished thought leaders, visionary innovators, and influential changemakers from across our community')
            .replace(/Given your preference for in-person experiences/g, 
            'Given your demonstrated preference for meaningful in-person experiences and your history of thoughtful engagement with our mission');
    }

    makeFormalEmail(originalBody) {
        // Simulate making more formal
        return originalBody.replace(/I wanted to/g, 'I would be honored to')
                          .replace(/I'd be happy/g, 'I would be pleased')
                          .replace(/Would you be available/g, 'Would you do us the honor of joining us');
    }

    makeCasualEmail(originalBody) {
        // Simulate making more casual
        return originalBody.replace(/I wanted to personally invite you/g, 'I\'d love to invite you')
                          .replace(/This intimate gathering/g, 'This special get-together')
                          .replace(/I would be honored/g, 'I\'d be thrilled');
    }

    bulletizeEmail(originalBody) {
        // Convert key points to bullets
        const sections = originalBody.split('\n\n');
        let bulletized = sections[0] + '\n\n'; // Keep greeting
        
        bulletized += '• Exclusive event bringing together community leaders\n';
        bulletized += '• Limited seating for intimate networking\n';
        bulletized += '• Aligned with your interests and giving history\n';
        bulletized += '• Alternative dates available if needed\n\n';
        
        bulletized += sections[sections.length - 1]; // Keep closing
        return bulletized;
    }



    customRefineEmail(originalBody, prompt) {
        // Simulate custom AI refinement based on prompt
        console.log('Custom refinement prompt:', prompt);
        return `${originalBody}\n\n[Email refined based on: "${prompt}"]`;
    }
}