import { useParams } from 'react-router-dom';
import { blogs } from '../blogs/blogs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { vinay_nangia } from '../assets';

// Use ES module syntax to extend dayjs
dayjs.extend(customParseFormat);

export default function BlogPost() {
  const { blogId } = useParams();
  console.log(blogId)
  // Find the blog post that matches the ID from URL params
  const blog = blogs.find(blog => blog.id === blogId);

  // Handle case when blog is not found
  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  const renderContent = (block) => {
    switch (block.type) {
      case 'paragraph':
        return <p className="my-4 text-gray-700">{block.content}</p>;
      
      case 'list':
        return (
          <ul className="list-disc ml-6 my-4">
            {block.content.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        );
      
      case 'image':
        return (
          <figure className="my-6">
            <img 
              src={block.content.src} 
              alt={block.content.alt}
              className="rounded-lg w-full"
            />
            {block.content.caption && (
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                {block.content.caption}
              </figcaption>
            )}
          </figure>
        );
      
      case 'code':
        return (
          <pre className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
            <code>{block.content}</code>
          </pre>
        );

      case 'quote':
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
            {block.content}
          </blockquote>
        );
      
      default:
        return null;
    }
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">

      <div className="flex items-start flex-col text-gray-500 mb-8">
        <p className='text-xl font-bold mb-1'><span className='text-neutral-800'>Author:</span> {blog.author}</p>
        <time className='mr-auto px-4 sm:pr-16 pl-4 py-2 text-gray-200 text-sm font-semibold sm:text-lg bg-neutral-800 rounded-r-lg uppercase'>{dayjs(blog.date).format('dddd, DD MMMM YYYY')}</time>
      </div>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.content.map((block, index) => (
        <div key={index}>{renderContent(block)}</div>
      ))}
      <div className='bg-neutral-100 text-white flex justify-between items-center p-4 rounded-lg mt-8'>
        <div className='flex font-extrabold text-black gap-2 '>
            <img src={vinay_nangia} alt={blog.author} className='w-12 h-12 rounded-full' />
            <p className='flex flex-col font-extrabold text-black '>
            <span className='text-neutral-500'>By</span>
            <span>Prof. Vinay Nangia</span>
         

        </p>
        </div>
       

      </div>
    </article>
  );
} 