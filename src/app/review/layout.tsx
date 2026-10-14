import { SectionList } from '@/components/SectionIndex';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SectionList section="review" name="機種レビュー" />
    </>
  );
}
