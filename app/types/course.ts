interface CourseTabProps {
  active: boolean;
  title: string;
  onClick: () => void;
}

interface Kelas {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  schedule: string;
  students: string;
  features: string[];
}

interface Instructor {
  name: string;
  role: string;
  image: string;
}

interface SyllabusItem {
  title: string;
  weeks: string;
  topics: string[];
}

interface Course {
  title: string;
  duration: string;
  schedule: string;
  price: string;
  description: string;
  image: string;
  instructors: Instructor[];
  syllabus: SyllabusItem[];
  facilities: string[];
  benefits: string[];
}
