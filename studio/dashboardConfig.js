export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df72c9096dfb28dc36d64c9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-89ioaja5',
                  apiId: '4d804e83-c865-4ef0-9d98-9f487bb2450d'
                },
                {
                  buildHookId: '5df72c905bfd11896e3b4b27',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wuqem3gz',
                  apiId: 'b0865bd7-cf2f-4a4f-9b55-ffc5f95a1969'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaenes/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wuqem3gz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
