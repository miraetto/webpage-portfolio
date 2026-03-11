import { archiveEntries } from "@/data/archive";
import { Container } from "@/components/ui/container";
import { ArchiveItem } from "@/components/ui/archive-item";
import { SectionHeading } from "@/components/ui/section-heading";

export function Archive() {
  return (
    <section id="archive" className="section-anchor py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Archive"
          title="Video Archive"
          description="반복되는 정지 이미지보다 실제 작업의 리듬과 움직임이 먼저 보이도록, 영상 클립 위주로 아카이브를 구성했습니다."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {archiveEntries.map((item) => (
            <ArchiveItem key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}