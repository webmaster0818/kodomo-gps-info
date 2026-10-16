import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { sectionPages } from '@/lib/sectionPages';

// ハブページの見出し部分（一覧そのものは各セクションの layout.tsx が SectionList で出す）
export default function SectionIndex({ section, name, lead }: { section: string; name: string; lead: string }) {
  const pages = sectionPages(section);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: pages.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `https://gps-kodomo.com${p.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Breadcrumb items={[{ name }]} />
      <div className="mx-auto max-w-6xl px-4 pt-2">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">{name}</h1>
        <p className="text-g500">{lead}。全{pages.length}ページを掲載しています。</p>
      </div>
    </>
  );
}

// 同じセクションの全ページへのリンク（ハブでは一覧、記事では「同じカテゴリの記事」になる）
export function SectionList({ section, name }: { section: string; name: string }) {
  const pages = sectionPages(section);
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-xl font-bold mb-4">
        <Link href={`/${section}/`} className="no-underline">{name}の記事一覧</Link>
      </h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="block rounded-xl border border-gray-200 bg-white p-5 no-underline hover:shadow-md transition-shadow">
              <span className="block font-bold text-blue mb-1">{p.title}</span>
              {p.description && <span className="block text-sm text-g500 line-clamp-2">{p.description}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
