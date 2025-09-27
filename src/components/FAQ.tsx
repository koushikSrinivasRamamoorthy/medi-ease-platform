import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the clinic hours at Sri Vaitheswara Clinic?",
      answer: "Our clinic is open Monday to Friday from 8:00 AM to 8:00 PM, Saturday from 8:00 AM to 6:00 PM, and Sunday from 9:00 AM to 5:00 PM. We also provide emergency services 24/7."
    },
    {
      question: "How can I book an appointment at SVR Clinic Mayiladuthurai?",
      answer: "You can book an appointment by calling us at +91 77080 60362, messaging us on WhatsApp, or using our online booking system on this website. We offer same-day appointments for urgent cases."
    },
    {
      question: "What medical services are available at Sri Vaitheswara Clinic?",
      answer: "We offer comprehensive healthcare services including Cardiology, Neurology, Pediatrics, Orthopedics, Dermatology, and General Medicine. We also provide diagnostic imaging, laboratory services, and pharmacy services."
    },
    {
      question: "Do you provide home delivery of medicines in Mayiladuthurai?",
      answer: "Yes, we offer medicine home delivery services throughout Mayiladuthurai. You can order medicines via WhatsApp or by calling our pharmacy directly. We ensure safe and timely delivery."
    },
    {
      question: "Are the treatment costs affordable at SVR Clinic?",
      answer: "Yes, Sri Vaitheswara Clinic is committed to providing affordable healthcare to families in Mayiladuthurai. We offer competitive pricing for all our medical services and accept various payment methods including cash, cards, and UPI."
    },
    {
      question: "Is parking available at the clinic?",
      answer: "Yes, we have ample parking space available for patients and visitors. The clinic is conveniently located with easy access from all parts of Mayiladuthurai."
    }
  ];

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  React.useEffect(() => {
    // Add FAQ structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </header>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Sri Vaitheswara Clinic services in Mayiladuthurai
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-semibold">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;