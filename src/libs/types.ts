interface PostOwnnner{
    ImagePath: string;
    username: string;
    postTitle: string;
    likes: number;
    comments: number;
}
export type {PostOwnnner};

interface CommentProps {
    ImagePath: string;
    username: string;
    commentTitle: string;
    likes: number;
    replies: ReplyProps;
}
export type {CommentProps};

interface ReplyProps {
 ImagePath: string;
 username: string;
 replyTitle: string;
 likes: number;
}
export type { ReplyProps };
