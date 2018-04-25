const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')

function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
        .on('data', item => {
          if (path.extname(item.path) === '.md') {
            const data = fs.readFileSync(item.path, 'utf8')
            const dataObj = matter(data)
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            delete dataObj.orig
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          resolve(items)
        })
    } else {
      resolve(items)
    }
  })
  return getFiles()
}
function getSliderImgs () {
  const imgs = [];
  const getImageFiles = () => new Promise(resolve => {
    if (fs.existsSync('./src/sliderImages')) {
      klaw('./src/sliderImages')
      .on('data', item => {
        if (path.extname(item.path) === '.md') {
          const data = fs.readFileSync(item.path, 'utf8')
          const dataObj = matter(data)
          dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
          delete dataObj.orig
          imgs.push(dataObj)
        }
      })
      .on('error', e => {
        console.log(e)
      })
      .on('end', () => {
        resolve(imgs)
      })
    } else {
      resolve(imgs)
    }
  })
  return getImageFiles()
}

export default {

  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    const sliderImgs = await getSliderImgs()
    const testString = 'test'
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          sliderImgs
        })
      },
      {
        path: '/kids',
        component: 'src/containers/Kids',
      },
      {
        path: '/classes',
        component: 'src/containers/Classes'
      },
      {
        path: '/schedule',
        component: 'src/containers/Schedule'
      },
      {
        path: '/memberships',
        component: 'src/containers/Memberships'
      },
      {
        path: '/instructors',
        component: 'src/containers/Instructors'
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts, testString
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
