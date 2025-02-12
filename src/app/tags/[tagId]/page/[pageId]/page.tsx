import PaginationControls from '@/components/pages/blog/PaginationControls'
import Posts from '@/components/pages/blog/Posts'
import SectionHeading from '@/components/ui/SectionHeading'
import { getPostsMeta } from '@/lib/mdx'
import { notFound } from 'next/navigation'

type Params = Promise<{ tagId: string; pageId: number }>

const allPostsMeta = await getPostsMeta()
const perPage = 2
const totalPages = Math.ceil(Number(allPostsMeta.length) / perPage)

export async function generateStaticParams(props: { params: Params }) {
   const params = await props.params
   const { tagId } = params

   const postsMeta = allPostsMeta.filter((post) => post.tags.includes(tagId))
   if (!postsMeta) return []

   return [...Array(totalPages).keys()].map((number) => ({
      tagId: tagId,
      pageId: (number + 1).toString(),
   }))
}

export async function generateMetadata(props: { params: Params }) {
   const params = await props.params
   const { tagId } = params

   const postsMeta = allPostsMeta.filter((post) => post.tags.includes(tagId))

   if (!postsMeta) {
      return {
         title: 'Tag Not Found',
      }
   }

   return {
      title: tagId,
   }
}

async function page(props: { params: Params }) {
   const params = await props.params
   const { tagId, pageId } = params

   const postsMeta = allPostsMeta.filter((post) => post.tags.includes(tagId))
   const totalPages = Math.ceil(Number(postsMeta.length) / perPage)

   const tags = Array.from(new Set(allPostsMeta.map((post) => post.tags).flat())).map((tag) => tag)

   if (!tags.find((tag) => tag === tagId)) {
      notFound()
   }

   if (isNaN(pageId) || pageId < 1 || pageId > totalPages) notFound()

   const start = (Number(pageId) - 1) * perPage
   const end = start + perPage

   return (
      <main>
         <section className="py-spacing-12 bg-quaternary">
            <div className="wrapper">
               <SectionHeading>{tagId}</SectionHeading>
               <div className="flex flex-col sm:grid grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-spacing-10">
                  <Posts posts={postsMeta.slice(start, end)} />
               </div>
               <PaginationControls
                  hasNextPage={Number(postsMeta.length) > end}
                  hasPrevPage={start > 0}
                  page={Number(pageId)}
                  TotalPosts={postsMeta.length}
                  perPage={perPage}
               />
            </div>
         </section>
      </main>
   )
}

export default page
