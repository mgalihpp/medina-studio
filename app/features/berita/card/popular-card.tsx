export function PopularCard({
  post,
}: {
  post: { title: string; author: string; image: string };
}) {
  return (
    <div className="flex space-x-4 hover:bg-main-light/40 py-3 rounded-lg">
      <div className="flex-1">
        <h4 className="font-medium mb-1 text-sm line-clamp-2">{post.title}</h4>
        <p className="text-xs text-muted-foreground">{post.author}</p>
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-20 h-20 object-cover rounded"
      />
    </div>
  );
}
