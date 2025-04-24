interface CourseTabProps {
  active: boolean;
  title: string;
  onClick: () => void;
}

interface courses {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  schedule: string;
  students: string;
  features: string[];
  courses: {
    title: string;
    image: string;
    duration: string;
  }[];
}
