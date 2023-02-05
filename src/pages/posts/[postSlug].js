import PostContent from "@/components/posts/post-detail/post-content";
import { Fragment } from "react";
import { getPostDetails, getPostsFiles } from "../../../lib/posts-util";
import Head from "next/head";

export default function PostDetailtPage(props) {
  return (
    <Fragment>
      <Head>
        <title>My Blog - Post Details: {props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { postSlug } = params;
  const postDetails = getPostDetails(postSlug);

  return {
    props: {
      post: postDetails,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((postSlug) => ({ params: { postSlug } })),
    fallback: "blocking",
  };
}
