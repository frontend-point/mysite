import axios from 'axios'
import { REACT_APP_API } from 'config'
import { CommentType } from 'types/comment/CommentTypes'
import { ResponseType } from 'types/service/ServiceTypes'

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export const instance = axios.create({
  baseURL: REACT_APP_API,
})

export const commentAPI = {
  getComments() {
    return instance
      .get<ResponseType<CommentType[]>>('comments')
      .then(({ data }) => data)
  },
  setComment(comment: CommentType) {
    return instance
      .post<void>('comment', { comment: comment })
      .then(({ data }) => data)
  },
  deleteComment(id: string) {
    return instance
      .delete<void>('comment', { params: { id } })
      .then(({ data }) => data)
  },
}
