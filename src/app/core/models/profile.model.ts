export interface Profile{
    profile_id: number,
    first_name: string,
    last_name: string,
    email: string,
    profile_image: string,
    jobs_completed: number,
    hours_worked: number,
    bio: string,
    stars: number
    comments: Comment[]
  }
export interface Comment{
    comment_id: number,
    username: string,
    comment: string,
    user_image: string,
    date: string
  }