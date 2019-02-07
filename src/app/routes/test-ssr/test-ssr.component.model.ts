export interface PostId {
  $oid: string;
}

export interface PostItem {
  post_id: PostId;
  title: string;
  content: string;
  name: string;
  img: string;
}
