// Edit this file to update the whole portfolio. All content comes from the résumé and LinkedIn profile.
export const profile = {
  name: "Hisana A A",
  title: "Graphic Designer",
  headline: "I make brands look sharp before anyone reads a word.",
  subline: "Print, branding and campaign creatives, delivered as production-ready artwork.",
  location: "Al Qusais, Dubai, UAE",
  email: "hisanaaa2002@gmail.com",
  phone: "+971 56 698 9319",
  linkedin: "https://www.linkedin.com/in/hisana",
  openToWork: true,
};

export const about = [
  "I'm a graphic designer based in Dubai with two years of experience designing for print and social: business cards, brochures, flyers, roll-ups, packaging and campaign creatives.",
  "I work from the client's brief and brand guidelines through concept, layout, revisions and print-ready files. I also handle client communication, follow-ups and invoicing, so projects keep moving and deadlines hold.",
];

// Featured work: each area is something described in the résumé. Add `image: "/work/file.jpg"` to show your own artwork.
export const work = [
  { title: "Print collateral", role: "Proprint Digital & Printing",
    text: "Business cards, brochures, flyers, roll-ups and posters, built to client requirements and checked against print specifications before they go to production.",
    tools: ["Illustrator", "Photoshop"] },
  { title: "Branding and visual identity", role: "Proprint Digital & Printing",
    text: "Branding designs and concepts developed from client requirements and brand guidelines, taken from logo to a consistent set of materials.",
    tools: ["Illustrator", "Photoshop", "Canva"] },
  { title: "Packaging and promotional materials", role: "Proprint Digital & Printing",
    text: "Packaging and promotional pieces prepared as print-ready artwork, with production teams kept in the loop for accurate, on-time delivery.",
    tools: ["Illustrator", "Photoshop"] },
  { title: "Social media and campaign creatives", role: "CodePro Technologies",
    text: "Social posts, advertisements and campaign designs with layouts, typography and visual content shaped around each client's needs.",
    tools: ["Photoshop", "Canva"] },
];

export const experience = [
  { role: "Graphic Designer", company: "Proprint Digital & Printing", place: "Dubai, UAE", period: "Dec 2024 – Present",
    points: [
      "Create business cards, brochures, flyers, roll-ups, packaging, promotional materials and branding designs.",
      "Prepare and check print-ready artwork to the required specifications.",
      "Develop concepts and layouts from client requirements and brand guidelines.",
      "Handle requirements, updates and revisions with clients over WhatsApp and email.",
      "Coordinate with clients and production teams for accurate, timely delivery.",
      "Prepare invoices in Zoho and share documents with clients.",
    ] },
  { role: "Social Media Designer", company: "CodePro Technologies", place: "Kerala, India", period: "2024 – 2025",
    points: [
      "Created social media posts, advertisements, promotional creatives and campaign designs.",
      "Developed layouts, typography and visual content based on client requirements.",
      "Managed multiple design projects to deadline and kept design files organised and on-brand.",
    ] },
];

export const skills = [
  { group: "Design tools", items: ["Adobe Illustrator", "Adobe Photoshop", "Canva"] },
  { group: "Design practice", items: ["Print design", "Branding and visual identity", "Social media design", "Typography", "Marketing materials", "Campaign creatives"] },
  { group: "Production and client work", items: ["Print-ready artwork", "Client communication", "Revision management", "Deadline management", "Client follow-up"] },
  { group: "Admin", items: ["Zoho invoicing", "MS Office", "Documentation", "Email and WhatsApp correspondence"] },
];

export const education = [
  { name: "Diploma in Multimedia & Animation", school: "Smart Media College, Kerala, India" },
  { name: "Diploma in Computer Engineering", school: "S.R.G.P.T College, Kerala, India" },
  { name: "Higher Secondary Education", school: "G.H.S School, Kerala, India" },
];

export const certifications = [
  "Data Analysis with Python", "Machine Learning with Python", "Deep Learning Fundamentals",
  "IBM Cloud Essentials V3", "Build Your Own Chatbot",
].map((n) => ({ name: n, issuer: "Cognitive Class" }));

export const languages = [
  ["Malayalam", "Native"], ["English", "Fluent"], ["Hindi", "Basic"], ["Tamil", "Basic"], ["Arabic", "Basic (reading and writing)"],
];
