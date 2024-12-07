import SmallBizGuide from '@/app/components/blogs/smallbizguide';
import WordOfMouthConversion from '@/app/components/blogs/wordOfMouthConversion';
import { notFound } from 'next/navigation';

type BlogComponents = {
  [key: string]: () => JSX.Element;
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: PageProps) {
  const blogPosts: BlogComponents = {
    'smallbizguide': SmallBizGuide,
    'word-of-mouth-conversion': WordOfMouthConversion,
  };

  const { slug } = await params;
  const BlogComponent = blogPosts[slug];

  if (!BlogComponent) {
    notFound();
  }

  return <BlogComponent />;
}

export default Page;

export function generateStaticParams() {
  return [
    { slug: 'smallbizguide' },
    { slug: 'word-of-mouth-conversion' },
  ];
}
