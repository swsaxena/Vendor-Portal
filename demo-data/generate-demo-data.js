const fs = require('fs');
const path = require('path');

// Demo data generation script for SAP BTP Vendor Management Portal
// This generates realistic mock data for demonstration purposes

// Helper functions
const generateId = () => Math.floor(Math.random() * 1000000);
const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Extended vendor data for realistic demonstrations
const vendorData = {
  categories: [
    { code: 'MANUFACTURING', name: 'Manufacturing', description: 'Manufacturing and production companies' },
    { code: 'IT_SERVICES', name: 'IT Services', description: 'Information technology service providers' },
    { code: 'LOGISTICS', name: 'Logistics', description: 'Transportation and logistics companies' },
    { code: 'CONSULTING', name: 'Consulting', description: 'Professional consulting services' },
    { code: 'CONSTRUCTION', name: 'Construction', description: 'Construction and engineering services' },
    { code: 'HEALTHCARE', name: 'Healthcare', description: 'Healthcare and medical services' },
    { code: 'FINANCE', name: 'Finance', description: 'Financial services and banking' },
    { code: 'RETAIL', name: 'Retail', description: 'Retail and consumer goods' },
    { code: 'ENERGY', name: 'Energy', description: 'Energy and utilities' },
    { code: 'TELECOMMUNICATIONS', name: 'Telecommunications', description: 'Telecom and communications' }
  ],

  regions: [
    { code: 'EMEA', name: 'EMEA', description: 'Europe Middle East and Africa' },
    { code: 'DACH', name: 'DACH', description: 'Germany Austria Switzerland' },
    { code: 'NORDICS', name: 'Nordics', description: 'Nordic countries' },
    { code: 'UKI', name: 'UK&I', description: 'United Kingdom and Ireland' },
    { code: 'AMERICAS', name: 'Americas', description: 'North and South America' },
    { code: 'APAC', name: 'APAC', description: 'Asia Pacific' }
  ],

  companies: [
    // Manufacturing
    { name: 'Acme Industries Ltd.', legalName: 'Acme Industries Limited', category: 'MANUFACTURING', region: 'EMEA', country: 'GB' },
    { name: 'Precision Manufacturing GmbH', legalName: 'Precision Manufacturing Gesellschaft mit beschränkter Haftung', category: 'MANUFACTURING', region: 'DACH', country: 'DE' },
    { name: 'Nordic Steel AB', legalName: 'Nordic Steel Aktiebolag', category: 'MANUFACTURING', region: 'NORDICS', country: 'SE' },
    { name: 'SunParts S.A.', legalName: 'SunParts Sociedad Anónima', category: 'MANUFACTURING', region: 'EMEA', country: 'ES' },
    { name: 'Alpine Components AG', legalName: 'Alpine Components Aktiengesellschaft', category: 'MANUFACTURING', region: 'DACH', country: 'CH' },
    
    // IT Services
    { name: 'GlobalTech GmbH', legalName: 'GlobalTech Gesellschaft mit beschränkter Haftung', category: 'IT_SERVICES', region: 'DACH', country: 'DE' },
    { name: 'TechWare Ltd.', legalName: 'TechWare Limited', category: 'IT_SERVICES', region: 'UKI', country: 'IE' },
    { name: 'Digital Solutions Inc.', legalName: 'Digital Solutions Incorporated', category: 'IT_SERVICES', region: 'AMERICAS', country: 'US' },
    { name: 'CloudFirst Technologies', legalName: 'CloudFirst Technologies Private Limited', category: 'IT_SERVICES', region: 'APAC', country: 'IN' },
    { name: 'DevOps Masters S.A.S.', legalName: 'DevOps Masters Société par Actions Simplifiée', category: 'IT_SERVICES', region: 'EMEA', country: 'FR' },
    
    // Logistics
    { name: 'NordLog AB', legalName: 'NordLog Aktiebolag', category: 'LOGISTICS', region: 'NORDICS', country: 'SE' },
    { name: 'Express Logistics Ltd.', legalName: 'Express Logistics Limited', category: 'LOGISTICS', region: 'UKI', country: 'GB' },
    { name: 'Global Shipping Corp.', legalName: 'Global Shipping Corporation', category: 'LOGISTICS', region: 'AMERICAS', country: 'US' },
    { name: 'EuroTransport GmbH', legalName: 'EuroTransport Gesellschaft mit beschränkter Haftung', category: 'LOGISTICS', region: 'DACH', country: 'AT' },
    { name: 'Asia Pacific Freight', legalName: 'Asia Pacific Freight Pte Ltd', category: 'LOGISTICS', region: 'APAC', country: 'SG' },
    
    // Consulting
    { name: 'Strategic Advisors Ltd.', legalName: 'Strategic Advisors Limited', category: 'CONSULTING', region: 'UKI', country: 'GB' },
    { name: 'Management Solutions GmbH', legalName: 'Management Solutions Gesellschaft mit beschränkter Haftung', category: 'CONSULTING', region: 'DACH', country: 'DE' },
    { name: 'Business Excellence Inc.', legalName: 'Business Excellence Incorporated', category: 'CONSULTING', region: 'AMERICAS', country: 'CA' },
    { name: 'Innovation Partners S.A.', legalName: 'Innovation Partners Société Anonyme', category: 'CONSULTING', region: 'EMEA', country: 'FR' },
    { name: 'Asia Consulting Group', legalName: 'Asia Consulting Group Limited', category: 'CONSULTING', region: 'APAC', country: 'HK' },
    
    // Construction
    { name: 'BuildTech Solutions', legalName: 'BuildTech Solutions Limited', category: 'CONSTRUCTION', region: 'UKI', country: 'GB' },
    { name: 'Concrete Experts GmbH', legalName: 'Concrete Experts Gesellschaft mit beschränkter Haftung', category: 'CONSTRUCTION', region: 'DACH', country: 'DE' },
    { name: 'Infrastructure Corp.', legalName: 'Infrastructure Corporation', category: 'CONSTRUCTION', region: 'AMERICAS', country: 'US' },
    { name: 'Nordic Construction AB', legalName: 'Nordic Construction Aktiebolag', category: 'CONSTRUCTION', region: 'NORDICS', country: 'NO' },
    { name: 'Metro Builders Pte', legalName: 'Metro Builders Private Limited', category: 'CONSTRUCTION', region: 'APAC', country: 'SG' }
  ],

  statuses: ['ACTIVE', 'PENDING', 'SUSPENDED', 'INACTIVE'],
  
  documentCategories: [
    { code: 'VAT_CERTIFICATE', name: 'VAT Certificate', required: true, formats: '.pdf,.jpg,.png', size: '5MB', validity: 365 },
    { code: 'BUSINESS_REGISTRATION', name: 'Business Registration', required: true, formats: '.pdf,.jpg,.png', size: '5MB', validity: null },
    { code: 'BANK_DETAILS', name: 'Bank Details', required: true, formats: '.pdf,.xlsx,.docx', size: '3MB', validity: null },
    { code: 'ISO_CERTIFICATE', name: 'ISO Certificates', required: false, formats: '.pdf', size: '5MB', validity: 1095 },
    { code: 'INSURANCE_POLICY', name: 'Insurance Policy', required: true, formats: '.pdf', size: '5MB', validity: 365 },
    { code: 'VENDOR_AGREEMENT', name: 'Vendor Agreement', required: true, formats: '.pdf', size: '10MB', validity: null },
    { code: 'FINANCIAL_STATEMENTS', name: 'Financial Statements', required: false, formats: '.pdf,.xlsx', size: '10MB', validity: 365 },
    { code: 'COMPLIANCE_CERTIFICATE', name: 'Compliance Certificate', required: false, formats: '.pdf', size: '5MB', validity: 730 }
  ],

  documentStatuses: ['PENDING', 'APPROVED', 'REJECTED'],
  
  purchaseOrderStatuses: ['DRAFT', 'APPROVED', 'RELEASED', 'IN_DELIVERY', 'COMPLETED', 'CANCELLED'],
  
  currencies: ['EUR', 'USD', 'GBP', 'CHF', 'SEK', 'NOK', 'CAD', 'SGD', 'INR', 'HKD']
};

// Generate comprehensive vendor data
const generateVendors = (count = 50) => {
  const vendors = [];
  const categories = vendorData.categories.map((cat, idx) => ({ ...cat, id: idx + 1 }));
  const regions = vendorData.regions.map((reg, idx) => ({ ...reg, id: idx + 1 }));
  
  for (let i = 0; i < count; i++) {
    const company = i < vendorData.companies.length ? 
      vendorData.companies[i] : 
      vendorData.companies[i % vendorData.companies.length];
    
    const category = categories.find(c => c.code === company.category);
    const region = regions.find(r => r.code === company.region);
    const createdDate = randomDate(new Date(2023, 0, 1), new Date(2024, 11, 31));
    const modifiedDate = randomDate(createdDate, new Date());
    
    const vendor = {
      ID: i + 1,
      vendorCode: `VND-2024-${String(i + 1).padStart(4, '0')}`,
      sapVendorId: `1000${String(i + 1).padStart(4, '0')}`,
      companyName: company.name,
      legalName: company.legalName,
      category_ID: category.id,
      region_ID: region.id,
      country_code: company.country,
      status: randomElement(vendorData.statuses),
      createdBy: 'system',
      createdAt: createdDate.toISOString(),
      modifiedAt: modifiedDate.toISOString()
    };
    
    vendors.push(vendor);
  }
  
  return vendors;
};

// Generate vendor addresses
const generateVendorAddresses = (vendors) => {
  const addresses = [];
  let id = 1;
  
  vendors.forEach(vendor => {
    // Primary address (billing)
    addresses.push({
      ID: id++,
      vendor_ID: vendor.ID,
      addressType: 'BILLING',
      street: `${randomNumber(1, 999)} Business Street`,
      city: getRandomCity(vendor.country_code),
      state: getRandomState(vendor.country_code),
      postalCode: getRandomPostalCode(vendor.country_code),
      country_code: vendor.country_code,
      isPrimary: true,
      createdAt: vendor.createdAt,
      modifiedAt: vendor.modifiedAt
    });
    
    // Secondary address (shipping) for some vendors
    if (Math.random() > 0.4) {
      addresses.push({
        ID: id++,
        vendor_ID: vendor.ID,
        addressType: 'SHIPPING',
        street: `${randomNumber(1, 999)} Warehouse Road`,
        city: getRandomCity(vendor.country_code),
        state: getRandomState(vendor.country_code),
        postalCode: getRandomPostalCode(vendor.country_code),
        country_code: vendor.country_code,
        isPrimary: false,
        createdAt: vendor.createdAt,
        modifiedAt: vendor.modifiedAt
      });
    }
  });
  
  return addresses;
};

// Generate vendor contacts
const generateVendorContacts = (vendors) => {
  const contacts = [];
  let id = 1;
  
  const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Lisa', 'Robert', 'Emily', 'James', 'Maria', 'Hans', 'Anna', 'Pierre', 'Sophie', 'Antonio', 'Carmen'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'García', 'Miller', 'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris'];
  const titles = ['CEO', 'CFO', 'Procurement Manager', 'Finance Director', 'Operations Manager', 'Sales Director', 'Project Manager', 'Business Development Manager'];
  
  vendors.forEach(vendor => {
    // Primary contact
    const firstName = randomElement(firstNames);
    const lastName = randomElement(lastNames);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${vendor.companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
    
    contacts.push({
      ID: id++,
      vendor_ID: vendor.ID,
      contactType: 'PRIMARY',
      firstName: firstName,
      lastName: lastName,
      title: randomElement(titles),
      email: email,
      phone: generatePhoneNumber(vendor.country_code),
      mobile: generatePhoneNumber(vendor.country_code),
      isPrimary: true,
      createdAt: vendor.createdAt,
      modifiedAt: vendor.modifiedAt
    });
    
    // Secondary contact for larger vendors
    if (Math.random() > 0.6) {
      const firstName2 = randomElement(firstNames);
      const lastName2 = randomElement(lastNames);
      const email2 = `${firstName2.toLowerCase()}.${lastName2.toLowerCase()}@${vendor.companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
      
      contacts.push({
        ID: id++,
        vendor_ID: vendor.ID,
        contactType: 'SECONDARY',
        firstName: firstName2,
        lastName: lastName2,
        title: randomElement(titles),
        email: email2,
        phone: generatePhoneNumber(vendor.country_code),
        mobile: generatePhoneNumber(vendor.country_code),
        isPrimary: false,
        createdAt: vendor.createdAt,
        modifiedAt: vendor.modifiedAt
      });
    }
  });
  
  return contacts;
};

// Generate documents
const generateDocuments = (vendors, count = 200) => {
  const documents = [];
  const categories = vendorData.documentCategories.map((cat, idx) => ({ ...cat, id: idx + 1 }));
  
  for (let i = 0; i < count; i++) {
    const vendor = randomElement(vendors);
    const category = randomElement(categories