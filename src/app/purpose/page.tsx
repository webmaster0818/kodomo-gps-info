import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';

export const metadata: Metadata = {
  title: '目的別の記事一覧',
  description: '目的・条件ごとの子供GPSの選び方をまとめた一覧ページです。',
};

export default function Page() {
  return <SectionIndex section="purpose" name="目的別" lead="目的・条件ごとに子供GPSの選び方をまとめた記事の一覧です" />;
}
