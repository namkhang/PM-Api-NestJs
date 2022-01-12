export class CreatePostDto {
    userID: string
    userName: string
    content: string
    createAt: string
    image: string
    post_comment: Array<any>
    like: Number
    imagePost: string
}
