import PaginationControls from '@/components/pages/blog/PaginationControls'
import Posts from '@/components/pages/blog/Posts'
import SectionHeading from '@/components/ui/SectionHeading'
import { getPostsMeta } from '@/lib/mdx'
import { notFound } from 'next/navigation'

type Params = Promise<{ blogPageId: string }>

const allPostsMeta = await getPostsMeta()
const perPage = 2
const totalPages = Math.ceil(Number(allPostsMeta.length) / perPage)

export const metadata = {
   title: 'Blog',
}

export async function generateStaticParams() {
   if (!totalPages) return []

   return [...Array(totalPages).keys()].map((number) => ({
      pageSlug: (number + 1).toString(),
   }))
}

export default async function Page(props: { params: Params }) {
   const params = await props.params
   console.log(params)

   const pageSlug = Number(params.blogPageId)

   // mocked, skipped and limited in the real app
   const start = (pageSlug - 1) * perPage // 0, 5, 10 ...
   const end = start + perPage // 5, 10, 15 ...

   if (isNaN(pageSlug) || pageSlug < 1 || pageSlug > totalPages) notFound()

   if (!allPostsMeta) return <p className="mt-10 text-center">Sorry, no posts available.</p>

   return (
      <main>
         <section className="py-spacing-12 bg-quaternary">
            <div className="wrapper">
               <SectionHeading>Blog</SectionHeading>

               <div className="flex flex-col sm:grid grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-spacing-10">
                  <Posts posts={(await getPostsMeta()).slice(start, end)} />
               </div>
               <PaginationControls
                  hasNextPage={Number(allPostsMeta.length) > end}
                  hasPrevPage={start > 0}
                  page={Number(pageSlug)}
                  TotalPosts={allPostsMeta.length}
                  perPage={perPage}
               />
            </div>
         </section>
      </main>
   )
}
