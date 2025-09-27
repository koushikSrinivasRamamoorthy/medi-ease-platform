// SEO utilities for SVR Clinic website

export const updatePageSEO = (title: string, description: string, keywords?: string) => {
  // Update document title
  document.title = title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update meta keywords if provided
  if (keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }
  
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }
};

export const pageConfigs = {
  home: {
    title: "Sri Vaitheswara Clinic (SVR Clinic), Mayiladuthurai – Trusted Family Healthcare",
    description: "Visit Sri Vaitheswara Clinic (SVR Clinic) in Mayiladuthurai for affordable, reliable healthcare. Expert doctors, trusted treatments, and quality medicines at low cost.",
    keywords: "Sri Vaitheswara Clinic Mayiladuthurai, SVR Clinic Mayiladuthurai, Clinic Mayiladuthurai, Vaitheswara Clinic Mayiladuthurai, Vaitheeswara Clinic Mayiladuthurai, Vaidheswara Clinic Mayiladuthurai, best doctors Mayiladuthurai, best clinics Mayiladuthurai, cheap clinics Mayiladuthurai, affordable clinics Mayiladuthurai, best medicines Mayiladuthurai, cheap medicines Mayiladuthurai, affordable medicines Mayiladuthurai"
  },
  doctors: {
    title: "Meet Our Doctors – Sri Vaitheswara Clinic, Mayiladuthurai",
    description: "Book an appointment with experienced doctors at SVR Clinic, Mayiladuthurai. Personalized care, affordable treatment, and trusted healthcare services for your family.",
    keywords: "doctors Mayiladuthurai, SVR Clinic doctors, Sri Vaitheswara Clinic doctors, best doctors Mayiladuthurai, specialist doctors Mayiladuthurai, medical consultation Mayiladuthurai"
  },
  services: {
    title: "Medical Services – Sri Vaitheswara Clinic, Mayiladuthurai",
    description: "Explore SVR Clinic's healthcare services in Mayiladuthurai: Cardiology, Neurology, Pediatrics, and more. Expert care at affordable prices, trusted by local families.",
    keywords: "medical services Mayiladuthurai, SVR Clinic services, Sri Vaitheswara Clinic services, cardiology Mayiladuthurai, neurology Mayiladuthurai, pediatrics Mayiladuthurai, affordable healthcare Mayiladuthurai"
  }
};