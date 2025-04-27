import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardContent } from '~/components/ui/card';

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-2">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage
            src={mentor.image}
            alt={mentor.name}
            className="object-cover"
          />
          <AvatarFallback>
            <GraduationCap className="w-16 h-16 text-main-color" />
          </AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-xl text-secondary-color">
          {mentor.name}
        </h3>
        <p className="text-main-color font-medium">{mentor.role}</p>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-2 sm:text-base text-sm">
          {mentor.specialization}
        </p>
        <p className="text-sm text-secondary-color/90 font-semibold">
          {mentor.experience}
        </p>
      </CardContent>
    </Card>
  );
}
