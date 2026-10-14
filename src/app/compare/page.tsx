import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';

export const metadata: Metadata = {
  title: '比較の記事一覧',
  description: '子供GPSの機種・料金・機能の比較記事をまとめた一覧ページです。',
};

export default function Page() {
  return <SectionIndex section="compare" name="比較" lead="子供GPSの機種・料金・機能の比較記事" />;
}
