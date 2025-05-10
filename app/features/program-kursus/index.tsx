import { SectionHeader } from '~/components/layout/header';
import { PROGRAM_KURSUS } from '~/constant/course';
import { CourseCard } from '~/features/home/components/card/course-card';
import { Promo } from '~/components/promo';
import { Faq } from '~/components/faq';

interface ProgramKursusProps {
  label?: string;
  title?: string;
  description?: string;
}

export function ProgramKursus({
  label = 'Program Kursus',
  title = 'Program Kursus Unggulan',
  description = 'Pilih dari berbagai program kursus kami yang dirancang untuk mengembangkan keterampilan dan kreativitas Anda di bidang tata rias dan busana.',
}: ProgramKursusProps) {
  return (
    <>
      <section
        id="program-kursus"
        className="container mx-auto max-w-7xl py-16 px-4"
      >
        <SectionHeader label={label} title={title} description={description} />

        <CourseCard courses={PROGRAM_KURSUS} />
      </section>

      <Promo />
      <Faq />
    </>
  );
}
