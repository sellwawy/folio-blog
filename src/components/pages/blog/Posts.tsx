import PostCard from '../../ui/PostCard'

type PostsProps = {
   posts: Meta[] | undefined
}

async function Posts({ posts }: PostsProps) {
   if (!posts) {
      return <p className="mt-10 text-center">Sorry, no posts available.</p>
   }

   return (
      <>
         {posts?.map((post, index) => (
            <PostCard key={index} {...post} />
         ))}
      </>
   )
}

export default Posts
