export const inputFields =[{
    label: "Title",
    name: 'title',
    type: "text",
    required: true,
    placeholder: "Learn Javascript",

  },

  {
    label: "Author",
    name: 'author',
    type: "text",
    required: true,
    placeholder: "Uncle Bob",

  },

  {
    label: "ISBN",
    name: 'isbn',
    type: "text",
    required: true,
    placeholder: "627hs739hhj",

  },

  {
    label: "Published Year",
    name: 'publishedYear',
    type: "number",
    min: "1000",
    required: true,
    placeholder: "2024",

  },

  {
    label: "Thumbnail",
    name: 'thumbnail',
    type: "url",
    required: true,
    placeholder: "https://react-bootstrap.netlify.app/",

  },

  {
    label: "Description",
    name: 'description',
    type: "text",
    as: "textarea",
    maxLength: "5000",
    required: true,
    placeholder: "Book Summary",
    rows:5,

  },



]