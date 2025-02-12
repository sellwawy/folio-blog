import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const rootDirectory = path.join(process.cwd(), 'src', 'posts')

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
   const realSlug = slug.replace(/\.mdx$/, '')
   const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

   const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

   const { frontmatter, content } = await compileMDX<{
      title: string
      date: string
      description: string
      tags: string[]
   }>({
      source: fileContent,
      options: {
         parseFrontmatter: true,
         mdxOptions: {
            rehypePlugins: [
               rehypePrettyCode,
               rehypeSlug,
               // [
               //    rehypeAutolinkHeadings,
               //    {
               //       behavior: 'wrap',
               //    },
               // ],
            ],
         },
      },
   })

   const blogPostObj: BlogPost = {
      meta: {
         slug: realSlug,
         ...frontmatter,
      },
      content,
   }

   return blogPostObj
}

export const getPostsMeta = async () => {
   const files = fs.readdirSync(rootDirectory)

   const posts = []

   for (const file of files) {
      const post = await getPostBySlug(file)
      if (post) {
         posts.push(post.meta)
      }
   }

   return posts
}
