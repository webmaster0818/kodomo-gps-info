import type { Metadata } from 'next';
import SectionIndex from '@/components/SectionIndex';

export const metadata: Metadata = {
  title: '機種レビューの記事一覧',
  description: '子供GPS各機種の料金・機能・口コミのレビューをまとめた一覧ページです。',
};

export default function Page() {
  return <SectionIndex section="review" name="機種レビュー" lead="子供GPS各機種の料金・機能・口コミをまとめたレビュー記事の一覧です" />;
}
