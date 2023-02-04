import PostContent from "@/components/posts/post-detail/post-content";
import { getPostDetails, getPostsFiles } from "../../../lib/posts-util";

export default function PostDetailtPage(props) {
  return <PostContent post={props.post} />;
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
