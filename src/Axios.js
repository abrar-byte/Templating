// import axios from "axios";
// import React, { Component } from "react";

// export default class Axios extends Component {
//   state = {
//     post: [],
//   };

//   getData = async () => {
//     // axios
//     //   .get("https://jsonplaceholder.typicode.com/posts")
//     //   .then((result) => {
//     //     const data = result.sort()
//     //     this.setState({ post: data.data });
//     //   })
//     //   .catch((err) => {
//     //     throw err;
//     //   });
//     // ketika pakai promise seperti di atas ini tidak  bisa pakai variabel krn then butuh callback () 
//     try {
//       const result = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = result.data.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
//       // fungsi sorting dari stack over flow
//       this.setState({ post: data });
//     } catch (error) {
//       throw error
//       // console.log(error);
//     }
//     // kelebihan menggunakan async await adalah bisa jadi variabel dan bisa diubah seperti disorting ,dll
//   };

//   componentDidMount() {
//     this.getData();
//   }
//   render() {
//     console.log(this.state.post);
//     return (
//       this.state.post.length > 0 ? (
//         <div>
//           {this.state.post.map((post) => (
//             <div key={post.id}>
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </div>
//           ))}
//           <h2>Hai</h2>
//           <p></p>
//         </div>)
//         : (<h1>Loading ...</h1>)
//     );
//   }
// }


// axios dicomment supaya bisa diupload di netlify