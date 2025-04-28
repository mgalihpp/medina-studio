import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { BlogCard } from '~/components/blog-card';
import { SectionHeader } from '~/components/layout/header';
import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '~/components/ui/card';
import { BLOG_POSTS } from '~/constant/blog';
import { PopularCard } from './card/popular-card';
import { RecentCard } from './card/recent-card';

export function Berita() {
  const blogPosts = [
    {
      id: 1,
      title:
        'Tech essentials: exploring the latest electronic gadgets and innovations',
      description:
        'Discovering the must-have electronic devices and groundbreaking innovations in the tech world.',
      image:
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      author: {
        name: 'Andrea william',
        avatar:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      },
      date: '21 Jan 2023',
      category: 'Business',
      link: '#',
    },
    {
      id: 2,
      title: 'Unlocking financial inclusion: how fintech is bridging the gap',
      description:
        'Examining how fintech is promoting access to financial services for underserved populations.',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      author: {
        name: 'James Camron',
        avatar:
          'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      },
      date: '21 Apr 2023',
      category: 'Business',
      link: '#',
    },
  ];

  const popularPosts = [
    {
      title: 'How feedback can increase team productivity',
      author: 'Jenna Lukas',
      image:
        'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg',
    },
    {
      title: 'Morning routine to boost your mood',
      author: 'Jonathan Hope',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    },
    {
      title: 'How to use sticky note for problem solving',
      author: 'Hope Kia',
      image:
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Berita"
          title="Berita Terbaru"
          description="Jelajahi berita terbaru kami, berisi informasi seputar tips dan trik, tutorial, dan berita terupdate di bidang kecantikan dan fashion"
        />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main blog posts */}
          <div className="flex flex-col md:flex-row gap-8 md:w-2/3">
            {blogPosts.map((post) => (
              <RecentCard key={post.id} post={post} />
            ))}
          </div>

          {/* Popular posts sidebar */}
          <div className="md:w-1/3">
            <Card className="p-0 border-none outline-none shadow-none">
              <CardHeader>
                <CardTitle className="text-xl text-muted-foreground">
                  Berita Populer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0">
                {popularPosts.map((post, index) => (
                  <PopularCard key={index} post={post} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-16">
          {/* Header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="section-subtitle">Berita & Blog</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900">
                <span className="text-main-color">Berita & Blog</span> Lainnya
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
