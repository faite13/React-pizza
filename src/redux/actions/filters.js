export const setFilter = (activeFilter) => {
    return {
        type: 'SET_SORT_BY',
        payload: activeFilter
    };
};

export const setCategory = (activeTab) => {
    return {
        type: 'SET_CATEGORY',
        payload: activeTab
    };
};