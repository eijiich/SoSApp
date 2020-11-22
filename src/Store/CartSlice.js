let cartSlice = []

export const addCourseToCart = (course) => {
    cartSlice.push(course);
}

export const getCartSlice = () => {
    return cartSlice;
}
