type Meta = {
   slug: string
   title: string
   date: string
   description: string
   tags: string[]
   className?: string
}

type BlogPost = {
   meta: Meta
   content: ReactElement<any, string | JSXElementConstructor<any>>
}
