// import React from 'react'

type Props = {
    imgUrl?: string;
    title: string;
    excerpt: string;
    date: string;
}

const BlogCard = (props: Props) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-row gap-4 my-8">
          <img src={props.imgUrl} alt={props.title} className="min-h-[10em] bg-slate-50" />
          <div>
            <h2 className="text-xl font-bold mb-2">{props.title}</h2>
            <p className="text-gray-600 mb-4">{props.excerpt}</p>
            <p className="text-gray-500 text-sm">{props.date}</p>
          </div>
    </div>
  )
}

export default BlogCard
