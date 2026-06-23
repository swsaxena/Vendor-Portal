# Demo Data Generation for SAP BTP Vendor Management Portal

This directory contains scripts and tools to generate comprehensive demo data for demonstration purposes.

## 🎯 Overview

The demo data generator creates realistic, comprehensive datasets that showcase the full capabilities of the SAP BTP Vendor Management Portal. This data is designed to provide impressive demonstrations and thorough testing scenarios.

## 📊 Generated Data Sets

### Core Business Entities
- **100 Vendors** - Realistic companies across multiple categories and regions
- **150+ Addresses** - Primary and secondary addresses for all vendors
- **120+ Contacts** - Primary and secondary contacts with realistic details
- **300+ Documents** - Various document types with different approval states
- **150+ Purchase Orders** - Complete PO data with line items
- **200+ Activity Records** - Comprehensive activity feed

### Reference Data
- **10 Vendor Categories** - Manufacturing, IT Services, Logistics, Consulting, etc.
- **6 Geographic Regions** - EMEA, DACH, Nordics, UK&I, Americas, APAC
- **8 Document Categories** - VAT Certificate, Business Registration, Bank Details, etc.
- **Email Templates** - 4 professional email templates
- **Onboarding Status** - Multi-stage workflow tracking

## 🚀 Usage

### Generate Demo Data
```bash
# Navigate to demo-data directory
cd demo-data

# Run the generator
node generate-demo-data.js
```

### Generated Files
The script creates the following CSV files in the `generated/` directory:

```
generated/
├── vendor.portal.db-VendorCategories.csv
├── vendor.portal.db-Regions.csv
├── vendor.portal.db-Vendors.csv
├── vendor.portal.db-VendorAddresses.csv
├── vendor.portal.db-VendorContacts.csv
├── vendor.portal.db-VendorOnboardingStatus.csv
├── vendor.portal.db-DocumentCategories.csv
├── vendor.portal.db-Documents.csv
├── vendor.portal.db-PurchaseOrders.csv
├── vendor.portal.db-PurchaseOrderItems.csv
├── vendor.portal.db-EmailQueue.csv
├── vendor.portal.db-ActivityFeed.csv
└── generation-summary.json
```

## 📈 Demo Statistics

### Vendor Distribution
- **Manufacturing**: ~25% (Industrial companies, component suppliers)
- **IT Services**: ~25% (Software vendors, technology providers)
- **Logistics**: ~20% (Transportation, shipping companies)
- **Consulting**: ~15% (Professional services, advisors)
- **Construction**: ~15% (Building, engineering services)

### Geographic Coverage
- **EMEA**: ~40% (UK, Germany, France, Spain, Italy)
- **DACH**: ~25% (Germany, Austria, Switzerland)
- **Nordics**: ~15% (Sweden, Norway, Denmark, Finland)
- **UK&I**: ~10% (United Kingdom, Ireland)
- **Americas**: ~6% (US, Canada)
- **APAC**: ~4% (Singapore, Hong Kong, India)

### Document Status Distribution
- **Pending**: ~30% (90 documents awaiting review)
- **Approved**: ~60% (180 approved documents)
- **Rejected**: ~10% (30 rejected documents needing resubmission)

### Purchase Order Status
- **Released**: ~40% (Active orders in delivery)
- **Approved**: ~25% (Orders ready for release)
- **Completed**: ~20% (Delivered orders)
- **In Delivery**: ~10% (Orders being delivered)
- **Draft/Cancelled**: ~5% (Inactive orders)

## 🎨 Realistic Features

### Company Names
- Authentic company names with proper legal entities
- Region-appropriate naming conventions
- Industry-specific terminology

### Contact Information
- Realistic personal names for different regions
- Professional email addresses
- Proper phone number formats by country
- Appropriate job titles and roles

### Addresses
- Real city names and postal codes
- Country-specific address formats
- Separate billing and shipping addresses

### Financial Data
- Realistic purchase order values
- Multiple currencies (EUR, USD, GBP, CHF, etc.)
- Appropriate payment terms and credit limits

### Timeline Consistency
- Logical date progressions
- Realistic document upload to approval timelines
- Proper onboarding workflow sequences

## 🔧 Customization

### Adjust Data Volume
```javascript
// Modify these values in generate-demo-data.js
const vendors = generateVendors(100);        // Number of vendors
const documents = generateDocuments(vendors, 300);  // Number of documents  
const purchaseOrders = generatePurchaseOrders(vendors, 150); // Number of POs
```

### Add New Categories
```javascript
// Add to vendorData.categories array
{
  code: 'NEW_CATEGORY',
  name: 'New Category Name',
  description: 'Description of the new category'
}
```

### Modify Regional Distribution
```javascript
// Adjust company assignments in vendorData.companies array
{
  name: 'Company Name',
  category: 'MANUFACTURING',
  region: 'EMEA',
  country: 'GB'
}
```

## 📋 Data Quality Features

### Referential Integrity
- All foreign key relationships maintained
- Consistent vendor-document-contact associations
- Proper category and region assignments

### Business Logic Compliance
- Document expiry dates based on category validity periods
- Onboarding progress calculations based on document status
- Realistic approval workflows and timelines

### Internationalization
- Multi-language company names
- Region-appropriate contact details
- Currency and format localization

## 🎭 Demo Scenarios

The generated data supports various demonstration scenarios:

### 1. Vendor Onboarding Journey
- New vendor registration
- Document upload and approval process
- Multi-stage workflow progression
- Email notifications and communications

### 2. Document Management Workflow
- Bulk document review and approval
- Rejection and resubmission cycles
- Compliance tracking and expiry management
- Category-specific validation rules

### 3. Purchase Order Processing
- PO creation and distribution
- Vendor notification workflows
- Status tracking and updates
- Financial reporting and analytics

### 4. Analytics and Reporting
- Vendor performance dashboards
- Regional and category analysis
- Document processing metrics
- Onboarding conversion rates

### 5. System Integration
- SAP ERP synchronization scenarios
- Email service integration
- Real-time activity tracking
- Audit trail demonstration

## 🚀 Loading Demo Data

### Into CAP Service
```bash
# Copy generated files to CAP data directory
cp generated/vendor.portal.db-*.csv ../backend/