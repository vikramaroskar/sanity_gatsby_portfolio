export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Project image',
      type: 'image',
      options: {
          hotspot: true,

      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type:'author'}
    }
  ],

  //TODO play with previews
  preview : {
    //preset fields of title, subtitle, media 
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image'
    },
    //prepare function as an additionala thing.
    //only select tag above will work as well
    prepare(selection) {
      const {author} = selection
      return {
        ...selection,
        subtitle: `author` && `${author} is a genius`
      }
    }

  }

};
