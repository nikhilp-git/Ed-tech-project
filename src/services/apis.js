const REACT_APP_BASE_URL=`http://localhost:4000/api/v1`
const BASE_URL=REACT_APP_BASE_URL

export const endpoints={
    RESETPASSWORD_API:`http://localhost:4000/api/v1/auth/reset-passwozrd`,
    RESETPASSSWORDTOKEN_API:BASE_URL+`/auth/reset-password-token`,
    SENDOTP_API:BASE_URL+"/auth/sendotp",
    SIGNUP_API:BASE_URL+"/auth/signup",
    LOGIN_API:BASE_URL+"/auth/login"
}

export const contactusEndpoint={
    CONTACTUS_API:BASE_URL+"/contact"
}

export const settingsEndpoints={
    UPDATE_DISPLAY_PICTURE_API:BASE_URL+"/profile/updateDisplayPicture",
    UPDATE_PROFILE_API:BASE_URL+"/profile/updateProfile",
    CHANGE_PASSWORD_API:BASE_URL+"/auth/changePassword",
    DELETE_PROFILE_API:BASE_URL+"/profile/deleteProfile"
}

export const profileEndpoints={
    GET_USER_ENROLLED_COURSE_API:BASE_URL+"/profile/getEnrolledCourses"
}

export const courseEndpoints={
    GET_ALL_COURSES_API:BASE_URL+"/course/getAllCourses",
    COURSE_DETAILS_API:BASE_URL+"/course/getCourseDetails",
    EDIT_COURSE_API:BASE_URL+"/course/editCourse",
    COURSE_CATEGORIES_API:BASE_URL+"/course/showAllCategory",
    CREATE_COURSE_API:BASE_URL+"/course/createCourse",
    CREATE_SECTION_API:BASE_URL+"/course/addSection",
    CREATE_SUBSECTION_API:BASE_URL+"/course/addSubSection",
    UPDATE_SECTION_API:BASE_URL+"/course/updateSection",
    UPDATE_SUBSECTION_API:BASE_URL+"/course/updateSubSection",
    GET_ALL_INSTRUCTOR_COURSES_API:BASE_URL+"/course/getInstructorCourses",
    DELETE_SECTION_API:BASE_URL+'/course/deleteSection',
    DELETE_SUBSECTION_API:BASE_URL+"/course/deleteSubSection",
    DELETE_COURSE_API:BASE_URL+"/course/deleteCourse",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED:BASE_URL+"/course/getFullCourseDetails",
    LECTURE_COMPLETION_API:BASE_URL+"/course/updateCourseProgress",
    CREATE_RATING_API:BASE_URL+"/course/getReviews"

}