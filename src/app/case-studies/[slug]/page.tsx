import Sneakar from '@/app/components/case-studies/sneakar';
import { notFound } from 'next/navigation';

type CaseStudyComponents = {
  [key: string]: () => JSX.Element;
};

interface PageProps {
  params: {
    slug: string;
  };
}

function Page({ params }: PageProps) {
  const caseStudies: CaseStudyComponents = {
    sneakar: Sneakar,
    // ... other case studies
  };

  const CaseStudyComponent = caseStudies[params.slug];

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
    // Add more case study slugs as needed
  ];
}
