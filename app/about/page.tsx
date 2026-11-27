import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About | Paul Babin's Family Travels, Photos & History",
  description:
    "Learn about Paul Babin's interactive travel map, family photo archive, and Edmond's 1942–1945 WWII army service records and war diaries.",
  alternates: {
    canonical: 'https://vercel.app',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: "About Paul Babin's Family Travels and Photos",
    url: 'https://vercel.app',
    mainEntity: {
      '@type': 'Person',
      name: 'Paul Babin',
      url: 'https://vercel.app',
      description:
        'Creator of a personal travel mapping project and family history archive covering trips across Canada and the UK, alongside WWII military records.',
    },
  };

  return (
    <div
      style={{
        position: "relative",
        border: "16px solid #333",
        boxSizing: "border-box",
        minHeight: "100vh",
      }}
    >
      <main
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        {/* Structured data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            padding: "5px",
            margin: 0,
          }}
        >
          About Paul Babin&apos;s Travels &amp; Family Archive
        </h1>

        <p style={{ padding: "10px", margin: 0 }}>
          Welcome to <strong>Paul Babin&apos;s and family - Travels and photos</strong>. 
          This personal project combines interactive Google Maps with family photography 
          and historical documents to preserve where we have lived, traveled, and 
          connected over the decades.
        </p>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              padding: "5px",
              margin: 0,
            }}
          >
            What You Will Find on This Site
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "48px",
              margin: 0,
            }}
          >
            <li style={{ padding: "10px" }}>
              <strong>Mapped Homes &amp; Voyages:</strong> Interactive routes and locations 
              spanning places I have lived, a voyage to the UK and back, and family road 
              trips across Newfoundland, Ontario, Cape Breton, Niagara Falls, and England.
            </li>
            <li style={{ padding: "10px" }}>
              <strong>Family Photo Collections:</strong> Visual timelines and slideshows 
              featuring family memories with Denise (including our 2001 civil wedding in 
              Saint John and 2002 church wedding in Moncton), Margaret, and Edmond.
            </li>
            <li style={{ padding: "10px" }}>
              <strong>Historical Military Records (1942–1945):</strong> Digitized archives 
              documenting Edmond&apos;s army service records, his unit&apos;s 1944–1945 War 
              Diary, and mapped troop movements.
            </li>
          </ul>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              padding: "5px",
              margin: 0,
            }}
          >
            About the Project
          </h2>
          <p style={{ padding: "10px", margin: 0 }}>
            Built as a custom digital archive using Next.js and the Google Maps API, this 
            site is designed to keep family stories, photos, and historical records 
            accessible for relatives, friends, and genealogy researchers.
          </p>
        </section>

        <div style={{ padding: "10px" }}>
          <Link
            href="/"
            style={{
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            &larr; Return
          </Link>
        </div>
      </main>
    </div>
  );
}
