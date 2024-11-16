import React from 'react';
import Link from 'next/link';

const articles = [
  {
    title: 'Create and Deploy a blog with Simple',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Micheal Osman',
    date: 'July 20, 2020',
    image: '/images/news-author-04.jpg',
    link: '/blog-post',
  },
  {
    title: 'Getting started with Next.js',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Lisa Allison',
    date: 'July 19, 2020',
    image: '/images/news-author-01.jpg',
    link: '/blog-post',
  },
  {
    title: 'How to identify high-intent leads',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Knut Mayer',
    date: 'July 19, 2020',
    image: '/images/news-author-02.jpg',
    link: '/blog-post',
  },
  {
    title: 'Why we think Simple is good for developers',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Micheal Osman',
    date: 'July 17, 2020',
    image: '/images/news-author-04.jpg',
    link: '/blog-post',
  },
  {
    title: 'Getting started with Vue.js and Stripe',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Justin Park',
    date: 'July 16, 2020',
    image: '/images/news-author-03.jpg',
    link: '/blog-post',
  },
  {
    title: 'How to work with friendly APIs',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Lisa Allison',
    date: 'July 12, 2020',
    image: '/images/news-author-01.jpg',
    link: '/blog-post',
  },
  {
    title: 'Introducing the Testing Field Guide',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Cory McCall',
    date: 'July 10, 2020',
    image: '/images/news-author-06.jpg',
    link: '/blog-post',
  },
  {
    title: 'Community Digest: Summer Edition',
    description:
      'In this post, you will learn how to deploy a blog using Simple custom asset source plugin that uses the webcam to insert a photo in the image field.',
    author: 'Lisa Allison',
    date: 'July 10, 2020',
    image: '/images/news-author-01.jpg',
    link: '/blog-post',
  },
];

function BlogList() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1 mb-4">Type the way you talk</h1>
            <p className="text-xl text-gray-600">
              Stay up to date on the latest from Simple and best news from the
              Dev world.
            </p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Articles container */}
            <div className="md:grow -mt-4">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="flex items-center py-4 border-b border-gray-200"
                >
                  <div>
                    <header>
                      <h2 className="h4 mb-2">
                        <Link href={article.link} className="hover:underline">
                          {article.title}
                        </Link>
                      </h2>
                    </header>
                    <div className="text-lg text-gray-600 mb-4">
                      {article.description}
                    </div>
                    <footer className="text-sm">
                      <div className="flex items-center">
                        <div className="flex shrink-0 mr-3">
                          <a className="relative" href="#0">
                            <span
                              className="absolute inset-0 -m-px"
                              aria-hidden="true"
                            >
                              <span className="absolute inset-0 -m-px bg-white rounded-full"></span>
                            </span>
                            <img
                              className="relative rounded-full"
                              src={article.image}
                              width="32"
                              height="32"
                              alt={`Author ${index + 1}`}
                            />
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-600">By </span>
                          <a className="font-medium hover:underline" href="#0">
                            {article.author}
                          </a>
                          <span className="text-gray-600">
                            {' '}
                            · {article.date}
                          </span>
                        </div>
                      </div>
                    </footer>
                  </div>
                  <Link href={article.link} className="block shrink-0 ml-6">
                    <span className="sr-only">Read more</span>
                    <svg
                      className="w-4 h-4 fill-current text-blue-600"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">
              {/* Popular posts */}
              <div className="mb-8">
                <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">
                  Popular on Simple
                </h4>
                <ul className="-my-2">
                  {articles.slice(0, 5).map((article, index) => (
                    <li
                      key={index}
                      className="flex py-2 border-b border-gray-200"
                    >
                      <svg
                        className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                      </svg>
                      <article>
                        <h3 className="font-medium mb-1">
                          <Link href={article.link} className="hover:underline">
                            {article.title}
                          </Link>
                        </h3>
                        <div className="text-sm text-gray-800">
                          <span className="text-gray-600">By </span>
                          <a className="font-medium hover:underline" href="#0">
                            {article.author}
                          </a>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div>
                <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">
                  Topics
                </h4>
                <ul className="-my-2">
                  <li className="flex py-2 border-b border-gray-200">
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z" />
                    </svg>
                    <div className="font-medium mb-1">
                      <a className="hover:underline" href="#0">
                        News & Updates
                      </a>
                    </div>
                  </li>
                  <li className="flex py-2 border-b border-gray-200">
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z" />
                    </svg>
                    <div className="font-medium mb-1">
                      <a className="hover:underline" href="#0">
                        Interviews
                      </a>
                    </div>
                  </li>
                  <li className="flex py-2 border-b border-gray-200">
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z" />
                    </svg>
                    <div className="font-medium mb-1">
                      <a className="hover:underline" href="#0">
                        Simple Dev
                      </a>
                    </div>
                  </li>
                  <li className="flex py-2">
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.99 15h2.02l.429-3h3.979l-.428 3h2.02l.429-3H14v-2h-2.275l.575-4H15V4h-2.418l.428-3h-2.02l-.429 3H6.582l.428-3H4.99l-.429 3H2v2h2.275L3.7 10H1v2h2.418l-.428 3zM6.3 6h3.979L9.7 10H5.725L6.3 6z" />
                    </svg>
                    <div className="font-medium mb-1">
                      <a className="hover:underline" href="#0">
                        Product
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;