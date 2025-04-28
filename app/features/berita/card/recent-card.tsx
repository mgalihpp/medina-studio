import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '~/components/ui/card';

export function RecentCard({
  post,
}: {
  post: {
    id: number;
    title: string;
    description: string;
    image: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    category: string;
    link: string;
  };
}) {
  return (
    <Card
      key={post.id}
      className="flex-1 p-0 border-none outline-none shadow-none hover:bg-main-light/40"
    >
      <div className="relative rounded-lg h-56 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover h-full w-full transition-transform duration-700"
          loading="lazy"
          decoding="async"
        />
      </div>
      <CardHeader className="px-0">
        <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between px-0">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.date}</p>
          </div>
        </div>
        <span className="text-muted-foreground text-sm">{post.category}</span>
      </CardFooter>
    </Card>
  );
}
