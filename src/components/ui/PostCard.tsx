import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
import { cn } from '@/utils'

function PostCard({ slug, title, date, description, className }: Meta) {
   return (
      <article
         className={cn('bg-quinary p-spacing-10 flex flex-col relative rounded-lg shadow-custom', className)}>
         <header>
            <h3 className="text-2xl pb-spacing-2 font-bold tracking-tight text-gray-900">
               <Link href={`/blog/${slug}`}>{title}</Link>
            </h3>
         </header>
         <time dateTime={date}>{getFormattedDate(date)}</time>
         <p>{description}</p>
      </article>
   )
}

export default PostCard
