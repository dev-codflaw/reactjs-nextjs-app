import axios from 'axios'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { server } from '../../../config'
import PostDetail from '../../../components/article/PostDetail'
import Meta from '../../../components/common/Meta'


const post = ({ post }) => {

  const router = useRouter()
  const { slug } = router.query
  const [dataArr, setDataArr] = useState([]);
  const [postDetail, setPostDetail] = useState([]);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/posts/${slug}/`)
//     .then(function (response){
//         console.log(response);
//         setDataArr(response.data)
//         // alert(JSON.stringify(dataArr))
//     })
//     .catch(function (error){
//         console.log(error)
//     })
//     .then(function () {
//         //always executed
//     });
// }, [])

useEffect(() => {

    const getPost = async () => {
      const responseFromServer = await fetchPost()
      setPostDetail(responseFromServer);
    }
    // alert(JSON.stringify(router))
    getPost()

  }, [slug])

    // Fetch Posts 
    const fetchPost = async () => {
      // alert(JSON.stringify(slug))
      try{
        const res = await axios.get(`${server}/posts/${slug}/`);
        const data = await res.data;
        console.log(res);
        return data
      }
      catch(error) {
        console.log(error);
        console.error(error);
        const data = error;
        return data
      }
    }
    

  return (
    <>
      <Meta title="Post" keywords="" description={postDetail.title}/>
      {/* <h2>{slug}</h2> */}
      {/* {slug && <span>{slug}</span>}<br/> */}
      {/* {JSON.stringify(router.query.slug)} */}
      {/* {router.query.slug} */}
      <br/><br />
                          <PostDetail item={postDetail} />
                       

      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`)

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))


//   return {
//     paths,
//     fallback: false,
//   }
// }

export default post