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
