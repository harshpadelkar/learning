export const courses = `*[_type == "course"] | order(_createdAt desc){
    _id,
   courseName,
   courseImage{
     asset->{
       _id,
       url
     }
   },
   video{
     asset->{
       _id,
       url
     }
   },
 likes,
 comments[]{
   comment,
   _key,
   postedBy->{
   _id,
   userName,
   image
 },
},
postedBy->{
    _id,
    userName,
    image
  },
topic,
active,
publishedAt,
post[]->{
 _id,
 caption,
 video{
   asset->{
     _id,
     url
   }
 },
 postedBy->{
   _id,
   userName,
   image
 },
}
}`;

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
  return `*[_type == "course" && _id == "${courseId}"] | order(_createdAt desc){
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

export const getCarouselData = (userId) => {
  return `*[_type == "courseTest"] | order(_createdAt desc){
    _id,
   title,
   "image": image.asset->url,
   "video": video.asset->url,
   "authorName": postedBy->.userName,
   "ratings": ratings[].feedback
  }
   `;
};
