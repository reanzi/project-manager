const initState = {
  projects: [
    { id: "1", title: "Egg Hunt", content: "Help me find all the eggs" },
    {
      id: "2",
      title: "Count Stars",
      content: "Sounds awesome to stare at the sky"
    },
    { id: "3", title: "Take A Nape", content: "Always its a gud thing to do" },
    {
      id: "4",
      title: "Play Game All Day",
      content:
        "orem ipsum dolor sit amet consectetur adipisicing elit. Earum unde "
    },
    {
      id: "5",
      title: "Blah Blah",
      content: "incidunt repellendus, ipsum impedit accusamus accusantium sunt"
    }
  ]
};
const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
