// const notion = new Client({ auth: process.env.NOTION_API_KEY });


// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     console.log(req)
//   } else {
//     // Handle any other HTTP method
//   }
// }

// export async function getServerSideProps() {
//   const notion = new Client({
//     auth: "secret_DHJcEUbeXIFe8fYno3BrupiI7ZUuxLNvYZOeFGKYOei"
//   })

//   try {
//     const response = await notion.blocks.children.list({
//       block_id: '207c8877115e4081a8dae8ccdd6d3f16',
//     })
//     console.log(response)
//     return {
//       props: {
//         results: response?.results
//       }
//     }
//   } catch (error) {
//     console.log(error)
//     return {
//       props: {
//         results: error
//       }
//     }
//   }


// }