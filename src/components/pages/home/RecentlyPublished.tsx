import PostCard from '@/components/ui/PostCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { getPostsMeta } from '@/lib/mdx'

async function RecentlyPublished() {
   const recentlyPublished = (await getPostsMeta()).slice(0, 4).map((post) => {
      return (
         <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            tags={post.tags}
         />
      )
   })

   return (
      <section className="py-spacing-12 bg-quaternary">
         <div className="wrapper">
            <SectionHeading>Recently Published</SectionHeading>
            <ul className="flex flex-col sm:grid grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-spacing-10">
               {recentlyPublished}
            </ul>
         </div>
      </section>
   )
}
export default RecentlyPublished
