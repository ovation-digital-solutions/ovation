import { notFound } from 'next/navigation';
import Meridex from '@/app/components/case-studies/meridex';
import Sneakar from '@/app/components/case-studies/sneakar';
import CostaRica from '@/app/components/case-studies/costa-rica';
import CrowdConnect from '@/app/components/case-studies/crowdconnect';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type CaseStudyComponents = {
  [key: string]: React.ComponentType;
};

async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  const caseStudies: CaseStudyComponents = {
    meridex: Meridex,
    sneakar: Sneakar,
    'costa-rica': CostaRica,
    crowdconnect: CrowdConnect,
  };

  const Component = caseStudies[slug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}

export default Page;

export function generateStaticParams() {
  return [
    { slug: 'sneakar' },
    { slug: 'costa-rica' },
    { slug: 'crowdconnect' },
    { slug: 'meridex' },
  ];
}
