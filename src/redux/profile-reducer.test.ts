import {addPostAC, deletePost, InitialStateType, profileReducer} from './profile-reducer';
// TDD - Test-Driven Development
// 1. test data
const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'What is your name', likesCount: '0'},
        {id: 2, message: 'It`s my first post', likesCount: '23'},
        {id: 3, message: 'Good day', likesCount: '15'}
    ],
    profile: null,
    isFetching: false,
    status: '',
}
it ('length of posts should be incremented', ()=> {
    // 2. action
    const newState = profileReducer(initialState, addPostAC('social-network'))
    // 3. expectation
    expect(newState.posts.length).toBe(4)
})
it ('message of new post should be correct', ()=> {
    // 2. action
    const newState = profileReducer(initialState, addPostAC('social-network'))
    // 3. expectation
    expect(newState.posts[0].message).toBe('social-network')
})

it ('after deleting length of messages should be decrement', ()=> {
    // 2. action
    const newState = profileReducer(initialState, deletePost(1))
    // 3. expectation
    expect(newState.posts.length).toBe(2)
})

it ('after deleting shouldn`t be decrement if ID is incorrect', ()=> {
    // 2. action
    const newState = profileReducer(initialState, deletePost(1000))
    // 3. expectation
    expect(newState.posts.length).toBe(3)
})