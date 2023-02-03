import AllPosts from "@/components/posts/all-posts";
const DUMMY_POSTS = [
    {
      slug: 'getting-started-with-nextjs1',
      title: 'Getting Started with NextJS1',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-02-10'
    },
    {
      slug: 'getting-started-with-nextjs2',
      title: 'Getting Started with NextJS2',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-02-10'
    },
    {
      slug: 'getting-started-with-nextjs3',
      title: 'Getting Started with NextJS3',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-02-10'
    },
    {
      slug: 'getting-started-with-nextjs4',
      title: 'Getting Started with NextJS4',
      image: 'getting-started-nextjs.png',
      excerpt: 'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
      date: '2022-02-10'
    }
  ];  

export default function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS}/>
}