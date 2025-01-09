
export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
      <div className="flex justify-center">
        <h2 className="mb-4 text-white font-semibold text-2xl bg-blue-800 rounded w-fit px-4 py-2">Basic Routing</h2>
      </div>
      <div className="flex gap-3 justify-center items-center sm:items-start">         
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="blog/"            
            rel="noopener noreferrer"          
            >
            Blog
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="about-us/"            
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="contact-us/"            
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
      </div>
    <hr className="my-10 border-gray-300"/>
      <div className="mt-10 flex justify-center">
        <h2 className="mb-4 text-white font-semibold text-2xl bg-blue-800 rounded w-fit px-4 py-2">Nested Routing</h2>
      </div>
      <div className="flex gap-3 items-center justify-center sm:items-start">         
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="blogposts/blog1"            
            rel="noopener noreferrer"
          >
            Blog 1 
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="blogposts/blog2"            
            rel="noopener noreferrer"
          >
            Blog 2 
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="about-us/"            
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="contact-us/"            
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
      </div>

      <hr className="my-10 border-gray-300"/>
      <div className="mt-10 flex justify-center">
        <h2 className="mb-4 text-white font-semibold text-2xl bg-blue-800 rounded w-fit px-4 py-2">Dynamic Routing</h2>
      </div>
      <div className="flex gap-3 items-center justify-center sm:items-start">         
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="blogs/blog-1"            
            rel="noopener noreferrer"
          >
            Blog 1 
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="blogs/blog-2"            
            rel="noopener noreferrer"
          >
            Blog 2 
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="about-us/"            
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            className="text-blue-600 underline transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="contact-us/"            
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
      </div>
       
    </div>
  );
}
