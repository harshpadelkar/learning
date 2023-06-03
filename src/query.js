export const coursesHomePage = `*[_type == "course"] | order(_createdAt desc){
  _id,
 courseName,
 "image": courseImage.asset->url,
 "searchImage": searchImage.asset->url,
 description,
 "authorName": postedBy->.userName,
 "authorImage": postedBy->.image,
 "videoUrl": video.asset->url,
 "videoDetails": video.asset->,
 comments[]{
  comment,
  _key,
  "userName": postedBy->userName,
  "image": postedBy->image
  },
  "lectures": post[]->{
    _id,
    _key,
    "title": caption,
    "video": video.asset->url,
   },
  likes,
  topic,
  active,
  publishedAt,
}`;

export const categoryFetch = (endpoint) => {
  return `*[_type == "course" && topic == "${endpoint}"] | order(_createdAt desc){
    _id,
   courseName,
   "image": courseImage.asset->url,
   "searchImage": searchImage.asset->url,
   description,
   "authorName": postedBy->.userName,
   "authorImage": postedBy->.image,
   "videoUrl": video.asset->url,
   "videoDetails": video.asset->,
   comments[]{
    comment,
    _key,
    "userName": postedBy->userName,
    "image": postedBy->image
    },
    "lectures": post[]->{
      _id,
      _key,
      "title": caption,
      "video": video.asset->url,
     },
    likes,
    topic,
    active,
    publishedAt,
  }`;
};

export const getUserData = (userId) => {
  return `*[_type == "user" && _id == "${userId}"]`;
};

export const getCourse = (courseId) => {
  return `*[_type == "courseTest" && _id == "${courseId}"] | order(_createdAt desc){
    _id,
    title,
    "image": image.asset->url,
    subtitle,
   description,
   "authorName": postedBy->.userName,
   "authorImage": postedBy->.image,
   "video": video.asset->url,
    sections[]{
      _key,
      section,
      lectures[]{
        _key,
        "video": video.asset->url,
        caption
      }
    },
    "ratings": ratings[].feedback,
    category,
    publishedAt,
    likes
  }`;
};

export const getCarouselData = (userId) => {
  return `*[_type == "courseTest"] | order(_createdAt desc){
    _id,
    title,
   "image": image.asset->url,
   "video": video.asset->url,
   "authorName": postedBy->.userName,
   "ratings": ratings[].feedback,
   category,
  }`;
};

export const searchPostQuery = (searchTerm) => {
  const query = `*[_type == "courseTest" && title match '${searchTerm}*' || category match '${searchTerm}*']`;
};

export const getSearchResults = (query) => {
  return `*[_type == "courseTest" && title match '${query}*' || category match '${query}*'] | order(_createdAt desc){
    _id,
    title,
    "image": image.asset->url,
    description,
   "authorName": postedBy->.userName,
    "ratings": ratings[].feedback,
    category,
  }`;
};
