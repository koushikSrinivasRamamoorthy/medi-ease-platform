// Base clinic data for all pages
export const baseClinicData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "SVR Clinic",
  "alternateName": "Sri Vaitheswara Clinic",
  "image": "https://www.svrclinic.com/favicon.png",
  "url": "https://www.svrclinic.com",
  "telephone": "+917708060368",
  "email": "sri.v.clinic@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
    "addressLocality": "Mayiladuthurai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "609001",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 08:00-22:00",
  "medicalSpecialty": [
    "Cardiology",
    "Otolaryngology",
    "Pediatrics",
    "Surgery",
    "Urology",
    "GeneralPractice"
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.1048",
    "longitude": "79.6520"
  },
  "sameAs": [
    "https://www.google.com/maps/place/SVR+Clinic"
  ]
};

// Doctors data for /doctors page
export const doctorsData = [
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. S. Giridharan",
    "medicalSpecialty": "Cardiology",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "M.D. D.M.",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "SVR Clinic"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "609001",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Ramesh Babu",
    "medicalSpecialty": "Otolaryngology",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "M.S.",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "SVR Clinic"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "609001",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. S. Sriranjini",
    "medicalSpecialty": "Pediatrics",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "M.D.",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "SVR Clinic"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "609001",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. G. Balan",
    "medicalSpecialty": "Surgery",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "M.S.",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "SVR Clinic"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "609001",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. D. Siddarth Munusamy",
    "medicalSpecialty": "Urology",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "M.Ch.",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "SVR Clinic"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "609001",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Aswin Pandian",
    "medicalSpecialty": "GeneralPractice",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "M.B.B.S.",
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "SVR Clinic"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pattamangala St, Pasupathi Street, Kamarajar Salai",
      "addressLocality": "Mayiladuthurai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "609001",
      "addressCountry": "IN"
    }
  }
];

// Services data for /services page
export const servicesData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Cardiology Services",
    "description": "Comprehensive heart care including diagnostics, treatment, and preventive cardiology services.",
    "procedureType": "Cardiology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "ENT Services",
    "description": "Expert care for ear, nose, and throat conditions with advanced diagnostic and treatment options.",
    "procedureType": "Otolaryngology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Pediatrics Services",
    "description": "Specialized healthcare for children including preventive care, vaccinations, and treatment of childhood illnesses.",
    "procedureType": "Pediatrics"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "General Surgery",
    "description": "Advanced surgical procedures including laparoscopy, endoscopy, and treatment of various surgical conditions.",
    "procedureType": "Surgery"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Urology Services",
    "description": "Comprehensive urological care including treatment for kidney stones, bladder problems, and prostate health.",
    "procedureType": "Urology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "General Medicine",
    "description": "Primary care and general medical services for common health conditions and preventive healthcare.",
    "procedureType": "GeneralPractice"
  }
];
