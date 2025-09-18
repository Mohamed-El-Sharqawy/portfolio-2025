import { EMAIL, GITHUB, LINKED_IN, PHONE } from "@/data/personal-info";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://devsharqawy.com/#person",
        "name": "Mohamed Ahmed (Moe)",
        "jobTitle": "Senior Software Engineer",
        "description": "Senior Software Engineer specializing in React.js, Next.js, and Node.js. Leading innovative projects across UAE, Saudi Arabia, and globally.",
        "url": "https://devsharqawy.com",
        "email": EMAIL,
        "telephone": PHONE,
        "sameAs": [
          GITHUB,
          LINKED_IN
        ],
        "knowsAbout": [
          "React.js",
          "Next.js", 
          "Node.js",
          "JavaScript",
          "TypeScript",
          "Frontend Development",
          "Full Stack Development",
          "Software Engineering",
          "Project Management",
          "Team Leadership"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Senior Software Engineer",
          "occupationLocation": {
            "@type": "Place",
            "name": "Global (Remote/On-site)"
          },
          "skills": [
            "React.js",
            "Next.js",
            "Node.js", 
            "Svelte",
            "Astro",
            "JavaScript",
            "TypeScript",
            "Project Management",
            "Team Leadership"
          ]
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "Software Engineering"
        },
        "workLocation": [
          {
            "@type": "Place",
            "name": "United Arab Emirates"
          },
          {
            "@type": "Place", 
            "name": "Saudi Arabia"
          },
          {
            "@type": "Place",
            "name": "United States"
          },
          {
            "@type": "Place",
            "name": "Netherlands"
          },
          {
            "@type": "Place",
            "name": "South Africa"
          },
          {
            "@type": "Place",
            "name": "Iraq"
          },
          {
            "@type": "Place",
            "name": "Turkey"
          },
          {
            "@type": "Place",
            "name": "Egypt"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://devsharqawy.com/#website",
        "url": "https://devsharqawy.com",
        "name": "Moe - Senior Software Engineer Portfolio",
        "description": "Senior Software Engineer portfolio showcasing expertise in React.js, Next.js, and Node.js. Leading innovative projects across UAE, Saudi Arabia, and globally.",
        "author": {
          "@id": "https://devsharqawy.com/#person"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://devsharqawy.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://devsharqawy.com/#webpage",
        "url": "https://devsharqawy.com",
        "name": "Moe - Senior Software Engineer Portfolio | React & Next.js Expert",
        "description": "Senior Software Engineer portfolio showcasing expertise in React.js, Next.js, and Node.js. Leading innovative projects across UAE, Saudi Arabia, and globally.",
        "isPartOf": {
          "@id": "https://devsharqawy.com/#website"
        },
        "about": {
          "@id": "https://devsharqawy.com/#person"
        },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://devsharqawy.com"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "About",
              "item": "https://devsharqawy.com#about"
            },
            {
              "@type": "ListItem",
              "position": 3, 
              "name": "Skills",
              "item": "https://devsharqawy.com#skills"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Experience", 
              "item": "https://devsharqawy.com#experience"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Contact",
              "item": "https://devsharqawy.com#contact"
            }
          ]
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://devsharqawy.com/#service",
        "name": "Senior Software Engineer Services",
        "description": "Professional software engineering services including frontend development, full-stack solutions, and technical leadership.",
        "provider": {
          "@id": "https://devsharqawy.com/#person"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Frontend Development",
          "Full Stack Development", 
          "Technical Leadership",
          "Project Management",
          "Software Architecture",
          "Team Management"
        ],
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
