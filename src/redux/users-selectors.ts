import {AppRootState} from './redux-store';
import {UsersType} from './users-reducer';

export const getUsers = (state: AppRootState): UsersType[] => {
    return state.usersPage.users;
}

export const getPageSize = (state: AppRootState): number => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppRootState): number => {
    return state.usersPage.totalCount;
}
export const getCurrentPage = (state: AppRootState): number => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppRootState): boolean => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state: AppRootState): number[] => {
    return state.usersPage.followingInProgress;
}