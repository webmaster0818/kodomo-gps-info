import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';

export const metadata: Metadata = {
  title: 'お役立ちの記事一覧',
  description: '子供GPSの基礎知識と使い方の解説記事をまとめた一覧ページです。',
};

export default function Page() {
  return <SectionIndex section="knowledge" name="お役立ち" lead="子供GPSの基礎知識と使い方を解説した記事の一覧です" />;
}
