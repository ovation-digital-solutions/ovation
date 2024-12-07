import Sneakar from '@/app/components/case-studies/sneakar';
import CostaRica from '@/app/components/case-studies/costa-rica';
import { notFound } from 'next/navigation';

type CaseStudyComponents = {
  [key: string]: () => JSX.Element;
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: PageProps) {
  const caseStudies: CaseStudyComponents = {
    sneakar: Sneakar,
    'costa-rica': CostaRica,
    // ... other case studies
  };

  const { slug } = await params;
  const CaseStudyComponent = caseStudies[slug];

  if (!CaseStudyComponent) {
    notFound();
  }

  return <CaseStudyComponent />;
}

export default Page;

// Generate static paths for case studies
export function generateStaticParams() {
  return [
    { slug: 'sneakar' },
    { slug: 'costa-rica' },
    // Add more case study slugs as needed
  ];
}
