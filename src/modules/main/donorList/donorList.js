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
    columns = COLUMNS;

    get containerClass() {
        return `donor-list-container ${this.showPreviewBar ? 'preview-mode' : ''}`;
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
                primaryContact: 'Eleanor Vance'
            },
            {
                id: '2',
                donorName: 'John & Jane Smith Family',
                donorType: 'Individual',
                lastGiftDate: new Date('2024-02-20'),
                nextAskAmount: 5000,
                engagementScore: 72,
                lifetimeGiving: 25000,
                primaryContact: 'John Smith'
            },
            {
                id: '3',
                donorName: 'Innovate Corp.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2024-01-10'),
                nextAskAmount: 150000,
                engagementScore: 95,
                lifetimeGiving: 1200000,
                primaryContact: 'Marcus Holloway'
            },
            {
                id: '4',
                donorName: 'Hopewell Trust',
                donorType: 'Trust',
                lastGiftDate: new Date('2023-12-05'),
                nextAskAmount: 60000,
                engagementScore: 65,
                lifetimeGiving: 275000,
                primaryContact: 'Susan Richards'
            },
            {
                id: '5',
                donorName: 'Community Grocers Inc.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2024-03-01'),
                nextAskAmount: 25000,
                engagementScore: 81,
                lifetimeGiving: 150000,
                primaryContact: 'David Chen'
            },
            {
                id: '6',
                donorName: 'The Giving Tree Fund',
                donorType: 'Foundation',
                lastGiftDate: new Date('2023-11-18'),
                nextAskAmount: 100000,
                engagementScore: 92,
                lifetimeGiving: 850000,
                primaryContact: 'Olivia Martinez'
            },
            {
                id: '7',
                donorName: 'Dr. Evelyn Reed',
                donorType: 'Individual',
                lastGiftDate: new Date('2024-02-05'),
                nextAskAmount: 10000,
                engagementScore: 78,
                lifetimeGiving: 85000,
                primaryContact: 'Evelyn Reed'
            },
            {
                id: '8',
                donorName: 'Bright Futures Org',
                donorType: 'Non-Profit Partner',
                lastGiftDate: new Date('2023-10-22'),
                nextAskAmount: 35000,
                engagementScore: 60,
                lifetimeGiving: 120000,
                primaryContact: 'Liam Gallagher'
            },
            {
                id: '9',
                donorName: 'The Harrison Estate',
                donorType: 'Trust',
                lastGiftDate: new Date('2023-09-15'),
                nextAskAmount: 250000,
                engagementScore: 98,
                lifetimeGiving: 2500000,
                primaryContact: 'Arthur Pendelton'
            },
            {
                id: '10',
                donorName: 'Global Solutions Ltd.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2024-01-28'),
                nextAskAmount: 125000,
                engagementScore: 85,
                lifetimeGiving: 950000,
                primaryContact: 'Fatima Rossi'
            },
            {
                id: '11',
                donorName: 'Michael and Sarah Davis',
                donorType: 'Individual',
                lastGiftDate: new Date('2023-11-30'),
                nextAskAmount: 7500,
                engagementScore: 68,
                lifetimeGiving: 45000,
                primaryContact: 'Sarah Davis'
            },
            {
                id: '12',
                donorName: 'Evergreen Foundation',
                donorType: 'Foundation',
                lastGiftDate: new Date('2023-08-11'),
                nextAskAmount: 200000,
                engagementScore: 96,
                lifetimeGiving: 1800000,
                primaryContact: 'Benjamin Carter'
            },
            {
                id: '13',
                donorName: 'Local Heroes United',
                donorType: 'Non-Profit Partner',
                lastGiftDate: new Date('2024-02-14'),
                nextAskAmount: 15000,
                engagementScore: 75,
                lifetimeGiving: 60000,
                primaryContact: 'Chloe Kim'
            },
            {
                id: '14',
                donorName: 'The Peterson Family',
                donorType: 'Individual',
                lastGiftDate: new Date('2023-07-25'),
                nextAskAmount: 20000,
                engagementScore: 82,
                lifetimeGiving: 110000,
                primaryContact: 'James Peterson'
            },
            {
                id: '15',
                donorName: 'Starlight Corporation',
                donorType: 'Corporation',
                lastGiftDate: new Date('2023-10-02'),
                nextAskAmount: 90000,
                engagementScore: 79,
                lifetimeGiving: 600000,
                primaryContact: 'Isabelle Moreau'
            },
            {
                id: '16',
                donorName: 'The Renaissance Fund',
                donorType: 'Foundation',
                lastGiftDate: new Date('2024-03-10'),
                nextAskAmount: 300000,
                engagementScore: 99,
                lifetimeGiving: 3200000,
                primaryContact: 'Leonardo Vasari'
            },
            {
                id: '17',
                donorName: 'Williams & Co.',
                donorType: 'Corporation',
                lastGiftDate: new Date('2023-06-19'),
                nextAskAmount: 50000,
                engagementScore: 70,
                lifetimeGiving: 220000,
                primaryContact: 'Henry Williams'
            },
            {
                id: '18',
                donorName: 'Oceanic Preservation Society',
                donorType: 'Non-Profit Partner',
                lastGiftDate: new Date('2024-01-05'),
                nextAskAmount: 45000,
                engagementScore: 84,
                lifetimeGiving: 180000,
                primaryContact: 'Naomi Tanaka'
            },
            {
                id: '19',
                donorName: 'The Griffin Trust',
                donorType: 'Trust',
                lastGiftDate: new Date('2023-05-12'),
                nextAskAmount: 175000,
                engagementScore: 91,
                lifetimeGiving: 1500000,
                primaryContact: 'Gideon Graves'
            }
        ];
        
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
            // Sort descending and take top 10
            const sorted = donorsWithScore.sort((a, b) => b.upgradePotential - a.upgradePotential).slice(0, 10);
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
    }

    handlePreviewAsk() {
        this.isAskPopoverOpen = !this.isAskPopoverOpen;
    }

    handleAskPopoverClose() {
        this.isAskPopoverOpen = false;
    }

    handlePreviewSave() {
        console.log('Save action triggered for upgrade potential sort');
        // Placeholder for save functionality
    }
}