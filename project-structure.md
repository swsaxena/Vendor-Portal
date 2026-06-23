# SAP BTP Vendor Portal - Project Structure

## 📁 Complete Project Structure

```
BTP Vendor Portal/
├── 📋 README.md                                    # Project documentation
├── 📦 package.json                                # Root package.json with workspaces
├── 🚫 .gitignore                                  # Git ignore rules
├── 📊 project-structure.md                        # This file
│
├── 📁 mock-data/                                   # Mock data for development
│   ├── sap-integration-mock-data.json
│   ├── email-service-mock-data.json
│   ├── document-management-mock-data.json
│   ├── authentication-mock-data.json
│   ├── dashboard-widgets-mock-data.json
│   └── portal-components-summary.json
│
├── 🏗️ architecture/                               # Architecture documentation
│   ├── btp-application-architecture.md
│   ├── deployment-guide.yaml
│   ├── microservices-specifications.md
│   ├── ui5-frontend-architecture.md
│   ├── integration-flows.md
│   └── security-compliance.md
│
├── 🎨 frontend/                                    # Frontend Applications
│   └── vendor-portal-ui/                          # SAP UI5 Application
│       ├── 📦 package.json                        # UI5 dependencies
│       ├── ⚙️ ui5.yaml                            # UI5 configuration
│       ├── 🧪 karma.conf.js                       # Test configuration
│       ├── 📋 .eslintrc.js                        # Linting rules
│       │
│       └── webapp/                                 # UI5 Web Application
│           ├── 📄 index.html                      # Entry point
│           ├── 🔧 Component.js                    # UI5 Component
│           ├── 📋 manifest.json                   # App descriptor
│           │
│           ├── controller/                         # UI5 Controllers
│           │   ├── BaseController.js
│           │   ├── Main.controller.js
│           │   ├── vendor/
│           │   │   ├── List.controller.js
│           │   │   ├── Detail.controller.js
│           │   │   └── Create.controller.js
│           │   ├── document/
│           │   │   ├── Approval.controller.js
│           │   │   ├── Upload.controller.js
│           │   │   └── Viewer.controller.js
│           │   └── dashboard/
│           │       ├── Overview.controller.js
│           │       └── Analytics.controller.js
│           │
│           ├── view/                              # XML Views
│           │   ├── App.view.xml
│           │   ├── Main.view.xml
│           │   ├── vendor/
│           │   │   ├── List.view.xml
│           │   │   ├── Detail.view.xml
│           │   │   └── Create.view.xml
│           │   ├── document/
│           │   │   ├── Approval.view.xml
│           │   │   ├── Upload.view.xml
│           │   │   └── Viewer.view.xml
│           │   └── dashboard/
│           │       ├── Overview.view.xml
│           │       └── Analytics.view.xml
│           │
│           ├── model/                             # Data Models
│           │   ├── models.js
│           │   ├── VendorModel.js
│           │   ├── DocumentModel.js
│           │   └── formatter.js
│           │
│           ├── fragment/                          # Reusable Fragments
│           │   ├── vendor/
│           │   │   ├── VendorDialog.fragment.xml
│           │   │   └── VendorCard.fragment.xml
│           │   ├── document/
│           │   │   ├── DocumentUpload.fragment.xml
│           │   │   ├── ApprovalDialog.fragment.xml
│           │   │   └── RejectionDialog.fragment.xml
│           │   └── common/
│           │       ├── ConfirmDialog.fragment.xml
│           │       └── LoadingDialog.fragment.xml
│           │
│           ├── service/                           # Service Layer
│           │   ├── VendorService.js
│           │   ├── DocumentService.js
│           │   ├── EmailService.js
│           │   └── BaseService.js
│           │
│           ├── util/                              # Utility Functions
│           │   ├── Constants.js
│           │   ├── Validator.js
│           │   ├── FileHandler.js
│           │   └── ErrorHandler.js
│           │
│           ├── css/                               # Custom Styles
│           │   ├── 🎨 style.css                  # Global styles
│           │   ├── vendor.css                     # Vendor-specific styles
│           │   └── document.css                   # Document-specific styles
│           │
│           ├── i18n/                              # Internationalization
│           │   ├── 📝 i18n.properties             # English (default)
│           │   ├── i18n_de.properties             # German
│           │   ├── i18n_es.properties             # Spanish
│           │   └── i18n_fr.properties             # French
│           │
│           └── test/                              # Unit Tests
│               ├── unit/
│               │   ├── controller/
│               │   ├── model/
│               │   └── service/
│               └── integration/
│
└── ⚙️ backend/                                    # Backend Microservices
    │
    ├── vendor-management-service/                 # Vendor Management API
    │   ├── 📦 package.json                       # Service dependencies
    │   ├── 📄 README.md                          # Service documentation
    │   ├── 🐳 Dockerfile                         # Container configuration
    │   ├── 📋 manifest.yml                       # Cloud Foundry manifest
    │   │
    │   ├──