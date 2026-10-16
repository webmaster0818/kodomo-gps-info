import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';

export const metadata: Metadata = {
  title: 'エリア別の記事一覧',
  description: '地域ごとの子供GPSの選び方と見守りに関する情報をまとめた一覧ページです。',
};

export default function Page() {
  return <SectionIndex section="area" name="エリア別" lead="地域ごとの子供GPSの選び方と見守りに関する情報をまとめた記事の一覧です" />;
}
