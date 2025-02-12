import getFormattedDate from '@/lib/getFormattedDate'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getPostsMeta } from '@/lib/mdx'
import SectionHeading from '@/components/ui/SectionHeading'

type Params = Promise<{ postId: string }>

export async function generateStaticParams() {
   const posts = await getPostsMeta()

   if (!posts) return []

   return posts.map((post) => ({
      postId: post.slug,
   }))
}

export async function generateMetadata(props: { params: Params }) {
   const params = await props.params
   const { postId } = params

   const post = await getPostBySlug(`${postId}`)
   if (!post) {
      return {
         title: 'Post Not Found',
      }
   }

   return {
      title: post.meta.title,
   }
}

async function Post(props: { params: Params }) {
   const params = await props.params
   const postSlug = params.postId
   const post = await getPostBySlug(`${postSlug}`)

   if (!post) notFound()

   const { meta, content } = post

   const tags = meta.tags.map((tag, index) => (
      <Link key={index} href={`/tags/${tag}/page/1`}>
         {tag}
      </Link>
   ))

   return (
      <main className="py-spacing-12">
         <article className="wrapper max-w-fit mx-auto items-center">
            <h1 className="font-extrabold text-4xl">{meta.title}</h1>
            <time dateTime={meta.date}>{getFormattedDate(meta.date)}</time>
            <div className="prose pt-spacing-12">{content}</div>
            <section className="py-spacing-11">
               <SectionHeading className="text-start">Related:</SectionHeading>
               <div className="flex flex-row gap-4">{tags}</div>
            </section>
         </article>
      </main>
   )
}

export default Post
