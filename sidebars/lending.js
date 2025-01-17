module.exports = [
 {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Lending API",
    href: "/lending/overview",
    className: "header top-level-item products product lending",
  },
  "lending/get-started",
  // {
  //   type: "category",
  //   label: "Loan qualification",
  //   collapsed: true,
  //   items: [
  //     "lending/guides/loan-qualification/introduction",
  //     "lending/guides/loan-qualification/setting-up",
  //     "lending/guides/loan-qualification/process-loan",
  //     "lending/guides/loan-qualification/uw-decision",
  //   ],
  // },
  //{
  //  type: "category",
  //  label: "Invoice finance guide",
  //  collapsed: true,
  //  items: [
  //    {
  //      type: "doc",
  //      id: "lending/guides/invoice-finance/introduction",
  //      label: "Introduction",
  //    },
  //    "lending/guides/invoice-finance/setting-up",
  //    "lending/guides/invoice-finance/process-invoice",
  //    "lending/guides/invoice-finance/inv-fin-decision",
  //  ],
  //},
  {
    type: "link",
    label: "Bank statements",
    customProps: {
      hr: true,
      section: "Features",
    },
    href: "/lending/features/bank-statements-overview",
  },
  "lending/features/sales-overview",
  "lending/features/financial-statements-overview",
  "lending/features/liabilities-overview",
  "lending/features/accounts-receivable-overview",
  "lending/features/accounts-payable-overview",
  "lending/features/company-info-overview",
  "lending/features/excel-download-overview",
//  {
//    type: "category",
//    label: "Data integrity",
//    collapsed: true,
//    customProps: {
//      hr: true,
//      section: "Other features",
//    },
//    items: [
//      "lending/data-integrity/overview",
//      "lending/portal/data-integrity",//TODO: check this "assess/portal/data-integrity"
//      "lending/data-integrity/faqs",
//    ],
//  },
//  {
//    type: "category",
//    label: "Commerce metrics",
//    collapsed: true,
//    items: [
//      "lending/commerce-metrics/overview",
//      "lending/commerce-metrics/reporting-structure",
//      "lending/commerce-metrics/troubleshooting",
//    ],
//  },
//  {
//    type: "category",
//    label: "Excel download",
//    collapsed: true,
//    items: [
//      "lending/excel/overview",
//      "lending/excel/audit-report",
//      "lending/excel/enhanced-financials-report",
//      "lending/excel/enhanced-invoices-report",
//      "lending/excel/enhanced-cash-flow-report",
//    ],
//  },
  {
    type: "link",
    href: '/lending/troubleshooting',
    label: "Troubleshooting",
    customProps: {
      hr: true,
    },
  },
  "lending/data-types",
  {
    type: "link",
    href: "/lending-api",
    label: "API reference",
  },
];
